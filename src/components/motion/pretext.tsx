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
  /** Extra classes applied only to the first paragraph (e.g. italic) */
  firstParagraphClassName?: string;
}

export function Pretext({
  paragraphs: rawParagraphs,
  html,
  className,
  paragraphClassName,
  firstParagraphClassName,
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
        /* If this paragraph is purely a link, render it as a styled anchor */
        if (paragraph.link && paragraph.text === paragraph.link.label) {
          return (
            <p
              key={pi}
              className={cn(
                "mb-[var(--spacing-lg)] leading-relaxed",
                paragraphClassName,
              )}
            >
              <a
                href={paragraph.link.href}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 transition-opacity hover:opacity-60"
              >
                {paragraph.link.label}
              </a>
            </p>
          );
        }
        const words = paragraph.text.split(/\s+/).filter(Boolean);
        return (
          <p
            key={pi}
            className={cn(
              "mb-[var(--spacing-lg)] leading-relaxed",
              pi === 0 && firstParagraphClassName,
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

interface ParsedParagraph {
  text: string;
  link?: { href: string; label: string };
}

function buildParagraphs(raw?: string[], html?: string): ParsedParagraph[] {
  const out: ParsedParagraph[] = [];
  if (raw) out.push(...raw.filter(Boolean).map((t) => ({ text: t })));
  if (html) {
    const matches = html.match(/<p>[\s\S]*?<\/p>/g);
    if (matches) {
      for (const m of matches) {
        const linkMatch = m.match(/<a\s+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/);
        const text = stripHtml(m);
        if (text) {
          out.push({
            text,
            link: linkMatch ? { href: linkMatch[1], label: linkMatch[2] } : undefined,
          });
        }
      }
    } else {
      const stripped = stripHtml(html);
      if (stripped) out.push({ text: stripped });
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
