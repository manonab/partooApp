/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      m: "17px",
      l: "20px",
      xlarge: "25px",
      xl: "30px",
      xxl: "40px",
    },
    colors: {
      observatory: "#049372",
      oceanGreen: "#4DAF7C",
      greenBamboo: "#006442",
      jungleGreen: "#2ABB9B",
      whiter: "#fff",
      slytherin: {
        darkGreen: "#1a472a",
        green: "#2a623d",
        darkSilver: "#5d5d5d",
        lightSilver: "#aaaaaa",
      },
      griffindor: {
        darkRed: "#740001",
        red: "#ae0001",
        yellow: "#eeba30",
        gold: "#d3a625",
      },
      ravenclaw: {
        darkBlue: "#0e1a40",
        blue: "#222f5b",
        grayLady: "#bebebe",
        gold: "#946b2d",
      },
      hufflepuff: {
        canary: "#eeb939",
        lightCanary: "#f0e75e",
        lightBrown: "#726255",
        darkBrown: "#946b2d",
      },
    },
    extend: {},
  },
  plugins: [],
};
