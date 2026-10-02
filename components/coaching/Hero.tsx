"use client";
// 伴走コーチングの最初の画面。写真は使わず、一滴から広がる波紋で「小さな一歩が広がる」を表す
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden" style={{ backgroundColor: "var(--bg)" }}>
      {/* 波紋（右側） */}
      <div
        aria-hidden="true"
        className="absolute right-[-30vw] top-[6%] w-[90vw] h-[90vw] md:right-[-8vw] md:top-1/2 md:-translate-y-1/2 md:w-[min(64vw,820px)] md:h-[min(64vw,820px)]"
      >
        <div className="ripple-ring" style={{ animationDelay: "0s" }} />
        <div className="ripple-ring" style={{ animationDelay: "3s" }} />
        <div className="ripple-ring" style={{ animationDelay: "6s" }} />
        <div className="absolute left-1/2 top-1/2 w-2.5 h-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-8 pt-40 pb-24 md:py-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-[12px] md:text-sm font-medium tracking-[0.25em] mb-7"
          style={{ color: "var(--accent)" }}
        >
          ONLINE COACHING
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          className="text-[27px] sm:text-[40px] md:text-[64px] font-bold leading-[1.3] tracking-tight mb-8"
          style={{ color: "var(--text)" }}
        >
          何か新しいことを始めた。
          <br />
          でも、続かない。
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="text-[16px] md:text-[19px] leading-[1.95] mb-11 max-w-xl"
          style={{ color: "var(--text-muted)" }}
        >
          学び直し・資格取得・副業――
          <br />
          一人で頑張るのに、限界を感じていませんか？
          <br />
          目標と行動を整えるオンラインコーチングです。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          className="flex flex-col sm:flex-row gap-3.5"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-full text-white font-medium text-center transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "var(--accent)" }}
          >
            無料体験セッションを申し込む
          </a>
          <a
            href="#about-coaching"
            className="inline-block px-8 py-4 rounded-full font-medium text-center transition-colors duration-200 hover:bg-black/5"
            style={{ color: "var(--text)", border: "1px solid var(--border)" }}
          >
            コーチングについて知る
          </a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-4 text-[13px]"
          style={{ color: "var(--text-muted)" }}
        >
          60分・無料／オンライン（Zoom）
        </motion.p>
      </div>
    </section>
  );
}
