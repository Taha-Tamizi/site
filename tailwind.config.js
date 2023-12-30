/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main-bg': '#575757',
        'secondary-bg': '#f3c017',
      },
      screens: {
        '2xl': { max: '1535px' },
        xl: { max: '1467px' },
        lg: { max: '1380px' },
        md: { max: '767px' },
        sm: { max: '490px' },
        xsm: { max: '370px' },
      },
      fontFamily: {
        Yekan: ['Yekan'],
      },
      backgroundImage: {
        'hero-pattern': "url('~@/dist/image/bg.png')",
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin.cjs')],
  darkMode: 'class',
}
