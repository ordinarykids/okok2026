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
const POINTER_FALLOFF_X = 220;
const POINTER_FALLOFF_Y = 92;

interface CopyPointerState {
  x: number;
  y: number;
  active: boolean;
}

const INACTIVE_POINTER: CopyPointerState = {
  x: 0,
  y: 0,
  active: false,
};

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
  const frameRef = useRef<number | null>(null);
  const nextPointerRef = useRef(INACTIVE_POINTER);
  const [pointer, setPointer] = useState(INACTIVE_POINTER);
  const paragraphs = useMemo(
    () => [shortDescription.trim(), ...extractParagraphs(longDescription)],
    [longDescription, shortDescription],
  );

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const queuePointerUpdate = (nextPointer: CopyPointerState) => {
    nextPointerRef.current = nextPointer;

    if (frameRef.current !== null) return;

    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null;
      setPointer(nextPointerRef.current);
    });
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;

    queuePointerUpdate({
      x: event.clientX,
      y: event.clientY,
      active: true,
    });
  };

  const handlePointerLeave = () => {
    queuePointerUpdate({
      ...nextPointerRef.current,
      active: false,
    });
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
      className={cn(
        "relative isolate mb-[var(--spacing-3xl)] columns-1 gap-[var(--spacing-2xl)] text-ink-light lg:columns-2",
        className,
      )}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {paragraphs.map((paragraph, index) => (
        <MeasuredParagraph
          key={`${index}-${paragraph}`}
          text={paragraph}
          pointer={pointer}
        />
      ))}
    </div>
  );
}

function MeasuredParagraph({
  text,
  pointer,
}: {
  text: string;
  pointer: CopyPointerState;
}) {
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

  const localPointer = getLocalPointer(ref.current, pointer);

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
      {localPointer && (
        <div
          aria-hidden
          className="pointer-events-none absolute left-[-6px] right-[-6px] rounded-full transition-opacity duration-75"
          style={
            {
              top: `${clampNumber(localPointer.y - BODY_LINE_HEIGHT * 1.4, -12, layout.height)}px`,
              height: `${BODY_LINE_HEIGHT * 2.2}px`,
              opacity: 0.72,
              background:
                "linear-gradient(180deg, transparent 0%, color-mix(in srgb, var(--rule) 55%, transparent) 24%, color-mix(in srgb, var(--ink) 14%, transparent) 50%, color-mix(in srgb, var(--rule) 40%, transparent) 76%, transparent 100%)",
            } as CSSProperties
          }
        />
      )}
      <div className="relative" style={{ height: layout.height }}>
        {layout.lines.map((line, index) => (
          <RenderedLine
            key={`${index}-${line.text}`}
            line={line}
            index={index}
            totalLines={layout.lines.length}
            paragraphWidth={width}
            pointer={localPointer}
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
  paragraphWidth,
  pointer,
}: {
  line: LayoutLine;
  index: number;
  totalLines: number;
  paragraphWidth: number;
  pointer: { x: number; y: number; width: number; height: number } | null;
}) {
  const top = index * BODY_LINE_HEIGHT;
  const disruption = getLineDisruption({
    line,
    index,
    totalLines,
    paragraphWidth,
    top,
    pointer,
  });
  const baseTextStyle = {
    width: `${line.width}px`,
    letterSpacing: `${disruption.letterSpacing}em`,
  } as CSSProperties;

  return (
    <div className="absolute left-0 right-0" style={{ top }} aria-hidden>
      <span
        className="absolute left-0 top-0 whitespace-pre text-[14px] leading-[22px] text-ink-light/90 transition-opacity duration-75 ease-out"
        style={baseTextStyle}
      >
        {line.text}
      </span>
      <span
        className="pointer-events-none absolute left-0 top-0 h-px bg-ink transition-[transform,opacity] duration-75 ease-out"
        style={
          {
            width: `${line.width + 10}px`,
            opacity: disruption.intensity * 0.28,
            transform: `translate3d(${disruption.echoX * 0.8}px, 15px, 0) scaleX(${1 + disruption.intensity * 0.28})`,
          } as CSSProperties
        }
      />
      <span
        className="absolute left-0 top-0 whitespace-pre text-[14px] leading-[22px] text-ink transition-[transform,opacity,filter] duration-75 ease-out will-change-transform"
        style={
          {
            ...baseTextStyle,
            opacity: 0.06 + disruption.intensity * 0.34,
            filter: `blur(${disruption.intensity * 1.15}px)`,
            transform: `translate3d(${disruption.echoX}px, ${disruption.echoY}px, 0)`,
          } as CSSProperties
        }
      >
        {line.text}
      </span>
      <DisruptedSlice
        text={line.text}
        clipPath="inset(0 0 62% 0)"
        transformX={disruption.topX}
        transformY={disruption.topY}
        skew={disruption.skew * 0.45}
        opacity={0.12 + disruption.intensity * 0.82}
        style={baseTextStyle}
      />
      <DisruptedSlice
        text={line.text}
        clipPath="inset(30% 0 28% 0)"
        transformX={disruption.midX}
        transformY={disruption.midY}
        skew={-disruption.skew}
        opacity={0.08 + disruption.intensity * 0.56}
        style={baseTextStyle}
      />
      <DisruptedSlice
        text={line.text}
        clipPath="inset(70% 0 0 0)"
        transformX={disruption.bottomX}
        transformY={disruption.bottomY}
        skew={disruption.skew * 1.15}
        opacity={0.1 + disruption.intensity * 0.74}
        style={baseTextStyle}
      />
    </div>
  );
}

function DisruptedSlice({
  text,
  clipPath,
  transformX,
  transformY,
  skew,
  opacity,
  style,
}: {
  text: string;
  clipPath: string;
  transformX: number;
  transformY: number;
  skew: number;
  opacity: number;
  style: CSSProperties;
}) {
  return (
    <span
      className="absolute left-0 top-0 whitespace-pre text-[14px] leading-[22px] text-ink transition-[transform,opacity] duration-75 ease-out will-change-transform"
      style={{
        ...style,
        clipPath,
        opacity,
        transform: `translate3d(${transformX}px, ${transformY}px, 0) skewX(${skew}deg)`,
      }}
    >
      {text}
    </span>
  );
}

function getLocalPointer(
  element: HTMLDivElement | null,
  pointer: CopyPointerState,
) {
  if (!element || !pointer.active) return null;

  const rect = element.getBoundingClientRect();
  const localPointer = {
    x: pointer.x - rect.left,
    y: pointer.y - rect.top,
    width: rect.width,
    height: rect.height,
  };

  const withinActiveZone =
    localPointer.x >= -POINTER_FALLOFF_X &&
    localPointer.x <= rect.width + POINTER_FALLOFF_X &&
    localPointer.y >= -POINTER_FALLOFF_Y &&
    localPointer.y <= rect.height + POINTER_FALLOFF_Y;

  return withinActiveZone ? localPointer : null;
}

function getLineDisruption({
  line,
  index,
  totalLines,
  paragraphWidth,
  top,
  pointer,
}: {
  line: LayoutLine;
  index: number;
  totalLines: number;
  paragraphWidth: number;
  top: number;
  pointer: { x: number; y: number; width: number; height: number } | null;
}) {
  if (!pointer) {
    return {
      intensity: 0,
      letterSpacing: 0,
      echoX: 0,
      echoY: 0,
      topX: 0,
      topY: 0,
      midX: 0,
      midY: 0,
      bottomX: 0,
      bottomY: 0,
      skew: 0,
    };
  }

  const lineCenter = top + BODY_LINE_HEIGHT / 2;
  const verticalDistance = Math.abs(pointer.y - lineCenter);
  const horizontalDistance =
    pointer.x < 0 ? Math.abs(pointer.x) : Math.max(0, pointer.x - paragraphWidth);
  const verticalInfluence = clampUnit(1 - verticalDistance / POINTER_FALLOFF_Y);
  const horizontalInfluence = clampUnit(1 - horizontalDistance / POINTER_FALLOFF_X);
  const intensity = verticalInfluence * horizontalInfluence;
  const columnCenter = totalLines === 1 ? 0 : index / (totalLines - 1) - 0.5;
  const direction = paragraphWidth
    ? clampNumber((pointer.x / paragraphWidth - 0.5) * 2, -1, 1)
    : 0;
  const wave = Math.sin(index * 0.92 + pointer.x * 0.045 + pointer.y * 0.08);
  const scatter = intensity * (18 + Math.abs(columnCenter) * 10 + Math.abs(wave) * 12);
  const repel = -direction * scatter;

  return {
    intensity,
    letterSpacing: intensity * 0.04,
    echoX: repel * 3.1 + wave * 18,
    echoY: (index % 3 === 0 ? -1 : 1) * intensity * 4.2,
    topX: repel * 1.3 + wave * 12,
    topY: -intensity * 3.8,
    midX: -repel * 1.7 - wave * 9,
    midY: wave * 2.8,
    bottomX: repel * 2 + wave * 5,
    bottomY: intensity * 4.1,
    skew: (index % 2 === 0 ? -1 : 1) * intensity * 10,
  };
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

function clampUnit(value: number) {
  return clampNumber(value, 0, 1);
}

function clampNumber(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}
