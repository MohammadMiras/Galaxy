/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './Components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'xs': '360px',
      'xxl': '1536px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        Template: {
          color1: '#666565',
          color2: '#202020',
          color3: '#f8f8f8',
          color4: '#611bdd',
          color5: '#5e87eb',
          color6: '#611bdd61'
        }
      }
    },
    fontFamily: {
      iransans: ['iransans'],
    },
  },
  plugins: [],
  important: true
}
