/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'quicksand' : ['Quicksand', 'sans-serif'],
        'Tilt' : ['Tilt Warp', 'cursive']
      }
    },
  },
  plugins: [require("daisyui")],
}
