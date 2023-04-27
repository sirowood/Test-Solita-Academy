/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = withMT({
  content: ['./src/**/*.{ts,tsx,html}'],
  theme: {
    screens: { ...defaultTheme.screens },
    fontFamily: { ...defaultTheme.fontFamily },
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
        fadeInFromBottom: {
          '0%': { opacity: 0, transform: 'translateY(100%)' },
          '100%': { opacity: 100, transform: 'translateY(0)' },
        },
        widthGrow: {
          '0%': { width: 0, paddingLeft: 0, paddingRight: 0 },
          '100%': { width: 80, paddingLeft: 8, paddingRight: 8 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 5s ease-in-out 5s infinite',
        fadeInFromBottom: 'fadeInFromBottom .5s ease-in-out forwards',
        widthGrow: 'widthGrow .2s ease-in-out forwards',
        widthShrink: 'widthGrow .2s ease-in-out reverse forwards',
      },
      gridTemplateColumns: {
        'auto-fill-sm': 'repeat(auto-fill, minmax(300px, 1fr))',
      },
    },
  },
  plugins: [],
});
