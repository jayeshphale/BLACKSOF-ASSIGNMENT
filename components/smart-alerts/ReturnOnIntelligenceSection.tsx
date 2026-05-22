"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { RETURN_ON_INTELLIGENCE } from "@/lib/smart-alerts/constants";
import { DESIGN_TOKENS } from "@/lib/design/tokens";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function ReturnOnIntelligenceEyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="inline-grid grid-cols-3 gap-[3px]" aria-hidden>
        {Array.from({ length: 9 }).map((_, i) => (
          <span
            key={i}
            className="size-[3px] rounded-full bg-[#E54D2E]"
          />
        ))}
      </span>
      <span className="text-[11px] font-semibold tracking-[0.18em] text-[#E65F41] uppercase sm:text-[12px]">
        {label}
      </span>
    </div>
  );
}

export function ReturnOnIntelligenceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const pin = pinRef.current;
      const slides = slideRefs.current.filter(Boolean) as HTMLDivElement[];
      if (!section || !pin || slides.length === 0) return;

      const slideCount = slides.length;
      const slidePhase = 1 / (slideCount + 0.5);

      gsap.set(slides, { autoAlpha: 0, y: 24, visibility: "hidden" });
      gsap.set(slides[0], { autoAlpha: 1, y: 0, visibility: "visible" });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", force3D: true },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + Math.round(window.innerHeight * 1.1),
          pin,
          pinSpacing: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      slides.forEach((slide, index) => {
        if (index === 0) return;
        const t = index * slidePhase;
        const prev = index - 1;

        tl.to(
          slides[prev],
          { autoAlpha: 0, y: -32, visibility: "hidden", duration: slidePhase * 0.8 },
          t,
        );
        tl.fromTo(
          slide,
          { autoAlpha: 0, y: 32, visibility: "hidden" },
          { autoAlpha: 1, y: 0, visibility: "visible", duration: slidePhase * 0.8 },
          t + slidePhase * 0.05,
        );
      });

      const onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);
      const ro = new ResizeObserver(() => ScrollTrigger.refresh());
      ro.observe(section);

      return () => {
        window.removeEventListener("load", onLoad);
        ro.disconnect();
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white"
      aria-labelledby="return-on-intelligence-heading"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 18% 0%, rgba(229, 77, 46, 0.04) 0%, transparent 55%), radial-gradient(ellipse 55% 45% at 88% 100%, rgba(249, 250, 251, 0.95) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div
        className={`relative ${DESIGN_TOKENS.containerWide} py-20 sm:py-24 lg:py-28 xl:py-32`}
      >
        <div ref={pinRef} className="relative min-h-[560px] lg:min-h-[640px]">
          <div className="relative overflow-hidden min-h-[560px] lg:min-h-[640px]">
            {[
              {
                id: "slide-1",
                content: (
                  <>
                    <ReturnOnIntelligenceEyebrow label={RETURN_ON_INTELLIGENCE.eyebrow} />
                    <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-14 xl:gap-20">
                      <h2
                        id="return-on-intelligence-heading"
                        className="max-w-[640px] text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.12] font-medium tracking-[-0.03em] text-[#111827]"
                      >
                        {RETURN_ON_INTELLIGENCE.headlineLead}
                        <span className="font-bold">
                          {RETURN_ON_INTELLIGENCE.headlineBold}
                        </span>
                      </h2>

                      <p className="max-w-[480px] text-[15px] leading-[1.65] text-[#4B5563] sm:text-base sm:leading-[1.7] lg:pb-1">
                        {RETURN_ON_INTELLIGENCE.descriptionLead}
                        <span className="font-semibold text-[#374151]">
                          {RETURN_ON_INTELLIGENCE.descriptionBold}
                        </span>
                      </p>
                    </div>
                  </>
                ),
              },
              {
                id: "slide-2",
                content: (
                  <>
                    <ReturnOnIntelligenceEyebrow label={RETURN_ON_INTELLIGENCE.eyebrow} />
                    <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-14 xl:gap-20">
                      <div className="max-w-[640px] space-y-6">
                        <h2 className="text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.12] font-medium tracking-[-0.03em] text-[#111827]">
                          {RETURN_ON_INTELLIGENCE.headlineLead}
                          <span className="font-bold">
                            {RETURN_ON_INTELLIGENCE.headlineBold}
                          </span>
                        </h2>
                        <div className="grid gap-3 sm:grid-cols-3">
                          {[
                            "Energy",
                            "Uptime",
                            "User satisfaction",
                          ].map((item) => (
                            <div
                              key={item}
                              className="rounded-3xl border border-[#E5E7EB] bg-white/90 px-4 py-3 text-left shadow-sm"
                            >
                              <p className="text-[11px] uppercase tracking-[0.22em] text-[#9CA3AF]">
                                VALUE
                              </p>
                              <p className="mt-2 text-sm font-semibold text-[#111827]">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <p className="max-w-[480px] text-[15px] leading-[1.65] text-[#4B5563] sm:text-base sm:leading-[1.7] lg:pb-1">
                        {RETURN_ON_INTELLIGENCE.descriptionLead}
                        <span className="font-semibold text-[#374151]">
                          {RETURN_ON_INTELLIGENCE.descriptionBold}
                        </span>
                      </p>
                    </div>
                  </>
                ),
              },
              {
                id: "slide-3",
                content: (
                  <>
                    <ReturnOnIntelligenceEyebrow label={RETURN_ON_INTELLIGENCE.eyebrow} />
                    <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-14 xl:gap-20">
                      <div className="max-w-[640px] rounded-[2rem] border border-[#E5E7EB] bg-[#F9FAFB]/90 p-8 shadow-[0_28px_80px_rgba(15,23,42,0.08)]">
                        <h2 className="text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.12] font-medium tracking-[-0.03em] text-[#111827]">
                          {RETURN_ON_INTELLIGENCE.headlineLead}
                          <span className="font-bold">
                            {RETURN_ON_INTELLIGENCE.headlineBold}
                          </span>
                        </h2>
                        <p className="mt-6 text-[15px] leading-[1.65] text-[#4B5563] sm:text-base sm:leading-[1.7]">
                          {RETURN_ON_INTELLIGENCE.descriptionLead}
                          <span className="font-semibold text-[#374151]">
                            {RETURN_ON_INTELLIGENCE.descriptionBold}
                          </span>
                        </p>
                      </div>

                      <div className="relative max-w-[480px]">
                        <div className="absolute inset-x-0 top-0 h-24 rounded-full bg-[#FDE8DD] opacity-80 blur-2xl" />
                        <div className="relative rounded-[2rem] border border-[#E5E7EB] bg-white/95 p-8 shadow-[0_20px_48px_rgba(15,23,42,0.08)]">
                          <p className="text-[13px] uppercase tracking-[0.22em] text-[#9CA3AF]">
                            Storytelling
                          </p>
                          <p className="mt-4 text-[15px] leading-[1.75] text-[#4B5563]">
                            Smooth scroll motion reveals the payoff of intelligent buildings, one narrative frame at a time.
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ),
              },
            ].map((slide, index) => (
              <div
                key={slide.id}
                ref={(el) => {
                  slideRefs.current[index] = el;
                }}
                className="absolute inset-0"
              >
                {slide.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
