"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ALERTS_IN_ACTION, ISSUE_CARDS } from "@/lib/smart-alerts/constants";
import { DESIGN_TOKENS } from "@/lib/design/tokens";
import { cn } from "@/lib/utils";

export function AlertsInActionSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="blade-bottom-padding-sm relative z-[999] bg-white sm:mt-[-8%] 2xl:mt-[-5%]">
      <div className={`${DESIGN_TOKENS.containerWide} py-14 sm:py-16 lg:py-20`}>
        <div className="mx-auto max-w-[800px] text-center">
          <p className="text-[13px] font-medium tracking-[0.12em] text-[#CA3604] uppercase">
            {ALERTS_IN_ACTION.eyebrow}
          </p>
          <h2 className="mt-3 text-[32px] leading-[1.2] font-light text-black sm:text-[40px] lg:text-[48px]">
            No matter the issue,{" "}
            <span className="font-normal text-[#CA3604]">Smart Alerts</span> always
            have your back!
          </h2>
          <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-[1.7] font-light text-[#4B5563]">
            {ALERTS_IN_ACTION.description}
          </p>
        </div>

        <div className="relative mt-14 lg:mt-16">
          <Swiper
            modules={[Navigation]}
            onSwiper={(s) => {
              swiperRef.current = s;
            }}
            onSlideChange={(s) => setActiveIndex(s.activeIndex)}
            spaceBetween={24}
            slidesPerView={1.15}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 28 },
            }}
            className="!overflow-visible"
          >
            {ISSUE_CARDS.map((card, index) => (
              <SwiperSlide key={card.id}>
                <button
                  type="button"
                  onClick={() => swiperRef.current?.slideTo(index)}
                  className={cn(
                    "group w-full text-left transition-opacity duration-300",
                    activeIndex === index ? "opacity-100" : "opacity-70 hover:opacity-90",
                  )}
                >
                  <div className="overflow-hidden rounded-2xl bg-[#F3F4F6]">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 80vw, 320px"
                      />
                    </div>
                  </div>
                  <h4 className="mt-4 text-[18px] font-normal text-black">
                    {card.title}
                  </h4>
                  <p className="mt-2 text-[14px] leading-[1.6] font-light text-[#6B7280]">
                    {card.description}
                  </p>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E5E7EB] text-[#4B5563] transition-colors hover:border-[#CA3604] hover:text-[#CA3604]"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E5E7EB] text-[#4B5563] transition-colors hover:border-[#CA3604] hover:text-[#CA3604]"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
