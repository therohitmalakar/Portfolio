"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./providers/ThemeProvider";

type ThemeToggleProps = {
  className?: string;
  showLabel?: boolean;
  size?: "default" | "compact";
};

export function ThemeToggle({ className = "", showLabel = true, size = "default" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  const padding = size === "compact" ? "p-3" : "px-4 py-2";

  return (
    <motion.button
      type="button"
      aria-label={`Activate ${theme === "dark" ? "light" : "dark"} mode`}
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center gap-2 rounded-full border border-white/10 ${padding} text-sm font-semibold text-text transition hover:border-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`}
    >
      {theme === "dark" ? (
        <>
          <Sun className="h-4 w-4" aria-hidden />
          {showLabel && <span>Light</span>}
        </>
      ) : (
        <>
          <Moon className="h-4 w-4" aria-hidden />
          {showLabel && <span>Dark</span>}
        </>
      )}
    </motion.button>
  );
}

