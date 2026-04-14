"use client";

import { useReducedMotion } from "motion/react";
import {
  type PointerEvent,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { cn } from "@/lib/utils";

const FALLOFF = 140;

interface PretextProjectCopyProps {
  shortDescription: string;
  longDescription: string;
  className?: string;
}

export function PretextProjectCopy({
  shortDescription,
  longDescription,
  className,
}: PretextProjectCopyProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const rafRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0, active: false });
  const motionScale = shouldReduceMotion ? 0.3 : 1;

  const paragraphs = extractParagraphs(
    shortDescription.trim(),
    longDescription,
  );

  const registerWord = useCallback(
    (index: number) => (el: HTMLSpanElement | null) => {
      if (el) wordsRef.current[index] = el;
    },
    [],
  );

  const applyDisruption = useCallback(() => {
    rafRef.current = null;
    const { x, y, active } = pointerRef.current;
    const words = wordsRef.current;

    for (let i = 0; i < words.length; i++) {
      const el = words[i];
      if (!el) continue;

      if (!active) {
        el.style.transform = "";
        el.style.opacity = "";
        continue;
      }

      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = cx - x;
      const dy = cy - y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const t = Math.max(0, 1 - dist / FALLOFF);

      if (t < 0.01) {
        el.style.transform = "";
        el.style.opacity = "";
        continue;
      }

      const angle = Math.atan2(dy, dx);
      const push = t * t * 18 * motionScale;
      const tx = Math.cos(angle) * push;
      const ty = Math.sin(angle) * push;
      const skew = (i % 2 === 0 ? 1 : -1) * t * 6 * motionScale;

      el.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0) skewX(${skew.toFixed(2)}deg)`;
      el.style.opacity = `${1 - t * 0.25}`;
    }
  }, [motionScale]);

  const scheduleUpdate = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(applyDisruption);
  }, [applyDisruption]);

  const handlePointerMove = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      if (e.pointerType !== "mouse") return;
      pointerRef.current = { x: e.clientX, y: e.clientY, active: true };
      scheduleUpdate();
    },
    [scheduleUpdate],
  );

  const handlePointerLeave = useCallback(() => {
    pointerRef.current = { ...pointerRef.current, active: false };
    scheduleUpdate();
  }, [scheduleUpdate]);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  let wordIndex = 0;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative isolate mb-[var(--spacing-3xl)] columns-1 gap-[var(--spacing-2xl)] text-ink-light lg:columns-2",
        className,
      )}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {paragraphs.map((paragraph, pi) => {
        const words = paragraph.split(/\s+/).filter(Boolean);
        return (
          <p
            key={pi}
            className="mb-[var(--spacing-lg)] break-inside-avoid-column text-[14px] leading-relaxed"
          >
            {words.map((word, wi) => {
              const idx = wordIndex++;
              return (
                <span
                  key={`${pi}-${wi}`}
                  ref={registerWord(idx)}
                  className="inline-block transition-[transform,opacity] duration-100 ease-out will-change-transform"
                >
                  {word}
                  {wi < words.length - 1 ? "\u00A0" : ""}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

function extractParagraphs(short: string, longHtml: string): string[] {
  const matches = longHtml.match(/<p>[\s\S]*?<\/p>/g);
  const longParagraphs =
    matches?.map((p) => stripHtml(p)) ?? [stripHtml(longHtml)];
  return [short, ...longParagraphs.filter(Boolean)];
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
    .replaceAll("&gt;", ">");
}
