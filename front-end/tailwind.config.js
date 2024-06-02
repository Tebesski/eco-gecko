/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      screens: {
         xs: "320px",

         sm: "640px",

         md: "768px",

         lg: "1024px",

         xl: "1280px",

         "2xl": "1536px",
      },
      fontSize: {
         xxs: "0.625rem",
         xs: "0.72rem",
         sm: "0.8rem",
         question: "0.9rem",
         base: "1rem",
         lg: "1rem",
         xl: "1.25rem",
         "2xl": "1.563rem",
         "3xl": "1.953rem",
         "4xl": "2.441rem",
         "5xl": "3.052rem",
      },
      colors: {
         black: "#000",
         white: "#fff",
         "off-white": "#FAF9F6",
         "green-main": "#76BB3E",
         "green-main-30": "rgba(118, 187, 62, 0.3)",
         "green-light": "#B9DA7E",
         terracota: "#BB643E78",
         gray: "#898989",
         "gray-dark": "#333",
         graphite: "#2A2A2A",
      },
      fontFamily: {
         sans: ['"Inter"'],
      },
      extend: {
         textShadow: {
            default: "0 2px 5px rgba(0, 0, 0, 0.2)",
         },
         placeholderColor: {
            green: "#76BB3E",
         },
      },
   },
   variants: {
      extend: {
         placeholderColor: ["responsive"],
      },
   },
   plugins: [],
}
