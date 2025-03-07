import { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        header: "var(--color-header)",
        accent: "var(--color-accent)",
      },
    },
  },
  plugins: [],
};

export default config;
