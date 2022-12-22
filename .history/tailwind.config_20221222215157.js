/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DDF0FC",
        secondary: "#2B3467",
        ...defaultTheme.colors,
      },
      fontFamily: {
        dosis: ["Dosis", "sans-serif"],
        pr
        ...defaultTheme.fontFamily,
      },
    },
  },
  plugins: [],
};
