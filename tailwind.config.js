/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/index.{html,js}",
    "./src/components/**.{html,js}",
    "./src/components/**/**.{html,js}",
    "./src/pages/**.{html,js}",
  ],
  theme: {
    screens: {
      sm: { max: "490px" },
      md: { min: "491px", max: "768px" },
      lg: { max: "1024px" },
      xl: { min: "1025px", max: "1280px" },
    },
    extend: {},
  },
  plugins: [],
};
