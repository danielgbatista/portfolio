/** @type {import('tailwindcss').Config} */

const { withTV } = require ( 'tailwind-variants/transformer' );
const colors = require("./src/style/colors.json");
const plugin = require("tailwindcss/plugin");

export default withTV({
  content: ["./index.html", "./src/**/*.tsx"],
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("scrollbar", "&::-webkit-scrollbar");
    }),
    plugin(({ addBase }) => {
      addBase({
        "*": {
          scrollbarColor: "#00000063 transparent",
          scrollbarWidth: "thin",
        },
        "*::-webkit-scrollbar": {
          height: "6px",
          width: "6px",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#00000063",
          borderRadius: "10px",
        },
        "*::-webkit-scrollbar-track-piece": {
          backgroundColor: "transparent",
          borderRadius: "10px",
        },
      });
    }),
  ],
  theme: {
    colors,
    keyframes: {
      wave: {
        '0%': { transform: 'rotate(0.0deg)' },
        '10%': { transform: 'rotate(14deg)' },
        '20%': { transform: 'rotate(-8deg)' },
        '30%': { transform: 'rotate(14deg)' },
        '40%': { transform: 'rotate(-4deg)' },
        '50%': { transform: 'rotate(10.0deg)' },
        '60%': { transform: 'rotate(0.0deg)' },
        '100%': { transform: 'rotate(0.0deg)' },
      },
    },
    animation: {
      'waving-hand': 'wave 2s linear infinite',
    },
    fontFamily: {
      sans: ["Jost", "sans-serif"],
      serif: ["Montserrat", "serif"],
    },
    extend: {
      boxShadow: {
        base: "0px 0px 7px 2px rgba(0,0,0,0.2)",
      },
    },
    screens: {
      desktop: "1281px",
      laptop: "1024px",
      mobile: "768px",
    },
  },
});
