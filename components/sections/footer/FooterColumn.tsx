"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/lib/motion/premium";
import { FooterLink } from "./FooterLink";
import { FooterSocialIcon } from "./FooterSocialIcon";

type FooterLinkItem = {
  label: string;
  href: string;
  icon?: "youtube" | "linkedin" | "x" | "instagram";
};

type FooterColumnProps = {
  title: string;
  links: readonly FooterLinkItem[];
  social?: boolean;
};

export function FooterColumn({ title, links, social = false }: FooterColumnProps) {
  return (
    <motion.div variants={staggerItem} className="min-w-[140px]">
      <p className="text-[11px] font-semibold tracking-[0.14em] text-[#CA3604] uppercase sm:text-[12px]">
        {title}
      </p>
      <ul className="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <FooterLink
              href={link.href}
              icon={
                social && link.icon ? (
                  <FooterSocialIcon name={link.icon} />
                ) : undefined
              }
            >
              {link.label}
            </FooterLink>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
