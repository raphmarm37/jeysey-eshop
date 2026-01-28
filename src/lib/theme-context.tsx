"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type ColorMode = "light" | "dark" | "system";
export type StyleTheme = "minimal" | "bold" | "glass" | "premium";

interface ThemeState {
  colorMode: ColorMode;
  styleTheme: StyleTheme;
  resolvedColorMode: "light" | "dark";
}

interface ThemeContextValue extends ThemeState {
  setColorMode: (mode: ColorMode) => void;
  setStyleTheme: (theme: StyleTheme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "jersey-shop-theme";

function getSystemColorMode(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ThemeState>({
    colorMode: "system",
    styleTheme: "minimal",
    resolvedColorMode: "light",
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setState((prev) => ({
          ...prev,
          colorMode: parsed.colorMode || "system",
          styleTheme: parsed.styleTheme || "minimal",
        }));
      } catch {
        // Invalid stored data, use defaults
      }
    }
  }, []);

  useEffect(() => {
    const resolved = state.colorMode === "system" ? getSystemColorMode() : state.colorMode;
    setState((prev) => ({ ...prev, resolvedColorMode: resolved }));

    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(resolved);

    root.dataset.theme = state.styleTheme;

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ colorMode: state.colorMode, styleTheme: state.styleTheme })
    );
  }, [state.colorMode, state.styleTheme]);

  useEffect(() => {
    if (state.colorMode !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      setState((prev) => ({ ...prev, resolvedColorMode: getSystemColorMode() }));
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [state.colorMode]);

  const setColorMode = (mode: ColorMode) => {
    setState((prev) => ({ ...prev, colorMode: mode }));
  };

  const setStyleTheme = (theme: StyleTheme) => {
    setState((prev) => ({ ...prev, styleTheme: theme }));
  };

  return (
    <ThemeContext.Provider value={{ ...state, setColorMode, setStyleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
