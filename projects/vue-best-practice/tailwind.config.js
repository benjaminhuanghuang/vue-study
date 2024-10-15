/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: ["./index.html", "./src/**/*.{js,vue,ts}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        aaa: ['"Agdasima", sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
