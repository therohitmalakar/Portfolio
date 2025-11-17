/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "2rem",
        xl: "3rem",
      },
    },
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        muted: "var(--muted)",
        text: "var(--text)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        success: "var(--success)",
        error: "var(--error)",
        glass: "var(--glass)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "var(--radius)",
        "2xl": "calc(var(--radius) + 8px)",
        "3xl": "calc(var(--radius) + 16px)",
      },
      boxShadow: {
        soft: "0 24px 60px rgba(0, 0, 0, 0.35)",
        outline: "0 0 0 1px rgba(124, 92, 255, 0.35)",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      keyframes: {
        ripple: {
          "0%": { transform: "scale(0)", opacity: 0.45 },
          "100%": { transform: "scale(1)", opacity: 0 },
        },
      },
      animation: {
        ripple: "ripple 600ms ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

