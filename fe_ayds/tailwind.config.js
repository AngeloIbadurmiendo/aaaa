/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000",
      white: "#fff",
      blue: "#2292A4",
      blue2: "#147686",
      gray: "#D9D9D9",
      overlay: "rgba(0,0,0,.7)",
      magnolia: "#f3eff5",
      red: "#5e0b15",
      "red-300": "#A52019",
    },
    extend: {},
  },
  plugins: [],
};
