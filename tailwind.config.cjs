/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "yellow": "#FFE800",
        "green": "#00F087",
        "darkgrey": "#191919",
        "grey":"#262626",
      },
      screens: {
        "lg": {"min":"1120px"}
      },
      backgroundImage: {
        "promobg": "url('./src/assets/Main/gg-bg.png')",
        "appsbg": "url('./src/assets/Main/appsbg.jfif')"
      },
    },
  },
  plugins: [],
}
