import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101218",
        slate: "#202633",
        graphite: "#4b5565",
        mist: "#f5f7fb",
        line: "#d9dee8",
        cobalt: "#155eef",
        teal: "#0e9384",
        amber: "#d97706"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 70px rgba(16, 18, 24, 0.12)"
      }
    }
  },
  plugins: [forms]
};

export default config;
