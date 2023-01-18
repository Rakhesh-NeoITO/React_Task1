/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      poppins: '"Poppins"',
    },
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
