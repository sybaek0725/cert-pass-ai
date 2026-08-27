/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cp: {
          bg:           '#1a1a1a',
          surface:      '#262626',
          hover:        '#2f2f2f',
          border:       '#333333',
          primary:      '#ececec',
          muted:        '#888888',
          faint:        '#666666',
          dimmed:       '#555555',
          accent:       '#cc785c',
          'accent-light': '#e8906f',
          success:      '#4ade80',
          error:        '#f87171',
          warning:      '#fbbf24',
        },
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
