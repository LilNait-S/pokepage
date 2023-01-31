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
      poison : "#FCD3FF",
      grass : "#C7EFDE",
      fire : "#FBD6BC",
      flying : "#FBFBFB",
      water : "#C5E1F5",
      bug : "#DBF5C5",
      normal : "#EFE5DD",
      electric : "#FAF3B8",
      ground : "#E3CBA7",
      fairy : "#FFDFEE",
      fighting : "#E7D5B9",
      ghost : "#E2D2F6",
      ice : "#ABFFF5",
      steel : "#CFCFCF",
      dark : "#A89388",
      dragon : "#D2C3FC",
      psychic : "#FBD6F3",
      rock : "#D6B89D",
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
