/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BlueBG_Drum: "#6096B4",
        Bluelight_Drum: "#93BFCF",
        Bluelightlight_Drum: "#BDCDD6",
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
