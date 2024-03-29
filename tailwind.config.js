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
      borderWidth: {
        3: "3px",
      },
      minHeight: {
        48: "12rem",
        32: "8rem",
        16: "4rem",
      },
      maxHeight: {
        700: "700px",
      },
      maxWidth: {
        175: "250px",
      },
      backgroundColor: {
        gaming: "#333",
        sound: "#ebebeb",
      },
      gridTemplateRows: {
        recap:
          "minmax(min-content, 8rem) minmax(min-content, 2rem) max-content minmax(max-content, 1fr) minmax(min-content, 12rem)",
      },
      keyframes: {
        load: {
          "0%": { transform: "scale(0,1)" },
          "100%": { transform: "scale(1,1)" },
        },
        deload: {
          "0%": { transform: "scale(1,1)" },
          "100%": { transform: "scale(0,1)" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(25%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        barLoadIn: "load 850ms ease-in-out forwards",
        barLoadOut: "100ms deload 400ms ease-out forwards",
        fadeIn: "600ms fadeIn ease-out forwards",
        fadeIn: "600ms fadeIn ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss/colors"), require("autoprefixer")],
  variants: {
    scale: ["hover", "group-hover"],
    scaleX: ["hover", "group-hover"],
    skew: ["group-hover"],
    translate: ["group-hover"],
    fill: ["hover", "group-hover"],
    fontWeight: ["hover", "group-hover"],
    rotate: ["hover", "group-hover"],
    extend: {
      stroke: ["hover", "group-hover"],
      fill: ["hover", "group-hover"],
    },
  },
};
