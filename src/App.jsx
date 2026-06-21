import { useState, useRef } from "react";
import QuestionCard from "./components/QuestionCard";
import AnswerInput from "./components/AnswerInput";
import ExplanationPanel from "./components/ExplanationPanel";
import ShareCard from "./components/ShareCard";
import AuthButton from "./components/AuthButton";
import { supabase as supabaseImport } from "./lib/supabase";
import { useAI } from "./hooks/useAI";
import { useAuth } from "./hooks/useAuth";
import { useWrongAnswers } from "./hooks/useWrongAnswers";
import { useQuestions } from "./hooks/useQuestions";
import { parsePdf, PdfParseError } from "./lib/pdfParser";
import { isAdminEmail } from "./lib/admin";

// ── 색상 토큰 (Claude UI 스타일) ──────────────────────────────
// bg: #1a1a1a / surface: #262626 / border: #333 / accent: #cc785c

const SUBJECTS = [
  { id: "all", label: "전체" },
  { id: "sw-design", label: "소프트웨어 설계" },
  { id: "sw-dev", label: "소프트웨어 개발" },
  { id: "db", label: "데이터베이스" },
  { id: "lang", label: "프로그래밍 언어" },
  { id: "infra", label: "시스템 구축관리" },
];

// ── 메인 앱 ────────────────────────────────────────────────────
export default function CertPassAI() {
  const ai = useAI();
  const { user } = useAuth();
  const isAdmin = isAdminEmail(user?.email);
  const { items: wrongAnswers, addWrong, markReviewed } = useWrongAnswers(user);
  const { items: questions, reload: reloadQuestions } = useQuestions(user);
  const [tab, setTab] = useState("study"); // study | wrong | upload
  const [sourceFilter, setSourceFilter] = useState("all"); // all | shared | personal
  const [pdfYear, setPdfYear] = useState("");
  const [pdfRound, setPdfRound] = useState("");
  const [pdfAsShared, setPdfAsShared] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiExplanation, setAiExplanation] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [pdfParsing, setPdfParsing] = useState(false);
  const [pdfStatus, setPdfStatus] = useState("");
  const [retryMode, setRetryMode] = useState(false);
  const fileInputRef = useRef(null);

  const retryPool = wrongAnswers.filter((w) => !w.reviewed);
  const SUBJECT_LABEL_MAP = {
    "sw-design": "소프트웨어 설계",
    "sw-dev": "소프트웨어 개발",
    db: "데이터베이스",
    lang: "프로그래밍 언어",
    infra: "시스템 구축관리",
  };
  // 1) source 필터: 기출(shared) / 내 PDF(personal) / 전체 (SAMPLE은 전체에만)
  const sourceFiltered = questions.filter((q) => {
    if (sourceFilter === "all") return true;
    if (sourceFilter === "shared") return q.source === "shared";
    if (sourceFilter === "personal") return q.source === "personal";
    return true;
  });
  // 2) subject 필터
  const filteredQuestions = selectedSubject === "all"
    ? sourceFiltered
    : sourceFiltered.filter((q) => q.subject === SUBJECT_LABEL_MAP[selectedSubject]);

  const current = retryMode ? retryPool[0] : filteredQuestions[currentIdx] || filteredQuestions[0];
  const isCorrect = submitted && userAnswer.trim().includes(current?.answer?.split("(")[0].trim());

  function resetQuestionState() {
    setUserAnswer("");
    setSubmitted(false);
    setShowHint(false);
    setShowExplanation(false);
    setAiExplanation("");
  }

  function enterRetryMode() {
    if (retryPool.length === 0) return;
    setRetryMode(true);
    setTab("study");
    resetQuestionState();
  }

  function exitRetryMode() {
    setRetryMode(false);
    resetQuestionState();
  }

  async function handleSubmit() {
    if (!userAnswer.trim()) return;
    setSubmitted(true);

    const correct = userAnswer.trim().includes(current.answer.split("(")[0].trim());
    if (correct) {
      setCorrectCount((c) => c + 1);
      if (retryMode) markReviewed(current.id);
    } else if (!retryMode) {
      addWrong(current, userAnswer);
    }

    // AI 해설 스트리밍 (Vercel Function 프록시 → Gemini)
    setAiLoading(true);
    setShowExplanation(true);
    setAiExplanation("");
    try {
      await ai.streamExplanation(
        {
          question: current.question,
          correctAnswer: current.answer,
          userAnswer,
        },
        (accumulated) => setAiExplanation(accumulated)
      );
    } catch (e) {
      setAiExplanation(`⚠️ ${e.message}\n\n${current.explanation || ""}`);
    } finally {
      setAiLoading(false);
    }
  }

  function handleNext() {
    if (retryMode) {
      resetQuestionState();
      return;
    }
    const pool = filteredQuestions;
    const nextIdx = questions.indexOf(pool[(pool.indexOf(current) + 1) % pool.length]);
    setCurrentIdx(nextIdx === -1 ? 0 : nextIdx);
    resetQuestionState();
  }

  async function handlePdfUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!user) {
      setPdfStatus("❌ PDF 업로드는 로그인이 필요해요.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    setPdfParsing(true);
    setPdfStatus("PDF 분석 중...");
    try {
      const { fullText } = await parsePdf(file);
      setPdfStatus("AI가 유사 문제 생성 중...");
      const wantShared = isAdmin && pdfAsShared;
      const session = (await supabaseImport.auth.getSession()).data.session;
      await ai.generateQuestion(fullText, {
        source: wantShared ? "shared" : "personal",
        year: pdfYear ? Number(pdfYear) : null,
        round: pdfRound ? Number(pdfRound) : null,
        accessToken: session?.access_token,
      });
      await reloadQuestions();
      setPdfStatus(wantShared
        ? "✅ 공유 풀에 1문제 추가됐어요."
        : "✅ 내 풀에 1문제 추가됐어요.");
      setTab("study");
      setSourceFilter(wantShared ? "shared" : "personal");
    } catch (err) {
      const msg = err instanceof PdfParseError ? err.message : err.message || "처리 중 오류가 발생했습니다.";
      setPdfStatus(`❌ ${msg}`);
    } finally {
      setPdfParsing(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  // ── 렌더 ──────────────────────────────────────────────────────
  return (
    <div style={{ fontFamily: "'Noto Sans KR', sans-serif", backgroundColor: "#1a1a1a", minHeight: "100vh", color: "#ececec" }}>
      {/* Header */}
      <header style={{ backgroundColor: "#1a1a1a", borderBottom: "1px solid #333", padding: "0 20px", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg, #cc785c, #e8906f)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>
              🎯
            </div>
            <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-0.3px" }}>CertPass AI</span>
            <span style={{ fontSize: 11, color: "#666", marginLeft: 4, padding: "2px 6px", backgroundColor: "#262626", borderRadius: 4, border: "1px solid #333" }}>정처기 실기</span>
          </div>
          <div className="cp-header-stats" style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13, color: "#888" }}>
            <span className="cp-only-desktop">🔥 {correctCount}문제 정답</span>
            <span style={{ color: "#cc785c" }} className="cp-only-desktop">오답 {wrongAnswers.length}개</span>
            <AuthButton />
          </div>
        </div>
      </header>

      {/* Tab Nav */}
      <div style={{ backgroundColor: "#1a1a1a", borderBottom: "1px solid #2a2a2a", padding: "0 20px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", gap: 0 }}>
          {[
            { id: "study", label: "📚 문제풀기" },
            { id: "wrong", label: `❌ 오답노트 ${wrongAnswers.length > 0 ? `(${wrongAnswers.length})` : ""}` },
            { id: "upload", label: "📎 PDF 업로드" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "12px 16px",
                fontSize: 13,
                fontWeight: tab === t.id ? 600 : 400,
                color: tab === t.id ? "#cc785c" : "#666",
                background: "none",
                border: "none",
                borderBottom: tab === t.id ? "2px solid #cc785c" : "2px solid transparent",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <main className="cp-main" style={{ maxWidth: 720, margin: "0 auto", padding: "24px 20px" }}>

        {/* ── 문제풀기 탭 ── */}
        {tab === "study" && retryMode && retryPool.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 20px", color: "#444" }}>
            <p style={{ fontSize: 40 }}>🎉</p>
            <p style={{ fontSize: 16, color: "#888", marginTop: 12 }}>오답 복습 완료!</p>
            <p style={{ fontSize: 13, color: "#555", marginTop: 6 }}>모든 오답을 다시 풀었어요.</p>
            <button
              onClick={exitRetryMode}
              style={{ marginTop: 16, padding: "8px 18px", borderRadius: 8, fontSize: 13, cursor: "pointer", backgroundColor: "#cc785c", border: "none", color: "#fff", fontWeight: 600 }}
            >
              일반 모드로 돌아가기
            </button>
          </div>
        )}
        {tab === "study" && !retryMode && filteredQuestions.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 20px", color: "#555" }}>
            <p style={{ fontSize: 40 }}>📭</p>
            <p style={{ fontSize: 15, color: "#888", marginTop: 12 }}>이 조건에 맞는 문제가 없어요.</p>
            <p style={{ fontSize: 13, color: "#555", marginTop: 6 }}>
              {sourceFilter === "shared"
                ? "공유 풀에 아직 문제가 시드되지 않았어요. PDF 업로드로 채워주세요."
                : sourceFilter === "personal"
                  ? "PDF를 업로드하면 본인 풀에 문제가 쌓여요."
                  : "과목 필터를 바꿔보세요."}
            </p>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 16, flexWrap: "wrap" }}>
              <button
                onClick={() => { setSourceFilter("all"); setSelectedSubject("all"); setCurrentIdx(0); }}
                style={{ padding: "7px 14px", borderRadius: 8, fontSize: 12, cursor: "pointer", backgroundColor: "#1a1a1a", border: "1px solid #333", color: "#888" }}
              >
                필터 초기화
              </button>
              {(sourceFilter === "shared" || sourceFilter === "personal") && (
                <button
                  onClick={() => setTab("upload")}
                  style={{ padding: "7px 14px", borderRadius: 8, fontSize: 12, cursor: "pointer", backgroundColor: "#cc785c", border: "none", color: "#fff", fontWeight: 600 }}
                >
                  📎 PDF 업로드하러 가기
                </button>
              )}
            </div>
          </div>
        )}
        {tab === "study" && current && filteredQuestions.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {retryMode && (
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", borderRadius: 10, backgroundColor: "#cc785c11", border: "1px solid #cc785c44" }}>
                <span style={{ fontSize: 13, color: "#e8906f", fontWeight: 600 }}>
                  🔁 오답 복습 모드 · {retryPool.length}개 남음
                </span>
                <button
                  onClick={exitRetryMode}
                  style={{ fontSize: 12, padding: "5px 10px", borderRadius: 6, cursor: "pointer", backgroundColor: "#1a1a1a", border: "1px solid #333", color: "#888" }}
                >
                  종료
                </button>
              </div>
            )}
            {/* 소스 세그먼트 (로그인 + 일반 모드) */}
            {!retryMode && user && (
              <div style={{ display: "flex", gap: 0, padding: 3, borderRadius: 8, backgroundColor: "#1a1a1a", border: "1px solid #333" }}>
                {[
                  { id: "all", label: "전체" },
                  { id: "shared", label: "📚 기출" },
                  { id: "personal", label: "🆕 내 PDF" },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setSourceFilter(s.id); setCurrentIdx(0); }}
                    style={{
                      flex: 1,
                      padding: "6px 10px",
                      borderRadius: 6,
                      fontSize: 12,
                      fontWeight: sourceFilter === s.id ? 600 : 400,
                      cursor: "pointer",
                      border: "none",
                      backgroundColor: sourceFilter === s.id ? "#cc785c" : "transparent",
                      color: sourceFilter === s.id ? "#fff" : "#888",
                    }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
            {/* 과목 필터 (일반 모드에서만) */}
            {!retryMode && (
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {SUBJECTS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => { setSelectedSubject(s.id); setCurrentIdx(0); }}
                  style={{
                    padding: "5px 12px",
                    borderRadius: 20,
                    fontSize: 12,
                    cursor: "pointer",
                    border: selectedSubject === s.id ? "1px solid #cc785c" : "1px solid #333",
                    backgroundColor: selectedSubject === s.id ? "#cc785c22" : "#262626",
                    color: selectedSubject === s.id ? "#cc785c" : "#888",
                    transition: "all 0.15s",
                  }}
                >
                  {s.label}
                </button>
              ))}
            </div>
            )}

            {/* 진행률 */}
            <div style={{ fontSize: 12, color: "#555", display: "flex", justifyContent: "space-between" }}>
              {retryMode ? (
                <span>복습 진행: {wrongAnswers.length - retryPool.length} / {wrongAnswers.length}</span>
              ) : (
                <span>{filteredQuestions.indexOf(current) + 1} / {filteredQuestions.length} 문제</span>
              )}
              <span style={{ color: "#4ade80" }}>정답률 {questions.length > 0 ? Math.round((correctCount / Math.max(currentIdx, 1)) * 100) : 0}%</span>
            </div>

            <QuestionCard question={current} showHint={showHint} />

            <AnswerInput
              value={userAnswer}
              onChange={setUserAnswer}
              submitted={submitted}
              isCorrect={isCorrect}
              correctAnswer={current.answer}
              showHint={showHint}
              onToggleHint={() => setShowHint(!showHint)}
              onSubmit={handleSubmit}
              onNext={handleNext}
            />

            {showExplanation && (
              <ExplanationPanel
                loading={aiLoading}
                text={aiExplanation || current.explanation}
              />
            )}

            {/* 키워드 태그 */}
            {current.keywords && (
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {current.keywords.map((kw) => (
                  <span key={kw} style={{ fontSize: 11, padding: "3px 8px", borderRadius: 4, backgroundColor: "#262626", border: "1px solid #333", color: "#666" }}>
                    #{kw}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── 오답노트 탭 ── */}
        {tab === "wrong" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {wrongAnswers.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 20px", color: "#444" }}>
                <p style={{ fontSize: 40 }}>🎉</p>
                <p style={{ fontSize: 16, color: "#666", marginTop: 12 }}>오답이 없어요!</p>
                <p style={{ fontSize: 13, color: "#444", marginTop: 6 }}>계속 풀다 보면 여기에 모입니다.</p>
              </div>
            ) : (
              <>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 13, color: "#666" }}>
                    총 {wrongAnswers.length}개의 오답 · {retryPool.length}개 미복습
                  </span>
                  {retryPool.length > 0 && (
                    <button
                      onClick={enterRetryMode}
                      style={{ padding: "7px 14px", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer", backgroundColor: "#cc785c", border: "none", color: "#fff" }}
                    >
                      🔁 오답만 다시 풀기 ({retryPool.length})
                    </button>
                  )}
                </div>

                <div style={{ marginTop: 8, marginBottom: 12 }}>
                  <ShareCard correctCount={correctCount} wrongAnswers={wrongAnswers} />
                </div>

a                {wrongAnswers.map((w) => (
                  <div key={w.id} style={{ backgroundColor: "#262626", borderRadius: 12, padding: 20, border: "1px solid #f8717122" }}>
                    <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                      <span style={{ fontSize: 11, padding: "3px 8px", borderRadius: 20, backgroundColor: "#1a1a1a", color: "#888", border: "1px solid #333" }}>{w.subject}</span>
                    </div>
                    <p style={{ fontSize: 14, color: "#ddd", lineHeight: 1.7, marginBottom: 12 }}>{w.question}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <div style={{ fontSize: 12, padding: "6px 10px", borderRadius: 6, backgroundColor: "#f8717111", border: "1px solid #f8717133", color: "#f87171" }}>
                        내 답변: {w.myAnswer}
                      </div>
                      <div style={{ fontSize: 12, padding: "6px 10px", borderRadius: 6, backgroundColor: "#4ade8011", border: "1px solid #4ade8033", color: "#4ade80" }}>
                        정답: {w.answer}
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                      <button
                        onClick={() => {
                          const idx = questions.findIndex((q) => q.id === w.id);
                          if (idx !== -1) { setCurrentIdx(idx); setTab("study"); setUserAnswer(""); setSubmitted(false); setShowHint(false); setShowExplanation(false); setAiExplanation(""); }
                        }}
                        style={{ padding: "7px 14px", borderRadius: 8, fontSize: 12, cursor: "pointer", backgroundColor: "#1a1a1a", border: "1px solid #cc785c44", color: "#cc785c" }}
                      >
                        다시 풀기 →
                      </button>
                      {!w.reviewed && (
                        <button
                          onClick={() => markReviewed(w.id)}
                          style={{ padding: "7px 14px", borderRadius: 8, fontSize: 12, cursor: "pointer", backgroundColor: "#1a1a1a", border: "1px solid #4ade8044", color: "#4ade80" }}
                        >
                          ✅ 복습 완료
                        </button>
                      )}
                      {w.reviewed && (
                        <span style={{ padding: "7px 10px", fontSize: 12, color: "#4ade80" }}>✅ 복습됨</span>
                      )}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        )}

        {/* ── PDF 업로드 탭 ── */}
        {tab === "upload" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ backgroundColor: "#262626", borderRadius: 12, padding: 24, border: "1px solid #333" }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>📎 기출 PDF 업로드</h3>
              <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7, marginBottom: 20 }}>
                큐넷에서 다운받은 기출문제 PDF를 업로드하면<br />
                AI가 저작권 안전한 유사 문제로 재생성해드려요.
              </p>

              {/* 회차/연도 + 관리자 공유 토글 */}
              {user && (
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16, padding: 14, borderRadius: 10, backgroundColor: "#1a1a1a", border: "1px solid #2a2a2a" }}>
                  <div style={{ display: "flex", gap: 10 }}>
                    <label style={{ flex: 1, fontSize: 12, color: "#888" }}>
                      연도 (선택)
                      <input
                        type="number"
                        value={pdfYear}
                        onChange={(e) => setPdfYear(e.target.value)}
                        placeholder="예: 2025"
                        style={{ width: "100%", marginTop: 4, padding: "6px 8px", borderRadius: 6, border: "1px solid #333", backgroundColor: "#262626", color: "#ececec", fontSize: 13 }}
                      />
                    </label>
                    <label style={{ flex: 1, fontSize: 12, color: "#888" }}>
                      회차 (선택)
                      <input
                        type="number"
                        value={pdfRound}
                        onChange={(e) => setPdfRound(e.target.value)}
                        placeholder="예: 1"
                        style={{ width: "100%", marginTop: 4, padding: "6px 8px", borderRadius: 6, border: "1px solid #333", backgroundColor: "#262626", color: "#ececec", fontSize: 13 }}
                      />
                    </label>
                  </div>
                  {isAdmin && (
                    <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#e8906f", cursor: "pointer" }}>
                      <input
                        type="checkbox"
                        checked={pdfAsShared}
                        onChange={(e) => setPdfAsShared(e.target.checked)}
                      />
                      🌐 공유 풀(전 사용자 공개)에 추가
                    </label>
                  )}
                </div>
              )}
              {!user && (
                <p style={{ fontSize: 12, color: "#fbbf24", marginBottom: 12 }}>
                  ⚠ PDF 업로드 결과를 영구 저장하려면 Google 로그인이 필요해요.
                </p>
              )}

              <input type="file" ref={fileInputRef} accept=".pdf" onChange={handlePdfUpload} style={{ display: "none" }} />
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={pdfParsing}
                style={{
                  width: "100%", padding: "40px 20px", borderRadius: 12, fontSize: 14,
                  cursor: pdfParsing ? "default" : "pointer",
                  backgroundColor: "#1a1a1a", border: "2px dashed #333",
                  color: "#555", textAlign: "center", transition: "all 0.15s",
                }}
              >
                {pdfParsing ? (
                  <span style={{ color: "#cc785c" }}>{pdfStatus}</span>
                ) : (
                  <>
                    <p style={{ fontSize: 28, marginBottom: 8 }}>📄</p>
                    <p>PDF 파일을 클릭해서 선택하세요</p>
                    <p style={{ fontSize: 12, marginTop: 4 }}>.pdf 파일만 지원</p>
                  </>
                )}
              </button>
            </div>

            {pdfStatus.includes("완료") && (
              <div style={{ padding: "14px 18px", borderRadius: 10, backgroundColor: "#4ade8011", border: "1px solid #4ade8033", color: "#4ade80", fontSize: 13 }}>
                {pdfStatus}
              </div>
            )}

            <div style={{ backgroundColor: "#262626", borderRadius: 12, padding: 20, border: "1px solid #333" }}>
              <p style={{ fontSize: 12, color: "#555", fontWeight: 600, marginBottom: 10 }}>⚠️ 저작권 안내</p>
              <p style={{ fontSize: 12, color: "#555", lineHeight: 1.8 }}>
                업로드된 PDF는 서버에 저장되지 않습니다.<br />
                AI가 문제 유형을 파악한 뒤 완전히 새로운 유사 문제를 생성하므로 저작권 문제가 없습니다.
              </p>
            </div>
          </div>
        )}
      </main>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1); }
        }
        textarea:focus { border-color: #cc785c !important; box-shadow: 0 0 0 2px #cc785c22; }
        button:hover { opacity: 0.85; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>
    </div>
  );
}
