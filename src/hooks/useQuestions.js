import { useCallback, useEffect, useMemo, useState } from 'react';
import { supabase } from '../lib/supabase';
import { codeToLabel } from '../lib/subjects';
import { SAMPLE_QUESTIONS } from '../data/sampleQuestions';

// 로그인 사용자: SAMPLE + DB(본인 + 공유 풀)를 함께 노출.
// 비로그인: SAMPLE만.
// 각 아이템은 source 필드를 가짐 ('sample' | 'personal' | 'shared').

export function useQuestions(user) {
  const [dbItems, setDbItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const reload = useCallback(async () => {
    if (!user) {
      setDbItems([]);
      return;
    }
    setLoading(true);
    const { data, error } = await supabase
      .from('questions')
      .select('id, subject, type, question, answer, hint, explanation, keywords, source, year, round, user_id')
      .order('created_at', { ascending: false });
    setLoading(false);
    if (error) {
      console.error('[questions load]', error);
      return;
    }
    setDbItems(
      (data || []).map((q) => ({
        ...q,
        subject: codeToLabel(q.subject),
      }))
    );
  }, [user]);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      if (cancelled) return;
      await reload();
    }
    run();
    return () => { cancelled = true; };
  }, [reload]);

  const items = useMemo(() => {
    if (!user) return SAMPLE_QUESTIONS;
    return [...SAMPLE_QUESTIONS, ...dbItems];
  }, [user, dbItems]);

  return { items, dbItems, reload, loading };
}
