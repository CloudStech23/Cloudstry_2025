/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem", // 1440px
        "7.5xl": "80rem", // 1360px (optional if you want 7.5)
      },
    },
  },
  plugins: [],
};
