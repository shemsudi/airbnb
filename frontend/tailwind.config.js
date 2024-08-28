const { color } = require("npm");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xxs: "0.6rem",
        xxl: "0.6rem",
        xxy: "0.8rem",
      },

      colors: {
        primary: "#FF385C",
        blurred: "#6A6A6A",
      },
      fontFamily: {
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
