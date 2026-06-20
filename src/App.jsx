import { useState, useRef, useCallback } from "react";

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

// ── 컴포넌트 ────────────────────────────────────────────────────

function SubjectBadge({ subject }) {
  const colors = {
    데이터베이스: "bg-blue-900/40 text-blue-300 border border-blue-700/40",
    "소프트웨어 설계": "bg-purple-900/40 text-purple-300 border border-purple-700/40",
    "소프트웨어 개발": "bg-green-900/40 text-green-300 border border-green-700/40",
    "프로그래밍 언어": "bg-yellow-900/40 text-yellow-300 border border-yellow-700/40",
    "시스템 구축관리": "bg-red-900/40 text-red-300 border border-red-700/40",
  };
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full ${colors[subject] || "bg-gray-800 text-gray-400"}`}>
      {subject}
    </span>
  );
}

function TypeBadge({ type }) {
  return (
    <span className="text-xs px-2 py-0.5 rounded-full bg-[#cc785c]/20 text-[#e8906f] border border-[#cc785c]/30">
      {type}
    </span>
  );
}

function ExplanationView({ text }) {
  // 간단한 마크다운 렌더링
  const lines = text.split("\n");
  return (
    <div className="text-sm text-[#ccc] leading-relaxed space-y-1">
      {lines.map((line, i) => {
        if (line.startsWith("### ")) {
          return <p key={i} className="font-semibold text-[#ececec] mt-3 mb-1">{line.slice(4)}</p>;
        }
        if (line.startsWith("**") && line.endsWith("**")) {
          return <p key={i} className="font-semibold text-[#ececec]">{line.slice(2, -2)}</p>;
        }
        if (line.startsWith("> ")) {
          return (
            <div key={i} className="border-l-2 border-[#cc785c] pl-3 text-[#aaa] italic">
              {line.slice(2)}
            </div>
          );
        }
        if (line.startsWith("- ")) {
          return <p key={i} className="ml-3">• {line.slice(2)}</p>;
        }
        if (line.startsWith("```")) return null;
        if (line.trim() === "") return <div key={i} className="h-1" />;
        // 인라인 볼드
        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={i}>
            {parts.map((part, j) =>
              part.startsWith("**") && part.endsWith("**")
                ? <strong key={j} className="text-[#ececec]">{part.slice(2, -2)}</strong>
                : part
            )}
          </p>
        );
      })}
    </div>
  );
}

// ── 메인 앱 ────────────────────────────────────────────────────
export default function CertPassAI() {
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

    // AI 해설 생성
    setAiLoading(true);
    setShowExplanation(true);
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          messages: [
            {
              role: "user",
              content: `정보처리기사 실기 문제 해설을 해주세요.

문제: ${current.question}
정답: ${current.answer}
학생 답변: ${userAnswer}
정오여부: ${correct ? "정답" : "오답"}

다음 형식으로 해설해주세요:
1. 정오 판정 및 한줄 피드백
2. 핵심 개념 설명 (3-5줄)
3. 시험 TIP (한줄)

간결하고 명확하게 작성해주세요.`,
            },
          ],
        }),
      });
      const data = await response.json();
      const text = data.content?.[0]?.text || current.explanation;
      setAiExplanation(text);
    } catch {
      setAiExplanation(current.explanation);
    }
    setAiLoading(false);
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

  async function handlePdfUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPdfParsing(true);
    setPdfStatus("PDF 분석 중...");

    // 실제 서비스에서는 pdf.js로 파싱 후 Claude API 호출
    // 여기서는 시뮬레이션
    await new Promise((r) => setTimeout(r, 1500));
    setPdfStatus("AI가 유사 문제 생성 중...");
    await new Promise((r) => setTimeout(r, 1500));

    // 샘플 생성 문제 추가
    const newQ = {
      id: Date.now(),
      subject: "데이터베이스",
      type: "단답형",
      question: "관계형 데이터베이스에서 기본키(Primary Key)의 특징으로 옳지 않은 것은?\n\nPDF에서 생성된 AI 유사 문제입니다.",
      answer: "NULL 값을 가질 수 있다",
      hint: "기본키의 제약 조건을 떠올려보세요.",
      explanation:
        "기본키는 **NOT NULL**이어야 하며 중복될 수 없습니다.\n\n### 기본키 특징\n- 유일성: 중복 값 불가\n- NOT NULL: 빈 값 불가\n- 최소성: 최소한의 속성으로 구성",
      keywords: ["기본키", "Primary Key", "무결성"],
    };
    setQuestions((prev) => [...prev, newQ]);
    setPdfStatus(`✅ 완료! ${1}개의 새 문제가 추가되었습니다.`);
    setPdfParsing(false);
    setTab("study");
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
                borderBottom: tab === t.id ? "2px solid #cc785c" : "2px solid transparent",
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

            {/* 문제 카드 */}
            <div style={{ backgroundColor: "#262626", borderRadius: 12, padding: 24, border: "1px solid #333" }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                <span style={{ fontSize: 11, padding: "3px 8px", borderRadius: 20, backgroundColor: "#1a1a1a", color: "#888", border: "1px solid #333" }}>
                  {current.subject}
                </span>
                <span style={{ fontSize: 11, padding: "3px 8px", borderRadius: 20, backgroundColor: "#cc785c22", color: "#e8906f", border: "1px solid #cc785c44" }}>
                  {current.type}
                </span>
              </div>

              <p style={{ fontSize: 15, lineHeight: 1.8, color: "#ddd", whiteSpace: "pre-line", fontFamily: "monospace" }}>
                {current.question}
              </p>

              {/* 힌트 */}
              {showHint && (
                <div style={{ marginTop: 16, padding: "10px 14px", backgroundColor: "#fbbf2411", borderRadius: 8, border: "1px solid #fbbf2433", fontSize: 13, color: "#fbbf24" }}>
                  💡 {current.hint}
                </div>
              )}
            </div>

            {/* 답변 입력 */}
            <div style={{ backgroundColor: "#262626", borderRadius: 12, padding: 20, border: submitted ? (isCorrect ? "1px solid #4ade8055" : "1px solid #f8717155") : "1px solid #333" }}>
              <label style={{ fontSize: 12, color: "#666", marginBottom: 8, display: "block" }}>내 답변</label>
              <textarea
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                disabled={submitted}
                placeholder="답을 입력하세요..."
                style={{
                  width: "100%",
                  minHeight: 80,
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #333",
                  borderRadius: 8,
                  padding: "10px 12px",
                  color: "#ececec",
                  fontSize: 14,
                  resize: "vertical",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />

              {submitted && (
                <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, backgroundColor: isCorrect ? "#4ade8011" : "#f8717111", border: `1px solid ${isCorrect ? "#4ade8044" : "#f8717144"}` }}>
                  <p style={{ fontSize: 13, color: isCorrect ? "#4ade80" : "#f87171", fontWeight: 600 }}>
                    {isCorrect ? "✅ 정답입니다!" : "❌ 오답입니다"}
                  </p>
                  <p style={{ fontSize: 13, color: "#888", marginTop: 4 }}>
                    정답: <span style={{ color: "#ececec", fontWeight: 600 }}>{current.answer}</span>
                  </p>
                </div>
              )}

              <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                {!submitted ? (
                  <>
                    <button
                      onClick={() => setShowHint(!showHint)}
                      style={{ padding: "8px 16px", borderRadius: 8, fontSize: 13, cursor: "pointer", backgroundColor: "#1a1a1a", border: "1px solid #333", color: "#888" }}
                    >
                      {showHint ? "힌트 숨기기" : "💡 힌트"}
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={!userAnswer.trim()}
                      style={{
                        flex: 1, padding: "8px 16px", borderRadius: 8, fontSize: 13, cursor: "pointer",
                        backgroundColor: userAnswer.trim() ? "#cc785c" : "#333",
                        border: "none", color: userAnswer.trim() ? "#fff" : "#555", fontWeight: 600,
                        transition: "all 0.15s",
                      }}
                    >
                      제출하기
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleNext}
                    style={{ flex: 1, padding: "8px 16px", borderRadius: 8, fontSize: 13, cursor: "pointer", backgroundColor: "#cc785c", border: "none", color: "#fff", fontWeight: 600 }}
                  >
                    다음 문제 →
                  </button>
                )}
              </div>
            </div>

            {/* AI 해설 */}
            {showExplanation && (
              <div style={{ backgroundColor: "#262626", borderRadius: 12, padding: 20, border: "1px solid #333" }}>
                <p style={{ fontSize: 12, color: "#cc785c", fontWeight: 600, marginBottom: 12 }}>🤖 AI 해설</p>
                {aiLoading ? (
                  <div style={{ display: "flex", gap: 6, alignItems: "center", color: "#555", fontSize: 13 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#cc785c", animation: "pulse 1s infinite" }} />
                    <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#cc785c", animation: "pulse 1s infinite 0.2s" }} />
                    <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#cc785c", animation: "pulse 1s infinite 0.4s" }} />
                    <span style={{ marginLeft: 4 }}>해설 생성 중...</span>
                  </div>
                ) : (
                  <div style={{ fontSize: 14, color: "#ccc", lineHeight: 1.8, whiteSpace: "pre-line" }}>
                    {aiExplanation || current.explanation}
                  </div>
                )}
              </div>
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
