/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" // <- asegurate que esté así
  ],
  theme: {
     extend: {
      colors: {
        sinemBlack: '#0a0a0a',   // negro corporativo
        sinemYellow: '#FFD700',  // amarillo corporativo
      },
    },
  },
  plugins: [],
}
