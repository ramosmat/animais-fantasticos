/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
        "body-grid": "1fr 120px minmax(300px, 800px) 1fr",
        "body-grid-sm": "1fr",
        "section-grid": "90px 300px 1fr",
        "section-grid-sm": "100px 1fr",
      },
      animation: {
        description: "animal-description-enter 0.5s linear",
      },
      keyframes: {
        "animal-description-enter": {
          "0%": { transform: "translateX(-1rem)", opacity: 0 },
          "100%": { transform: "translateX(0rem)", opacity: 100 },
        },
      },
    },
    screens: {
      sm: { max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
