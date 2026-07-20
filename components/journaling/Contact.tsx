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
          ノートとペンを持って、<br />
          一度だけ試してみませんか。
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base leading-relaxed mb-10"
          style={{ color: "var(--text-muted)" }}
        >
          無料体験セッションでは、ジャーナリングのミニ体験と、<br />
          書いたことをもとにしたコーチング対話をお試しいただけます。<br /><br />
          うまく書けなくても、うまく話せなくても大丈夫。<br />
          まず、書くところから始めましょう。
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          href="https://forms.gle/TRjJgyoQ6DQvhdqm8"
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
          60分・完全無料・オンライン（Zoom）
        </motion.p>
      </div>
    </section>
  );
}
