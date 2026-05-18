"use client";

import { motion, useReducedMotion } from "framer-motion";
import { imageReveal, viewportReveal } from "@/lib/motion/premium";
import type { ReactNode } from "react";

type ImageRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ImageReveal({ children, className, delay = 0 }: ImageRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={imageReveal}
      initial="hidden"
      whileInView="visible"
      viewport={viewportReveal}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
