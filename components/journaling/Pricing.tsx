"use client";
import { motion } from "framer-motion";

const features = [
  "隔週・60分のオンラインセッション × 6回",
  "毎回のセッション内ジャーナリングワーク",
  "週1回の「今週の問い」配信（全12週）",
  "修了時: セルフジャーナリングガイドをプレゼント",
  "Zoom使用・ノート1冊で始められます",
];

export default function Pricing() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-widest text-center mb-6"
          style={{ color: "var(--accent)" }}
        >
          PRICING
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold text-center mb-4"
          style={{ color: "var(--text)" }}
        >
          料金
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-14"
          style={{ color: "var(--text-muted)" }}
        >
          プログラム開始にあたり、モニター枠（先着5名）を募集しています。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl p-8 md:p-10"
          style={{ backgroundColor: "var(--accent)" }}
        >
          <span className="inline-block text-xs font-medium bg-white/20 text-white px-3 py-1 rounded-full mb-4">
            モニター募集・先着5名
          </span>
          <p className="text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.8)" }}>
            ジャーナリング・コーチング
          </p>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>
            3ヶ月 · 全6回 · 各60分
          </p>

          <div className="flex items-end gap-2 mb-2">
            <span className="text-5xl font-bold text-white">¥30,000</span>
          </div>
          <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
            税込・3ヶ月一括（1回あたり5,000円）
          </p>

          <ul className="space-y-3 mb-8">
            {features.map((f, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                <span className="text-white mt-0.5">✓</span>
                {f}
              </li>
            ))}
          </ul>

          <p className="text-xs leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
            ※ モニター枠は、修了時のアンケートと感想の掲載（匿名可）にご協力いただける方が対象です。
          </p>

          <a
            href="#contact"
            className="block text-center py-3 rounded-full font-medium bg-white transition-all duration-200 hover:opacity-90"
            style={{ color: "var(--accent)" }}
          >
            まずは無料体験から
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-sm text-center leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          体験セッション後にその場で決めていただく必要はありません。<br />
          修了後は、月1回のフォローセッション（
          <a href="/coaching" className="underline underline-offset-2 hover:opacity-70">
            継続コーチング
          </a>
          ）への接続も可能です。
        </motion.p>
      </div>
    </section>
  );
}
