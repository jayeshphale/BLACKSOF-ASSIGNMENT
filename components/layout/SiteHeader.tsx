"use client";

import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/hero/constants";
import { fadeUp, premiumEase } from "@/lib/motion/premium";

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 28);
  });

  return (
    <motion.header
      variants={prefersReducedMotion ? undefined : fadeUp}
      initial={prefersReducedMotion ? false : "hidden"}
      animate={prefersReducedMotion ? undefined : "visible"}
      className={[
        "fixed top-0 right-0 left-0 z-50 transition-[background-color,box-shadow,border-color] duration-500",
        scrolled
          ? "border-b border-[#E5E7EB]/70 bg-[#F9FAFB]/85 shadow-[0_10px_40px_-24px_rgba(17,24,39,0.14)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
      style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
    >
      <motion.div
        animate={{ height: scrolled ? 72 : 88 }}
        transition={{ duration: 0.45, ease: premiumEase }}
        className="mx-auto flex max-w-[1280px] items-center justify-between px-6 lg:px-10"
      >
        <motion.a
          href="/"
          className="relative block w-[148px] shrink-0 sm:w-[168px]"
          whileHover={prefersReducedMotion ? undefined : { scale: 1.01 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
          transition={{ duration: 0.28, ease: premiumEase }}
        >
          <Image
            src="/logo.svg"
            alt="DeJoule — Intelligence meets impact"
            width={176}
            height={65}
            className="h-auto w-full"
            priority
          />
        </motion.a>

        <nav
          className="hidden items-center gap-7 lg:flex xl:gap-9"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="relative inline-flex items-center gap-1 text-[15px] font-medium text-[#4B5563] transition-colors hover:text-[#111827]"
              whileHover={prefersReducedMotion ? undefined : { y: -1 }}
              transition={{ duration: 0.22, ease: premiumEase }}
            >
              {link.label}
              {"hasChevron" in link && link.hasChevron ? (
                <ChevronDown className="h-4 w-4 opacity-70" aria-hidden />
              ) : null}
            </motion.a>
          ))}
        </nav>

        <motion.button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5E7EB] bg-white/60 text-[#4B5563] backdrop-blur-sm lg:hidden"
          whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
          transition={{ duration: 0.22, ease: premiumEase }}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </motion.button>
      </motion.div>
    </motion.header>
  );
}
