"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="オンラインコーチングセッションのイメージ"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-widest mb-6"
          style={{ color: "var(--accent)" }}
        >
          ONLINE COACHING
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          style={{ color: "var(--text)" }}
        >
          何か新しいことを始めた。<br />
          でも、続かない。
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          style={{ color: "var(--text-muted)" }}
        >
          学び直し・資格取得・副業——<br />
          一人で頑張るのに、限界を感じていませんか？<br />
          目標と行動を整えるオンラインコーチング。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-full text-white font-medium text-center transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
            style={{ backgroundColor: "var(--accent)" }}
          >
            無料体験セッションを申し込む（60分・無料）
          </a>
          <a
            href="#about-coaching"
            className="inline-block px-8 py-4 rounded-full font-medium text-center transition-all duration-200 hover:bg-black/5"
            style={{ color: "var(--text)", border: "1px solid var(--border)" }}
          >
            コーチングについて知る
          </a>
        </motion.div>
      </div>
    </section>
  );
}
