import { Inbox } from 'lucide-react';
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
        <p className="text-[12px] text-cp-faint mt-1.5">
          src/data/examQuestions.js에 문제를 추가해주세요
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {years.map((year) => (
        <div key={year}>
          <div className="text-[12px] font-display font-bold text-cp-faint mb-2 tracking-wide">
            {year}년
          </div>
          <div className="flex flex-col">
            {grouped[year].map(({ round, count }, i) => (
              <div key={round}>
                <button
                  onClick={() => onSelect({ year: Number(year), round })}
                  className="group w-full py-1.5 flex items-center gap-3.5 text-left"
                >
                  <span className="cp-btn-raised flex-shrink-0 w-12 h-12 rounded-full bg-cp-accent text-white font-display font-extrabold text-[15px] flex items-center justify-center" style={{ '--cp-btn-shadow': '#2f9440' }}>
                    {round}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-display font-bold text-[14px] text-cp-primary">
                      {year}년 {round}회 기출
                    </span>
                    <span className="block text-[12px] text-cp-faint mt-0.5">
                      {count}문제
                    </span>
                  </span>
                </button>
                {i < grouped[year].length - 1 && (
                  <div className="w-0.5 h-4 bg-cp-border ml-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
