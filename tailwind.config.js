/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        'primary' : '#1A1C22',
        'secondary' : '#580EF6',
        'accent' : '#F7F7F7',
        'button' : '#3D3A50',
      }
    },
    fontFamily :{
     'Manrope' :  'Manrope, sans-serif',
    }
  },
  plugins: [],
}

