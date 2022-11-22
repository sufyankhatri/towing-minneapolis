/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url(/img/banner-bg.webp)",
        contactButton: "url(/img/tire-btn-pattern.webp)",
        cta: "url(/img/call-to-action-bg.webp)",
        footer: "url(/img/footer-bg.webp)",
      },
      colors: {
        primary: "#fdaa2a",
        secondary: "#383d43",
      },
      gridTemplateColumns: {
        review: "200px 1fr",
      },
    },
  },
  plugins: [],
};
