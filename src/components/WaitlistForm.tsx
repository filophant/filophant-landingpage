"use client";

import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { joinWaitlist } from "@/app/actions";

export const WaitlistForm = ({ className = "" }: { className?: string }) => {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const res = await joinWaitlist(formData);
      setResult(res);
    });
  };

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {result?.success ? (
          <motion.p
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-[hsl(145,60%,40%)] font-medium text-center"
          >
            {result.message}
          </motion.p>
        ) : (
          <motion.form
            key="form"
            action={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full sm:flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
            <button
              type="submit"
              disabled={isPending}
              className="w-full sm:w-auto rounded-xl bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isPending ? "Joining..." : "Join the Waitlist"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
      {result && !result.success && (
        <p className="mt-2 text-xs text-destructive text-center">{result.message}</p>
      )}
    </div>
  );
};
