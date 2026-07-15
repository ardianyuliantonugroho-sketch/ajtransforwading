import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0A1F3D",
          900: "#0E2A4E",
          800: "#123262",
          700: "#1B3B6F",
        },
        paper: {
          50: "#F6F4EE",
          100: "#EFEBDF",
        },
        ink: {
          900: "#14181F",
          700: "#2B303B",
        },
        slate: {
          500: "#5B6472",
          300: "#9AA2AF",
        },
        cargo: {
          orange: "#F51F25",
          "orange-dark": "#C9151B",
        },
        line: {
          light: "#D8D2C4",
          dark: "rgba(255,255,255,0.14)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grain": "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        grain: "3px 3px",
      },
      keyframes: {
        dashmove: {
          "0%": { strokeDashoffset: "24" },
          "100%": { strokeDashoffset: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        dashmove: "dashmove 1.2s linear infinite",
        fadeUp: "fadeUp 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
