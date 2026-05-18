"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroHeadline } from "./HeroHeadline";
import { HeroPhoneVisual } from "./HeroPhoneVisual";
import { fadeUp } from "./motion";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#F9FAFB] pt-[88px] pb-16 sm:pb-20 lg:pt-[96px] lg:pb-24"
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% 0%, rgba(255,255,255,0.95) 0%, rgba(249,250,251,0.6) 45%, #F3F4F6 100%)",
        }}
        aria-hidden
      />

      <motion.div
        initial={prefersReducedMotion ? false : "hidden"}
        animate={prefersReducedMotion ? undefined : "visible"}
        variants={fadeUp}
        className="relative"
      >
        <motion.div className="pt-6 sm:pt-8 lg:pt-10">
          <HeroHeadline />
          <HeroPhoneVisual />
        </motion.div>
      </motion.div>
    </section>
  );
}
