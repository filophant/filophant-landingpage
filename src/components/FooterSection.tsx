"use client";

import { ScrollReveal } from "./ScrollReveal";

export const FooterSection = () => {
  return (
    <footer className="py-16 md:py-24">
      <div className="container max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold">
              Stop fighting your file manager.{" "}
              <span className="text-primary">Start stomping.</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Filophant for macOS — coming soon.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-lg">{"\u{1F418}"}</span>
            <span className="font-semibold text-foreground">Filophant</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/filophant/filophant-macos" className="hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              License (GPLv3)
            </a>
          </div>
          <p>
            Built by{" "}
            <a href="https://hagenhuebel.de" className="hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">Hagen</a>
            {" "}
            <a href="https://github.com/itinance" className="hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">@itinance</a>
            {" · "}&copy; {new Date().getFullYear()} Filophant
          </p>
        </div>
      </div>
    </footer>
  );
};
