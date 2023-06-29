/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#51a0b5",
          400: "#5db6ce"
        },
        secondary: "#ccc",
        tertiary: "#eee",
        cancel: "#ad0c00"
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
