/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#003847",
          300: "#51a0b5",
          400: "#5db6ce"
        },
        secondary: "#003847",
        tertiary: "#ccc",
        back: {
          400: "#d9d9d9",
          500: "#ececec"
        },

        cancel: "#ad0c00"
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
