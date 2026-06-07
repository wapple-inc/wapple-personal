"use client";
import { motion } from "framer-motion";

const plans = [
  {
    name: "スタンダード",
    frequency: "月1回",
    duration: "60分 / 回",
    price: "4,500",
    unit: "円 / 月",
    features: [
      "月1回・60分のオンラインセッション",
      "現在地の確認・目標設定",
      "次の行動を一緒に決める",
      "Zoom使用",
    ],
    recommended: false,
  },
  {
    name: "伴走プラン",
    frequency: "月2回",
    duration: "60分 / 回",
    price: "8,000",
    unit: "円 / 月",
    features: [
      "月2回・60分のオンラインセッション",
      "2週間ごとの振り返りと目標設定",
      "より密な伴走サポート",
      "Zoom使用",
      "1回あたり4,000円とお得",
    ],
    recommended: true,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-4xl mx-auto">
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
          料金プラン
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-14"
          style={{ color: "var(--text-muted)" }}
        >
          まずは無料体験セッション（60分）からお気軽にどうぞ。
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-3xl p-8 relative"
              style={{
                backgroundColor: plan.recommended ? "var(--accent)" : "white",
                border: plan.recommended ? "none" : "1px solid var(--border)",
              }}
            >
              {plan.recommended && (
                <span className="absolute top-6 right-6 text-xs font-medium bg-white/20 text-white px-3 py-1 rounded-full">
                  おすすめ
                </span>
              )}
              <p
                className="text-sm font-medium mb-2"
                style={{ color: plan.recommended ? "rgba(255,255,255,0.8)" : "var(--accent)" }}
              >
                {plan.name}
              </p>
              <p
                className="text-sm mb-4"
                style={{ color: plan.recommended ? "rgba(255,255,255,0.7)" : "var(--text-muted)" }}
              >
                {plan.frequency} · {plan.duration}
              </p>
              <div className="flex items-end gap-1 mb-8">
                <span
                  className="text-5xl font-bold"
                  style={{ color: plan.recommended ? "white" : "var(--text)" }}
                >
                  ¥{plan.price}
                </span>
                <span
                  className="text-base mb-2"
                  style={{ color: plan.recommended ? "rgba(255,255,255,0.8)" : "var(--text-muted)" }}
                >
                  {plan.unit}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: plan.recommended ? "rgba(255,255,255,0.9)" : "var(--text-muted)" }}
                  >
                    <span style={{ color: plan.recommended ? "white" : "var(--accent)" }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="block text-center py-3 rounded-full font-medium transition-all duration-200 hover:opacity-90"
                style={{
                  backgroundColor: plan.recommended ? "white" : "var(--accent)",
                  color: plan.recommended ? "var(--accent)" : "white",
                }}
              >
                申し込む
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 p-6 rounded-2xl text-center"
          style={{ backgroundColor: "var(--bg-section)", border: "1px solid var(--border)" }}
        >
          <p className="font-medium mb-1" style={{ color: "var(--text)" }}>
            無料体験セッション
          </p>
          <p className="text-3xl font-bold mb-2" style={{ color: "var(--accent)" }}>
            ¥0
          </p>
          <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
            60分 · まずは一度、話してみてください。
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-full text-white font-medium transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "var(--accent)" }}
          >
            無料体験を申し込む
          </a>
        </motion.div>
      </div>
    </section>
  );
}
