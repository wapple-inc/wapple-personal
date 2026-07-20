"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 背景画像（GPT Imageで生成 → public/images/journaling-hero.png に配置）。
          画像が無い間もグラデーションで成立するようフォールバックを重ねる */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #EEF1F0 0%, #FAF9F6 45%, #E3E9E8 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/journaling-hero.png)" }}
      />
      {/* 文字の可読性を確保するオーバーレイ（左側を濃く） */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(250,249,246,0.92) 0%, rgba(250,249,246,0.78) 45%, rgba(250,249,246,0.25) 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-[0.3em] mb-8"
          style={{ color: "var(--accent)" }}
        >
          JOURNALING × COACHING
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold leading-snug md:leading-snug mb-8"
          style={{ color: "var(--text)" }}
        >
          書くと、<br />
          自分の声が聞こえてくる。
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="w-16 h-px mb-8"
          style={{ backgroundColor: "var(--accent)" }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl leading-relaxed mb-12 max-w-xl"
          style={{ color: "var(--text-muted)" }}
        >
          頭の中で堂々巡りする考えごとは、ノートに書き出して、対話で深める。
          「書く」×「話す」で内省を深める、3ヶ月のコーチングプログラムです。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-full text-white font-medium text-center transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "var(--accent)" }}
          >
            無料体験セッションを申し込む（60分）
          </a>
          <a
            href="#method"
            className="inline-block px-8 py-4 rounded-full font-medium text-center transition-all duration-200 hover:bg-black/5 bg-white/60"
            style={{ color: "var(--text)", border: "1px solid var(--border)" }}
          >
            ジャーナリングとは？
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          用意するのは、ノートとペンだけ。体験セッションにはジャーナリングのミニ体験が含まれます。
        </motion.p>
      </div>
    </section>
  );
}
