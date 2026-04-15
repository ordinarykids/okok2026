"use client";

import { useCallback } from "react";
import { usePretextRegister } from "./pretext-provider";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Multi-paragraph pretext (for body copy)                           */
/* ------------------------------------------------------------------ */

interface PretextProps {
  /** Plain-text paragraphs (no HTML) */
  paragraphs?: string[];
  /** Raw HTML string — paragraphs will be extracted and tags stripped */
  html?: string;
  className?: string;
  paragraphClassName?: string;
}

export function Pretext({
  paragraphs: rawParagraphs,
  html,
  className,
  paragraphClassName,
}: PretextProps) {
  const ctx = usePretextRegister();

  const refCallback = useCallback(
    (el: HTMLSpanElement | null) => {
      if (!ctx || !el) return;
      const cleanup = ctx.register(el);
      (el as HTMLSpanElement & { __pretextCleanup?: () => void }).__pretextCleanup = cleanup;
    },
    [ctx],
  );

  const paragraphs = buildParagraphs(rawParagraphs, html);

  return (
    <div className={cn("relative isolate", className)}>
      {paragraphs.map((paragraph, pi) => {
        const words = paragraph.split(/\s+/).filter(Boolean);
        return (
          <p
            key={pi}
            className={cn(
              "mb-[var(--spacing-lg)] leading-relaxed",
              paragraphClassName,
            )}
          >
            {words.map((word, wi) => (
              <span
                key={`${pi}-${wi}`}
                ref={refCallback}
                className="inline-block transition-[transform,opacity] duration-100 ease-out will-change-transform"
              >
                {word}
                {wi < words.length - 1 ? "\u00A0" : ""}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function buildParagraphs(raw?: string[], html?: string): string[] {
  const out: string[] = [];
  if (raw) out.push(...raw.filter(Boolean));
  if (html) {
    const matches = html.match(/<p>[\s\S]*?<\/p>/g);
    if (matches) {
      out.push(...matches.map(stripHtml).filter(Boolean));
    } else {
      const stripped = stripHtml(html);
      if (stripped) out.push(stripped);
    }
  }
  return out;
}

function stripHtml(value: string) {
  return decodeEntities(value.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

function decodeEntities(value: string) {
  return value
    .replaceAll("&nbsp;", " ")
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&mdash;", "\u2014")
    .replaceAll("&ndash;", "\u2013");
}
