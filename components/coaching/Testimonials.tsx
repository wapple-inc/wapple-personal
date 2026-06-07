"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "柔らかな話し方と答えやすいような質問の仕方をされる方で、安心して何でも話せました。小さな目標をつくる、というシンプルなことが、こんなに助かるとは思いませんでした。",
    meta: "40代・介護士",
  },
  {
    text: "自分が言葉に出来るまで、待って貰えていたからだと思います。今までの自分ではあり得ないくらい、主体的で前向きに取り組めています。",
    meta: "40代・会社員",
  },
  {
    text: "コーチングの時に考えた2週間の予定を意識すると、毎日のリズムを作りやすい、と気づきました。今までの自分と比べて、しっかりと成長している自分がいます。",
    meta: "30代・パート",
  },
  {
    text: "マイナスな言葉ひとつなく、解決策を一緒に考えてくださりありがとうございます。遅れてしまっているにも関わらず、正直に話せる安心感があります。",
    meta: "20代・会社員",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-widest text-center mb-6"
          style={{ color: "var(--accent)" }}
        >
          TESTIMONIALS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold text-center mb-14"
          style={{ color: "var(--text)" }}
        >
          お客様の声
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white flex flex-col"
              style={{ border: "1px solid var(--border)" }}
            >
              <p
                className="text-4xl font-serif mb-3 leading-none"
                style={{ color: "var(--accent)" }}
              >
                "
              </p>
              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "var(--text)" }}>
                {t.text}
              </p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                — {t.meta}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
