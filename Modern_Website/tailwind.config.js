/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './**/*.js'], // adjust this to your project files
  theme: {
    extend: {
      colors: {
        primary: '#3238F2',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
