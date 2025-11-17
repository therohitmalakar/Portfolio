/* eslint-disable @next/next/no-sync-scripts */
"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "rohitmalakar-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  const applyTheme = useCallback((nextTheme: Theme) => {
    setThemeState(nextTheme);
    if (typeof document !== "undefined") {
      document.documentElement.dataset.theme = nextTheme;
      document.documentElement.classList.toggle("dark", nextTheme === "dark");
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, nextTheme);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initialTheme = stored ?? (prefersLight ? "light" : "dark");
    applyTheme(initialTheme);
  }, [applyTheme]);

  const setTheme = useCallback((nextTheme: Theme) => {
    applyTheme(nextTheme);
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    applyTheme(theme === "dark" ? "light" : "dark");
  }, [theme, applyTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return ctx;
};

