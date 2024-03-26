/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      ms: { min: "320px", max: "425px" },
      lg: { min: "426px" },
    },
    extend: {
      backgroundImage: {
        bg: "url('/public/bg.png')",
      },
    },
  },
  plugins: [],
};
