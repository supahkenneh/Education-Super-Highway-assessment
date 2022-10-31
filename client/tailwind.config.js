/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'turqoise': '#9EF9D8',
        'soft-green': '#CAF6BF',
        'lush-green': '#1AA37A',
      }
    },
  },
  plugins: [],
}
