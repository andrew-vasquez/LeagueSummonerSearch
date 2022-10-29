/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    
    extend: {
      screens:{
        '3xl':'2000px'
      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        mainBackground: "#1C1C1F",
        sumLevelBackground: "rgb(32, 45, 55)",
        bgWhite: "#319795",
      },
    },
  },
  plugins: [],
};
