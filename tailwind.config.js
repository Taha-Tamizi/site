/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main-bg': '#4b5563',
        'secondary-bg': '#eab308',
      },
      screens: {
        '2xl': { max: '1535px' },
        xl: { max: '1279px' },
        lg: { max: '1023px' },
        md: { max: '767px' },
        sm: { max: '490px' },
        xsm: { max: '370px' },
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin.cjs')],
  darkMode: 'class',
}
