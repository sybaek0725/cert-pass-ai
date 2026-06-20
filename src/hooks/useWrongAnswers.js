import { useCallback, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { labelToCode } from '../lib/subjects';

// 로그인 유저면 Supabase DB와 동기화, 비로그인이면 메모리 state만 사용.
// 각 오답 아이템 shape:
//   { id, subject, type, question, answer, hint, explanation, keywords, myAnswer, reviewed, dbId? }
//   - dbId: Supabase questions.id (UUID). DB 동기화된 경우에만 존재.

const VALID_TYPES = ['단답형', '빈칸', '코드완성'];

export function useWrongAnswers(user) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      if (!user) {
        if (!cancelled) setItems([]);
        return;
      }
      if (!cancelled) setLoading(true);
      const { data, error } = await supabase
        .from('wrong_answers')
        .select(
          'id, my_answer, reviewed, created_at, questions ( id, subject, type, question, answer, hint, explanation, keywords )'
        )
        .order('created_at', { ascending: false });
      if (cancelled) return;
      if (error) {
        console.error('[wrong_answers load]', error);
        setLoading(false);
        return;
      }
      const flat = (data || [])
        .filter((row) => row.questions)
        .map((row) => ({
          id: row.id,
          dbId: row.questions.id,
          subject: row.questions.subject,
          type: row.questions.type,
          question: row.questions.question,
          answer: row.questions.answer,
          hint: row.questions.hint,
          explanation: row.questions.explanation,
          keywords: row.questions.keywords || [],
          myAnswer: row.my_answer,
          reviewed: row.reviewed,
        }));
      setItems(flat);
      setLoading(false);
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [user]);

  const addWrong = useCallback(
    async (question, myAnswer) => {
      // 중복 방지: 같은 question.id가 이미 있으면 myAnswer만 갱신
      setItems((prev) => {
        if (prev.find((w) => w.id === question.id)) return prev;
        return [
          ...prev,
          { ...question, myAnswer, reviewed: false },
        ];
      });

      if (!user) return; // 비로그인: DB 저장 안 함

      const subjectCode = labelToCode(question.subject);
      if (!subjectCode || !VALID_TYPES.includes(question.type)) {
        console.warn('[wrong_answers] subject/type가 DB enum과 안 맞아 저장 생략', {
          subject: question.subject,
          type: question.type,
        });
        return;
      }

      const { data: q, error: qErr } = await supabase
        .from('questions')
        .insert({
          user_id: user.id,
          subject: subjectCode,
          type: question.type,
          question: question.question,
          answer: question.answer,
          hint: question.hint || null,
          explanation: question.explanation || null,
          keywords: question.keywords || [],
        })
        .select('id')
        .single();
      if (qErr) {
        console.error('[wrong_answers] question insert 실패', qErr);
        return;
      }

      const { error: waErr } = await supabase.from('wrong_answers').upsert(
        {
          user_id: user.id,
          question_id: q.id,
          my_answer: myAnswer,
          reviewed: false,
        },
        { onConflict: 'user_id,question_id' }
      );
      if (waErr) {
        console.error('[wrong_answers] upsert 실패', waErr);
        return;
      }

      // 로컬 state에 dbId 매핑
      setItems((prev) =>
        prev.map((w) => (w.id === question.id ? { ...w, dbId: q.id } : w))
      );
    },
    [user]
  );

  const markReviewed = useCallback(
    async (localId) => {
      setItems((prev) =>
        prev.map((w) => (w.id === localId ? { ...w, reviewed: true } : w))
      );
      if (!user) return;
      const target = items.find((w) => w.id === localId);
      if (!target?.dbId) return;
      const { error } = await supabase
        .from('wrong_answers')
        .update({ reviewed: true })
        .eq('user_id', user.id)
        .eq('question_id', target.dbId);
      if (error) console.error('[wrong_answers] markReviewed 실패', error);
    },
    [user, items]
  );

  return { items, addWrong, markReviewed, loading };
}
