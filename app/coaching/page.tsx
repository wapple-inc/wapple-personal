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
  title: "伴走コーチング",
  description: "考えを整理し、次の一歩を見つけるためのオンラインコーチング。ICFアソシエイト認定コーチによる無料体験セッション受付中。",
  alternates: { canonical: "https://www.wapple.life/coaching" },
  openGraph: {
    title: "伴走コーチング | Wapple 個人向けコーチング",
    description: "考えを整理し、次の一歩を見つけるためのオンラインコーチング。無料体験セッション受付中。",
    url: "https://www.wapple.life/coaching",
    siteName: "Wapple 個人向けコーチング",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "伴走コーチング",
      },
    ],
  },
};


export default function CoachingPage() {
  return (
    <main>
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
