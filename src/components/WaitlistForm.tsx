"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOOPS_FORM_URL =
  "https://app.loops.so/api/newsletter-form/cmmzha8ey0kmd0i0mgtepim8s";

type FormState = "idle" | "loading" | "success" | "error" | "rateLimit";

export const WaitlistForm = ({ className = "" }: { className?: string }) => {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const reset = () => {
    setState("idle");
    setErrorMsg("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = inputRef.current?.value;
    if (!email) return;

    // Rate limit check
    const now = Date.now();
    const prev = localStorage.getItem("loops-form-timestamp");
    if (prev && Number(prev) + 60000 > now) {
      setState("rateLimit");
      setErrorMsg("Too many signups, please try again in a little while");
      return;
    }
    localStorage.setItem("loops-form-timestamp", String(now));

    setState("loading");

    try {
      const res = await fetch(LOOPS_FORM_URL, {
        method: "POST",
        body: `userGroup=&mailingLists=&email=${encodeURIComponent(email)}`,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      if (res.ok) {
        setState("success");
        if (inputRef.current) inputRef.current.value = "";
      } else {
        const data = await res.json().catch(() => null);
        setState("error");
        setErrorMsg(data?.message || res.statusText || "Something went wrong");
      }
    } catch (err) {
      if (err instanceof Error && err.message === "Failed to fetch") {
        setState("rateLimit");
        setErrorMsg("Too many signups, please try again in a little while");
      } else {
        setState("error");
        setErrorMsg(
          err instanceof Error ? err.message : "Something went wrong"
        );
      }
      localStorage.setItem("loops-form-timestamp", "");
    }
  };

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {state === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-sm text-[hsl(145,60%,40%)] font-medium">
              Thanks! We&apos;ll be in touch!
            </p>
            <button
              onClick={reset}
              className="mt-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              &larr; Back
            </button>
          </motion.div>
        ) : state === "error" || state === "rateLimit" ? (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-sm text-destructive font-medium">{errorMsg}</p>
            <button
              onClick={reset}
              className="mt-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              &larr; Back
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto"
          >
            <input
              ref={inputRef}
              type="email"
              required
              placeholder="you@example.com"
              className="w-full sm:flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
            <button
              type="submit"
              disabled={state === "loading"}
              className="w-full sm:w-auto rounded-xl bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {state === "loading" ? "Please wait..." : "Join the Waitlist"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};
