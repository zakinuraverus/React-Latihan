/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: { ...colors },
    extend: {},
  },
  plugins: [],
};
