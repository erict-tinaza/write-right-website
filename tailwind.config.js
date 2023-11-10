/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./*html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        stone: colors.warmGray,
        sky: colors.lightBlue,
        neutral: colors.trueGray,
        gray: colors.coolGray,
        slate: colors.blueGray,
    }
    },
  },
  plugins: [require("flowbite/plugin")],
}

