"use client";
import { motion } from "framer-motion";

const sessions = [
  { number: "01", title: "現在地の棚卸し", description: "いま頭の中にあるモヤモヤを、全部書き出すところから。何が起きているかを見える化します。" },
  { number: "02", title: "価値観", description: "大切にしたいこと、譲れないこと。あなたの選択の軸になっているものを言葉にします。" },
  { number: "03", title: "感情のパターン", description: "繰り返し出てくる感情や思考のクセに気づきます。気づくだけで、扱い方が変わります。" },
  { number: "04", title: "強み・リソース", description: "すでに持っているもの、できていることに光を当てます。足りないものではなく、あるものから。" },
  { number: "05", title: "ありたい姿", description: "1年後、3年後。「こうありたい」という状態を、書きながら具体的に描いていきます。" },
  { number: "06", title: "行動と習慣化", description: "具体的な一歩と、プログラム後も一人で続けられる「自分との対話の型」を設計して卒業です。" },
];

const flow = [
  { time: "5分", label: "チェックイン" },
  { time: "10分", label: "テーマに沿ってジャーナリング" },
  { time: "40分", label: "書いたものをもとに対話" },
  { time: "5分", label: "次の一歩と、次回までの問い" },
];

export default function Program() {
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
          PROGRAM
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold text-center mb-4"
          style={{ color: "var(--text)" }}
        >
          3ヶ月・全6回のプログラム
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-14"
          style={{ color: "var(--text-muted)" }}
        >
          隔週・各60分・オンライン（Zoom）。テーマはあなたの状況に合わせて柔軟に調整します。
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {sessions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-5 p-6 rounded-2xl bg-white"
              style={{ border: "1px solid var(--border)" }}
            >
              <span
                className="text-2xl font-bold flex-shrink-0 leading-none mt-1"
                style={{ color: "var(--accent)" }}
              >
                {s.number}
              </span>
              <div>
                <h3 className="text-base font-bold mb-2" style={{ color: "var(--text)" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-3xl bg-white"
          style={{ border: "1px solid var(--border)" }}
        >
          <h3 className="text-lg font-bold mb-6 text-center" style={{ color: "var(--text)" }}>
            毎回のセッション（60分）の流れ
          </h3>
          <div className="flex flex-col md:flex-row md:items-stretch gap-3">
            {flow.map((f, i) => (
              <div key={i} className="flex-1 flex md:flex-col items-center gap-3 md:gap-2 md:text-center">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full text-white flex-shrink-0"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  {f.time}
                </span>
                <p className="text-sm leading-snug" style={{ color: "var(--text)" }}>
                  {f.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-center" style={{ color: "var(--text-muted)" }}>
            セッションの間も、週1回「今週の問い」が届きます。書く習慣が途切れません。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
