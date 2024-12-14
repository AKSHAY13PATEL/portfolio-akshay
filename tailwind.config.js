/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          default: "#1B1B1B", // Pure black background
          // section: "#1B1B1B", // Section background
        },
        primary: "#FFFFFF", // Primary text color
        secondary: "#C0C0C0", // Secondary off white text color
        highlight: "#F35034", // Highlighted or active state text
        darkgray: "#262626",
      },
    },
  },
  plugins: [],
};
