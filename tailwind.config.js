/** @type {import('tailwindcss').Config} */
export default {
  content: [  
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s ease-in 1s infinite' ,
        'spin-slower': 'spin 6s ease-in 1s infinite reverse',
      }
      
    },
  },
  plugins: [],
}

