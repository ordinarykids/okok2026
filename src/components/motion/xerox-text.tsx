"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, useMemo, useState, useEffect } from "react";

const GLITCH_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

interface XeroxTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  glitch?: boolean;
  staggerDelay?: number;
  once?: boolean;
}

export function XeroxText({
  text,
  as: Tag = "h1",
  className = "",
  glitch = false,
  staggerDelay = 0.025,
  once = true,
}: XeroxTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10%" });
  const shouldReduceMotion = useReducedMotion();
  const [glitchChars, setGlitchChars] = useState<Record<number, string>>({});

  const chars = useMemo(() => text.split(""), [text]);

  useEffect(() => {
    if (!glitch || !isInView || shouldReduceMotion) return;

    const intervals: NodeJS.Timeout[] = [];

    chars.forEach((char, i) => {
      if (char === " ") return;
      const delay = i * staggerDelay * 1000;
      const resolveDelay = delay + 150;

      const timeout = setTimeout(() => {
        const flickerInterval = setInterval(() => {
          setGlitchChars((prev) => ({
            ...prev,
            [i]: GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)],
          }));
        }, 30);

        intervals.push(flickerInterval);

        setTimeout(() => {
          clearInterval(flickerInterval);
          setGlitchChars((prev) => {
            const next = { ...prev };
            delete next[i];
            return next;
          });
        }, resolveDelay - delay);
      }, delay);

      intervals.push(timeout as unknown as NodeJS.Timeout);
    });

    return () => intervals.forEach(clearInterval);
  }, [glitch, isInView, shouldReduceMotion, chars, staggerDelay]);

  if (shouldReduceMotion) {
    return (
      <Tag className={className} ref={ref as React.Ref<HTMLHeadingElement>}>
        {text}
      </Tag>
    );
  }

  return (
    <Tag className={className} ref={ref as React.Ref<HTMLHeadingElement>}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 6 }}
          animate={
            isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }
          }
          transition={{
            duration: 0.1,
            delay: i * staggerDelay,
            ease: "easeOut",
          }}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {glitchChars[i] ?? char}
        </motion.span>
      ))}
    </Tag>
  );
}
