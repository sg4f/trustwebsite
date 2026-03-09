/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a192f',
        slate: '#334155',
        gold: '#D4AF37',
        emerald: '#065f46',
        amber: '#b45309',
        sky: '#0ea5e9',
        bglight: '#f8fafc',
        pink: '#fdf2f8'
      }
    },
  },
  plugins: [],
}
