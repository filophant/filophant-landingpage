"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <a href="#" className="flex items-center gap-2 text-sm font-bold">
          <span className="text-xl">{"\u{1F418}"}</span>
          Filophant
        </a>

        <div className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#pricing" className="hover:text-foreground transition-colors">
            Pricing
          </a>
          <a
            href="https://github.com/filophant/filophant-macos"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <ThemeToggle />
        </div>

        <a
          href="#pricing"
          className="rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.97]"
        >
          Join Waitlist
        </a>
      </div>
    </motion.nav>
  );
};
