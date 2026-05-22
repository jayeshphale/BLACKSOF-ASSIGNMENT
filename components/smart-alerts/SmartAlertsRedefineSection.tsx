"use client";

import Image from "next/image";
import { STICKY_INTRO, STICKY_STEPS } from "@/lib/smart-alerts/constants";
import { DESIGN_TOKENS } from "@/lib/design/tokens";

export function SmartAlertsRedefineSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:hidden">
      <div className={DESIGN_TOKENS.container}>
        <h3 className="text-[26px] leading-[1.25] font-light text-black">
          {STICKY_INTRO.title}
        </h3>
        <div className="mt-5 space-y-4">
          {STICKY_INTRO.paragraphs.map((p) => (
            <p key={p.slice(0, 20)} className="text-[14px] leading-[1.65] text-[#6B7280]">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-10 space-y-10">
          {STICKY_STEPS.map((step) => (
            <article key={step.id} className="border-t border-[#E5E7EB] pt-8">
              <h4 className="text-[20px] font-normal text-[#CA3604]">{step.label}</h4>
              <p className="mt-3 text-[14px] leading-[1.65] text-[#4B5563]">
                {step.description}
              </p>
              <div className="relative mx-auto mt-6 aspect-[4/5] w-full max-w-[320px]">
                <Image
                  src={step.phoneImage}
                  alt={step.label}
                  fill
                  className="object-contain"
                  sizes="320px"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
