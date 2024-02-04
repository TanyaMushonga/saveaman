/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        tektur: ["Tektur", "sans-serif"], // Added 'Tektur' font here
        bebas: ["Bebas Neue", "sans-serif"], // Added 'Bebas Neue' font here
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
