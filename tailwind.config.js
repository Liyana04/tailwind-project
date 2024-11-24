/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      sm: "340px",
      md : "540px",
      lg: "768px",
      xl: "1180px"
    },
  },
  plugins: [],
}