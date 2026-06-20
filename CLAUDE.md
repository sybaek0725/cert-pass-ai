# CertPass AI — CLAUDE.md

## 프로젝트 개요
- **풀 네임**: Certificate Pass AI
- **서비스명**: CertPass AI
- **의미**: Certificate(자격증) + Pass(합격) + AI

정보처리기사 실기 준비생을 위한 AI 학습 앱.
기출 PDF 업로드 → AI 유사 문제 재생성 → 즉시 해설 → 오답노트

- **GitHub**: `cert-pass-ai`
- **배포**: Vercel + 네이트 앱
- **목표**: 3일 내 완성 (2026-06-18 ~ 2026-06-20)

---

## 기술 스택

| 레이어 | 기술 |
|---|---|
| Frontend | React 18 + Vite 5 |
| Styling | Tailwind CSS (Claude UI 다크 테마) |
| PDF 파싱 | pdf.js (클라이언트 사이드, 서버 저장 없음) |
| AI | Claude API (claude-sonnet-4-6) |
| DB | Supabase (무료 티어, Seoul 리전) |
| 인증 | Supabase Auth (Google 소셜 로그인) |
| 배포 | Vercel |
| 태스크 관리 | Notion (MCP 연동) |

---

## 디렉토리 구조

```
cert-pass-ai/
├── src/
│   ├── components/
│   │   ├── PdfUploader.jsx
│   │   ├── QuestionCard.jsx
│   │   ├── AnswerInput.jsx
│   │   ├── ExplanationPanel.jsx
│   │   ├── WrongNoteList.jsx
│   │   ├── ShareCard.jsx
│   │   └── SubjectFilter.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Upload.jsx
│   │   ├── Study.jsx
│   │   ├── WrongNote.jsx
│   │   └── Result.jsx
│   ├── hooks/
│   │   ├── usePdfParser.js
│   │   ├── useClaudeAI.js
│   │   └── useSupabase.js
│   ├── lib/
│   │   ├── supabase.js
│   │   ├── claudePrompts.js
│   │   └── pdfParser.js
│   └── App.jsx          ← CertPassAI.jsx 내용 여기에
├── .env                 ← gitignore 필수
├── .env.example
├── .gitignore
├── CLAUDE.md            ← 이 파일
├── 기획.md
├── 설계.md
├── cdn.md
└── 보안체크리스트.md
```

---

## 환경변수 (.env)

```
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJxxx...
# Claude API Key는 Artifact 환경에서 불필요
# 직접 배포 시에만: VITE_ANTHROPIC_API_KEY=sk-ant-xxx
```

⚠️ `.env`는 절대 커밋하지 말 것. `service_role` 키는 프론트에 절대 금지.

---

## 디자인 시스템 (Claude UI 다크 테마)

```css
--bg-primary: #1a1a1a
--bg-surface: #262626
--bg-hover: #2f2f2f
--border: #333333
--text-primary: #ececec
--text-secondary: #aaaaaa
--accent: #cc785c
--accent-hover: #e8906f
--success: #4ade80
--error: #f87171
--warning: #fbbf24
```

---

## Supabase 스키마 (설계.md 참고)

주요 테이블: `questions`, `study_sessions`, `wrong_answers`
모든 테이블 RLS 활성화 필수.

---

## Claude API 사용 규칙

- 모델: `claude-sonnet-4-6`
- max_tokens: 1000
- 문제 재생성: JSON 형태로만 응답 받기
- 해설: 마크다운 형태
- PDF에서 추출한 텍스트는 절대 그대로 저장/출력 금지 (저작권) → AI가 완전히 새로운 문제로 재생성

---

## 과목 구성 (정처기 실기)

1. 소프트웨어 설계
2. 소프트웨어 개발
3. 데이터베이스
4. 프로그래밍 언어 (C, Java, Python)
5. 정보시스템 구축관리

---

## 개발 우선순위

```
🔥 긴급 (없으면 앱 동작 안 함)
  - PDF 파싱 → 문제 재생성
  - 문제 풀기 UI
  - AI 해설 연동

⚡ 높음 (핵심 UX)
  - 오답노트 저장
  - 공유 카드 (바이럴 핵심)
  - 모바일 반응형

📌 보통 (있으면 좋음)
  - 소셜 로그인
  - 통계 차트
  - 타이머 모드
```

---

## 바이럴 전략

- 타겟 채널: 에브리타임, 정처기 오픈카톡, 커리어리, 디스콰이엇
- 핵심 훅: "AI가 내 기출 PDF 분석해서 유사 문제 만들어줌"
- 공유 장치: 결과 카드 이미지 → SNS 인증샷 유도

---

## 태스크 관리

Notion 연동됨. 태스크 상태 변경 시 Claude에게 요청:
- "OOO 태스크 Done으로 바꿔줘"
- "오늘 완료한 태스크 목록 보여줘"
- "내일 할 태스크 뭐야?"

---

## 🔄 공통 변경 시 자동 연쇄 업데이트 규칙

아래 항목이 변경되면, 명시적으로 요청하지 않아도 연관된 모든 파일과 Notion을 함께 업데이트한다.

### 프로젝트명 / 앱 이름 변경 시
→ 자동 업데이트 대상:
- `CLAUDE.md` (이 파일)
- `기획.md`
- `설계.md`
- `cdn.md`
- `보안체크리스트.md`
- `사용자가이드.md`
- `CertPassAI.jsx` 내 타이틀/브랜딩 문자열
- Notion 프로젝트 홈 페이지 제목 및 테이블 내 서비스명

### 기술 스택 변경 시 (예: Supabase → Firebase, Tailwind → styled-components)
→ 자동 업데이트 대상:
- `CLAUDE.md` 기술 스택 테이블
- `설계.md` 아키텍처 및 스택 섹션
- `cdn.md` 패키지 목록 및 CDN 태그
- `보안체크리스트.md` 관련 항목
- Notion 프로젝트 홈 개요 테이블

### 디자인 시스템 (색상/폰트) 변경 시
→ 자동 업데이트 대상:
- `CLAUDE.md` 디자인 시스템 섹션
- `cdn.md` Tailwind config 색상 토큰
- `CertPassAI.jsx` 인라인 스타일 색상값
- `기획.md` 디자인 관련 언급

### Supabase 스키마 변경 시 (테이블 추가/컬럼 수정)
→ 자동 업데이트 대상:
- `설계.md` Supabase 스키마 SQL 섹션
- `CLAUDE.md` Supabase 스키마 섹션
- Notion 태스크 중 DB 관련 항목 메모

### 환경변수 추가/변경 시
→ 자동 업데이트 대상:
- `CLAUDE.md` 환경변수 섹션
- `설계.md` 환경변수 섹션
- `.env.example` 파일

### 사용자 플로우 / UX 변경 시 (화면 구성, 기능 추가/삭제)
→ 자동 업데이트 대상:
- `사용자가이드.md` 관련 섹션
- `기획.md` 화면 구성 및 사용자 플로우 섹션
- `CertPassAI.jsx` 관련 컴포넌트

### 바이럴 전략 / 타겟 채널 변경 시
→ 자동 업데이트 대상:
- `CLAUDE.md` 바이럴 전략 섹션
- `기획.md` 바이럴 전략 섹션
- Notion 배포 관련 태스크 메모

### Notion 태스크 상태 변경 시
→ 자동 업데이트 대상:
- Notion MCP를 통해 해당 태스크 상태 즉시 반영
- 완료된 태스크가 있으면 다음 태스크 상태를 🟡 In Progress로 변경

### 규칙 요약
```
어떤 공통 값이 바뀌면
  → 이 파일(CLAUDE.md)을 먼저 업데이트
  → 위 매핑 테이블 기준으로 연관 파일 전부 업데이트
  → Notion 관련 내용도 MCP로 동기화
  → 완료 후 "OOO 변경으로 인해 [파일목록] 업데이트했습니다" 보고
```

---

---

## 📡 Notion 동기화 원칙 (필수)

**로컬 .md 문서를 수정하면, 반드시 대응하는 Notion 페이지도 함께 업데이트한다.**

### 로컬 문서 ↔ Notion 페이지 매핑

| 로컬 파일 | Notion 페이지 위치 |
|---|---|
| `기획.md` | CertPass AI > 📄 기획 & 설계 > 📝 기획서 |
| `설계.md` | CertPass AI > 📄 기획 & 설계 > 🔧 기술 설계서 |
| `사용자가이드.md` | CertPass AI > 📄 기획 & 설계 > 📱 사용자 가이드 |
| `브랜치전략.md` | CertPass AI > ⚙️ 개발 가이드 > 📐 브랜치 & 버전 전략 |
| `보안체크리스트.md` | CertPass AI > ⚙️ 개발 가이드 > 🔒 보안 체크리스트 |
| `cdn.md` | CertPass AI > ⚙️ 개발 가이드 > 📦 CDN & 패키지 |
| `CLAUDE.md` | (로컬 전용 — Notion 미반영) |

### 공통 가이드 (개발 허브)
| 내용 | Notion 페이지 |
|---|---|
| 브랜치/버전 전략 (공통) | 🏠 개발 허브 > 📐 브랜치 & 버전 전략 |
| 보안 체크리스트 (공통) | 🏠 개발 허브 > 🔒 보안 체크리스트 |
| 디자인 시스템 (공통) | 🏠 개발 허브 > 🎨 디자인 시스템 원칙 |
| 태스크 작성 원칙 (공통) | 🏠 개발 허브 > 📋 Notion 태스크 작성 원칙 |

### 동기화 규칙
```
로컬 .md 수정 시
  → 매핑표에서 대응하는 Notion 페이지 찾기
  → 해당 Notion 페이지도 같은 내용으로 업데이트
  → 프로젝트 전용 내용은 프로젝트 허브에
  → 공통 원칙은 개발 허브에
  → 완료 후 "로컬 + Notion 동기화 완료" 보고
```

### Notion 구조 (Single Source 참고)
```
🏠 개발 허브 (공통 가이드 모음)
🎯 CertPass AI (프로젝트 허브)
  ├── 📄 기획 & 설계
  ├── ⚙️ 개발 가이드
  ├── 🚀 배포 & 운영
  └── 📋 개발 태스크 DB
```

## 📖 Notion 완전 자급자족 원칙

**Notion만 보고도 아무것도 모르는 사람이 처음부터 끝까지 혼자 진행할 수 있어야 한다.**

### 태스크 작성 기준
모든 태스크는 아래 기준을 반드시 충족해야 한다:

1. **태스크명** — "무엇을 하는가" 한눈에 파악 가능
2. **메모** — 아래 항목 포함:
   - 왜 필요한지 (목적)
   - 어디서 하는지 (URL, 경로, 위치)
   - 어떻게 하는지 (단계별 순서, 실행 명령어 포함)
   - 완료 기준 (뭘 보면 됐다고 알 수 있는지)
   - 주의사항 (실수하기 쉬운 것, 보안 관련)

### 태스크 메모 템플릿
```
📌 목적
[이 작업이 왜 필요한지 한 줄 설명]

🔗 위치
[URL 또는 파일 경로]

📋 단계
1. [첫 번째 단계]
2. [두 번째 단계]
3. ...

✅ 완료 기준
[뭘 보면 완료된 건지]

⚠️ 주의사항
[실수하기 쉬운 것, 보안 관련 등]
```

### Notion 업데이트 시 준수사항
- 태스크 추가/수정 시 위 템플릿 기준으로 메모 작성
- 외부 문서(설계.md 등) 참고 필요한 경우 "설계.md의 OOO 섹션 참고" 명시
- 명령어는 복붙 가능하도록 정확하게 작성
- 약어/전문용어 사용 시 괄호로 풀어쓰기 (예: RLS(Row Level Security))

---

---

## 브랜치 전략 (브랜치전략.md 참고)

```
main ← develop ← feat/[번호]-[설명]-[MMDD]
```

### 브랜치 네이밍
```bash
feat/CERT-14-pdf-parser      # 새 기능 (CERT-N = Notion 태스크 고유번호)
fix/CERT-15-parse-error      # 버그 수정
chore/CERT-4-env-setup       # 설정/패키지
style/CERT-22-ui-polish      # UI 스타일
docs/CERT-8-claude-md        # 문서
hotfix/CERT-24-api-key       # 긴급 수정
```

### 작업 순서
```bash
git checkout develop && git pull           # 1. develop 최신화
git checkout -b feat/CERT-N-설명           # 2. Notion ID 기반 브랜치 생성
git commit -m "feat: 구현 내용 한국어로"    # 3. 커밋
git push origin feat/CERT-N-설명           # 4. PR → develop
# 모든 태스크 완료 후: develop → main 머지 → Vercel 자동 배포
```

### 버전 태그
```bash
git tag -a v1.0.0 -m "feat: MVP 배포"
git push origin v1.0.0
```

### 연쇄 업데이트
- 브랜치 규칙 변경 시 → `브랜치전략.md` + `CLAUDE.md` 동시 업데이트
- Notion 태스크 추가 시 → `브랜치전략.md` 매핑표에 브랜치명 추가


## 주의사항

- `pdf.js` workerSrc 설정 필수 (cdn.md 참고)
- Tailwind 커스텀 색상은 `tailwind.config.js`에 정의
- 빌드 후 `grep -r "sk-ant-" ./dist` 로 키 노출 여부 확인
- 네이트 앱 심사 시간 고려 → Day 3 저녁에 미리 제출
