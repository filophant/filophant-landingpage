"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const files = [
  "Documents/project_v3.sketch",
  "Photos/vacation_2024.heic",
  "Music/playlist_export.mp3",
  "Downloads/dataset_402.csv",
  "Videos/presentation_final.mov",
  "Code/node_modules.zip",
  "Backup/system_log.db",
];

export const CopySimulator = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentFile, setCurrentFile] = useState(0);
  const [error, setError] = useState(false);
  const [errorDismissed, setErrorDismissed] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [skippedFiles, setSkippedFiles] = useState<string[]>([]);
  const [copiedCount, setCopiedCount] = useState(0);

  const reset = useCallback(() => {
    setIsRunning(false);
    setProgress(0);
    setCurrentFile(0);
    setError(false);
    setErrorDismissed(false);
    setCompleted(false);
    setSkippedFiles([]);
    setCopiedCount(0);
  }, []);

  const start = () => {
    reset();
    setIsRunning(true);
  };

  useEffect(() => {
    if (!isRunning || completed) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1.8;

        if (next >= 50 && next < 52 && !error && !errorDismissed) {
          setError(true);
          setTimeout(() => {
            setError(false);
            setErrorDismissed(true);
            setSkippedFiles(["Downloads/dataset_402.csv"]);
          }, 1200);
        }

        const fileIdx = Math.min(
          Math.floor((next / 100) * files.length),
          files.length - 1
        );
        setCurrentFile(fileIdx);
        setCopiedCount(Math.min(fileIdx + 1, files.length));

        if (next >= 100) {
          setCompleted(true);
          setIsRunning(false);
          setCopiedCount(files.length - 1);
          clearInterval(interval);
          return 100;
        }
        return next;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [isRunning, completed, error, errorDismissed]);

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="rounded-xl overflow-hidden shadow-2xl border border-border">
        {/* Title bar */}
        <div className="bg-secondary px-4 py-2.5 flex items-center gap-2 border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[hsl(0,72%,60%)]" />
            <div className="w-3 h-3 rounded-full bg-[hsl(44,92%,55%)]" />
            <div className="w-3 h-3 rounded-full bg-[hsl(130,55%,48%)]" />
          </div>
          <span className="text-xs text-muted-foreground font-medium ml-2">
            Filophant — Copy Operation
          </span>
        </div>

        {/* Window body */}
        <div className="bg-background p-6 space-y-4">
          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground font-mono">
              <span>
                {completed
                  ? "Operation Complete"
                  : isRunning
                  ? `Copying: ${files[currentFile]}`
                  : "Ready to copy 7 items"}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-primary"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          {/* Error popup */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                transition={{ duration: 0.3 }}
                className="rounded-lg border border-[hsl(38,90%,65%)] bg-[hsl(40,100%,97%)] p-3 flex items-start gap-3"
              >
                <span className="text-[hsl(38,90%,50%)] text-lg leading-none mt-0.5">{"\u26A0"}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground">
                    File Busy — Skipping
                  </p>
                  <p className="text-xs text-muted-foreground font-mono mt-0.5 truncate">
                    dataset_402.csv is in use by another process
                  </p>
                </div>
                <span className="text-xs text-muted-foreground animate-pulse">
                  continuing…
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Completion report */}
          <AnimatePresence>
            {completed && (
              <motion.div
                initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-lg border border-[hsl(145,60%,70%)] bg-[hsl(145,60%,97%)] p-3"
              >
                <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <span className="text-[hsl(145,60%,40%)]">{"\u2713"}</span>
                  Trunk Report
                </p>
                <div className="mt-2 space-y-1 text-xs font-mono text-muted-foreground">
                  <p>
                    <span className="text-foreground font-semibold">{copiedCount}</span> files copied successfully
                  </p>
                  <p>
                    <span className="text-[hsl(38,90%,50%)] font-semibold">1</span> file skipped →{" "}
                    <button className="underline text-primary hover:text-primary/80 transition-colors">
                      Retry
                    </button>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action */}
          <button
            onClick={completed ? reset : start}
            disabled={isRunning && !completed}
            className="w-full py-2.5 rounded-lg text-sm font-semibold transition-all duration-200
              bg-primary text-primary-foreground hover:bg-primary/90
              active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {completed ? "Run Again" : isRunning ? "Copying…" : "Start Copy Demo"}
          </button>
        </div>
      </div>
    </div>
  );
};
