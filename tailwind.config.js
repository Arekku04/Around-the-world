/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Proxima Nova"],
    },
    screens: {
      sm: "375px",
      md: "640px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
