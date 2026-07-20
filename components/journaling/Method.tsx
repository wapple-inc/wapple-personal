"use client";
import { motion } from "framer-motion";

const methods = [
  {
    label: "WRITE",
    title: "書いて、見える化する",
    description:
      "決められたテーマ（問い）に沿って、思いつくままにノートへ書き出します。うまく書く必要はありません。書いた瞬間から、頭の中のモヤモヤは「眺められる対象」に変わります。",
  },
  {
    label: "TALK",
    title: "話して、深める",
    description:
      "書いたものを手がかりに、コーチと対話します。「ここ、もう少し聞かせてください」——書いた言葉があるから、話すのが得意でなくても、対話は自然に深まっていきます。",
  },
  {
    label: "KEEP",
    title: "習慣として、残る",
    description:
      "セッションの間も、週1回届く「問い」に沿って書き続けます。3ヶ月後には、コーチがいなくても自分と対話できるジャーナリングの型があなたの手元に残ります。",
  },
];

export default function Method() {
  return (
    <section id="method" className="py-24 px-6" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-widest text-center mb-6"
          style={{ color: "var(--accent)" }}
        >
          WHAT IS JOURNALING COACHING
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold text-center mb-6"
          style={{ color: "var(--text)" }}
        >
          ジャーナリング・コーチングとは
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center mb-14 text-lg leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          ジャーナリングは、頭に浮かぶことをそのまま紙に書き出す「書く内省」の方法です。<br className="hidden md:block" />
          このプログラムでは、ジャーナリングとコーチング対話を1つのセッションに組み合わせます。
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {methods.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="p-8 rounded-3xl bg-white flex flex-col"
              style={{ border: "1px solid var(--border)" }}
            >
              <p className="text-xs font-medium tracking-widest mb-4" style={{ color: "var(--accent)" }}>
                {m.label}
              </p>
              <h3 className="text-lg font-bold mb-4" style={{ color: "var(--text)" }}>
                {m.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {m.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
