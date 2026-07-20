"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-widest text-center mb-6"
          style={{ color: "var(--accent)" }}
        >
          ABOUT
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold text-center mb-14"
          style={{ color: "var(--text)" }}
        >
          コーチについて
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="text-center">
              <h3 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>
                秦 善成（はた よしなり）
              </h3>
              <p className="text-sm" style={{ color: "var(--accent)" }}>
                国際コーチング連盟（ICF）アソシエイト認定コーチ（ACC）
              </p>
            </div>

            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              社会人2年目の頃、仕事のプレッシャーから心身のバランスを崩した経験があります。
              その経験がきっかけでマインドフルネスを学び始め、やがてマインドフルネスをベースとしたコーチング（MBCC）と出会いました。
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              「頑張り続けること」ではなく、「自分らしく進むこと」を大切にしています。
              コーチングでは、答えを押しつけるのではなく、あなたが自分の力で動き出せるよう、静かに隣に立ち続けます。
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              三菱UFJリサーチ＆コンサルティング、Apple Japanを経て、フリーランスとして活動後、株式会社Wappleを設立。
              アソシエイト認定コーチ（ACC）として、会社員・個人事業主・経営者など幅広くコーチングを提供しています。
            </p>

            <p className="text-sm text-center pt-2" style={{ color: "var(--text-muted)" }}>
              運営会社：
              <a
                href="https://wapple.co.jp/"
                className="underline underline-offset-2 hover:opacity-70"
              >
                株式会社Wapple
              </a>
              ／
              <a
                href="https://wapple.co.jp/profile"
                className="underline underline-offset-2 hover:opacity-70"
              >
                代表プロフィール（詳細）
              </a>
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
