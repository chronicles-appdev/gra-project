/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    screens: {
      xxs: "300px",
      xs: "400px",
      // => @media (min-width: 500px) {...}

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "850px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      cream: "#fffdd0",
      gray: "#707070"
    },
    extend: {},
  },
  plugins: [],
}

