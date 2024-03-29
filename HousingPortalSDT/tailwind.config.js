/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white1': '#F6F6F6',
        'lightgray': '#D2D2D2',
        'lightgray1': '#E4E4E4',
        'lightgray2': '#767676',
        'grey1': '#6B6B6B',
        'grey2': '#9C9C9C',
        'grey3': '#C0C0C0',
        'black1': '#252525',

      },
    },
  },
  plugins: [],
}


