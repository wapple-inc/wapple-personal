"use client";
import { motion } from "framer-motion";

export default function Bridge() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-8 leading-snug"
          style={{ color: "var(--text)" }}
        >
          頑張れないのは、<br />
          意志が弱いからではありません。
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-5"
        >
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            夜、疲れて帰ったら動画を開く気になれない。<br />
            週末にやろうと思っていたら、気づいたら日曜の夜だった。
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            それは、あなたのせいではありません。<br />
            一人で考え、一人で決め、一人で続けようとすることには、構造的な限界があります。
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            コーチングは「もっと頑張る方法」を教える場ではありません。<br />
            <span className="font-semibold" style={{ color: "var(--text)" }}>
              対話を通じて考えを整理し、あなたが自分で動き出せる状態をつくる時間です。
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
