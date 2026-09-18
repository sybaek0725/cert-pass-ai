import { useState } from 'react';
import {
  BookOpen,
  BookX,
  Flame,
  Target,
  BookOpenText,
  ChevronLeft,
  CheckCircle,
  XCircle,
  Trophy,
  Check,
  RefreshCw,
  ScrollText,
} from 'lucide-react';
import { CertPassLogo } from './components/Logo';
import QuestionCard from './components/QuestionCard';
import AnswerInput from './components/AnswerInput';
import ExplanationPanel from './components/ExplanationPanel';
import YearRoundList from './components/YearRoundList';
import ReleaseNotes from './components/ReleaseNotes';
import { getSessionQuestions } from './data/examQuestions';
import { useAI } from './hooks/useAI';
import { useWrongAnswers } from './hooks/useWrongAnswers';

const TABS = [
  { id: 'study',    label: '문제풀기',   Icon: BookOpen   },
  { id: 'wrong',    label: '오답노트',   Icon: BookX      },
  { id: 'updates',  label: '업데이트',   Icon: ScrollText },
];

const MODES = [
  { id: 'exam',    label: '시험 모드',   desc: '채점만',        Icon: Target },
  { id: 'explain', label: '해설 모드',   desc: 'AI 10단계 해설', Icon: BookOpenText },
];

export default function CertPassAI() {
  const ai = useAI();
  const { items: wrongAnswers, addWrong, markReviewed } = useWrongAnswers();

  const [tab, setTab] = useState('study');
  const [studyMode, setStudyMode] = useState('explain');
  const [studyView, setStudyView] = useState('rounds'); // rounds | question | results

  const [selectedSession, setSelectedSession] = useState(null);
  const [sessionQuestions, setSessionQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [userAnswer, setUserAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [aiExplanation, setAiExplanation] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  const [results, setResults] = useState([]);

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

  function handleSessionSelect({ year, round }) {
    setSelectedSession({ year, round });
    setStudyView('question');
    setCurrentIndex(0);
    setResults([]);
    resetQuestionState();
    setSessionQuestions(getSessionQuestions(year, round));
  }

  async function handleSubmit() {
    if (!userAnswer.trim() || !current || isSubmitted) return;
    setIsSubmitted(true);

    const correct = userAnswer
      .trim()
      .toLowerCase()
      .includes(current.answer?.split('\n')[0].trim().toLowerCase());

    setResults((prev) => [...prev, { question: current, userAnswer, isCorrect: correct }]);

    if (!correct) addWrong(current, userAnswer);

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

  function handleNext() {
    if (isLastQuestion) { setStudyView('results'); return; }
    setCurrentIndex((i) => i + 1);
    resetQuestionState();
  }

  function handleBackToRounds() {
    setStudyView('rounds');
    setSelectedSession(null);
    setSessionQuestions([]);
    setCurrentIndex(0);
    setResults([]);
    resetQuestionState();
  }

  const passRate = results.length > 0 ? totalCorrect / results.length : 0;

  return (
    <div className="min-h-screen bg-cp-bg text-cp-primary font-sans">

      {/* ── Header ── */}
      <header className="bg-cp-bg border-b border-cp-border px-5 sticky top-0 z-50">
        <div className="max-w-2xl mx-auto flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <CertPassLogo size={28} />
            <span className="font-display font-extrabold text-base tracking-tight text-cp-primary">CertPass AI</span>
            <span className="text-[11px] font-bold text-cp-faint ml-1 px-1.5 py-0.5 bg-cp-hover rounded border border-cp-border">
              정처기 실기
            </span>
          </div>
          <div className="flex items-center gap-2 text-[13px]">
            {totalCorrect > 0 && (
              <span className="flex items-center gap-1 font-display font-bold text-[12.5px] text-cp-brand-dark bg-cp-brand/10 px-2.5 py-1 rounded-full">
                <Flame size={14} />
                {totalCorrect}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* ── Tab Nav ── */}
      <div className="bg-cp-bg border-b-2 border-cp-border px-5">
        <div className="max-w-2xl mx-auto flex">
          {TABS.map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex items-center gap-1.5 px-4 py-3 text-[13px] font-display border-b-[3px] -mb-0.5 transition-all ${
                tab === id
                  ? 'font-bold text-cp-accent-dark border-cp-accent'
                  : 'font-bold text-cp-faint border-transparent hover:text-cp-muted'
              }`}
            >
              <Icon size={14} />
              {label}
              {id === 'wrong' && wrongAnswers.length > 0 && (
                <span className="text-[11px] text-cp-muted">({wrongAnswers.length})</span>
              )}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-2xl mx-auto px-5 py-6">

        {/* ── 문제풀기 탭 ── */}
        {tab === 'study' && (
          <>
            {/* 회차 목록 */}
            {studyView === 'rounds' && (
              <div className="flex flex-col gap-4">
                {/* 모드 토글 */}
                <div className="flex gap-1 p-1 rounded-2xl bg-cp-hover border-2 border-cp-border">
                  {MODES.map(({ id, label, desc, Icon }) => (
                    <button
                      key={id}
                      onClick={() => setStudyMode(id)}
                      className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-[13px] font-display transition-all ${
                        studyMode === id
                          ? 'cp-btn-raised bg-cp-accent text-white font-bold'
                          : 'bg-transparent text-cp-faint font-bold hover:text-cp-muted'
                      }`}
                      style={studyMode === id ? { '--cp-btn-shadow': '#2f9440' } : undefined}
                    >
                      <Icon size={13} />
                      {label}
                      <span className="text-[11px] opacity-75">({desc})</span>
                    </button>
                  ))}
                </div>

                <YearRoundList onSelect={handleSessionSelect} />
              </div>
            )}

            {/* 문제 풀기 */}
            {studyView === 'question' && (
              <div className="flex flex-col gap-4">
                {/* 진행도 헤더 */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={handleBackToRounds}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-[12px] font-display font-bold bg-cp-hover border border-cp-border text-cp-muted hover:border-cp-accent/50 transition-colors"
                  >
                    <ChevronLeft size={12} />
                    회차 목록
                  </button>
                  {totalQuestions > 0 && (
                    <span className="text-[13px] font-display font-bold text-cp-faint">
                      {currentIndex + 1}{' '}
                      <span className="text-cp-dimmed">/ {totalQuestions}</span>
                    </span>
                  )}
                </div>

                {/* 진행바 */}
                {totalQuestions > 0 && (
                  <div className="h-3.5 bg-cp-hover border border-cp-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cp-accent to-cp-accent-light rounded-full transition-all duration-300"
                      style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
                    />
                  </div>
                )}

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
                  <div className="text-center py-16 px-5 bg-cp-surface rounded-2xl border-2 border-cp-border">
                    <p className="text-[14px] text-cp-faint">해당 회차 문제가 없어요</p>
                    <button
                      onClick={handleBackToRounds}
                      className="mt-4 px-4 py-2 rounded-xl text-[13px] font-display font-bold bg-cp-hover border border-cp-border text-cp-muted hover:border-cp-accent/50 transition-colors"
                    >
                      돌아가기
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* 결과 화면 */}
            {studyView === 'results' && (
              <div className="flex flex-col gap-4">
                {/* 점수 카드 */}
                <div className="text-center py-8 px-5 bg-cp-surface rounded-2xl border-2 border-cp-border">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-cp-warning to-[#ffb400] flex items-center justify-center text-4xl cp-btn-raised" style={{ '--cp-btn-shadow': '#dca400' }}>
                    {passRate >= 0.6 ? '🏆' : '📖'}
                  </div>
                  <div className="text-[56px] font-display font-extrabold text-cp-primary leading-none">
                    {totalCorrect}
                  </div>
                  <div className="text-lg text-cp-dimmed mt-1">/ {results.length}</div>
                  <div className="text-[13px] text-cp-faint mt-3">
                    {selectedSession?.year}년 {selectedSession?.round}회 완료
                  </div>
                  <div
                    className={`inline-flex text-[12.5px] font-display font-bold mt-3 items-center justify-center gap-1 px-3 py-1.5 rounded-full ${
                      passRate >= 0.6
                        ? 'text-cp-accent-dark bg-cp-accent/10'
                        : 'text-cp-error bg-cp-error/10'
                    }`}
                  >
                    {passRate >= 0.6 ? (
                      <><Trophy size={13} /> 합격권!</>
                    ) : (
                      <><BookOpen size={13} /> 더 공부해봐요</>
                    )}
                  </div>
                </div>

                {/* 문제별 결과 */}
                <div className="flex flex-col gap-1.5">
                  {results.map((r, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 px-3.5 py-3 bg-cp-surface rounded-xl border border-cp-border"
                    >
                      {r.isCorrect ? (
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-cp-accent text-white flex-shrink-0 mt-0.5">
                          <CheckCircle size={13} />
                        </span>
                      ) : (
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-cp-error text-white flex-shrink-0 mt-0.5">
                          <XCircle size={13} />
                        </span>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-[12px] text-cp-dimmed mb-0.5">
                          {r.question.number}번
                        </p>
                        <p className="text-[13px] text-cp-muted truncate">
                          {r.question.question}
                        </p>
                        {!r.isCorrect && (
                          <p className="text-[12px] text-cp-muted mt-1">
                            정답:{' '}
                            <span className="text-cp-accent-dark font-semibold">
                              {r.question.answer.split('\n')[0]}
                            </span>
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 액션 버튼 */}
                <div className="flex gap-2">
                  <button
                    onClick={handleBackToRounds}
                    className="cp-btn-raised flex-1 px-4 py-3 rounded-2xl text-[13px] font-display font-bold bg-cp-hover border border-cp-border text-cp-primary"
                    style={{ '--cp-btn-shadow': '#e5e5e5' }}
                  >
                    다른 회차 풀기
                  </button>
                  <button
                    onClick={() => handleSessionSelect(selectedSession)}
                    className="cp-btn-raised flex-1 flex items-center justify-center gap-1.5 px-4 py-3 rounded-2xl text-[13px] font-display font-bold bg-cp-accent text-white"
                    style={{ '--cp-btn-shadow': '#2f9440' }}
                  >
                    <RefreshCw size={13} />
                    다시 풀기
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/* ── 업데이트 탭 ── */}
        {tab === 'updates' && <ReleaseNotes />}

        {/* ── 오답노트 탭 ── */}
        {tab === 'wrong' && (
          <div className="flex flex-col gap-3">
            {wrongAnswers.length === 0 ? (
              <div className="text-center py-16 px-5">
                <div className="flex justify-center">
                  <Trophy size={40} className="text-cp-border" />
                </div>
                <p className="text-base text-cp-faint mt-4">오답이 없어요!</p>
                <p className="text-[13px] text-cp-dimmed mt-1.5">
                  계속 풀다 보면 여기에 모입니다.
                </p>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center">
                  <span className="text-[13px] font-display font-bold text-cp-faint">
                    총 {wrongAnswers.length}개의 오답
                  </span>
                </div>

                {wrongAnswers.map((w) => (
                  <div
                    key={w.id}
                    className="bg-cp-surface rounded-2xl p-5 border-2 border-cp-error/25"
                  >
                    <p className="text-[14px] text-cp-primary leading-relaxed mb-3">
                      {w.question}
                    </p>
                    <div className="flex flex-col gap-1.5">
                      <div className="text-[12px] font-medium px-2.5 py-1.5 rounded-lg bg-cp-error/10 border border-cp-error/20 text-cp-error">
                        내 답변: {w.myAnswer}
                      </div>
                      <div className="text-[12px] font-medium px-2.5 py-1.5 rounded-lg bg-cp-accent/10 border border-cp-accent/20 text-cp-accent-dark">
                        정답: {w.answer}
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      {!w.reviewed ? (
                        <button
                          onClick={() => markReviewed(w.id)}
                          className="cp-btn-raised flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[12px] font-display font-bold bg-white border-2 border-cp-accent text-cp-accent-dark"
                          style={{ '--cp-btn-shadow': '#e5e5e5' }}
                        >
                          <Check size={12} />
                          복습 완료
                        </button>
                      ) : (
                        <span className="flex items-center gap-1.5 text-[12px] font-display font-bold text-cp-accent-dark px-2.5 py-1.5">
                          <CheckCircle size={12} />
                          복습됨
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
    </div>
  );
}
