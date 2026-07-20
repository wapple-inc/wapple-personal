"use client";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "文章を書くのが苦手でも大丈夫ですか？",
    a: "大丈夫です。ジャーナリングは「うまく書く」ものではなく、浮かんだことをそのまま書き出すものです。単語の羅列でも、箇条書きでも構いません。書き方から丁寧にご案内します。",
  },
  {
    q: "書いた内容は見せる必要がありますか？",
    a: "ありません。ノートはあなただけのものです。セッションでは「書いてみて何に気づいたか」を、話したい範囲でお話しいただければ十分です。",
  },
  {
    q: "手書きでないとだめですか？",
    a: "手書きを推奨していますが、スマホやPCのメモでも参加できます。手を動かして書くほうが思考がゆっくりになり、内省には向いていると言われています。まずはやりやすい方法で始めましょう。",
  },
  {
    q: "普通のコーチングとどう違うのですか？",
    a: "対話だけで進める一般的なコーチングに対し、セッション内に「書く時間」を組み込むのが特徴です。書くことで自分の考えを外から眺められるため、話すのが得意でない方でも深い内省に入りやすくなります。また、書いたものが手元に残るので、セッション後も読み返して気づきを定着させられます。",
  },
  {
    q: "体験セッションの後、必ず申し込まないといけませんか？",
    a: "いいえ。体験セッションだけでも価値のある時間になるよう設計しています。その場での勧誘や決断のお願いは一切しませんので、安心してお越しください。",
  },
  {
    q: "話した内容・書いた内容の秘密は守られますか？",
    a: "守られます。国際コーチング連盟（ICF）の倫理規定に基づき、セッションで扱った内容を許可なく第三者に共有することはありません。",
  },
];

export default function Faq() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-widest text-center mb-6"
          style={{ color: "var(--accent)" }}
        >
          FAQ
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold text-center mb-14"
          style={{ color: "var(--text)" }}
        >
          よくあるご質問
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="p-6 rounded-2xl bg-white"
              style={{ border: "1px solid var(--border)" }}
            >
              <h3 className="text-base font-bold mb-3 flex gap-3" style={{ color: "var(--text)" }}>
                <span style={{ color: "var(--accent)" }}>Q.</span>
                {faq.q}
              </h3>
              <p className="text-sm leading-relaxed pl-7" style={{ color: "var(--text-muted)" }}>
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
