import { Lightbulb, Send, CheckCircle, XCircle } from 'lucide-react';

export default function AnswerInput({
  value,
  onChange,
  submitted,
  isCorrect,
  correctAnswer,
  onToggleHint,
  showHint,
  onSubmit,
  onNext,
  nextLabel = '다음 문제 →',
}) {
  return (
    <div
      className={`bg-cp-surface rounded-xl p-5 border transition-colors ${
        submitted
          ? isCorrect
            ? 'border-cp-success/35'
            : 'border-cp-error/35'
          : 'border-cp-border'
      }`}
    >
      <label className="text-[12px] text-cp-faint mb-2 block">내 답변</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={submitted}
        placeholder="답을 입력하세요..."
        className="w-full min-h-[80px] bg-cp-bg border border-cp-border rounded-lg px-3 py-2.5 text-cp-primary text-[14px] resize-y outline-none focus:border-cp-accent transition-colors disabled:opacity-60 placeholder:text-cp-dimmed"
      />

      {submitted && (
        <div
          className={`mt-3 px-3.5 py-2.5 rounded-lg border ${
            isCorrect
              ? 'bg-cp-success/5 border-cp-success/25'
              : 'bg-cp-error/5 border-cp-error/25'
          }`}
        >
          <p
            className={`text-[13px] font-semibold flex items-center gap-1.5 ${
              isCorrect ? 'text-cp-success' : 'text-cp-error'
            }`}
          >
            {isCorrect ? (
              <><CheckCircle size={14} /> 정답입니다!</>
            ) : (
              <><XCircle size={14} /> 오답입니다</>
            )}
          </p>
          <p className="text-[13px] text-cp-muted mt-1">
            정답: <span className="text-cp-primary font-semibold">{correctAnswer}</span>
          </p>
        </div>
      )}

      <div className="flex gap-2 mt-3">
        {!submitted ? (
          <>
            <button
              onClick={onToggleHint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] bg-cp-bg border border-cp-border text-cp-muted hover:border-cp-accent/50 transition-colors"
            >
              <Lightbulb size={13} />
              {showHint ? '힌트 숨기기' : '힌트'}
            </button>
            <button
              onClick={onSubmit}
              disabled={!value.trim()}
              className={`flex-1 flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-semibold transition-all ${
                value.trim()
                  ? 'bg-cp-accent text-white hover:bg-cp-accent-light'
                  : 'bg-cp-border text-cp-dimmed cursor-not-allowed'
              }`}
            >
              <Send size={13} />
              제출하기
            </button>
          </>
        ) : (
          <button
            onClick={onNext}
            className="flex-1 px-4 py-2 rounded-lg text-[13px] font-semibold bg-cp-accent text-white hover:bg-cp-accent-light transition-colors"
          >
            {nextLabel}
          </button>
        )}
      </div>
    </div>
  );
}
