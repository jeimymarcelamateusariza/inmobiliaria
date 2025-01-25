/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: "#5b92a0",
        primaryDark: "#31788c"
      },
      backgroundImage: {
        'hero-pattern': "url('img/Baner.png')",
        'proyectos': "url('img/Real.jpg')",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },

    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}