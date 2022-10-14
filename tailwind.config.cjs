/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/bg-port.jpg)',
      },
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        //fade in up end
      },
      animation: {
        'fade-in-up': 'fade-in-up 1.0s ease-out'
      }
    },
  },
  plugins: [],
}