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
        stone: "#F5F5F0",
        deepSlate: "#1A1C1E",
        terracotta: "#C36A4A",
        sage: "#8CA196",
        border: "rgba(0, 0, 0, 0.05)",
      },
      letterSpacing: {
        display: "0.05em",
      },
      boxShadow: {
        glass: "0 25px 65px rgba(15, 23, 42, 0.18)",
      },
      backgroundImage: {
        mesh:
          "radial-gradient(circle at top left, rgba(140,161,150,0.08), transparent 35%), radial-gradient(circle at 75% 15%, rgba(195,106,74,0.12), transparent 45%)",
      },
    },
  },
};

export default config;
