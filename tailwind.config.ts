import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: "#32351d", 
        paper: "#EBEBE8", 
        muted: "#8C8C88",
        link:  "#FFFFFF",
      },
      fontFamily: {
        // Added Krungthep here. 
        // If the user doesn't have it, it falls back to Impact or standard sans.
        display: ["Krungthep", "Impact", "sans-serif"],
        sans: ["Helvetica Neue", "Arial", "sans-serif"],
        mono: ["Courier New", "Courier", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;