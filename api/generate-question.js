// Vercel Serverless Function — Gemini 문제 생성 + Supabase 저장
// V2: PDF 제거, NCS 토픽 기반 문제 생성.
// 로그인 사용자의 JWT를 Authorization 헤더로 받아 questions 테이블에 INSERT.
// source='shared'는 ADMIN_EMAILS에 포함된 이메일만 허용.

import { WebSocket } from 'ws';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { createClient } from '@supabase/supabase-js';
import {
  QUESTION_GENERATE_SYSTEM,
  buildTopicQuestionUserPrompt,
  AI_MODEL,
  AI_MAX_OUTPUT_TOKENS,
  SUBJECT_CODES,
  QUESTION_TYPES,
} from '../src/lib/aiPrompts.js';
import { getTopicById } from '../src/data/topics.js';

// Node.js 20은 native WebSocket 없음 → ws 폴리필
globalThis.WebSocket = WebSocket;

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || '')
  .split(',')
  .map((s) => s.trim().toLowerCase())
  .filter(Boolean);

function tryParseQuestionJson(raw) {
  const trimmed = raw.trim().replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();
  const obj = JSON.parse(trimmed);
  // subject: AI가 enum 외 값을 반환하면 null로 fallback (V2에서는 nullable)
  if (obj.subject && !SUBJECT_CODES.includes(obj.subject)) {
    obj.subject = null;
  }
  // type: 유효하지 않으면 기본값으로 fallback
  if (!QUESTION_TYPES.includes(obj.type)) {
    obj.type = '단답형';
  }
  if (!obj.question || !obj.answer) {
    throw new Error('question 또는 answer가 비어 있습니다.');
  }
  obj.keywords = Array.isArray(obj.keywords) ? obj.keywords : [];
  return obj;
}

async function getAuthUser(req) {
  const authHeader = req.headers.authorization || req.headers.Authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
  if (!token) return null;
  const url = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
  const anon = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;
  if (!url || !anon) return null;
  const supa = createClient(url, anon);
  const { data, error } = await supa.auth.getUser(token);
  if (error) return null;
  return { user: data.user, token };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'GEMINI_API_KEY 환경변수가 설정되지 않았습니다.' });
    return;
  }

  const { topicId, source = 'personal' } = req.body || {};
  if (!topicId || typeof topicId !== 'string') {
    res.status(400).json({ error: 'topicId(string)는 필수입니다. 예: "7-22"' });
    return;
  }
  if (!['personal', 'shared'].includes(source)) {
    res.status(400).json({ error: 'source는 personal 또는 shared여야 합니다.' });
    return;
  }

  const topic = getTopicById(topicId);
  if (!topic) {
    res.status(400).json({ error: `topicId '${topicId}'를 찾을 수 없습니다.` });
    return;
  }

  const auth = await getAuthUser(req);
  if (!auth) {
    res.status(401).json({ error: '로그인이 필요합니다.' });
    return;
  }

  if (source === 'shared') {
    const email = (auth.user.email || '').toLowerCase();
    if (!ADMIN_EMAILS.includes(email)) {
      res.status(403).json({ error: '공유 풀에 추가할 권한이 없어요.' });
      return;
    }
  }

  // Gemini 호출
  let question;
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: AI_MODEL,
      systemInstruction: QUESTION_GENERATE_SYSTEM,
      generationConfig: {
        maxOutputTokens: AI_MAX_OUTPUT_TOKENS,
        temperature: 0.8,
        responseMimeType: 'application/json',
      },
    });
    const userPrompt = buildTopicQuestionUserPrompt(topic.name, topic.chapterName);
    const result = await model.generateContent(userPrompt);
    question = tryParseQuestionJson(result.response.text());
  } catch (e) {
    console.error('[generate-question] Gemini 오류:', e?.message);
    res.status(500).json({ error: `문제 생성 오류: ${e?.message || '알 수 없는 오류'}` });
    return;
  }

  // Supabase INSERT (유저 JWT 사용 → RLS 통과)
  const url = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
  const anon = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;
  const supa = createClient(url, anon, {
    global: { headers: { Authorization: `Bearer ${auth.token}` } },
  });
  const insertRow = {
    user_id: auth.user.id,
    subject: question.subject || null,
    type: question.type,
    question: question.question,
    answer: question.answer,
    hint: question.hint || null,
    explanation: question.explanation || null,
    keywords: question.keywords || [],
    source,
    chapter_id: topic.chapterId,
    topic_id: topic.id,
  };
  const { data: inserted, error: insertErr } = await supa
    .from('questions')
    .insert(insertRow)
    .select('id, source, chapter_id, topic_id')
    .single();

  if (insertErr) {
    console.error('[generate-question] DB 오류:', insertErr.message, insertErr.details);
    res.status(500).json({ error: `DB 저장 실패: ${insertErr.message}` });
    return;
  }

  res.status(200).json({ question: { ...question, ...inserted } });
}
