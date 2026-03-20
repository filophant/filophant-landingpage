"use client";

import { ScrollReveal } from "./ScrollReveal";

const painPoints = [
  {
    emoji: "\u{1F6D1}",
    problem: "Stops on Error?",
    finderWay:
      "You're moving 1TB of data. File #402 is \"in use.\" Finder cancels the entire operation, leaving a mess of half-copied folders.",
    elephantWay:
      "Our non-blocking I/O engine logs the error, skips the file, and finishes the job. Review the \"Trunk Report\" to retry failed items with one click.",
  },
  {
    emoji: "\u{1F9E0}",
    problem: "Forgot your Sort?",
    finderWay:
      "You set a folder to \"Sort by Size\" and \"Icon View.\" Close the window, come back \u2014 Finder resets everything to \"Name\" and \"List View.\"",
    elephantWay:
      "Using SQLite and Security-Scoped Bookmarks, Filophant remembers your exact view preferences for every folder \u2014 even on external drives.",
  },
  {
    emoji: "\u{1F4E4}",
    problem: "Manual Sharing?",
    finderWay:
      "Sharing a file via Signal or Slack requires five clicks through a generic, laggy share sheet.",
    elephantWay:
      "Drag and drop files onto your \"Dispatch Tray.\" With the JavaScript plugin system, build custom triggers for Signal, S3, or your own API.",
  },
];

export const PainPointsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-surface-sunken">
      <div className="container max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary text-center">
            The elephant in the room
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-center">
            What Finder gets wrong
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {painPoints.map((p, i) => (
            <ScrollReveal key={p.problem} delay={i * 0.1}>
              <div className="h-full rounded-2xl bg-surface-elevated border border-border p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
                <span className="text-2xl">{p.emoji}</span>
                <h3 className="mt-3 text-lg font-bold">{p.problem}</h3>

                <div className="mt-4 flex-1 space-y-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                      Finder
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {p.finderWay}
                    </p>
                  </div>
                  <div className="border-t border-border pt-3">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-primary mb-1">
                      Filophant
                    </p>
                    <p className="text-sm leading-relaxed">{p.elephantWay}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
