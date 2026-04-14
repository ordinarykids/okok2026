"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface PaperFeedProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  distance?: number;
}

export function PaperFeed({
  children,
  className,
  delay = 0,
  once = true,
  distance = 30,
}: PaperFeedProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-8%" });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ y: distance, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: distance, opacity: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
