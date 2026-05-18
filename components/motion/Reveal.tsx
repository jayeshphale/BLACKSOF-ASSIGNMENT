"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import {
  blurReveal,
  fadeIn,
  fadeUp,
  imageReveal,
  scaleIn,
  staggerContainer,
  staggerItem,
  viewportReveal,
} from "@/lib/motion/premium";

const variantMap = {
  fadeUp,
  fadeIn,
  scaleIn,
  blurReveal,
  imageReveal,
  stagger: staggerContainer,
  staggerItem,
} as const;

type RevealVariant = keyof typeof variantMap;

type RevealProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
};

export function Reveal({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  ...props
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const variants = variantMap[variant];

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportReveal}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
