/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#151515",
        secondary: "#14141499",
        third: "#F5F5F5",
         forth:"#F5F5F5"
      }
    },
    fontFamily: {
      roboto: ['Robotof', 'sans-serif'],

    },
    container: {
      center: true,
      padding: "16px",
    },
  },
  plugins: [],
}