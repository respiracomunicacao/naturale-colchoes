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
          'blue-light': '#EAF2FA',
          rose: '#DF9598',
          'rose-light': '#FDF2F3',
          marsala: '#B96E75',
          'marsala-dark': '#9C565D',
          cream: '#FAF8F8',
          slate: '#1E293B',
        },
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(30, 41, 59, 0.08)',
        'glow-blue': '0 12px 32px -8px rgba(107, 157, 211, 0.35)',
        'glow-marsala': '0 12px 32px -8px rgba(185, 110, 117, 0.35)',
      },
    },
  },
  plugins: [],
};
