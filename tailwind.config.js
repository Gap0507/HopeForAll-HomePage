/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Specify the files to include Tailwind styles
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1200px', // Changed from 1024px to 1200px
      xl: '1440px',
    },
  },
  plugins: [],
};
