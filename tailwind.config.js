/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      skew: {
        90: "45deg",
        180: "90deg",
      },
      objectPosition: {
        myPosition1: "0% 35%",
        myPosition0: "0%, 50%",
      },
      gridTemplateColumns: {
        myLogin: "1fr 2fr",
        myCart: "4fr 1fr 3fr 1fr 1fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
