import { Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function ExplanationPanel({ loading, text }) {
  return (
    <div className="cp-fade-in bg-cp-blue/5 rounded-2xl p-5 border-2 border-cp-blue/25">
      <p className="text-[12px] text-cp-blue-dark font-display font-bold mb-3 flex items-center gap-1.5">
        <Bot size={13} />
        AI 해설
      </p>
      {loading ? (
        <div className="flex items-center gap-1.5 text-cp-dimmed text-[13px]">
          <span className="cp-dot" style={{ animationDelay: '0s' }} />
          <span className="cp-dot" style={{ animationDelay: '0.2s' }} />
          <span className="cp-dot" style={{ animationDelay: '0.4s' }} />
          <span className="ml-1">해설 생성 중...</span>
        </div>
      ) : (
        <div className="text-[14px] text-cp-primary leading-relaxed cp-markdown">
          <ReactMarkdown>{text || ''}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}
