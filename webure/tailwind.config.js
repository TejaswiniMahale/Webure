/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple':'rgba(137, 77, 234, 0.5)',
        'getStartedBG':'linear-gradient(97.32deg, #FF698D -3.47%, #FB3F6C 108.43%)',
        'chooseUsButton':'linear-gradient(97.32deg, #FF698D -3.47%, #FB3F6C 108.43%)',
        'white':'rgba(255, 255, 255, 0.8)',
      },
      backgroundImage: {
        'hero': "url('../images/Why_Choose_Us.png')",
      },
    },
  },
  plugins: [],
}
