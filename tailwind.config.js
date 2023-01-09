/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      transitionDelay: {
        '1300': '1300ms',
        '1600': '1600ms',
        '2000': '2000ms',
      }
    }
  },
  plugins: [],
}
