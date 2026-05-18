"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { premiumEase } from "@/lib/motion/premium";

type FooterLinkProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
};

export function FooterLink({ href, children, icon }: FooterLinkProps) {
  return (
    <motion.a
      href={href}
      className="group inline-flex items-center gap-2.5 text-[14px] leading-snug font-normal text-[#525252] transition-colors hover:text-[#111827] sm:text-[15px]"
      whileHover={{ x: 2 }}
      transition={{ duration: 0.3, ease: premiumEase }}
    >
      {icon ? (
        <span className="text-[#6B7280] transition-colors group-hover:text-[#E54D2E]">
          {icon}
        </span>
      ) : null}
      <span>{children}</span>
    </motion.a>
  );
}
