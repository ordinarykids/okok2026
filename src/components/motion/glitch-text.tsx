"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
  children: React.ReactNode;
  as?: "span" | "div" | "p" | "h1" | "h2" | "h3" | "h4";
  className?: string;
}

export function GlitchText({
  children,
  as: Tag = "span",
  className,
}: GlitchTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion.create(Tag);

  if (shouldReduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={cn("inline-block", className)}
      whileHover={{
        skewX: [-2, 1, -1, 0],
        x: [2, -1, 1, 0],
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </MotionTag>
  );
}
