/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tacao: "#FBAF85",
        "raw-sienna": "#D87D4A",
        "chinese-black": "#101010",
        "white-smoke": "#F1F1F1",
        "dark-gray": "#979797",
        snow: "#FAFAFA",
        quartz: "#4C4C4C",
      },
      backgroundImage: {
        zx7: "url('/src/assets/home/desktop/image-speaker-zx7.jpg')"
      }
    },
  },
  plugins: [],
};


// theme: {
//   screens: {
//     'tablet': '640px',
//     // => @media (min-width: 640px) { ... }

//     'laptop': '1024px',
//     // => @media (min-width: 1024px) { ... }

//     'desktop': '1280px',
//     // => @media (min-width: 1280px) { ... }
//   },
// }