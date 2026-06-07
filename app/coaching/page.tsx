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
  openGraph: {
    title: "オンラインコーチング | 秦善成",
    description: "考えを整理し、次の一歩を見つけるためのオンラインコーチング。無料体験セッション受付中。",
    url: "https://wapple-personal.vercel.app/coaching",
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
