/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto","sans-serif"],
        Poppins: ["Poppins","sans-serif"],
        Lexend: ["Lexend", "sans-serif"]
      },
      colors: {
        'custom-darkBlue': "#2563EB",
        'custom-green':'#66bb6a',
        'custom-purple':'#0F172A'
      }
    },
  },
  plugins: [],
}
