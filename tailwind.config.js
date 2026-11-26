/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        naturale: {
          blue: '#6B9DD3',
          'blue-dark': '#5285BD',
          'blue-light': '#EEF4FB',
          rose: '#DF9598',
          'rose-band': '#F4E5E6',
          'rose-light': '#FAF0F1',
          marsala: '#B96E75',
          'marsala-dark': '#9E585F',
          stone: '#F7F5F4',
          cream: '#FAF8F7',
          slate: '#222B38',
          muted: '#5C6470',
        },
      },
      boxShadow: {
        'soft': '0 8px 30px -10px rgba(34, 43, 56, 0.07)',
        'glow-blue': '0 10px 26px -8px rgba(107, 157, 211, 0.35)',
        'glow-marsala': '0 10px 26px -8px rgba(185, 110, 117, 0.32)',
      },
    },
  },
  plugins: [],
};
