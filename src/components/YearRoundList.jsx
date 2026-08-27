import { ChevronRight, Inbox } from 'lucide-react';
import { getSessionList } from '../data/examQuestions';

export default function YearRoundList({ onSelect }) {
  const sessions = getSessionList();

  const grouped = {};
  sessions.forEach(({ year, round, count }) => {
    if (!grouped[year]) grouped[year] = [];
    grouped[year].push({ round, count });
  });
  Object.values(grouped).forEach((rounds) => rounds.sort((a, b) => a.round - b.round));

  const years = Object.keys(grouped).sort((a, b) => b - a);

  if (years.length === 0) {
    return (
      <div className="text-center py-16 px-5">
        <div className="flex justify-center mb-3">
          <Inbox size={40} className="text-cp-border" />
        </div>
        <p className="text-[14px] text-cp-faint mt-3">기출 데이터가 없어요</p>
        <p className="text-[12px] text-[#444] mt-1.5">
          src/data/examQuestions.js에 문제를 추가해주세요
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {years.map((year) => (
        <div key={year}>
          <div className="text-[12px] font-semibold text-cp-dimmed mb-2 tracking-wide">
            {year}년
          </div>
          <div className="flex flex-col gap-1.5">
            {grouped[year].map(({ round, count }) => (
              <button
                key={round}
                onClick={() => onSelect({ year: Number(year), round })}
                className="group px-4 py-3.5 bg-cp-surface border border-cp-border rounded-lg text-cp-primary text-[14px] text-left flex justify-between items-center hover:border-cp-accent transition-colors"
              >
                <span className="font-medium">
                  {year}년 {round}회 기출
                </span>
                <span className="flex items-center gap-1 text-[12px] text-cp-dimmed group-hover:text-cp-muted transition-colors">
                  {count}문제
                  <ChevronRight size={12} />
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
