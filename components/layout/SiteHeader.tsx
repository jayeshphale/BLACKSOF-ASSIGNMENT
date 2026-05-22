"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { SITE_NAV } from "@/lib/smart-alerts/constants";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[#E5E7EB]/60 bg-white/90 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.08)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 lg:h-[80px] lg:px-10 xl:px-16">
        <Link href="/" className="relative block w-[140px] shrink-0 sm:w-[160px]">
          <Image
            src="/assets/global/logo.svg"
            alt="DeJoule"
            width={176}
            height={65}
            className="h-auto w-full"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex xl:gap-8"
          aria-label="Primary"
        >
          {SITE_NAV.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-1 text-[15px] font-normal text-[#4B5563] transition-colors duration-200 hover:text-black"
            >
              {link.label}
              {"hasDropdown" in link && link.hasDropdown ? (
                <ChevronDown className="h-4 w-4 opacity-60" aria-hidden />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden rounded-full bg-[#CA3604] px-6 py-2.5 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-[#B53004] sm:inline-flex"
          >
            Let&apos;s Connect
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5E7EB] text-[#4B5563] lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
