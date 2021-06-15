// npx tailwindcss-cli@latest build ./src/tailwind.css -o ./styles.css

module.exports = {
  purge: {
    enabled: false,
    content: ["./index.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          red: "hsl(0, 100%, 68%)",
          "dark-blue": "hsl(230, 29%, 20%)",
          "light-blue": "hsl(207, 33%, 95%)",
          "grey-blue": "hsl(231, 7%, 65%)",
          "dark-grey-blue": "hsl(230, 11%, 40%)",
        },
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        "barlow-condensed": ["'Barlow Condensed'", "sans-serif"],
      },
      borderRadius: {
        "very-lg": "5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
