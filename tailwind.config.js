/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navlink: "#4d4d4d",
        primarycolor: "#040e04",
        primarycolortwo: "#0e3302",
      },
    },
  },
  plugins: [],
};
