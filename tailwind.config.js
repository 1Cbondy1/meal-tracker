// JSDoc type hint used by VSCode for autocomplete, intelliSense, and type-checking
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender100: '#F1F5FE',
        lavender200: '#C2C0FA',
        lavender300: '#8582DD',
        white: '#FFFFFF',
        midnight100: '#F5F6F4',
        midnight200: '#C6C5C5',
        midnight300: '#6C757D',
        midnight400: '#2E2F39',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}