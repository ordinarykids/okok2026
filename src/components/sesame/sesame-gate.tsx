"use client";

import { useState, useCallback, useEffect, useRef, type KeyboardEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SESAME_HASH } from "@/data/sesame";
import { XeroxText } from "@/components/motion/xerox-text";

const SESSION_KEY = "sesame-auth";

async function hashString(input: string): Promise<string> {
  const encoded = new TextEncoder().encode(input);
  const buffer = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

interface SesameGateProps {
  children: React.ReactNode;
}

export function SesameGate({ children }: SesameGateProps) {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Check session on mount
  useEffect(() => {
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (stored === SESAME_HASH) {
      setAuthed(true);
    }
    setChecking(false);
  }, []);

  // Auto-focus input
  useEffect(() => {
    if (!authed && !checking && inputRef.current) {
      inputRef.current.focus();
    }
  }, [authed, checking]);

  const attempt = useCallback(async () => {
    const hash = await hashString(input.toLowerCase().trim());
    if (hash === SESAME_HASH) {
      sessionStorage.setItem(SESSION_KEY, SESAME_HASH);
      setError(false);
      setAuthed(true);
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      setInput("");
      inputRef.current?.focus();
    }
  }, [input]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        attempt();
      }
    },
    [attempt],
  );

  if (checking) return null;

  if (authed) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
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
          className="mt-[var(--spacing-2xl)] border border-ink px-[var(--spacing-xl)] py-[var(--spacing-sm)] text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-ink hover:text-paper"
        >
          Enter
        </button>
      </motion.div>
    </div>
  );
}
