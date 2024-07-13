/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins'],
      
    },
    extend : {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, black,  #1F0436)',
    },
    colors: {
      'green-800': '#0da34e',
      'orange-800': '#FE350A'
    }
  },
  },
  plugins: [],
}