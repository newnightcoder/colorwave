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
    keyframes: {
      load: {
        "0%": { transform: "scale(0,1)" },
        "100%": { transform: "scale(1,1)" },
      },
      deload: {
        "0%": { transform: "scale(1,1)" },
        "100%": { transform: "scale(0,1)" },
      },
    },
    animation: {
      barLoadIn: "load 850ms ease-in-out",
      barLoadOut: "150ms deload 400ms ease-in forwards",
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
