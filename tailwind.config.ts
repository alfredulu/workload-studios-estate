import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: "var(--font-playfair)",
        body: "var(--font-inter)",
      },
      colors: {
        midnight: "#0A1B3D",
        gold: "#D4AF37",
        quartz: "#F6F5F1",
        slate: "#E8EAED",
      },
      boxShadow: {
        glass: "0 10px 45px rgba(15, 23, 42, 0.15)",
      },
    },
  },
};

export default config;
