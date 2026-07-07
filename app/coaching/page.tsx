import Hero from "@/components/coaching/Hero";
import Pain from "@/components/coaching/Pain";
import Bridge from "@/components/coaching/Bridge";
import AboutCoaching from "@/components/coaching/AboutCoaching";
import Flow from "@/components/coaching/Flow";
import Pricing from "@/components/coaching/Pricing";
import Testimonials from "@/components/coaching/Testimonials";
import About from "@/components/coaching/About";
import Contact from "@/components/coaching/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "オンラインコーチング | 秦善成",
  description: "考えを整理し、次の一歩を見つけるためのオンラインコーチング。国際コーチング連盟（ICF）アソシエイト認定コーチ・秦善成による無料体験セッション受付中。",
  alternates: { canonical: "https://www.wapple.life/coaching" },
  openGraph: {
    title: "オンラインコーチング | 秦善成",
    description: "考えを整理し、次の一歩を見つけるためのオンラインコーチング。無料体験セッション受付中。",
    url: "https://www.wapple.life/coaching",
    siteName: "秦善成 コーチング",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "オンラインコーチング | 秦善成",
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

export default function CoachingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <Bridge />
      <Pain />
      <AboutCoaching />
      <Flow />
      <Pricing />
      <Testimonials />
      <About />
      <Contact />
    </main>
  );
}
