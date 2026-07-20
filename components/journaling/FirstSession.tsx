"use client";
import { motion } from "framer-motion";

const steps = [
  {
    time: "0-10分",
    title: "チェックイン＆ジャーナリング入門",
    description: "はじめまして、から。ジャーナリングとは何か、なぜ効くのかを短くお話しします。",
  },
  {
    time: "10-20分",
    title: "ミニ体験ワーク",
    description: "実際にノートに書いてみます。テーマは「いま、頭の中を占めていること」。うまく書けなくて大丈夫です。",
  },
  {
    time: "20-45分",
    title: "書いたものをもとにコーチング",
    description: "書いた内容を手がかりに対話します。書いたものを見せる必要はありません。話したいところだけで。",
  },
  {
    time: "45-60分",
    title: "振り返り＆ご案内",
    description: "体験の振り返りと、続けたい方には3ヶ月プログラムのご説明。無理な勧誘は一切しません。",
  },
];

export default function FirstSession() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-widest text-center mb-6"
          style={{ color: "var(--accent)" }}
        >
          FREE TRIAL SESSION
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold text-center mb-4"
          style={{ color: "var(--text)" }}
        >
          まずは、無料の体験セッションから
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-14"
          style={{ color: "var(--text-muted)" }}
        >
          60分・無料。ジャーナリングのミニ体験つき。<br />
          この1回だけでも、頭の中が軽くなって帰れる時間にします。
        </motion.p>

        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 text-center leading-tight"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  {step.time}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="w-px flex-1 my-2"
                    style={{ backgroundColor: "var(--border)", minHeight: "32px" }}
                  />
                )}
              </div>

              <div className="pb-10 pt-2">
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text)" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm text-center mt-4"
          style={{ color: "var(--text-muted)" }}
        >
          ご用意いただくもの: ノート（または手帳）とペン、Zoomがつながる環境
        </motion.p>
      </div>
    </section>
  );
}
