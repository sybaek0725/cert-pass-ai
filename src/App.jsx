import { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import AnswerInput from './components/AnswerInput';
import ExplanationPanel from './components/ExplanationPanel';
import YearRoundList from './components/YearRoundList';
import { getSessionQuestions } from './data/examQuestions';
import { useAI } from './hooks/useAI';
import { useWrongAnswers } from './hooks/useWrongAnswers';

export default function CertPassAI() {
  const ai = useAI();
  const { items: wrongAnswers, addWrong, markReviewed } = useWrongAnswers();

  // ── 탭 ────────────────────────────────────────────────────
  const [tab, setTab] = useState('study'); // study | wrong

  // ── 학습 모드 ──────────────────────────────────────────────
  const [studyMode, setStudyMode] = useState('explain'); // exam | explain

  // ── 뷰 상태 ───────────────────────────────────────────────
  const [studyView, setStudyView] = useState('rounds'); // rounds | question | results

  // ── 회차 선택 + 문제 목록 ─────────────────────────────────
  const [selectedSession, setSelectedSession] = useState(null); // { year, round }
  const [sessionQuestions, setSessionQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ── 현재 문제 상태 ─────────────────────────────────────────
  const [userAnswer, setUserAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [aiExplanation, setAiExplanation] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  // ── 세션 결과 (20문제 누적) ────────────────────────────────
  const [results, setResults] = useState([]); // [{ question, userAnswer, isCorrect }]

  // ── 파생 값 ───────────────────────────────────────────────
  const current = sessionQuestions[currentIndex] || null;
  const totalQuestions = sessionQuestions.length;
  const isLastQuestion = currentIndex + 1 >= totalQuestions;
  const isCorrect =
    isSubmitted && current
      ? userAnswer.trim().toLowerCase().includes(
          current.answer?.split('\n')[0].trim().toLowerCase()
        )
      : false;
  const totalCorrect = results.filter((r) => r.isCorrect).length;

  function resetQuestionState() {
    setUserAnswer('');
    setIsSubmitted(false);
    setShowHint(false);
    setShowExplanation(false);
    setAiExplanation('');
    setAiLoading(false);
  }

  // ── 회차 선택 → 문제 로드 ─────────────────────────────────
  function handleSessionSelect({ year, round }) {
    setSelectedSession({ year, round });
    setStudyView('question');
    setCurrentIndex(0);
    setResults([]);
    resetQuestionState();
    setSessionQuestions(getSessionQuestions(year, round));
  }

  // ── 답안 제출 ─────────────────────────────────────────────
  async function handleSubmit() {
    if (!userAnswer.trim() || !current || isSubmitted) return;
    setIsSubmitted(true);

    const correct = userAnswer
      .trim()
      .toLowerCase()
      .includes(current.answer?.split('\n')[0].trim().toLowerCase());

    setResults((prev) => [...prev, { question: current, userAnswer, isCorrect: correct }]);

    if (!correct) {
      addWrong(current, userAnswer);
    }

    if (studyMode === 'explain') {
      setShowExplanation(true);
      setAiLoading(true);
      setAiExplanation('');
      try {
        await ai.streamExplanation(
          { question: current.question, correctAnswer: current.answer, userAnswer },
          (accumulated) => setAiExplanation(accumulated)
        );
      } catch (e) {
        setAiExplanation(`⚠️ ${e.message}\n\n${current.explanation || ''}`);
      } finally {
        setAiLoading(false);
      }
    }
  }

  // ── 다음 문제 / 결과 화면 ─────────────────────────────────
  function handleNext() {
    if (isLastQuestion) {
      setStudyView('results');
      return;
    }
    setCurrentIndex((i) => i + 1);
    resetQuestionState();
  }

  // ── 회차 목록으로 돌아가기 ────────────────────────────────
  function handleBackToRounds() {
    setStudyView('rounds');
    setSelectedSession(null);
    setSessionQuestions([]);
    setCurrentIndex(0);
    setResults([]);
    resetQuestionState();
  }

  // ── 렌더 ──────────────────────────────────────────────────
  return (
    <div
      style={{
        fontFamily: "'Noto Sans KR', sans-serif",
        backgroundColor: '#1a1a1a',
        minHeight: '100vh',
        color: '#ececec',
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: '#1a1a1a',
          borderBottom: '1px solid #333',
          padding: '0 20px',
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: 720,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 56,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: 'linear-gradient(135deg, #cc785c, #e8906f)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 14,
              }}
            >
              🎯
            </div>
            <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: '-0.3px' }}>
              CertPass AI
            </span>
            <span
              style={{
                fontSize: 11,
                color: '#666',
                marginLeft: 4,
                padding: '2px 6px',
                backgroundColor: '#262626',
                borderRadius: 4,
                border: '1px solid #333',
              }}
            >
              정처기 실기
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, color: '#888' }}>
            {totalCorrect > 0 && (
              <span style={{ color: '#cc785c' }}>🔥 {totalCorrect}정답</span>
            )}
          </div>
        </div>
      </header>

      {/* Tab Nav */}
      <div
        style={{
          backgroundColor: '#1a1a1a',
          borderBottom: '1px solid #2a2a2a',
          padding: '0 20px',
        }}
      >
        <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', gap: 0 }}>
          {[
            { id: 'study', label: '📚 문제풀기' },
            {
              id: 'wrong',
              label: `❌ 오답노트${wrongAnswers.length > 0 ? ` (${wrongAnswers.length})` : ''}`,
            },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: '12px 16px',
                fontSize: 13,
                fontWeight: tab === t.id ? 600 : 400,
                color: tab === t.id ? '#cc785c' : '#666',
                background: 'none',
                border: 'none',
                borderBottom: tab === t.id ? '2px solid #cc785c' : '2px solid transparent',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '24px 20px' }}>

        {/* ── 문제풀기 탭 ── */}
        {tab === 'study' && (
          <>
            {/* 회차 목록 */}
            {studyView === 'rounds' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {/* 모드 토글 */}
                <div
                  style={{
                    display: 'flex',
                    gap: 0,
                    padding: 3,
                    borderRadius: 8,
                    backgroundColor: '#1a1a1a',
                    border: '1px solid #333',
                  }}
                >
                  {[
                    { id: 'exam', label: '🎯 시험 모드', desc: '채점만' },
                    { id: 'explain', label: '📖 해설 모드', desc: 'AI 10단계 해설' },
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setStudyMode(m.id)}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        borderRadius: 6,
                        fontSize: 13,
                        fontWeight: studyMode === m.id ? 600 : 400,
                        cursor: 'pointer',
                        border: 'none',
                        backgroundColor: studyMode === m.id ? '#cc785c' : 'transparent',
                        color: studyMode === m.id ? '#fff' : '#666',
                        transition: 'all 0.15s',
                      }}
                    >
                      {m.label}
                      <span style={{ fontSize: 11, marginLeft: 4, opacity: 0.8 }}>
                        ({m.desc})
                      </span>
                    </button>
                  ))}
                </div>

                <YearRoundList onSelect={handleSessionSelect} />
              </div>
            )}

            {/* 문제 풀기 */}
            {studyView === 'question' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {/* 헤더: 뒤로가기 + 진행도 */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <button
                    onClick={handleBackToRounds}
                    style={{
                      padding: '5px 12px',
                      borderRadius: 6,
                      fontSize: 12,
                      cursor: 'pointer',
                      backgroundColor: '#1a1a1a',
                      border: '1px solid #333',
                      color: '#888',
                    }}
                  >
                    ← 회차 목록
                  </button>
                  {totalQuestions > 0 && (
                    <span style={{ fontSize: 13, color: '#666' }}>
                      {currentIndex + 1}{' '}
                      <span style={{ color: '#444' }}>/ {totalQuestions}</span>
                    </span>
                  )}
                </div>

                {/* 문제 UI */}
                {current && (
                  <>
                    <QuestionCard
                      question={current}
                      showHint={showHint}
                      sessionLabel={`${selectedSession.year}년 ${selectedSession.round}회`}
                      questionNumber={current.number}
                    />

                    <AnswerInput
                      value={userAnswer}
                      onChange={setUserAnswer}
                      submitted={isSubmitted}
                      isCorrect={isCorrect}
                      correctAnswer={current.answer}
                      showHint={showHint}
                      onToggleHint={() => setShowHint((h) => !h)}
                      onSubmit={handleSubmit}
                      onNext={handleNext}
                      nextLabel={isLastQuestion ? '결과 보기 →' : '다음 문제 →'}
                    />

                    {showExplanation && (
                      <ExplanationPanel
                        loading={aiLoading}
                        text={aiExplanation || current.explanation}
                      />
                    )}
                  </>
                )}

                {/* 문제 없음 */}
                {totalQuestions === 0 && (
                  <div
                    style={{
                      textAlign: 'center',
                      padding: '60px 20px',
                      color: '#444',
                      backgroundColor: '#262626',
                      borderRadius: 12,
                      border: '1px solid #333',
                    }}
                  >
                    <p style={{ fontSize: 14 }}>해당 회차 문제가 없어요</p>
                    <button
                      onClick={handleBackToRounds}
                      style={{
                        marginTop: 16,
                        padding: '8px 16px',
                        borderRadius: 8,
                        fontSize: 13,
                        cursor: 'pointer',
                        backgroundColor: '#1a1a1a',
                        border: '1px solid #333',
                        color: '#888',
                      }}
                    >
                      돌아가기
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* 결과 화면 */}
            {studyView === 'results' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {/* 점수 카드 */}
                <div
                  style={{
                    textAlign: 'center',
                    padding: '32px 20px',
                    backgroundColor: '#262626',
                    borderRadius: 12,
                    border: '1px solid #333',
                  }}
                >
                  <div
                    style={{ fontSize: 56, fontWeight: 700, color: '#cc785c', lineHeight: 1 }}
                  >
                    {results.filter((r) => r.isCorrect).length}
                  </div>
                  <div style={{ fontSize: 18, color: '#555', marginTop: 4 }}>
                    / {results.length}
                  </div>
                  <div style={{ fontSize: 13, color: '#666', marginTop: 12 }}>
                    {selectedSession?.year}년 {selectedSession?.round}회 완료
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color:
                        results.filter((r) => r.isCorrect).length / results.length >= 0.6
                          ? '#4ade80'
                          : '#f87171',
                      marginTop: 6,
                    }}
                  >
                    {results.filter((r) => r.isCorrect).length / results.length >= 0.6
                      ? '🎉 합격권!'
                      : '📖 더 공부해봐요'}
                  </div>
                </div>

                {/* 문제별 결과 목록 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {results.map((r, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 12,
                        padding: '12px 14px',
                        backgroundColor: '#262626',
                        borderRadius: 8,
                        border: `1px solid ${r.isCorrect ? '#4ade8022' : '#f8717122'}`,
                      }}
                    >
                      <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>
                        {r.isCorrect ? '✅' : '❌'}
                      </span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontSize: 12, color: '#555', marginBottom: 3 }}>
                          {r.question.number}번
                        </p>
                        <p
                          style={{
                            fontSize: 13,
                            color: '#aaa',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {r.question.question}
                        </p>
                        {!r.isCorrect && (
                          <p style={{ fontSize: 12, color: '#888', marginTop: 4 }}>
                            정답:{' '}
                            <span style={{ color: '#4ade80' }}>
                              {r.question.answer.split('\n')[0]}
                            </span>
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 액션 버튼 */}
                <div style={{ display: 'flex', gap: 8 }}>
                  <button
                    onClick={handleBackToRounds}
                    style={{
                      flex: 1,
                      padding: '12px 16px',
                      borderRadius: 8,
                      fontSize: 13,
                      cursor: 'pointer',
                      backgroundColor: '#262626',
                      border: '1px solid #333',
                      color: '#ececec',
                      fontWeight: 500,
                    }}
                  >
                    다른 회차 풀기
                  </button>
                  <button
                    onClick={() => handleSessionSelect(selectedSession)}
                    style={{
                      flex: 1,
                      padding: '12px 16px',
                      borderRadius: 8,
                      fontSize: 13,
                      cursor: 'pointer',
                      backgroundColor: '#cc785c',
                      border: 'none',
                      color: '#fff',
                      fontWeight: 600,
                    }}
                  >
                    다시 풀기
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/* ── 오답노트 탭 ── */}
        {tab === 'wrong' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {wrongAnswers.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 20px', color: '#444' }}>
                <p style={{ fontSize: 40 }}>🎉</p>
                <p style={{ fontSize: 16, color: '#666', marginTop: 12 }}>오답이 없어요!</p>
                <p style={{ fontSize: 13, color: '#444', marginTop: 6 }}>
                  계속 풀다 보면 여기에 모입니다.
                </p>
              </div>
            ) : (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13, color: '#666' }}>
                    총 {wrongAnswers.length}개의 오답
                  </span>
                </div>

                {wrongAnswers.map((w) => (
                  <div
                    key={w.id}
                    style={{
                      backgroundColor: '#262626',
                      borderRadius: 12,
                      padding: 20,
                      border: '1px solid #f8717122',
                    }}
                  >
                    <p style={{ fontSize: 14, color: '#ddd', lineHeight: 1.7, marginBottom: 12 }}>
                      {w.question}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <div
                        style={{
                          fontSize: 12,
                          padding: '6px 10px',
                          borderRadius: 6,
                          backgroundColor: '#f8717111',
                          border: '1px solid #f8717133',
                          color: '#f87171',
                        }}
                      >
                        내 답변: {w.myAnswer}
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          padding: '6px 10px',
                          borderRadius: 6,
                          backgroundColor: '#4ade8011',
                          border: '1px solid #4ade8033',
                          color: '#4ade80',
                        }}
                      >
                        정답: {w.answer}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                      {!w.reviewed ? (
                        <button
                          onClick={() => markReviewed(w.id)}
                          style={{
                            padding: '7px 14px',
                            borderRadius: 8,
                            fontSize: 12,
                            cursor: 'pointer',
                            backgroundColor: '#1a1a1a',
                            border: '1px solid #4ade8044',
                            color: '#4ade80',
                          }}
                        >
                          ✅ 복습 완료
                        </button>
                      ) : (
                        <span style={{ padding: '7px 10px', fontSize: 12, color: '#4ade80' }}>
                          ✅ 복습됨
                        </span>
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
