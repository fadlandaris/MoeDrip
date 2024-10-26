/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        chilliRed: "#df3811",
        lightBlack: "#1e1e1e",
        lightgray: "#f6f6f6",
        text: "#858585"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        vt323: ["VT323", "monospace"],
        silkscreen: ["Silkscreen", "cursive"],
        dotgothic: ["DotGothic16", "sans-serif"],
        rubikpixels: ["Rubik Pixels", "sans-serif"],
        courier: ["Courier New", "monospace"], 
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
