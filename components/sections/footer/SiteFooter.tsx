"use client";

import { DESIGN_TOKENS } from "@/lib/design/tokens";
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_COPY,
  FOOTER_INSIDE,
  FOOTER_LEGAL_LINKS,
  FOOTER_OUR_EDGE,
  FOOTER_SOCIAL_LINKS,
} from "@/lib/footer/constants";
import { FooterBrand } from "./FooterBrand";
import { FooterColumn } from "./FooterColumn";
import { FooterLink } from "./FooterLink";

export function SiteFooter() {
  return (
    <footer className="bg-[#F3F4F6]" aria-label="Site footer">
      <div className="overflow-hidden rounded-t-[2rem] bg-[#F3F4F6] sm:rounded-t-[2.75rem] lg:rounded-t-[3rem]">
        <div className={`${DESIGN_TOKENS.containerWide} py-14 sm:py-16 lg:py-20`}>
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            <FooterBrand />

            <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 lg:gap-x-14">
              <FooterColumn title="Our Edge" links={FOOTER_OUR_EDGE} />
              <FooterColumn title="Inside DeJoule" links={FOOTER_INSIDE} />
              <FooterColumn title="Social" links={FOOTER_SOCIAL_LINKS} social />
            </div>
          </div>

          <div className="mt-12 grid gap-6 border-t border-[#E5E7EB]/80 pt-8 sm:mt-16 lg:grid-cols-[1fr_auto] lg:items-center">
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {FOOTER_COMPANY_LINKS.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  <span className="text-[13px] text-[#6B7280] hover:text-black">
                    {link.label}
                  </span>
                </FooterLink>
              ))}
            </nav>

            <div className="flex flex-col gap-3 sm:items-end">
              <p className="text-[12px] text-[#9CA3AF]">{FOOTER_COPY.copyright}</p>
              <div className="flex gap-4">
                {FOOTER_LEGAL_LINKS.map((link) => (
                  <FooterLink key={link.label} href={link.href}>
                    <span className="text-[12px] text-[#9CA3AF]">{link.label}</span>
                  </FooterLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
