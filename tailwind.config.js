/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'red': {
          50: '#fff1f1',
          100: '#ffe1e1',
          200: '#ffc7c7',
          300: '#ffa0a0',
          400: '#ff6b6b',
          500: '#ff3b3b',
          600: '#ff0000',
          700: '#d70000',
          800: '#b10000',
          900: '#920000',
        }
      },
      animation: {
        'glow': 'glow 2s infinite',
      },
    },
  },
  plugins: [],
};