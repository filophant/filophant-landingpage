"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark, mounted]);

  if (!mounted) {
    return (
      <button
        className="relative w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground"
        aria-label="Toggle theme"
      />
    );
  }

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="relative w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200 active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label="Toggle theme"
    >
      <motion.span
        key={dark ? "moon" : "sun"}
        initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: 30, scale: 0.8 }}
        transition={{ duration: 0.25 }}
        className="text-sm"
      >
        {dark ? "\u{1F319}" : "\u{2600}\u{FE0F}"}
      </motion.span>
    </button>
  );
};
