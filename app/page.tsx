import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "個人向けコーチング | Wapple" },
  description:
    "対話で目標と行動を整える「伴走コーチング」と、書く×話すで内省を深める「ジャーナリング・コーチング」。個人向けのオンラインプログラムを提供しています。",
  alternates: { canonical: "https://www.wapple.life/" },
  openGraph: {
    title: "パーソナルコーチング・個人向けプログラム",
    description:
      "対話で整える「伴走コーチング」と、書いて深める「ジャーナリング・コーチング」。無料体験セッション受付中。",
    url: "https://www.wapple.life/",
  },
};


const programs = [
  {
    label: "COACHING",
    title: "伴走コーチング",
    description:
      "学び直し・資格取得・副業——やりたいことを続けられるように。対話を通じて目標と行動を整え、2週間ごとの小さな約束で前に進むオンラインコーチング。",
    points: ["月1回または月2回・各60分", "対話ベースのセッション", "無料体験セッションあり"],
    href: "/coaching",
    accent: "#C8956C",
  },
  {
    label: "JOURNALING × COACHING",
    title: "ジャーナリング・コーチング",
    description:
      "頭の中で堂々巡りする考えごとを、ノートに書き出して対話で深める。「書く」×「話す」の両輪で内省を深め、自分と対話する習慣を持ち帰る3ヶ月プログラム。",
    points: ["3ヶ月・全6回・各60分", "書く時間を組み込んだセッション", "無料体験セッションあり"],
    href: "/journaling",
    accent: "#35586C",
  },
];

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--bg)" }}>

      {/* ヘッダー */}
      <section className="pt-36 md:pt-44 pb-12 px-6 text-center">
        <p
          className="text-sm font-medium tracking-[0.3em] mb-6"
          style={{ color: "var(--text-muted)" }}
        >
          PROGRAMS
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-6" style={{ color: "var(--text)" }}>
          自分と向き合う時間が、<br className="md:hidden" />
          次の一歩をつくる。
        </h1>
        <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
          対話で整える。書いて深める。<br />
          あなたに合うスタイルで選べる、個人向けプログラムです。
        </p>
      </section>

      {/* プログラム2枚（並列） */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="block rounded-3xl bg-white p-8 md:p-10 transition-transform duration-200 hover:-translate-y-1"
              style={{ border: "1px solid var(--border)", borderTop: `4px solid ${p.accent}` }}
            >
              <p className="text-xs font-medium tracking-widest mb-4" style={{ color: p.accent }}>
                {p.label}
              </p>
              <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: "var(--text)" }}>
                {p.title}
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                {p.description}
              </p>
              <ul className="space-y-2 mb-8">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                    <span style={{ color: p.accent }}>✓</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <span
                className="inline-block px-6 py-3 rounded-full text-white text-sm font-medium"
                style={{ backgroundColor: p.accent }}
              >
                詳しく見る
              </span>
            </a>
          ))}
        </div>
      </section>

    </main>
  );
}
