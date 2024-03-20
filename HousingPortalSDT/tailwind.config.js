/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightgray': '#D2D2D2',
        'lightgray2': '#767676',
        'grey1': '#6B6B6B',
        'black1': '#252525',
        
      },
    },
  },
  plugins: [],
}


