/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkPink: '#ba4270',
        linkWaterWhite: '#fbfcfe',
        sanJuanBlue: '#36536b',
        mirageBlue: '#1b262f',
        charmPink: '#da6d97',
        lightSanJuanBlue: ' #6c8294',
      },
      dropShadow: {
        primary: '25px 25px 80px rgba(54, 83, 107, 0.300727)',
      },
    },
    maxWidth: {
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/5': '40%',
    },
    fontFamily: {
      sans: ['Public Sans', 'sans-serif'],
      serif: ['DM Serif Display', 'serif'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
