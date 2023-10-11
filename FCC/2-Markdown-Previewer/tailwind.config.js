/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backColor: "#404040",
        txtColor: "#9FA3FF",
        txtColorHover: "#3A3E9A",
      },
      fontFamily: {
        K2D: ["K2D", "sans-serif"],
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("@tailwindcss/typography"),
  ],
};
