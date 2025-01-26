/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,css}"],
  theme: {
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },

    extend: {
      colors: {
        primary: "#3A7C7C",
        secondary: "#B0B0B0",
        tertiary: "#FFFFFF",
      },

      fontFamily: {
        primary: ["Poppins", "serif"],
      },
    },
  },

  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
