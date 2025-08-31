/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ochi: ['"Ochi"', 'sans-serif'], 
        bebas: ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


