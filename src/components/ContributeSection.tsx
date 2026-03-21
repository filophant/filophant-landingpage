"use client";

import { ScrollReveal } from "./ScrollReveal";

const ways = [
  {
    icon: "🛠️",
    title: "Write Code",
    desc: "Fix bugs, build features, or create plugins for the Trunk API. All skill levels welcome.",
  },
  {
    icon: "🧪",
    title: "Beta Test",
    desc: "Try Filophant on your Mac and report what breaks, what's slow, or what's missing.",
  },
];

export const ContributeSection = () => {
  return (
    <section id="contribute" className="py-24 md:py-32">
      <div className="container max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Get involved
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
            Help build Filophant.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Filophant is open source and built in the open. Whether you write Swift,
            TypeScript, or just have strong opinions about file managers — there&apos;s
            a place for you.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ways.map((w, i) => (
            <ScrollReveal key={w.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl bg-surface-elevated border border-border p-6 text-left shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-2xl">{w.icon}</span>
                <h3 className="mt-3 text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-12">
            <a
              href="https://github.com/filophant/filophant-macos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 active:scale-[0.97]"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Contribute on GitHub
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
