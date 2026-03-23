"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="to text-5xl font-semibold tracking-tight space-y-2"
      >
        <motion.div>안녕하세요,</motion.div>
        <motion.div>프론트엔드 개발자</motion.div>
        <motion.div>
          <span className="text-green-600 font-bold">김준우</span>입니다.
        </motion.div>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-6 max-w-xl text-lg text-zinc-400"
      >
        <motion.p>배움에는 끝이 없다고 생각합니다.</motion.p>
        <motion.p>함께 개발하며 성장을 이룰 곳을 찾고있습니다.</motion.p>
      </motion.div>

      <motion.div className="mt-8 flex gap-4">
        {/* 이력서 다운로드 */}
        <motion.a
          href="/self-introduction.hwp"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-xl text-white font-semibold  bg-gray-800 hover:bg-gray-900 transition-all duration-300"
        >
          자기소개서 다운로드
        </motion.a>

        {/* GitHub 연결 */}
        <motion.a
          href="https://github.com/wnsdn00"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -1, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-xl text-white font-semibold bg-gray-800 hover:bg-gray-900 transition-all duration-300"
        >
          GitHub
        </motion.a>
      </motion.div>

      {/* --- 아래로 스크롤 가이드 --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-sm text-zinc-500 font-medium">내려서 확인하기</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-zinc-400"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
