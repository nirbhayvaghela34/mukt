/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Bebas Neue Pro"', 'sans-serif'],
        secondary: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
