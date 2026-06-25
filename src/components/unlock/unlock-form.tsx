"use client";

import {
  useState,
  useCallback,
  useEffect,
  useRef,
  type KeyboardEvent,
} from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { XeroxText } from "@/components/motion/xerox-text";

export function UnlockForm() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const fail = useCallback(() => {
    setError(true);
    setShaking(true);
    setTimeout(() => setShaking(false), 500);
    setInput("");
    setSubmitting(false);
    inputRef.current?.focus();
  }, []);

  const attempt = useCallback(async () => {
    if (submitting) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: input }),
      });
      if (res.ok) {
        const next = new URLSearchParams(window.location.search).get("next");
        const dest =
          next && next.startsWith("/") && !next.startsWith("//") && next !== "/"
            ? next
            : "/ok";
        router.replace(dest);
        router.refresh();
        return;
      }
    } catch {
      // network error — fall through to failure state
    }
    fail();
  }, [input, router, submitting, fail]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") attempt();
    },
    [attempt],
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-[var(--gutter)]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[400px] text-center"
      >
        <XeroxText
          text="////"
          as="h1"
          className="mb-[var(--spacing-2xl)] text-[clamp(48px,8vw,96px)] leading-none tracking-tight"
          glitch
          staggerDelay={0.08}
        />

        <motion.div
          animate={shaking ? { x: [-12, 12, -8, 8, -4, 4, 0] } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <input
            ref={inputRef}
            type="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            onKeyDown={handleKeyDown}
            placeholder=""
            className="w-full border-b border-ink bg-transparent py-[var(--spacing-sm)] text-center font-mono text-[14px] tracking-[0.3em] outline-none placeholder:text-ink-faint focus:border-ink"
            autoComplete="off"
            spellCheck={false}
            disabled={submitting}
          />
        </motion.div>

        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-[var(--spacing-lg)] font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint"
            >
              no
            </motion.p>
          )}
        </AnimatePresence>

        <button
          onClick={attempt}
          disabled={submitting}
          className="mt-[var(--spacing-2xl)] border border-ink px-[var(--spacing-xl)] py-[var(--spacing-sm)] text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-ink hover:text-paper disabled:opacity-50"
        >
          Enter
        </button>
      </motion.div>
    </main>
  );
}
