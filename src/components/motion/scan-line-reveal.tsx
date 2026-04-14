"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ScanLineRevealProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  once?: boolean;
  showScanLine?: boolean;
}

export function ScanLineReveal({
  children,
  className,
  duration = 0.8,
  delay = 0,
  once = true,
  showScanLine = true,
}: ScanLineRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-5%" });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={
          isInView
            ? { clipPath: "inset(0 0 0% 0)" }
            : { clipPath: "inset(0 0 100% 0)" }
        }
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
      {showScanLine && (
        <motion.div
          className="pointer-events-none absolute left-0 right-0 h-[2px] bg-ink/10"
          initial={{ top: "0%" }}
          animate={isInView ? { top: "100%" } : { top: "0%" }}
          transition={{
            duration,
            delay,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      )}
    </div>
  );
}
