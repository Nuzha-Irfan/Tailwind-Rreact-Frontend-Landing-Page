module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_A400: "#3a76f0",
        red_501: "#ea4335",
        light_blue_A200: "#36c5f0",
        blue_A200: "#4285f4",
        red_500: "#eb4335",
        green_600: "#34a853",
        red_50: "#ffe5f9",
        teal_400: "#2eb67d",
        black_900: "#000000",
        yellow_800: "#ecb22e",
        pink_600: "#e01e5a",
        deep_purple_A700: "#6515dd",
        red_A700: "#ff0302",
        yellow_100: "#ffe9ca",
        gray_600: "#7f7f7f",
        gray_601: "#7a7a7a",
        amber_500: "#fbbc05",
        blue_800: "#0a66c2",
        gray_800: "#4c4c4c",
        amber_501: "#fbbc04",
        gray_900: "#161616",
        black_900_0c: "#0000000c",
        blue_50: "#dbecff",
        bluegray_900: "#333333",
        indigo_300: "#7289da",
        indigo_A400: "#4353ff",
        blue_300: "#55acee",
        white_A701: "#fefefe",
        white_A700: "#ffffff",
      },
      fontFamily: { inter: "Inter" },
      boxShadow: { bs: "0px 4px  30px 0px #0000000c" },
      
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    ],

};
