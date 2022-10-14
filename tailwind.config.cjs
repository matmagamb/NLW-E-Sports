/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        blur:'url(/src/assets/bg-port.jpg)',
        codeImage:'url(/src/assets/codeImg.png)'
      },
      fontFamily:{
        sans:'Roboto, sans-serif'
      },
    },
  },
  plugins: [],
}