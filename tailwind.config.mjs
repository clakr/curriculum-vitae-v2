import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat Variable", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        noise: "url(/noise.png)",
      },
    },
  },
  plugins: [],
};
