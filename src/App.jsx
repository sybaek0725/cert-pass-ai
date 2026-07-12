import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import AnswerInput from "./components/AnswerInput";
import ExplanationPanel from "./components/ExplanationPanel";
import ShareCard from "./components/ShareCard";
import AuthButton from "./components/AuthButton";
import ChapterList from "./components/ChapterList";
import TopicList from "./components/TopicList";
import { supabase as supabaseClient } from "./lib/supabase";
import { useAI } from "./hooks/useAI";
import { useAuth } from "./hooks/useAuth";
import { useWrongAnswers } from "./hooks/useWrongAnswers";
import { codeToLabel } from "./lib/subjects";

export default function CertPassAI() {
  const ai = useAI();
  const { user } = useAuth();
  const { items: wrongAnswers, addWrong, markReviewed } = useWrongAnswers(user);

  // ── 탭 ────────────────────────────────────────────────────
  const [tab, setTab] = useState("study"); // study | wrong

  // ── 학습 뷰 상태 ──────────────────────────────────────────
  // chapters → topics → question | login-required
  const [studyView, setStudyView] = useState("chapters");
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [generatedQuestion, setGeneratedQuestion] = useState(null);
  const [generating, setGenerating] = useState(false);
  const [generateError, setGenerateError] = useState("");

  // ── 세션 통계 (토픽별 리셋) ────────────────────────────────
  const [sessionStats, setSessionStats] = useState({ correct: 0, total: 0 });

  // ── 문제 풀기 상태 ─────────────────────────────────────────
  const [userAnswer, setUserAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiExplanation, setAiExplanation] = useState("");
  const [correctCount, setCorrectCount] = useState(0);

  function resetQuestionState() {
    setUserAnswer("");
    setSubmitted(false);
    setShowHint(false);
    setShowExplanation(false);
    setAiExplanation("");
    setGenerateError("");
  }

  function changeTab(nextTab) {
    setTab(nextTab);
    resetQuestionState();
  }

  // ── 챕터 선택 ─────────────────────────────────────────────
  function handleChapterSelect(chapter) {
    setSelectedChapter(chapter);
    setStudyView("topics");
    resetQuestionState();
  }

  // ── 토픽 선택 → 비로그인 체크 → 문제 생성 ────────────────
  async function handleTopicSelect(topic) {
    if (!user) {
      setSelectedTopic(topic);
      setStudyView("login-required");
      return;
    }

    setSelectedTopic(topic);
    setGeneratedQuestion(null);
    setGenerating(true);
    setStudyView("question");
    setSessionStats({ correct: 0, total: 0 });
    resetQuestionState();

    try {
      const session = (await supabaseClient.auth.getSession()).data.session;
      const q = await ai.generateQuestionByTopic(topic.id, {
        source: "personal",
        accessToken: session?.access_token,
      });
      setGeneratedQuestion({ ...q, dbId: q.id, subject: codeToLabel(q.subject) });
    } catch (e) {
      setGenerateError(e.message || "문제 생성에 실패했어요.");
    } finally {
      setGenerating(false);
    }
  }

  // ── 다음 문제 (같은 토픽 재생성) ──────────────────────────
  async function handleNext() {
    if (!selectedTopic || !user) return;
    setGeneratedQuestion(null);
    setGenerating(true);
    resetQuestionState();
    try {
      const session = (await supabaseClient.auth.getSession()).data.session;
      const q = await ai.generateQuestionByTopic(selectedTopic.id, {
        source: "personal",
        accessToken: session?.access_token,
      });
      setGeneratedQuestion({ ...q, dbId: q.id, subject: codeToLabel(q.subject) });
    } catch (e) {
      setGenerateError(e.message || "문제 생성에 실패했어요.");
    } finally {
      setGenerating(false);
    }
  }

  // ── 답안 제출 ─────────────────────────────────────────────
  const current = generatedQuestion;
  const isCorrect =
    submitted &&
    current &&
    userAnswer.trim().includes(current.answer?.split("(")[0].trim());

  async function handleSubmit() {
    if (!userAnswer.trim() || !current) return;
    setSubmitted(true);

    const correct = userAnswer.trim().includes(current.answer.split("(")[0].trim());
    if (correct) {
      setCorrectCount((c) => c + 1);
      setSessionStats((s) => ({ correct: s.correct + 1, total: s.total + 1 }));
    } else {
      setSessionStats((s) => ({ ...s, total: s.total + 1 }));
      addWrong(current, userAnswer);
    }

    setAiLoading(true);
    setShowExplanation(true);
    setAiExplanation("");
    try {
      await ai.streamExplanation(
        {
          question: current.question,
          correctAnswer: current.answer,
          userAnswer,
          topicName: selectedTopic?.name,
        },
        (accumulated) => setAiExplanation(accumulated)
      );
    } catch (e) {
      setAiExplanation(`⚠️ ${e.message}\n\n${current.explanation || ""}`);
    } finally {
      setAiLoading(false);
    }
  }

  // ── 렌더 ──────────────────────────────────────────────────
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
            <span style={{ color: "#cc785c" }}>🔥 {correctCount}정답</span>
            <AuthButton />
          </div>
        </div>
      </header>

      {/* Tab Nav */}
      <div style={{ backgroundColor: "#1a1a1a", borderBottom: "1px solid #2a2a2a", padding: "0 20px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", gap: 0 }}>
          {[
            { id: "study", label: "📚 문제풀기" },
            { id: "wrong", label: `❌ 오답노트${wrongAnswers.length > 0 ? ` (${wrongAnswers.length})` : ""}` },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => changeTab(t.id)}
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
        {tab === "study" && (
          <>
            {/* 챕터 선택 */}
            {studyView === "chapters" && (
              <ChapterList onSelect={handleChapterSelect} />
            )}

            {/* 토픽 선택 */}
            {studyView === "topics" && selectedChapter && (
              <TopicList
                chapter={selectedChapter}
                onSelectTopic={handleTopicSelect}
                onBack={() => setStudyView("chapters")}
              />
            )}

            {/* 비로그인 유도 */}
            {studyView === "login-required" && (
              <div style={{ textAlign: "center", padding: "60px 20px", backgroundColor: "#262626", borderRadius: 12, border: "1px solid #333" }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>🔐</div>
                <p style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>로그인이 필요해요</p>
                <p style={{ fontSize: 13, color: "#888", marginBottom: 24, lineHeight: 1.7 }}>
                  토픽 학습 및 AI 문제 생성은<br />Google 로그인 후 이용할 수 있어요.
                </p>
                <AuthButton />
                <button
                  onClick={() => setStudyView("topics")}
                  style={{ display: "block", margin: "16px auto 0", fontSize: 12, color: "#555", background: "none", border: "none", cursor: "pointer" }}
                >
                  ← 토픽 목록으로
                </button>
              </div>
            )}

            {/* 문제 풀기 */}
            {studyView === "question" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {/* 브레드크럼 + 세션 통계 */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <button
                      onClick={() => { setStudyView("topics"); resetQuestionState(); setGeneratedQuestion(null); }}
                      style={{ padding: "5px 12px", borderRadius: 6, fontSize: 12, cursor: "pointer", backgroundColor: "#1a1a1a", border: "1px solid #333", color: "#888" }}
                    >
                      ← 토픽
                    </button>
                    {selectedTopic && !generating && (
                      <span style={{ fontSize: 12, color: "#555" }}>
                        Ch.{selectedChapter?.id} · {selectedTopic.name.split("+")[0].trim()}
                      </span>
                    )}
                  </div>
                  {sessionStats.total > 0 && (
                    <span style={{ fontSize: 12, color: sessionStats.correct === sessionStats.total ? "#4ade80" : "#888" }}>
                      {sessionStats.correct}/{sessionStats.total} 정답
                    </span>
                  )}
                </div>

                {/* 생성 중 */}
                {generating && (
                  <div style={{ textAlign: "center", padding: "60px 20px", backgroundColor: "#262626", borderRadius: 12, border: "1px solid #333" }}>
                    <div style={{ fontSize: 28, marginBottom: 12 }}>✨</div>
                    <p style={{ fontSize: 14, color: "#888" }}>AI가 문제를 생성하고 있어요...</p>
                    <p style={{ fontSize: 12, color: "#555", marginTop: 6 }}>{selectedTopic?.name.split("+")[0].trim()}</p>
                    <button
                      onClick={() => { setStudyView("topics"); setGenerating(false); resetQuestionState(); }}
                      style={{ marginTop: 20, padding: "6px 14px", borderRadius: 6, fontSize: 12, cursor: "pointer", backgroundColor: "#1a1a1a", border: "1px solid #333", color: "#666" }}
                    >
                      취소
                    </button>
                  </div>
                )}

                {/* 생성 에러 */}
                {!generating && generateError && (
                  <div style={{ padding: "20px", borderRadius: 12, backgroundColor: "#f8717111", border: "1px solid #f8717133", color: "#f87171" }}>
                    <p style={{ fontSize: 14, marginBottom: 12 }}>⚠️ {generateError}</p>
                    <button
                      onClick={handleNext}
                      style={{ padding: "8px 16px", borderRadius: 8, fontSize: 13, cursor: "pointer", backgroundColor: "#cc785c", border: "none", color: "#fff", fontWeight: 600 }}
                    >
                      다시 시도
                    </button>
                  </div>
                )}

                {/* 문제 UI */}
                {!generating && generatedQuestion && (
                  <>
                    <QuestionCard
                      question={generatedQuestion}
                      showHint={showHint}
                      topicName={selectedTopic?.name.split("+")[0].trim()}
                    />

                    <AnswerInput
                      value={userAnswer}
                      onChange={setUserAnswer}
                      submitted={submitted}
                      isCorrect={isCorrect}
                      correctAnswer={generatedQuestion.answer}
                      showHint={showHint}
                      onToggleHint={() => setShowHint(!showHint)}
                      onSubmit={handleSubmit}
                      onNext={handleNext}
                    />

                    {showExplanation && (
                      <ExplanationPanel
                        loading={aiLoading}
                        text={aiExplanation || generatedQuestion.explanation}
                      />
                    )}

                    {/* 키워드 */}
                    {generatedQuestion.keywords?.length > 0 && (
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {generatedQuestion.keywords.map((kw) => (
                          <span key={kw} style={{ fontSize: 11, padding: "3px 8px", borderRadius: 4, backgroundColor: "#262626", border: "1px solid #333", color: "#666" }}>
                            #{kw}
                          </span>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </>
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
                  <span style={{ fontSize: 13, color: "#666" }}>총 {wrongAnswers.length}개의 오답</span>
                </div>

                <div style={{ marginBottom: 12 }}>
                  <ShareCard correctCount={correctCount} wrongAnswers={wrongAnswers} />
                </div>

                {wrongAnswers.map((w) => (
                  <div key={w.id} style={{ backgroundColor: "#262626", borderRadius: 12, padding: 20, border: "1px solid #f8717122" }}>
                    {w.subject && (
                      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                        <span style={{ fontSize: 11, padding: "3px 8px", borderRadius: 20, backgroundColor: "#1a1a1a", color: "#888", border: "1px solid #333" }}>
                          {w.subject}
                        </span>
                      </div>
                    )}
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
                      {!w.reviewed ? (
                        <button
                          onClick={() => markReviewed(w.id)}
                          style={{ padding: "7px 14px", borderRadius: 8, fontSize: 12, cursor: "pointer", backgroundColor: "#1a1a1a", border: "1px solid #4ade8044", color: "#4ade80" }}
                        >
                          ✅ 복습 완료
                        </button>
                      ) : (
                        <span style={{ padding: "7px 10px", fontSize: 12, color: "#4ade80" }}>✅ 복습됨</span>
                      )}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </main>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1); }
        }
        textarea:focus { border-color: #cc785c !important; box-shadow: 0 0 0 2px #cc785c22; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>
    </div>
  );
}
