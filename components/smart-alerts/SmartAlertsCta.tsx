"use client";

import { SMART_ALERTS_CTA } from "@/lib/smart-alerts/constants";
import { DESIGN_TOKENS } from "@/lib/design/tokens";

export function SmartAlertsCta() {
  return (
    <section className="bg-[#F9FAFB] py-20 sm:py-24 lg:py-28">
      <div className={`${DESIGN_TOKENS.containerWide} text-center`}>
        <h2 className="mx-auto max-w-[900px] text-[32px] leading-[1.2] font-light text-black sm:text-[40px] lg:text-[52px]">
          {SMART_ALERTS_CTA.title}
        </h2>
        <button
          type="button"
          className="mt-8 inline-flex rounded-full bg-[#CA3604] px-8 py-3.5 text-[16px] font-medium text-white transition-colors duration-200 hover:bg-[#B53004]"
        >
          {SMART_ALERTS_CTA.button}
        </button>
      </div>
    </section>
  );
}
