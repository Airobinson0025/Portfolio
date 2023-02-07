/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: { homemade: ['Homemade Apple', 'cursive'] , 
      space: [ 'Space Mono', 'monospace' ],
      garamond: ['EB Garamond', 'serif'] }
    },
  },
  plugins: [],
}
