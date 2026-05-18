"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { MOTION } from "@/lib/motion/tokens";

type ParallaxFloatProps = {
  children: ReactNode;
  className?: string;
  amount?: number;
  offset?: [string, string];
};

export function ParallaxFloat({
  children,
  className,
  amount = MOTION.parallax.subtle,
  offset = ["start end", "end start"],
}: ParallaxFloatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);

  if (prefersReducedMotion) {
    return <motion.div className={className}>{children}</motion.div>;
  }

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
