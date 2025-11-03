import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fdfaf5",
        "warm-red": "#f9423a",
        "deep-blue": "#0056a3",
        brown: "#4b2e2b",
        ink: "#1e1b19",
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Arial", "sans-serif"],
        serif: ["Garamond", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
