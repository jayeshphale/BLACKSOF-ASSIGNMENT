"use client";

import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/hero/constants";
import { fadeUp } from "./motion";

export function HeroNavbar() {
  return (
    <motion.header
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="relative z-50 w-full"
    >
      <motion.div className="mx-auto flex h-[88px] max-w-[1280px] items-center justify-between px-6 lg:h-[96px] lg:px-10">
        <motion.a
          href="/"
          className="relative block w-[148px] shrink-0 sm:w-[168px]"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
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
          className="hidden items-center gap-7 xl:gap-9 lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-1 text-[15px] font-medium text-[#4B5563] transition-colors hover:text-[#111827]"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5E7EB] text-[#4B5563] lg:hidden"
          whileTap={{ scale: 0.96 }}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </motion.button>
      </motion.div>
    </motion.header>
  );
}
