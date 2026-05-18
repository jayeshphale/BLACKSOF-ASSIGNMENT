"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { fadeUp, floatAnimation } from "./motion";

export type SmartAlertCardProps = {
  title: string;
  description: string;
  className?: string;
  floatDelay?: number;
  floatAmplitude?: number;
  layout?: "floating" | "stacked";
};

function CardSurface({
  title,
  description,
  floatDelay,
  floatAmplitude,
  animateFloat,
  prefersReducedMotion,
}: {
  title: string;
  description: string;
  floatDelay: number;
  floatAmplitude: number;
  animateFloat: boolean;
  prefersReducedMotion: boolean;
}) {
  const inner = (
    <motion.div
      animate={animateFloat ? floatAnimation(floatDelay, floatAmplitude) : undefined}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -4,
              scale: 1.02,
              boxShadow: "0 24px 48px rgba(17, 24, 39, 0.12)",
              transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            }
      }
      className="rounded-2xl border border-[#E5E7EB]/80 bg-white px-5 py-4 shadow-[0_8px_30px_rgba(17,24,39,0.08)]"
    >
      <header className="mb-2.5 flex items-center gap-2">
        <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[#E54D2E]">
          <AlertTriangle
            className="h-4 w-4 fill-[#E54D2E] stroke-white"
            strokeWidth={1.5}
          />
        </span>
        <span className="text-[12px] font-medium text-[#6B7280]">
          Smart alert from Dejoule
        </span>
      </header>
      <h3 className="mb-2 text-[13px] leading-[1.35] font-bold tracking-[0.01em] text-[#E54D2E] uppercase">
        {title}
      </h3>
      <p className="text-[12px] leading-[1.55] text-[#6B7280]">{description}</p>
    </motion.div>
  );

  return inner;
}

export function SmartAlertCard({
  title,
  description,
  className = "",
  floatDelay = 0,
  floatAmplitude = 10,
  layout = "floating",
}: SmartAlertCardProps) {
  const isFloating = layout === "floating";
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className={
        isFloating
          ? `absolute ${className}`
          : `relative w-full ${className}`
      }
    >
      <CardSurface
        title={title}
        description={description}
        floatDelay={floatDelay}
        floatAmplitude={floatAmplitude}
        animateFloat={isFloating && floatAmplitude > 0}
        prefersReducedMotion={prefersReducedMotion}
      />
    </motion.article>
  );
}
