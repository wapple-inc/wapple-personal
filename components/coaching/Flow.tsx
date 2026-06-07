"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "現在地を整理する",
    description: "この2週間、何が起きていたか。できたこと、止まったこと。まず「今どこにいるか」を一緒に言葉にします。",
  },
  {
    number: "02",
    title: "本当に大切なことを見つける",
    description: "何のためにやるのか、本当はどうしたいのか。焦らず、丁寧に。あなたの中にある軸を一緒に確認します。",
  },
  {
    number: "03",
    title: "小さな一歩を決める",
    description: "「今日から始める最初の1つ」を明確にして終わります。大きな目標ではなく、確実に動ける一歩を設計します。",
  },
];

export default function Flow() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
      <div className="max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-widest text-center mb-6"
          style={{ color: "var(--accent)" }}
        >
          SESSION FLOW
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold text-center mb-14"
          style={{ color: "var(--text)" }}
        >
          セッションの流れ
        </motion.h2>

        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="w-px flex-1 my-2"
                    style={{ backgroundColor: "var(--border)", minHeight: "40px" }}
                  />
                )}
              </div>

              <div className="pb-10">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold" style={{ color: "var(--text)" }}>
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
