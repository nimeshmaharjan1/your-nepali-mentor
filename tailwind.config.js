module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/features/**/*.{js,ts,jsx,tsx}",
    "./pages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        black: ["Poppins-Black"],
        light: ["Poppins-Light"],
        medium: ["Poppins-Regular"],
        bold: ["Poppins-ExtraBold"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
