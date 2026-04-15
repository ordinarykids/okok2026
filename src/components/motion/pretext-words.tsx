"use client";

import { useCallback } from "react";
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

  const refCallback = useCallback(
    (el: HTMLSpanElement | null) => {
      if (!ctx || !el) return;
      // Register returns a cleanup function; store it on the element
      const cleanup = ctx.register(el);
      (el as HTMLSpanElement & { __pretextCleanup?: () => void }).__pretextCleanup = cleanup;
    },
    [ctx],
  );

  if (!text) return null;

  const words = text.split(/\s+/).filter(Boolean);

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={`${i}-${word}`}
          ref={refCallback}
          className="inline-block transition-[transform,opacity] duration-100 ease-out will-change-transform"
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
}
