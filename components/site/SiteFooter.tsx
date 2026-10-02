// 全ページ共通のフッター。運営会社（wapple.co.jp）への一方向のつながりと、法的表記
import Link from "next/link";
import LogoMark from "@/components/site/LogoMark";

export default function SiteFooter() {
  return (
    <footer className="px-5 md:px-8 pt-14 pb-10 border-t" style={{ backgroundColor: "var(--bg-section)", borderColor: "var(--border)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <LogoMark size={22} />
              <span className="text-[15px] font-semibold" style={{ color: "var(--text)" }}>Wapple</span>
            </Link>
            <p className="mt-4 text-[13px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
              個人向けコーチング
              <br />
              運営：
              <a href="https://wapple.co.jp/" className="underline underline-offset-2 hover:opacity-70">
                株式会社Wapple
              </a>
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-10 gap-y-3 text-[13px]" aria-label="フッターメニュー" style={{ color: "var(--text)" }}>
            <Link href="/coaching" className="hover:opacity-70">伴走コーチング</Link>
            <Link href="/tokushoho" className="hover:opacity-70">特定商取引法に基づく表記</Link>
            <Link href="/journaling" className="hover:opacity-70">ジャーナリング・コーチング</Link>
            <Link href="/privacy" className="hover:opacity-70">プライバシーポリシー</Link>
          </nav>
        </div>
        <p className="mt-12 pt-6 text-[12px] border-t" style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}>
          © 2026 Wapple Inc.
        </p>
      </div>
    </footer>
  );
}
