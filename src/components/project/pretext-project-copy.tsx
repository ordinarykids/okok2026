"use client";

import {
  layoutWithLines,
  prepareWithSegments,
  type LayoutLine,
} from "@chenglou/pretext";
import { useReducedMotion } from "motion/react";
import {
  type CSSProperties,
  type PointerEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

const BODY_FONT = '400 14px "IBM Plex Mono"';
const BODY_LINE_HEIGHT = 22;
const POINTER_CENTER = "0.5";

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
  const paragraphs = useMemo(
    () => [shortDescription.trim(), ...extractParagraphs(longDescription)],
    [longDescription, shortDescription],
  );

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;

    const element = containerRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    element.style.setProperty("--copy-pointer-x", clampRatio(x).toString());
    element.style.setProperty("--copy-pointer-y", clampRatio(y).toString());
    element.style.setProperty("--copy-pointer-active", "1");
  };

  const handlePointerLeave = () => {
    const element = containerRef.current;
    if (!element) return;

    element.style.setProperty("--copy-pointer-x", POINTER_CENTER);
    element.style.setProperty("--copy-pointer-y", POINTER_CENTER);
    element.style.setProperty("--copy-pointer-active", "0");
  };

  if (shouldReduceMotion) {
    return (
      <div
        className={cn(
          "mb-[var(--spacing-3xl)] columns-1 gap-[var(--spacing-2xl)] text-ink-light lg:columns-2",
          className,
        )}
      >
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="mb-[var(--spacing-lg)] break-inside-avoid-column text-[14px] leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative isolate mb-[var(--spacing-3xl)] columns-1 gap-[var(--spacing-2xl)] text-ink-light lg:columns-2",
        className,
      )}
      style={
        {
          "--copy-pointer-x": POINTER_CENTER,
          "--copy-pointer-y": POINTER_CENTER,
          "--copy-pointer-active": "0",
        } as CSSProperties
      }
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-200"
        style={
          {
            background:
              "radial-gradient(circle at calc(var(--copy-pointer-x, 0.5) * 100%) calc(var(--copy-pointer-y, 0.5) * 100%), color-mix(in srgb, var(--accent) 10%, transparent) 0%, transparent 42%)",
          } as CSSProperties
        }
      />
      {paragraphs.map((paragraph, index) => (
        <MeasuredParagraph key={`${index}-${paragraph}`} text={paragraph} />
      ))}
    </div>
  );
}

function MeasuredParagraph({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [fontsReady, setFontsReady] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });

    resizeObserver.observe(element);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    let isCancelled = false;

    void document.fonts.ready.then(() => {
      if (!isCancelled) {
        setFontsReady(true);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, []);

  const layout = useMemo(() => {
    if (!fontsReady || width <= 0) return null;

    const prepared = prepareWithSegments(text, BODY_FONT);
    return layoutWithLines(prepared, width, BODY_LINE_HEIGHT);
  }, [fontsReady, text, width]);

  if (!layout) {
    return (
      <p
        ref={ref}
        className="mb-[var(--spacing-lg)] break-inside-avoid-column text-[14px] leading-relaxed"
      >
        {text}
      </p>
    );
  }

  return (
    <div
      ref={ref}
      className="relative mb-[var(--spacing-lg)] break-inside-avoid-column"
      style={{ breakInside: "avoid-column" }}
    >
      <p className="sr-only">{text}</p>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[-10px] border border-rule/50 transition-transform duration-200 ease-out"
        style={
          {
            opacity: "calc(0.18 + var(--copy-pointer-active, 0) * 0.55)",
            transform:
              "translate3d(calc((0.5 - var(--copy-pointer-x, 0.5)) * 14px), calc((0.5 - var(--copy-pointer-y, 0.5)) * 10px), 0)",
          } as CSSProperties
        }
      />
      <div className="relative" style={{ height: layout.height }}>
        {layout.lines.map((line, index) => (
          <RenderedLine
            key={`${index}-${line.text}`}
            line={line}
            index={index}
            totalLines={layout.lines.length}
          />
        ))}
      </div>
    </div>
  );
}

function RenderedLine({
  line,
  index,
  totalLines,
}: {
  line: LayoutLine;
  index: number;
  totalLines: number;
}) {
  const center = totalLines === 1 ? 0 : index / (totalLines - 1) - 0.5;
  const baseShift = 4 + Math.abs(center) * 10;
  const ghostShift = 10 + Math.abs(center) * 18;
  const verticalShift = 2 + Math.abs(center) * 4;
  const baselineJitter = index % 2 === 0 ? "-0.5px" : "0.5px";
  const top = index * BODY_LINE_HEIGHT;

  return (
    <div className="absolute left-0 right-0" style={{ top }} aria-hidden>
      <span
        className="pointer-events-none absolute left-0 top-0 h-px bg-accent/20 transition-transform duration-150 ease-out"
        style={
          {
            width: `${line.width + 10}px`,
            transform: `translate3d(calc((0.5 - var(--copy-pointer-x, 0.5)) * ${ghostShift}px), 16px, 0)`,
          } as CSSProperties
        }
      />
      <span
        className="absolute left-0 top-0 whitespace-pre text-[14px] leading-[22px] text-accent/18 mix-blend-multiply transition-transform duration-150 ease-out will-change-transform"
        style={
          {
            width: `${line.width}px`,
            transform: `translate3d(calc((var(--copy-pointer-x, 0.5) - 0.5) * ${ghostShift}px), calc((var(--copy-pointer-y, 0.5) - 0.5) * ${verticalShift}px + ${baselineJitter}), 0)`,
          } as CSSProperties
        }
      >
        {line.text}
      </span>
      <span
        className="absolute left-0 top-0 whitespace-pre text-[14px] leading-[22px] text-ink-light transition-transform duration-150 ease-out will-change-transform"
        style={
          {
            width: `${line.width}px`,
            transform: `translate3d(calc((var(--copy-pointer-x, 0.5) - 0.5) * ${baseShift}px), calc((var(--copy-pointer-y, 0.5) - 0.5) * ${verticalShift / 2}px), 0)`,
          } as CSSProperties
        }
      >
        {line.text}
      </span>
    </div>
  );
}

function extractParagraphs(html: string) {
  const matches = html.match(/<p>[\s\S]*?<\/p>/g);
  const rawParagraphs =
    matches?.map((paragraph) => stripHtml(paragraph)) ?? [stripHtml(html)];

  return rawParagraphs.filter(Boolean);
}

function stripHtml(value: string) {
  return decodeHtmlEntities(value.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

function decodeHtmlEntities(value: string) {
  return value
    .replaceAll("&nbsp;", " ")
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function clampRatio(value: number) {
  return Math.min(1, Math.max(0, value));
}
