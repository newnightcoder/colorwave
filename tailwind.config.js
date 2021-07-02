module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            img: {
              marginTop: "0",
              marginBottom: "0",
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {
      stroke: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
