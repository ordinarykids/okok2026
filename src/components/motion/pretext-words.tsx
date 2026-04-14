"use client";

import { useEffect, useRef, useCallback } from "react";
import { usePretextRegister } from "./pretext-provider";

interface PretextWordsProps {
  /** Plain text to split into disrupted word spans */
  text: string;
  className?: string;
}

/**
 * Splits a plain-text string into word-level <span> elements that
 * register with the nearest PretextProvider for pointer-proximity
 * disruption. Falls back to plain text if no provider is present.
 */
export function PretextWords({ text, className }: PretextWordsProps) {
  const ctx = usePretextRegister();
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);
  const cleanupRef = useRef<(() => void)[]>([]);

  const setSpanRef = useCallback(
    (index: number) => (el: HTMLSpanElement | null) => {
      spansRef.current[index] = el;
    },
    [],
  );

  useEffect(() => {
    if (!ctx) return;

    // Clean up previous registrations
    cleanupRef.current.forEach((fn) => fn());
    cleanupRef.current = [];

    // Register all current spans
    for (const el of spansRef.current) {
      if (el) {
        cleanupRef.current.push(ctx.register(el));
      }
    }

    return () => {
      cleanupRef.current.forEach((fn) => fn());
      cleanupRef.current = [];
    };
  }, [ctx, text]);

  if (!text) return null;

  const words = text.split(/\s+/).filter(Boolean);

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={`${i}-${word}`}
          ref={setSpanRef(i)}
          className="inline-block transition-[transform,opacity] duration-100 ease-out will-change-transform"
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
}
