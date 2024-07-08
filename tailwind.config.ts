import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        dark: {
          1: "#161513",
          2: "#1c1c22",
        },
      },
      keyframes: {
        moveRightLeft: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(8px)" },
        },
      },
      animation: {
        "move-arrow": "moveRightLeft .5s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
