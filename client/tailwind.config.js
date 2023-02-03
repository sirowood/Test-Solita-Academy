/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{ts,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'solita-400': '#3D3D3D',
        'solita-500': '#282828',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '50%': { opacity: 100 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 5s ease-in-out 5s infinite',
      },
    },
  },
  plugins: [],
};
