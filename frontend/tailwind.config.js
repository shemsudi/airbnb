const { color } = require("npm");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FF385C",
        blurred: "#6A6A6A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
