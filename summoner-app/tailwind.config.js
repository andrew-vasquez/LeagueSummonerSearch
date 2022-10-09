/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        mainBackground: '#1C1C1F',
        sumLevelBackground:'rgb(32, 45, 55)'
      },
    },
  },
  plugins: [],
}
