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
    },
  },
  plugins: [require('tw-elements/dist/plugin.cjs')],
  darkMode: 'class',
}
