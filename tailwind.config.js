/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgGray': '#ebebeb',
        'buttonColor': '#efedee',
        'resultColor': '#1b2a36',
        'countsBeingProcessedColor': '#b7b8ba',
        'equalColor': '#ed802e',
        'numbersColor': '#a7a7a7'
      },
      fontFamily: {
        fontUsed: ['montserrat']
      }
    },
  },
  plugins: [],
}