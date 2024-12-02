/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#4C70FF",
        secondary: "#E2F0FF",
        cta: {
          primary: "#292731",
          secondary: "#455360"
        }
      }
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"]
    }
  },
  plugins: [],
}

