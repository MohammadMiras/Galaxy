const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      'xs': '360px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        Template: {
          color1: "#1c2536",
          color2: "#5f6774",
          color3: "#6366f1"
        }
      },
    },
    plugins: [
      'postcss-nesting',
    ]
    ,
    important: true
  }
}