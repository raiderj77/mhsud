import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f2f7f3", 100: "#e0ece2", 200: "#c3d9c7", 300: "#9bbfa2",
          400: "#6fa179", 500: "#4a7c59", 600: "#3d6b4c", 700: "#32553e",
          800: "#2a4534", 900: "#23392b", 950: "#111f17",
        },
        sand: {
          50: "#faf8f5", 100: "#f4f1ec", 200: "#eae5dc", 300: "#ddd6c9",
          400: "#c9bfaf", 500: "#b5a895", 600: "#9e8e78", 700: "#847563",
          800: "#6d6053", 900: "#5a5046", 950: "#302a24",
        },
        warm: {
          50: "#fef9f0", 100: "#fef3e0", 200: "#fce4b8", 300: "#f9d08a",
          400: "#f5b54e", 500: "#f09e28", 600: "#e1831a", 700: "#ba6517",
          800: "#94501a", 900: "#784218", 950: "#41200a",
        },
        crisis: {
          50: "#fdf2f2", 100: "#fde8e8", 200: "#fbd5d5", 300: "#f8b4b4",
          400: "#f08a8e", 500: "#e5626a", 600: "#d14550", 700: "#b03040",
          800: "#932b3b", 900: "#7d2838", 950: "#44111a",
        },
        night: {
          700: "#2a2b30", 800: "#212225", 900: "#1a1b1e", 950: "#131416",
        },
      },
      fontFamily: {
        serif: ['"Source Serif 4"', "Georgia", "serif"],
        sans: ['"DM Sans"', '"Helvetica Neue"', "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.4s ease-out forwards",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
