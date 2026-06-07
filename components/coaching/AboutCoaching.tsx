"use client";
import { motion } from "framer-motion";

export default function AboutCoaching() {
  return (
    <section id="about-coaching" className="py-24 px-6" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-widest text-center mb-6"
          style={{ color: "var(--accent)" }}
        >
          WHAT IS COACHING
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold text-center mb-12"
          style={{ color: "var(--text)" }}
        >
          話すことで、考えが整理される。
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5"
        >
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            セッションでは、まず「最近どうだったか」を話すところから始めます。<br />
            うまくいかなかったことも、正直に話していい場所です。
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            話しながら、「なぜ止まったのか」が見えてきます。<br />
            そして「次の2週間、これだけやる」という小さな約束を決めて終わります。
          </p>
          <p
            className="text-lg leading-relaxed font-semibold pt-2"
            style={{ color: "var(--text)" }}
          >
            セッションが終わる頃には、次の一歩が見えている状態を目指します。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
