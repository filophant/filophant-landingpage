"use client";

import { motion } from "framer-motion";

const leftFiles = [
  { name: "project_v3.sketch", size: "48 MB", icon: "\u{1F4D0}" },
  { name: "vacation_2024.heic", size: "12 MB", icon: "\u{1F5BC}" },
  { name: "playlist_export.mp3", size: "8.4 MB", icon: "\u{1F3B5}" },
  { name: "dataset_402.csv", size: "1.2 GB", icon: "\u{1F4CA}", error: true },
  { name: "presentation.mov", size: "340 MB", icon: "\u{1F3AC}" },
];

const rightFiles = [
  { name: "project_v3.sketch", size: "48 MB", icon: "\u{1F4D0}" },
  { name: "vacation_2024.heic", size: "12 MB", icon: "\u{1F5BC}" },
  { name: "playlist_export.mp3", size: "8.4 MB", icon: "\u{1F3B5}" },
];

export const DualPaneMockup = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border">
        {/* Scanner effect */}
        <div className="scanner-line" />
        {/* Title bar */}
        <div className="bg-secondary px-4 py-2.5 flex items-center gap-2 border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[hsl(0,72%,60%)]" />
            <div className="w-3 h-3 rounded-full bg-[hsl(44,92%,55%)]" />
            <div className="w-3 h-3 rounded-full bg-[hsl(130,55%,48%)]" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs text-muted-foreground font-medium">Filophant</span>
          </div>
        </div>

        {/* Toolbar */}
        <div className="bg-secondary/50 px-4 py-1.5 border-b border-border flex items-center gap-3 text-xs text-muted-foreground">
          <span className="font-mono">{"\u25C0 \u25B6"}</span>
          <span className="flex-1 bg-background rounded px-2 py-1 font-mono text-foreground text-[11px]">
            ~/Documents/Project Files
          </span>
          <span className="font-mono">{"\u2699"}</span>
        </div>

        {/* Dual pane */}
        <div className="grid grid-cols-2 divide-x divide-border min-h-[240px]">
          {/* Left pane */}
          <div className="bg-background">
            <div className="px-3 py-1.5 bg-secondary/30 border-b border-border">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Source</span>
            </div>
            <div className="p-1">
              {leftFiles.map((f, i) => (
                <motion.div
                  key={f.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                  className={`flex items-center gap-2 px-2 py-1.5 rounded text-xs ${
                    f.error
                      ? "bg-[hsl(38,90%,95%)] text-foreground"
                      : "hover:bg-secondary/50"
                  }`}
                >
                  <span className="text-sm">{f.icon}</span>
                  <span className="flex-1 font-medium truncate">{f.name}</span>
                  <span className="text-muted-foreground font-mono text-[10px]">{f.size}</span>
                  {f.error && (
                    <span className="text-[10px] text-[hsl(38,90%,50%)] font-semibold">BUSY</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right pane */}
          <div className="bg-background">
            <div className="px-3 py-1.5 bg-secondary/30 border-b border-border">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Destination</span>
            </div>
            <div className="p-1">
              {rightFiles.map((f, i) => (
                <motion.div
                  key={f.name}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2 px-2 py-1.5 rounded text-xs hover:bg-secondary/50"
                >
                  <span className="text-sm">{f.icon}</span>
                  <span className="flex-1 font-medium truncate">{f.name}</span>
                  <span className="text-[hsl(145,60%,40%)] text-[10px]">{"\u2713"}</span>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="px-2 py-3 text-center"
              >
                <span className="text-[10px] text-muted-foreground font-mono">
                  1 skipped {"\u2022"} 3 copied {"\u2022"} 2 remaining
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom status bar */}
        <div className="bg-secondary/30 px-4 py-1.5 border-t border-border flex items-center justify-between text-[10px] text-muted-foreground font-mono">
          <span>5 items {"\u2022"} 1.4 GB total</span>
          <span className="text-[hsl(145,60%,40%)]">{"\u25CF"} Connected</span>
        </div>
      </div>
    </div>
  );
};
