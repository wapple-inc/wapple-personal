import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import ThemeVars from "@/components/site/ThemeVars";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wapple.life"),
  title: { default: "個人向けコーチング | Wapple", template: "%s | Wapple 個人向けコーチング" },
  description: "対話で整える「伴走コーチング」と、書いて深める「ジャーナリング・コーチング」。株式会社Wappleの個人向けオンラインプログラムです。",
  // 紹介で訪れる方のためのサイト。検索結果には出さない（2026-10 方針：個人向けは当面育てない）
  robots: { index: false, follow: true },
  openGraph: {
    siteName: "Wapple 個人向けコーチング",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Wapple 個人向けコーチング" }],
  },
  verification: {
    google: "RnmMBhrW4Zv2px8F5F1pWaNkJbPknot7wHvU1jjzrwY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full flex flex-col">
        <ThemeVars>
          <SiteHeader />
        </ThemeVars>
        <div className="flex-1">{children}</div>
        <ThemeVars>
          <SiteFooter />
        </ThemeVars>
      </body>
    </html>
  );
}
