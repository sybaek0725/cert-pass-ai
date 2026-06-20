# CDN 의존성 목록

## HTML head에 추가할 CDN 태그

```html
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- pdf.js (PDF 파싱) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script>
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
</script>

<!-- Supabase JS -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

<!-- html2canvas (공유 카드 이미지 생성) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>

<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>

<!-- Google Fonts (Pretendard 대체: Noto Sans KR) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## Vite + npm 프로젝트 기준 패키지

```bash
npm create vite@latest cert-pass-ai -- --template react
cd cert-pass-ai
npm install

# 핵심 패키지
npm install @supabase/supabase-js   # Supabase 클라이언트
npm install pdfjs-dist               # PDF 파싱
npm install tailwindcss autoprefixer postcss  # 스타일링
npm install html2canvas              # 공유 카드 캡처
npm install lucide-react             # 아이콘
npm install @anthropic-ai/sdk        # Claude API (직접 배포 시)
npm install react-router-dom         # 라우팅
npm install react-markdown           # AI 해설 마크다운 렌더링

# 개발 도구
npm install -D @vitejs/plugin-react
```

---

## 버전 고정 (2025년 6월 기준 안정 버전)

| 패키지 | 버전 |
|---|---|
| react | 18.x |
| vite | 5.x |
| @supabase/supabase-js | 2.x |
| pdfjs-dist | 3.11.x |
| tailwindcss | 3.x |
| react-router-dom | 6.x |
| html2canvas | 1.4.x |
| lucide-react | 0.383.x |

---

## Tailwind 설정 (tailwind.config.js)

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Claude UI 색상 시스템
        'claude-bg': '#1a1a1a',        // 배경
        'claude-surface': '#262626',   // 카드/패널
        'claude-border': '#333333',    // 테두리
        'claude-text': '#ececec',      // 기본 텍스트
        'claude-muted': '#888888',     // 보조 텍스트
        'claude-accent': '#cc785c',    // 강조 (주황빛 브라운)
        'claude-accent-light': '#e8906f', // 강조 밝은 버전
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

---

## 참고: Claude UI 색상 토큰 정리

```css
:root {
  --bg-primary: #1a1a1a;      /* 최상위 배경 */
  --bg-surface: #262626;      /* 카드, 사이드바 */
  --bg-hover: #2f2f2f;        /* hover 상태 */
  --border: #333333;          /* 테두리 */
  --text-primary: #ececec;    /* 주요 텍스트 */
  --text-secondary: #aaaaaa;  /* 보조 텍스트 */
  --text-muted: #666666;      /* 비활성 텍스트 */
  --accent: #cc785c;          /* 포인트 색상 */
  --accent-hover: #e8906f;    /* 포인트 hover */
  --success: #4ade80;         /* 정답 */
  --error: #f87171;           /* 오답 */
  --warning: #fbbf24;         /* 힌트 */
}
```
