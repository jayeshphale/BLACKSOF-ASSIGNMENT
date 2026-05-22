"use client";

import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const HEADLINE =
  "Your building's brain. Your trusted operations partner.".split("");

export function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);

  useGSAP(
    () => {
      const letters = lettersRef.current.filter(Boolean);
      if (!letters.length) return;

      gsap.from(letters, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.02,
        ease: "power3.out",
        delay: 0.15,
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#F9FAFB] pt-[88px]"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.9) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-[1280px] flex-col items-center justify-center px-6 pb-20 text-center lg:px-10">
        <h1 className="max-w-[1000px] text-[36px] leading-[1.15] font-medium tracking-tight text-black sm:text-[48px] lg:text-[56px] xl:text-[64px] xl:leading-[1.1]">
          {HEADLINE.map((char, i) => (
            <span
              key={`${char}-${i}`}
              ref={(el) => {
                if (el) lettersRef.current[i] = el;
              }}
              className="inline-block"
              style={{ whiteSpace: char === " " ? "pre" : undefined }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p className="mx-auto mt-6 max-w-[640px] text-[16px] leading-[1.65] font-light text-[#4B5563] lg:text-[18px]">
          Not just another building management system, but a 24x7 ally, unlocking
          your building&apos;s true potential and running it at peak efficiency,
          every operational minute, for years to come.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-6 py-3 text-[15px] font-medium text-[#111827] shadow-sm transition-all duration-200 hover:border-[#CA3604]/30 hover:shadow-md"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#CA3604] text-white">
              ▶
            </span>
            Play video
          </button>
          <Link
            href="/smart-alerts"
            className="text-[15px] font-medium text-[#CA3604] underline-offset-4 transition-colors hover:underline"
          >
            Explore Smart Alerts
          </Link>
        </div>

        <div className="relative mx-auto mt-16 w-full max-w-[900px]">
          <Image
            src="/assets/smartAlerts/afdd/multi-channel.png"
            alt="DeJoule platform"
            width={1200}
            height={900}
            className="h-auto w-full opacity-90"
            priority
            sizes="(max-width: 1280px) 90vw, 900px"
          />
        </div>
      </div>
    </section>
  );
}
