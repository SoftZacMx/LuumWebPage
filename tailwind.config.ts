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
        background: "var(--background)",
        foreground: "var(--foreground)",
        canvas: "#ebebeb",
        graphite: "#1A1A1A",
        taupe: "#8C847E",
        "brand-base": "#FFF2DF",
        "brand-medium": "#8C6E63",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widestcaps: "0.2em",
      },
      keyframes: {
        autoRun: {
          from: { left: "100%" },
          to: { left: "calc(var(--width) * -1)" },
        },
        reversePlay: {
          from: { left: "calc(var(--width) * -1)" },
          to: { left: "100%" },
        },
      },
      animation: {
        autoRun: "autoRun 10s linear infinite",
        autoRun15: "autoRun 15s linear infinite",
        reversePlay: "reversePlay 10s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
