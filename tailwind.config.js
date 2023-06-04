/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: "url('https://res.cloudinary.com/dha2m9q8b/image/upload/v1684562576/alamid/concrete_ljvdc3.jpg')",
        stamped:
          "url('https://res.cloudinary.com/dha2m9q8b/image/upload/v1684578549/alamid/stamped-concrete-pool_ztflx4.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
