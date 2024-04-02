/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: [  
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        blue: "#c7e6f8",
        peach: "#f6aab5",
        lilac: "#ccabd8",
        beige: "#e9dfd8",
        lavender: "#cdd2e7",
        grey: "2e2e2e",
      },
      keyframes: {
        drip: {
          '100%': {marginTop: '90vh',
          transform: 'translateX(-10%)'}
          ,
        },
        ripple: {
          '0%': {opacity: '1'},
          '100%': {    
            width: '600px',
            height: '300px',
            borderWidth: '1px',
            top: '-100px',
            opacity: '0',
          },
        },
        ripple2: {
          '0%': {opacity: '1'},
          '50%': {opacity: '0'},
          '100%': {
            width: '200px',
            height: '100px',
            borderWidth: '1px',
            top: '100px',
            left: '200px'
          },

        }
      },
      animation: {
        'spin-slow': 'spin 5s ease-in 1s infinite' ,
        'spin-slower': 'spin 6s ease-in 1s infinite reverse',
        'drip': 'drip 3s linear infinite',
        'ripple': 'ripple 2s infinite',
        'ripple-2': 'ripple2 2s infinite'
      },
    },
  },
  plugins: [
  ],
}

