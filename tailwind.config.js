/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        back : '.src/assets/Background.jpg',
      },
      fontFamily : {
        Fanta : ['Rubik', 'sans-serif'],
        logo: ['Creepster', 'system-ui'],
      }
    },
  },
  plugins: [],
}