import { Sparkles, Wrench, Bug, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const TAG_STYLES = {
  NEW:  { label: 'NEW',  className: 'bg-cp-accent/15 text-cp-accent border-cp-accent/30',   Icon: Sparkles },
  개선:  { label: '개선',  className: 'bg-cp-success/15 text-cp-success border-cp-success/30', Icon: Wrench   },
  수정:  { label: '수정',  className: 'bg-cp-error/15   text-cp-error   border-cp-error/30',   Icon: Bug      },
};

const RELEASES = [
  {
    version: 'v2.0.0',
    date: '2026-08-27',
    title: '진짜 기출문제로 돌아왔어요',
    summary: '400문제 전량 실제 기출로 교체하고, 앱 전체를 새로 다듬었어요.',
    items: [
      {
        tag: 'NEW',
        text: '2020~2026년 전 회차 실제 기출문제 400문제 탑재',
        detail: '연도·회차별로 골라서 풀 수 있어요. 서버 없이 앱 안에 전부 내장되어 있어요.',
      },
      {
        tag: 'NEW',
        text: '연도 / 회차 선택 UI',
        detail: '2026년 1회부터 2020년 4회까지 한눈에 보이는 목록으로 바뀌었어요.',
      },
      {
        tag: 'NEW',
        text: '코드 완성 문제 지원',
        detail: '코드가 있는 문제는 모노스페이스 코드 블록으로 보여줘요.',
      },
      {
        tag: 'NEW',
        text: '커스텀 SVG 로고 적용',
        detail: '앱 아이덴티티를 담은 로고예요. 문서 + 합격 배지 모양이에요.',
      },
      {
        tag: '개선',
        text: '이모지 → Lucide 아이콘으로 전면 교체',
        detail: '환경마다 달라 보이던 이모지를 일관된 벡터 아이콘으로 바꿨어요.',
      },
      {
        tag: '개선',
        text: 'Tailwind CSS 전면 마이그레이션',
        detail: '인라인 스타일을 완전히 걷어냈어요. 코드가 훨씬 읽기 편해졌어요.',
      },
      {
        tag: '개선',
        text: '오답노트 로컬 저장으로 전환',
        detail: '서버 없이 기기에 저장해요. 앱을 껐다 켜도 오답이 남아 있어요.',
      },
      {
        tag: '수정',
        text: '탭 이동 시 이전 답안 · AI 해설 잔존 버그 수정',
        detail: '탭을 바꿨다 돌아와도 이전 문제 내용이 남아 있던 문제를 고쳤어요.',
      },
    ],
  },
  {
    version: 'v1.0.1',
    date: '2026-06-21',
    title: '첫 번째 패치',
    summary: '탭 전환 버그 수정',
    items: [
      {
        tag: '수정',
        text: '탭 이동 시 이전 답안 · AI 해설이 남는 버그 수정',
        detail: null,
      },
    ],
  },
  {
    version: 'v1.0.0',
    date: '2026-06-14',
    title: '첫 출시',
    summary: 'CertPass AI 첫 번째 버전이에요.',
    items: [
      { tag: 'NEW', text: '기출문제 풀기 (연도·회차별)',   detail: null },
      { tag: 'NEW', text: 'AI 10단계 해설 (Gemini)',      detail: null },
      { tag: 'NEW', text: '오답노트 (localStorage 저장)', detail: null },
      { tag: 'NEW', text: '시험 모드 / 해설 모드 토글',   detail: null },
    ],
  },
];

function TagBadge({ tag }) {
  const style = TAG_STYLES[tag];
  if (!style) return null;
  return (
    <span
      className={`inline-flex items-center gap-1 text-[10px] font-semibold px-1.5 py-0.5 rounded border ${style.className}`}
    >
      <style.Icon size={9} />
      {style.label}
    </span>
  );
}

function ReleaseCard({ release, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-cp-surface rounded-xl border border-cp-border overflow-hidden">
      {/* Card header */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left px-5 py-4 flex items-start justify-between gap-3 hover:bg-cp-hover transition-colors"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="text-[13px] font-bold text-cp-accent">{release.version}</span>
            <span className="text-[11px] text-cp-dimmed">{release.date}</span>
          </div>
          <p className="text-[14px] font-semibold text-cp-primary">{release.title}</p>
          <p className="text-[12px] text-cp-muted mt-0.5">{release.summary}</p>
        </div>
        <div className="text-cp-dimmed mt-1 flex-shrink-0">
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>

      {/* Item list */}
      {open && (
        <div className="border-t border-cp-border px-5 py-3 flex flex-col gap-3">
          {release.items.map((item, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <div className="mt-0.5 flex-shrink-0">
                <TagBadge tag={item.tag} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] text-cp-primary leading-snug">{item.text}</p>
                {item.detail && (
                  <p className="text-[12px] text-cp-muted mt-0.5 leading-relaxed">{item.detail}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ReleaseNotes() {
  return (
    <div className="flex flex-col gap-4">
      <div className="mb-1">
        <h2 className="text-[15px] font-bold text-cp-primary">업데이트 내역</h2>
        <p className="text-[12px] text-cp-muted mt-1">
          CertPass AI가 어떻게 달라졌는지 확인해보세요.
        </p>
      </div>

      {RELEASES.map((release, i) => (
        <ReleaseCard key={release.version} release={release} defaultOpen={i === 0} />
      ))}
    </div>
  );
}
