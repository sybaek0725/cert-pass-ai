/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cp: {
          bg:           '#ffffff',
          surface:      '#ffffff',
          hover:        '#f7f7f7',
          border:       '#e5e5e5',
          primary:      '#3c3c3c',
          muted:        '#777777',
          faint:        '#afafaf',
          dimmed:       '#cfcfcf',
          accent:       '#46b450',
          'accent-dark':  '#2f9440',
          'accent-light': '#6bd66f',
          brand:        '#cc785c',
          'brand-dark': '#a65f49',
          blue:         '#2e9bf0',
          'blue-dark':  '#1a80cc',
          success:      '#46b450',
          error:        '#ff4b4b',
          warning:      '#ffc800',
        },
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
        display: ['Baloo 2', 'Noto Sans KR', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
