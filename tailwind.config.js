/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-dark': '#0a192f',
        'cyber-teal': '#64ffda',
        'cyber-slate': '#8892b0',
      },
    },
  },

  plugins: [],
}
