/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        testColor:"#F6F4E8"
      },
      gridTemplateColumns: {
        gridColmn: 'auto, 1fr',

        
      }
    },
  },
  plugins: [],
}

