"use client";

import type { ReactNode } from "react";
import { SmoothScrollProvider } from "./SmoothScrollProvider";

type SiteProvidersProps = {
  children: ReactNode;
};

export function SiteProviders({ children }: SiteProvidersProps) {
  return <SmoothScrollProvider>{children}</SmoothScrollProvider>;
}
