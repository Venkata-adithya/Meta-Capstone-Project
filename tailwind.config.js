/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-green' : '#495E57',
        'primary-yellow' : '#F4CE14'
      },
      backgroundColor:{
        'primary-green' : '#495E57',
        'primary-yellow' : '#F4CE14'
      }
    },
  },
  plugins: [],
}

