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
  title: "ジャーナリング・コーチング | 秦善成",
  description:
    "「書く」と「話す」の両輪で内省を深める3ヶ月のコーチングプログラム。ノート1冊で始められるジャーナリング体験つきの無料セッション受付中。ICFアソシエイト認定コーチ・秦善成が提供します。",
  alternates: { canonical: "https://www.wapple.life/journaling" },
  openGraph: {
    title: "ジャーナリング・コーチング | 秦善成",
    description:
      "「書く」と「話す」の両輪で内省を深める3ヶ月のコーチングプログラム。ジャーナリング体験つき無料セッション受付中。",
    url: "https://www.wapple.life/journaling",
    siteName: "秦善成 コーチング",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/journaling-hero.png",
        width: 1200,
        height: 630,
        alt: "ジャーナリング・コーチング | 秦善成",
      },
    ],
  },
};

// 秦善成のPerson正本は会社サイト（wapple.co.jp/profile）。同一@idを参照して
// 検索エンジンに同一人物であることを伝え、評価をco.jpに集約する。
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://wapple.co.jp/profile#person",
  name: "秦 善成",
  alternateName: ["秦善成", "はた よしなり", "Yoshinari Hata"],
  url: "https://wapple.co.jp/profile",
  jobTitle: "代表取締役",
  worksFor: { "@type": "Organization", name: "株式会社Wapple", url: "https://wapple.co.jp" },
  sameAs: ["https://www.wapple.life"],
};

export default function JournalingPage() {
  return (
    <main className="journaling-theme">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
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
