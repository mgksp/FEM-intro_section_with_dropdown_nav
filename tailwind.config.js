module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
      },
      colors: {
        almostWhite: "hsl(0, 0%, 98%)",
        mediumGray: "hsl(0, 0%, 41%)",
        almostBlack: "hsl(0, 0%, 8%)",
      },
      borderWidth: {
        1: "1px",
      },
      boxShadow: {
        nav: "0 10px 50px 0px rgba(0, 0, 0, 0.1)",
      },
      gridTemplateRows: {
        heroDescLayout: "minmax(0, 1fr) min-content",
      },
      gridTemplateColumns: {
        mobNavLayout: "1fr 3fr",
      },
    },
  },
  plugins: [],
};
