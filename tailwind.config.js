/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'claude-bg': '#1a1a1a',
        'claude-surface': '#262626',
        'claude-border': '#333333',
        'claude-text': '#ececec',
        'claude-muted': '#888888',
        'claude-accent': '#cc785c',
        'claude-accent-light': '#e8906f',
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
