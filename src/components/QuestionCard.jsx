import { Lightbulb } from 'lucide-react';

export default function QuestionCard({ question, showHint, sessionLabel, questionNumber }) {
  if (!question) return null;
  return (
    <div className="cp-fade-in bg-cp-surface rounded-xl p-6 border border-cp-border">
      {/* Badges */}
      <div className="flex gap-2 mb-4 flex-wrap items-center">
        {sessionLabel && (
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-cp-accent/10 text-cp-accent border border-cp-accent/30">
            {sessionLabel}
          </span>
        )}
        {questionNumber != null && (
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-cp-bg text-cp-muted border border-cp-border">
            {questionNumber}번
          </span>
        )}
        <span className="text-[11px] px-2 py-0.5 rounded-full bg-cp-bg text-cp-muted border border-cp-border">
          {question.type}
        </span>
      </div>

      {/* Question text */}
      <p className="text-[15px] leading-relaxed text-[#ddd] whitespace-pre-line">
        {question.question}
      </p>

      {/* Code block */}
      {question.code && (
        <pre className="mt-4 p-4 bg-cp-bg rounded-lg border border-cp-border text-[13px] text-cp-accent-light overflow-x-auto leading-relaxed font-mono whitespace-pre">
          {question.code}
        </pre>
      )}

      {/* Hint */}
      {showHint && question.hint && (
        <div className="mt-4 p-3 bg-cp-warning/10 rounded-lg border border-cp-warning/30 text-[13px] text-cp-warning flex items-start gap-2">
          <Lightbulb size={14} className="mt-0.5 flex-shrink-0" />
          {question.hint}
        </div>
      )}
    </div>
  );
}
