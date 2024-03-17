/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightGrey': '#D2D2D2', 
        'grey1': '#6B6B6B',
        'black1': '#252525',
        
      },
    },
  },
  plugins: [],
}


