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
      className={`bg-cp-surface rounded-2xl border-2 transition-colors overflow-hidden ${
        submitted
          ? isCorrect
            ? 'border-cp-success'
            : 'border-cp-error'
          : 'border-cp-border'
      }`}
    >
      <div className="p-5 pb-0">
        <label className="text-[12px] font-bold text-cp-faint mb-2 block">내 답변</label>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={submitted}
          placeholder="답을 입력하세요..."
          className="w-full min-h-[80px] bg-white border-2 border-cp-border rounded-xl px-3 py-2.5 text-cp-primary text-[14px] resize-y outline-none focus:border-cp-accent transition-colors disabled:opacity-90 placeholder:text-cp-dimmed"
        />
      </div>

      {submitted ? (
        <div
          className={`mt-4 p-5 border-t-2 ${
            isCorrect
              ? 'bg-cp-success/10 border-cp-success/30'
              : 'bg-cp-error/10 border-cp-error/30'
          }`}
        >
          <p
            className={`font-display text-[15px] font-bold flex items-center gap-2 ${
              isCorrect ? 'text-cp-accent-dark' : 'text-cp-error'
            }`}
          >
            {isCorrect ? (
              <>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-cp-accent text-white flex-shrink-0">
                  <CheckCircle size={15} />
                </span>
                정답입니다! +10 XP
              </>
            ) : (
              <>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-cp-error text-white flex-shrink-0">
                  <XCircle size={15} />
                </span>
                아쉬워요, 오답이에요
              </>
            )}
          </p>
          <p className="text-[13px] text-cp-muted mt-2">
            정답: <span className="text-cp-primary font-bold">{correctAnswer}</span>
          </p>

          <button
            onClick={onNext}
            className="cp-btn-raised w-full mt-3 px-4 py-3 rounded-2xl text-[14px] font-display font-bold bg-cp-accent text-white hover:opacity-95 transition-opacity"
            style={{ '--cp-btn-shadow': '#2f9440' }}
          >
            {nextLabel}
          </button>
        </div>
      ) : (
        <div className="flex gap-2 p-5 pt-3">
          <button
            onClick={onToggleHint}
            className="cp-btn-raised flex items-center gap-1.5 px-4 py-2.5 rounded-2xl text-[13px] font-display font-bold bg-white border-2 border-cp-blue text-cp-blue-dark"
            style={{ '--cp-btn-shadow': '#e5e5e5' }}
          >
            <Lightbulb size={13} />
            {showHint ? '힌트 숨기기' : '힌트'}
          </button>
          <button
            onClick={onSubmit}
            disabled={!value.trim()}
            className={`flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-2xl text-[13px] font-display font-bold transition-all ${
              value.trim()
                ? 'cp-btn-raised bg-cp-accent text-white'
                : 'bg-cp-hover text-cp-dimmed cursor-not-allowed'
            }`}
            style={value.trim() ? { '--cp-btn-shadow': '#2f9440' } : undefined}
          >
            <Send size={13} />
            제출하기
          </button>
        </div>
      )}
    </div>
  );
}
