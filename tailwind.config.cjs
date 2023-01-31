/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      highpink: "#FF0066",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#E0E2E5",
      darkblue: "001220",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      "slate-100": "#f1f5f9",
      "pink-g": "#FF3083",
      "lpink-g": "#F48E9F",
      "footer-gray" : "#1E293B",
      purplep : "#FCD3FF",
      greeng : "#C7EFDE",
    },
    extend: {
      maxHeight: {
        '128' : '44rem',
      },
      maxWidth: {
        'small': '14rem'
      }
    },
  },
  plugins: [],
}
