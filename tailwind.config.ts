import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Noto Sans JP'", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#f2f7ff",
          100: "#d9e7ff",
          200: "#b3cfff",
          300: "#7fa9ff",
          400: "#477bff",
          500: "#1f4bff",
          600: "#1736d1",
          700: "#1228a4",
          800: "#0d1d7b",
          900: "#0a1659",
        },
      },
      boxShadow: {
        soft: "0 18px 40px rgba(15, 23, 42, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
