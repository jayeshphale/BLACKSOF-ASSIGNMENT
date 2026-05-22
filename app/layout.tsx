import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteProviders } from "@/components/providers/SiteProviders";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-worksans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DeJoule | Intelligent Building Management System",
  description:
    "Not just another building management system, but a 24x7 ally for peak building efficiency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${workSans.variable} h-full`}>
      <body className="min-h-full bg-[#F9FAFB] font-sans text-black antialiased">
        <SiteProviders>
          <SiteHeader />
          {children}
        </SiteProviders>
      </body>
    </html>
  );
}
