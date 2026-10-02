import Hero from "@/components/journaling/Hero";
import Pain from "@/components/journaling/Pain";
import Bridge from "@/components/journaling/Bridge";
import Method from "@/components/journaling/Method";
import Program from "@/components/journaling/Program";
import FirstSession from "@/components/journaling/FirstSession";
import Pricing from "@/components/journaling/Pricing";
import Faq from "@/components/journaling/Faq";
import About from "@/components/journaling/About";
import Contact from "@/components/journaling/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ジャーナリング・コーチング",
  description:
    "「書く」と「話す」の両輪で内省を深める3ヶ月のコーチングプログラム。ノート1冊で始められるジャーナリング体験つきの無料セッション受付中。ICFアソシエイト認定コーチが提供します。",
  alternates: { canonical: "https://www.wapple.life/journaling" },
  openGraph: {
    title: "ジャーナリング・コーチング | Wapple 個人向けコーチング",
    description:
      "「書く」と「話す」の両輪で内省を深める3ヶ月のコーチングプログラム。ジャーナリング体験つき無料セッション受付中。",
    url: "https://www.wapple.life/journaling",
    siteName: "Wapple 個人向けコーチング",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/journaling-hero.png",
        width: 1200,
        height: 630,
        alt: "ジャーナリング・コーチング",
      },
    ],
  },
};


export default function JournalingPage() {
  return (
    <main className="journaling-theme">
      <Hero />
      <Pain />
      <Bridge />
      <Method />
      <Program />
      <FirstSession />
      <Pricing />
      <Faq />
      <About />
      <Contact />
    </main>
  );
}
