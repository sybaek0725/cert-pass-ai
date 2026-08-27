import { useCallback, useEffect, useState } from 'react';

// 오답노트 — localStorage 전용 저장 (기기 간 동기화 없음).
// 각 오답 아이템 shape: { id, subject, type, question, answer, hint, explanation, code, myAnswer, reviewed, createdAt }

const STORAGE_KEY = 'certpass_wrong_answers';

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function save(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function useWrongAnswers() {
  const [items, setItems] = useState(() => load());

  useEffect(() => {
    save(items);
  }, [items]);

  const addWrong = useCallback((question, myAnswer) => {
    setItems((prev) => {
      if (prev.find((w) => w.id === question.id)) return prev;
      return [
        ...prev,
        { ...question, myAnswer, reviewed: false, createdAt: new Date().toISOString() },
      ];
    });
  }, []);

  const markReviewed = useCallback((id) => {
    setItems((prev) => prev.map((w) => (w.id === id ? { ...w, reviewed: true } : w)));
  }, []);

  return { items, addWrong, markReviewed };
}
