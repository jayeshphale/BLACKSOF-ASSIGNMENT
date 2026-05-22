"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type FloatingAlertCardProps = {
  label: string;
  title: string;
  description: string;
  className?: string;
  dataCard?: string;
  layout?: "floating" | "stacked";
};

export function FloatingAlertCard({
  label,
  title,
  description,
  className,
  dataCard,
  layout = "floating",
}: FloatingAlertCardProps) {
  const isFloating = layout === "floating";

  return (
    <article
      data-alert-card={dataCard}
      className={cn(
        "rounded-2xl border border-white/90 px-4 py-3.5",
        "bg-white/95 shadow-[0_16px_48px_rgba(17,24,39,0.14),0_4px_16px_rgba(202,54,4,0.08)] backdrop-blur-[12px]",
        "ring-1 ring-white/60",
        isFloating
          ? "absolute w-[min(100%,300px)] sm:w-[318px] lg:w-[332px]"
          : "relative w-full",
        className,
      )}
    >
      <header className="mb-2 flex items-center gap-2">
        <Image
          src="/assets/smartAlert/alert.png"
          alt=""
          width={20}
          height={20}
          className="h-5 w-5 shrink-0"
        />
        <span className="text-[12px] font-normal text-[#6B7280]">{label}</span>
      </header>
      <h3 className="mb-1.5 text-[13px] leading-[1.35] font-semibold tracking-[0.02em] text-[#CA3604] uppercase">
        {title}
      </h3>
      <p className="line-clamp-2 text-[12px] leading-[1.5] text-[#6B7280]">
        {description}
      </p>
    </article>
  );
}
