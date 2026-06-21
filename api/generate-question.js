// Vercel Serverless Function — Gemini 문제 재생성 + Supabase 저장
// 로그인 사용자의 JWT를 Authorization 헤더로 받아 questions 테이블에 INSERT.
// source='shared'는 ADMIN_EMAILS에 포함된 이메일만 허용.

import { GoogleGenerativeAI } from '@google/generative-ai';
import { createClient } from '@supabase/supabase-js';
import {
  QUESTION_GENERATE_SYSTEM,
  buildQuestionGenerateUserPrompt,
  AI_MODEL,
  AI_MAX_OUTPUT_TOKENS,
  SUBJECT_CODES,
  QUESTION_TYPES,
} from '../src/lib/aiPrompts.js';

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || '')
  .split(',')
  .map((s) => s.trim().toLowerCase())
  .filter(Boolean);

function tryParseQuestionJson(raw) {
  const trimmed = raw.trim().replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();
  const obj = JSON.parse(trimmed);
  if (!SUBJECT_CODES.includes(obj.subject)) {
    throw new Error(`subject 값이 유효하지 않습니다: ${obj.subject}`);
  }
  if (!QUESTION_TYPES.includes(obj.type)) {
    throw new Error(`type 값이 유효하지 않습니다: ${obj.type}`);
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

  const { pdfExcerpt, source = 'personal', year = null, round = null } = req.body || {};
  if (!pdfExcerpt || typeof pdfExcerpt !== 'string') {
    res.status(400).json({ error: 'pdfExcerpt(string)는 필수입니다.' });
    return;
  }
  if (!['personal', 'shared'].includes(source)) {
    res.status(400).json({ error: 'source는 personal 또는 shared여야 합니다.' });
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
    const userPrompt = buildQuestionGenerateUserPrompt(pdfExcerpt.slice(0, 4000));
    const result = await model.generateContent(userPrompt);
    question = tryParseQuestionJson(result.response.text());
  } catch (e) {
    res.status(500).json({ error: e?.message || '문제 생성 중 오류' });
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
    subject: question.subject,
    type: question.type,
    question: question.question,
    answer: question.answer,
    hint: question.hint || null,
    explanation: question.explanation || null,
    keywords: question.keywords || [],
    source,
    year: year ? Number(year) : null,
    round: round ? Number(round) : null,
  };
  const { data: inserted, error: insertErr } = await supa
    .from('questions')
    .insert(insertRow)
    .select('id, source, year, round')
    .single();

  if (insertErr) {
    res.status(500).json({ error: `DB 저장 실패: ${insertErr.message}` });
    return;
  }

  res.status(200).json({ question: { ...question, ...inserted } });
}
