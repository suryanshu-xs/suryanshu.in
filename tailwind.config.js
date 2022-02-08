const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        'header-black-rgba':'rgba(0, 0, 0, 0.60)',
        'button-background':'rgba(196, 196, 196, 0.28)',
        'button-background-hover':'rgba(196, 196, 196, 0.35)',
        'button-background-active':'rgba(196, 196, 196, 0.5)'

      },
      fontFamily:{
        Poppins:'Poppins, sans-serif',
        "Josefin": ["Josefin Sans", ...defaultTheme.fontFamily.sans],
        "Poppins": ["Poppins", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
