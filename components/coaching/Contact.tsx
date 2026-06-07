"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-widest mb-6"
          style={{ color: "var(--accent)" }}
        >
          FREE TRIAL SESSION
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold mb-6"
          style={{ color: "var(--text)" }}
        >
          まず、安心して話せる時間から。
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base leading-relaxed mb-10"
          style={{ color: "var(--text-muted)" }}
        >
          無料体験セッションでは、今のお悩みやテーマを整理し、<br />
          これから進みたい方向を一緒に見つけます。<br /><br />
          まだ答えがなくても大丈夫。<br />
          話すところから始めましょう。
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSd4EA_kdYs7y-RAsSvhz8ze_XBfGCal7joNQdtlzC7nKMqwCA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-full text-white font-medium text-lg transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
          style={{ backgroundColor: "var(--accent)" }}
        >
          無料体験セッションを申し込む
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          60分・完全無料
        </motion.p>

      </div>
    </section>
  );
}
