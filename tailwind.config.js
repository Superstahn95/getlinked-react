/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        clash: ["ClashDisplay", "sans-serif"],
        unica: ["Unica One", "cursive"],
        tommy: ["MADE TOMMY Outline", "sans-serif"],
      },

      colors: {
        pink: "#D434FE",
      },
    },
  },
  plugins: [],
};
