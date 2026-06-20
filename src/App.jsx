import { useState, useRef } from "react";
import QuestionCard from "./components/QuestionCard";
import AnswerInput from "./components/AnswerInput";
import ExplanationPanel from "./components/ExplanationPanel";
import ShareCard from "./components/ShareCard";
import { useAI } from "./hooks/useAI";
import { parsePdf, PdfParseError } from "./lib/pdfParser";

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

const SAMPLE_QUESTIONS = [
  {
    id: 1,
    subject: "데이터베이스",
    type: "단답형",
    question:
      "데이터베이스에서 트랜잭션의 특성 중 하나로, 트랜잭션 내의 연산이 모두 반영되거나 전혀 반영되지 않아야 하는 성질을 무엇이라고 하는가?",
    answer: "원자성(Atomicity)",
    hint: "ACID 속성 중 하나입니다.",
    explanation:
      "**원자성(Atomicity)**은 트랜잭션의 연산이 모두 정상적으로 실행되거나, 하나라도 실패하면 전체가 취소(Rollback)되어야 하는 성질입니다.\n\n### ACID 특성 정리\n- **A**tomicity (원자성): All or Nothing\n- **C**onsistency (일관성): 트랜잭션 전후 DB 상태가 일관적\n- **I**solation (독립성): 트랜잭션 간 간섭 없음\n- **D**urability (지속성): 완료된 트랜잭션 결과는 영구 반영\n\n> 💡 **시험 TIP**: ACID를 영어 단어와 함께 암기하세요. 원자성은 '분리 불가능'으로 기억!",
    keywords: ["ACID", "트랜잭션", "원자성"],
  },
  {
    id: 2,
    subject: "소프트웨어 설계",
    type: "단답형",
    question:
      "객체지향 설계 원칙(SOLID) 중 소프트웨어 요소는 확장에는 열려 있으나 변경에는 닫혀 있어야 한다는 원칙은?",
    answer: "개방-폐쇄 원칙(OCP, Open-Closed Principle)",
    hint: "SOLID의 두 번째 원칙입니다.",
    explanation:
      "**개방-폐쇄 원칙(OCP)**은 기존 코드를 변경하지 않고 새로운 기능을 추가할 수 있어야 한다는 원칙입니다.\n\n### SOLID 원칙 전체 정리\n- **S**RP: 단일 책임 원칙\n- **O**CP: 개방-폐쇄 원칙 ← 오늘 문제\n- **L**SP: 리스코프 치환 원칙\n- **I**SP: 인터페이스 분리 원칙\n- **D**IP: 의존 역전 원칙\n\n> 💡 **시험 TIP**: 확장엔 Open, 수정엔 Closed. 인터페이스/추상클래스로 구현!",
    keywords: ["SOLID", "OCP", "객체지향"],
  },
  {
    id: 3,
    subject: "프로그래밍 언어",
    type: "코드완성",
    question:
      "다음 Python 코드의 출력 결과를 쓰시오.\n\n```python\ndef factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))\n```",
    answer: "120",
    hint: "재귀 함수입니다. 5! 를 계산하세요.",
    explanation:
      "**재귀 함수**로 팩토리얼을 계산하는 코드입니다.\n\n### 실행 흐름\n```\nfactorial(5)\n= 5 × factorial(4)\n= 5 × 4 × factorial(3)\n= 5 × 4 × 3 × factorial(2)\n= 5 × 4 × 3 × 2 × factorial(1)\n= 5 × 4 × 3 × 2 × 1\n= 120\n```\n\n> 💡 **시험 TIP**: 재귀 문제는 base case(탈출 조건)부터 확인하세요. `n <= 1`이면 1 반환!",
    keywords: ["재귀", "팩토리얼", "Python"],
  },
];

// ── 메인 앱 ────────────────────────────────────────────────────
export default function CertPassAI() {
  const ai = useAI();
  const [tab, setTab] = useState("study"); // study | wrong | upload
  const [questions, setQuestions] = useState(SAMPLE_QUESTIONS);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiExplanation, setAiExplanation] = useState("");
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [pdfParsing, setPdfParsing] = useState(false);
  const [pdfStatus, setPdfStatus] = useState("");
  const fileInputRef = useRef(null);

  const current = questions[currentIdx];
  const isCorrect = submitted && userAnswer.trim().includes(current?.answer?.split("(")[0].trim());

  const filteredQuestions = selectedSubject === "all"
    ? questions
    : questions.filter((q) => {
        const map = {
          "sw-design": "소프트웨어 설계",
          "sw-dev": "소프트웨어 개발",
          db: "데이터베이스",
          lang: "프로그래밍 언어",
          infra: "시스템 구축관리",
        };
        return q.subject === map[selectedSubject];
      });

  async function handleSubmit() {
    if (!userAnswer.trim()) return;
    setSubmitted(true);

    const correct = userAnswer.trim().includes(current.answer.split("(")[0].trim());
    if (correct) {
      setCorrectCount((c) => c + 1);
    } else {
      setWrongAnswers((prev) => {
        if (prev.find((w) => w.id === current.id)) return prev;
        return [...prev, { ...current, myAnswer: userAnswer }];
      });
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
    const pool = filteredQuestions;
    const nextIdx = questions.indexOf(pool[(pool.indexOf(current) + 1) % pool.length]);
    setCurrentIdx(nextIdx === -1 ? 0 : nextIdx);
    setUserAnswer("");
    setSubmitted(false);
    setShowHint(false);
    setShowExplanation(false);
    setAiExplanation("");
  }

  // subject 코드(Supabase CHECK enum) → 한글 라벨 (UI에서 사용)
  const SUBJECT_LABEL = {
    "sw-design": "소프트웨어 설계",
    "sw-dev": "소프트웨어 개발",
    db: "데이터베이스",
    lang: "프로그래밍 언어",
    infra: "시스템 구축관리",
  };

  async function handlePdfUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPdfParsing(true);
    setPdfStatus("PDF 분석 중...");
    try {
      const { fullText } = await parsePdf(file);
      setPdfStatus("AI가 유사 문제 생성 중...");
      const generated = await ai.generateQuestion(fullText);
      const newQ = {
        id: Date.now(),
        subject: SUBJECT_LABEL[generated.subject] || generated.subject,
        type: generated.type,
        question: generated.question,
        answer: generated.answer,
        hint: generated.hint,
        explanation: generated.explanation,
        keywords: generated.keywords || [],
      };
      setQuestions((prev) => [...prev, newQ]);
      setPdfStatus("✅ 완료! 1개의 새 문제가 추가되었습니다.");
      setTab("study");
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
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13, color: "#888" }}>
            <span>🔥 {correctCount}문제 정답</span>
            <span style={{ color: "#cc785c" }}>오답 {wrongAnswers.length}개</span>
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

      <main style={{ maxWidth: 720, margin: "0 auto", padding: "24px 20px" }}>

        {/* ── 문제풀기 탭 ── */}
        {tab === "study" && current && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* 과목 필터 */}
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

            {/* 진행률 */}
            <div style={{ fontSize: 12, color: "#555", display: "flex", justifyContent: "space-between" }}>
              <span>{filteredQuestions.indexOf(current) + 1} / {filteredQuestions.length} 문제</span>
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
                <div style={{ fontSize: 13, color: "#666", marginBottom: 4 }}>
                  총 {wrongAnswers.length}개의 오답 · 복습이 필요해요
                </div>

                <div style={{ marginTop: 8, marginBottom: 12 }}>
                  <ShareCard correctCount={correctCount} wrongAnswers={wrongAnswers} />
                </div>

                {wrongAnswers.map((w) => (
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
                    <button
                      onClick={() => {
                        const idx = questions.findIndex((q) => q.id === w.id);
                        if (idx !== -1) { setCurrentIdx(idx); setTab("study"); setUserAnswer(""); setSubmitted(false); setShowHint(false); setShowExplanation(false); setAiExplanation(""); }
                      }}
                      style={{ marginTop: 12, padding: "7px 14px", borderRadius: 8, fontSize: 12, cursor: "pointer", backgroundColor: "#1a1a1a", border: "1px solid #cc785c44", color: "#cc785c" }}
                    >
                      다시 풀기 →
                    </button>
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
