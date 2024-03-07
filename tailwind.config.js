/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
        "body-grid": "1fr 120px minmax(300px, 800px) 1fr",
      },
    },
  },
  plugins: [],
};
