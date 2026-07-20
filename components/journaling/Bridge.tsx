"use client";
import { motion } from "framer-motion";

export default function Bridge() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-8 leading-snug"
          style={{ color: "var(--text)" }}
        >
          頭の中だけで考えるから、<br />
          堂々巡りになる。
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-5"
        >
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            人が頭の中だけで同時に扱える考えごとには、限りがあります。<br />
            考えているつもりが、同じところを回っているだけ——よくあることです。
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            紙に書き出すと、頭の中にあったものを「外から眺める」ことができます。<br />
            そして書いたものを前に対話をすると、一人では気づけなかった視点が加わります。
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            このプログラムは、その2つを組み合わせました。<br />
            <span className="font-semibold" style={{ color: "var(--text)" }}>
              書いて整理し、話して深める。だから、一人で考えるより遠くまで行けます。
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
