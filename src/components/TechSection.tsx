"use client";

import { ScrollReveal } from "./ScrollReveal";
import { CopySimulator } from "./CopySimulator";

const specs = [
  {
    label: "Native Swift & SwiftUI",
    desc: "Built for speed and low memory footprint. No Electron bloat.",
  },
  {
    label: "Sandbox-Safe JS Bridge",
    desc: "Write your own \"Smart Columns\" and \"Actions\" in TypeScript.",
  },
  {
    label: "Vector-Ready",
    desc: "Future-proof architecture designed for local semantic/AI search.",
  },
  {
    label: "Privacy First",
    desc: "100% on-device. No telemetry. No cloud (unless you plug it in).",
  },
];

export const TechSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <ScrollReveal direction="left">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                Under the hood
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
                Built for power users,
                <br />
                by power users.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
                The &ldquo;Stomp&rdquo; engine uses a non-blocking I/O queue that keeps your
                files moving while logging every hiccup. The &ldquo;Trunk&rdquo; API lets
                you extend Filophant with JavaScript or TypeScript plugins.
              </p>
            </ScrollReveal>

            <div className="mt-8 space-y-4">
              {specs.map((s, i) => (
                <ScrollReveal key={s.label} delay={0.1 + i * 0.08} direction="left">
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <div>
                      <p className="text-sm font-semibold">{s.label}</p>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right: interactive demo */}
          <ScrollReveal direction="right">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground text-center mb-4">
                Interactive Demo
              </p>
              <CopySimulator />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
