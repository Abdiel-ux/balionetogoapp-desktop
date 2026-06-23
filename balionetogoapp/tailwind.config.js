/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0A1628",
          blue: "#1E3A5F",
          gold: "#C9A84C",
          cream: "#F5F0E8",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ["Funnel Display"],
        body: ["Funnel Display"],
      },
    },
  },
  plugins: [],
};
