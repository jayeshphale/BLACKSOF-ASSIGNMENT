"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FOOTER_COPY } from "@/lib/footer/constants";
import { staggerItem } from "@/lib/motion/premium";

export function FooterBrand() {
  return (
    <motion.div
      variants={staggerItem}
      className="mx-auto max-w-[220px] text-center lg:mx-0 lg:text-left"
    >
      <motion.a
        href="/"
        className="relative mx-auto block w-[168px] sm:w-[176px] lg:mx-0"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/assets/global/logo.svg"
          alt="DeJoule"
          width={176}
          height={65}
          className="h-auto w-full"
        />
      </motion.a>
      <p className="mt-4 text-[10px] font-medium tracking-[0.2em] text-[#9CA3AF] uppercase sm:mt-5 sm:text-[11px]">
        {FOOTER_COPY.tagline}
      </p>
    </motion.div>
  );
}
