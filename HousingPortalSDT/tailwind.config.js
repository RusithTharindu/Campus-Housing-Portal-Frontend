import tailwindcss from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightGrey': '#D9D9D9', 
        'black1': '#252525',
      },
    },
  },
  plugins: [],
}


