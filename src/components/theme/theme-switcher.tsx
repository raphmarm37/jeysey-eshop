"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme, ColorMode, StyleTheme } from "@/lib/theme-context";
import { SunIcon, MoonIcon, ComputerIcon, PaletteIcon, ChevronDownIcon } from "@/components/icons";

const COLOR_MODES: { value: ColorMode; label: string; icon: typeof SunIcon }[] = [
  { value: "light", label: "Light", icon: SunIcon },
  { value: "dark", label: "Dark", icon: MoonIcon },
  { value: "system", label: "System", icon: ComputerIcon },
];

const STYLE_THEMES: { value: StyleTheme; label: string; colors: string[] }[] = [
  { value: "minimal", label: "Minimal", colors: ["#f3f4f6", "#374151", "#3b82f6"] },
  { value: "bold", label: "Bold", colors: ["#ef4444", "#f97316", "#eab308"] },
  { value: "glass", label: "Glass", colors: ["#a855f7", "#ec4899", "#06b6d4"] },
  { value: "premium", label: "Premium", colors: ["#0f172a", "#7c3aed", "#22d3ee"] },
];

export function ThemeSwitcher() {
  const { colorMode, styleTheme, setColorMode, setStyleTheme, resolvedColorMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const CurrentColorIcon = resolvedColorMode === "dark" ? MoonIcon : SunIcon;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
        aria-label="Theme settings"
      >
        <CurrentColorIcon className="w-5 h-5" />
        <ChevronDownIcon className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl p-4 z-50">
          <div className="mb-4">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
              Color Mode
            </p>
            <div className="flex gap-1">
              {COLOR_MODES.map(({ value, label, icon: Icon }) => (
                <button
                  key={value}
                  onClick={() => setColorMode(value)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                    colorMode === value
                      ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
              Style Theme
            </p>
            <div className="grid grid-cols-2 gap-2">
              {STYLE_THEMES.map(({ value, label, colors }) => (
                <button
                  key={value}
                  onClick={() => setStyleTheme(value)}
                  className={`flex items-center gap-2 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                    styleTheme === value
                      ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 ring-2 ring-offset-2 ring-gray-900 dark:ring-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  <div className="flex -space-x-1">
                    {colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 rounded-full border border-white dark:border-gray-900"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
