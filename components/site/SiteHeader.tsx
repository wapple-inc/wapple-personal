"use client";
// 全ページ共通のヘッダー。左にロゴ（トップへ）、右にプログラムと無料体験
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoMark from "@/components/site/LogoMark";

const NAV = [
  { href: "/coaching", label: "伴走コーチング" },
  { href: "/journaling", label: "ジャーナリング" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const cta = pathname.startsWith("/journaling") || pathname.startsWith("/coaching") ? "#contact" : "/coaching#contact";

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label="個人向けコーチング トップ">
          <LogoMark size={24} />
          <span className="text-[15px] font-semibold tracking-tight" style={{ color: "var(--text)" }}>
            Wapple
          </span>
          <span className="hidden sm:inline text-[12px] pl-2.5 ml-0.5 border-l" style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}>
            個人向けコーチング
          </span>
        </Link>
        <nav className="flex items-center gap-5 md:gap-7 text-[13px] md:text-[14px]" aria-label="メニュー">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={pathname.startsWith(n.href) ? "page" : undefined}
              className="hidden md:inline hover:opacity-70 transition-opacity"
              style={{ color: "var(--text)", fontWeight: pathname.startsWith(n.href) ? 600 : 400 }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={cta}
            className="px-4 py-2 md:px-5 md:py-2.5 rounded-full text-white text-[12.5px] md:text-[13px] font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "var(--accent)" }}
          >
            無料体験
          </a>
        </nav>
      </div>
    </header>
  );
}
