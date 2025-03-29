/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          500:"#183F6A",
          700:"#002B5B"
      },
      green:{
        200:"#3DD8CB"
      },
      grey:{
        200:'#7F95AC'
      }
    }
    },
  },
  plugins: [],
}

