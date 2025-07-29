/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-bg": "#f8f7f4",
        "light-surface": "#e5e3dd",
        "light-surface-hover": "#d1cfc6",
        "dark-bg": "#171716",
        "dark-surface": "#282622",
        "dark-surface-hover": "#3a3530",
      },
    },
  },
  plugins: [],
};
