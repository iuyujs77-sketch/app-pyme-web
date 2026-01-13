import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#37ec13",
        "neon-emerald": "#10B981",
        "deep-bg": "#020617",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-manrope)", "sans-serif"],
      },
      boxShadow: {
        "neon-glow": "0 0 40px rgba(0, 255, 148, 0.3), 0 0 10px rgba(0, 255, 148, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;