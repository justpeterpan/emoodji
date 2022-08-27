/** @type {import('tailwindcss').Config} */
// https://github.com/tailwindlabs/tailwindcss/pull/7327#issuecomment-1203221845
module.exports = {
  content: [],
  theme: {
    colors: {
      'white': '#ffffff',
      'gray': '#383838',
      'green': '#14C280',
      'green-light': '#C2FFDE',
      'pink': '#FF6197',
      'black': '#0C0C0F'
    },
    extend: {
      boxShadow: {
        'brutal': '4px 4px 0px 4px #0C0C0F',
        'brutal-sm': '2px 2px 0px 2px #0C0C0F'
      },
      fontFamily: {
        'sans': ['Syne']
      },
      fontWeight: {
        'normal': 700
      }
    }
  },
  plugins: []
}
