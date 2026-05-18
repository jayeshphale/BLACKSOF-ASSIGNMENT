"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DESIGN_TOKENS } from "@/lib/design/tokens";
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_COPY,
  FOOTER_LEGAL_LINKS,
  FOOTER_SOCIAL_LINKS,
  FOOTER_SOLUTIONS_LINKS,
} from "@/lib/footer/constants";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportReveal,
} from "@/lib/motion/premium";
import { FooterBrand } from "./FooterBrand";
import { FooterColumn } from "./FooterColumn";
import { FooterLink } from "./FooterLink";

export function SiteFooter() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer className="bg-[#F9FAFB]" aria-label="Site footer">
      <motion.div
        variants={prefersReducedMotion ? fadeUp : staggerContainer}
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={viewportReveal}
        className="overflow-hidden rounded-t-[2rem] bg-[#F3F4F6] sm:rounded-t-[2.75rem] lg:rounded-t-[3.25rem]"
      >
        <div
          className={`${DESIGN_TOKENS.container} py-14 sm:py-16 lg:py-20`}
        >
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16 xl:gap-24">
            <FooterBrand />

            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-12 lg:gap-x-14 xl:gap-x-20">
              <FooterColumn title="COMPANY" links={FOOTER_COMPANY_LINKS} />
              <FooterColumn title="SOLUTIONS" links={FOOTER_SOLUTIONS_LINKS} />
              <FooterColumn
                title="SOCIAL"
                links={FOOTER_SOCIAL_LINKS}
                social
              />
            </div>
          </div>

          <motion.div
            variants={staggerItem}
            className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[#E5E7EB]/80 pt-8 sm:mt-16 sm:flex-row sm:items-center lg:mt-20 lg:pt-10"
          >
            <p className="text-[12px] text-[#9CA3AF] sm:text-[13px]">
              {FOOTER_COPY.copyright}
            </p>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-[#9CA3AF] sm:text-[13px]">
              {FOOTER_LEGAL_LINKS.map((link, index) => (
                <span key={link.label} className="inline-flex items-center">
                  {index > 0 ? (
                    <span className="mx-2 text-[#D1D5DB]" aria-hidden>
                      |
                    </span>
                  ) : null}
                  <FooterLink href={link.href}>
                    <span className="text-[12px] sm:text-[13px]">{link.label}</span>
                  </FooterLink>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
