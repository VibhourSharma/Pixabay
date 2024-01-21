/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xxl: { max: "1300px" },

      xl: { max: "1100px", min: "800px" },

      lg: { max: "800px", min: "600px" },

      md: { max: "600px", min: "453px" },

      sm: { max: "453px", min: "360px" },
    },
  },
  plugins: [],
};
