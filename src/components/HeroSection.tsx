"use client";

import { motion } from "framer-motion";
import { DualPaneMockup } from "./DualPaneMockup";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container relative z-10 max-w-5xl mx-auto px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(145,60%,48%)]" />
            Open Beta — macOS only
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center leading-[0.95] max-w-4xl mx-auto"
        >
          Finder stops when a file is busy.{" "}
          <span className="text-primary">Filophant keeps stomping.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg md:text-xl text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
        >
          The first open-source macOS file manager with an unstoppable copy engine,
          persistent folder memory, and a JS-based plugin system.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2.5 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 active:scale-[0.97]"
          >
            <span>Get the Signed Build — $5</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-secondary transition-all duration-200 active:scale-[0.97]"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View Source on GitHub
          </a>
        </motion.div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16"
        >
          <DualPaneMockup />
        </motion.div>
      </div>
    </section>
  );
};
