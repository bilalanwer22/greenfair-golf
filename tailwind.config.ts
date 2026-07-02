import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        golf: {
          green: "#1B4332",
          light: "#2D6A4F",
          fairway: "#40916C",
          sand: "#D4A574",
          cream: "#F8F5F0",
        },
      },
      fontFamily: {
        display: ["Georgia", "serif"],
        sans: ["system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
