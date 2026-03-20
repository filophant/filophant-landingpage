"use client";

import { ScrollReveal } from "./ScrollReveal";
import { WaitlistForm } from "./WaitlistForm";

const benefits = [
  {
    icon: "\u26A1",
    title: "Convenience",
    desc: "A pre-compiled, Apple-signed binary that just works. No Xcode required.",
  },
  {
    icon: "\u{1F512}",
    title: "Security",
    desc: "Full Gatekeeper compatibility with zero \"Unidentified Developer\" warnings.",
  },
  {
    icon: "\u{1F504}",
    title: "Maintenance",
    desc: "Automatic updates, bug fixes, and direct support from the developer.",
  },
  {
    icon: "\u{1F331}",
    title: "Growth",
    desc: "Your contribution funds the \"Stomp\" engine and our open-source plugin ecosystem.",
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-surface-sunken">
      <div className="container max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Fair & transparent
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
            Open Source. Pro-Grade Distribution.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Filophant is licensed under <strong className="text-foreground">GPLv3</strong>. The code
            is yours to audit, fork, and build. The ready-to-use installer will be available for €8.95.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.08}>
              <div className="rounded-xl bg-surface-elevated border border-border p-5 text-center hover:shadow-md transition-shadow duration-300">
                <span className="text-2xl">{b.icon}</span>
                <p className="mt-2 text-sm font-bold">{b.title}</p>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12">
            <p className="text-sm text-muted-foreground mb-4">
              Join the waitlist to be first in line.
            </p>
            <WaitlistForm />
            <p className="mt-4 text-xs text-muted-foreground">
              Or{" "}
              <a href="https://github.com/filophant/filophant-macos" className="underline hover:text-foreground transition-colors">
                compile it yourself
              </a>{" "}
              — the code is free.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
