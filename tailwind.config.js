/** @type {import('tailwindcss').Config} */
// https://github.com/tailwindlabs/tailwindcss/pull/7327#issuecomment-1203221845
module.exports = {
  content: [],
  theme: {
    extend: {
      boxShadow: {
        'brutal': '4px 4px 0px 4px #0C0C0F',
        'brutal-sm': '2px 2px 0px 2px #0C0C0F',
      },
      color: {
        // 'green': '#33FF8F',
        'green': '#62C0A5',
        'pink': '#FF6197',
        'black': '#0C0C0F'
      },
      fontFamily: {
        'sans': ['Syne']
      },
      fontWeight: {
        'normal': 700
      }
    }
  },
  plugins: [],
}
