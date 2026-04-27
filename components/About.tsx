"use client";
import { motion } from "framer-motion";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        {/* Section Title */}
        <motion.h2 
          {...fadeInUp}
          className="text-4xl font-semibold mb-16 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* 왼쪽: 소개글 */}
          <motion.div 
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="space-y-10"
          >
            <h3 className="text-2xl font-bold text-white">
              동작 원리를 깊이 파고들며 <br/>
              문제를 해결하는 <br/>
              프론트엔드 개발자입니다
            </h3>
            <p className="text-lg text-zinc-400 leading-relaxed">
              컴퓨터공학 전공을 통해 얻은 CS 기초 지식과<br/> 부트캠프에서의 실무 프로젝트 경험을 바탕으로,<br/>
              사용자 중심의 사고를 바탕으로 로딩 최적화 및 상태 관리를 개선하여 작동하는 화면을 넘어 편리한 경험을 제공하는 데 집중하고 있습니다.
            </p>
          </motion.div>

          {/* 오른쪽: 학력 및 수료 이력 */}
          <motion.div 
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
            className="space-y-8 border-l border-zinc-700 pl-6 ml-2 md:ml-0"
          >
            {/* 이력 아이템 1 */}
            <div className="relative">
              {/* 타임라인 포인트 점 */}
              <div className="absolute w-3 h-3 bg-white rounded-full -left-[30px] top-1.5 border-2 border-zinc-900" />
              <span className="text-sm font-mono text-zinc-500">2025. 08</span>
              <h4 className="text-lg font-semibold text-white mt-1">
                코드잇 프론트엔드 엔지니어 부트캠프 15기 수료
              </h4>
              <p className="text-sm text-zinc-400 mt-1">실무 중심 프로젝트 및 협업 경험 습득</p>
            </div>

            {/* 이력 아이템 2 */}
            <div className="relative">
              <div className="absolute w-3 h-3 bg-zinc-600 rounded-full -left-[30px] top-1.5 border-2 border-zinc-900" />
              <span className="text-sm font-mono text-zinc-500">2025. 02</span>
              <h4 className="text-lg font-semibold text-white mt-1">
                건국대학교 글로컬캠퍼스 소프트웨어전공 졸업
              </h4>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                자료구조, 알고리즘, 운영체제, 데이터베이스, 네트워크 등 CS 핵심 역량 습득
              </p>
            </div>

            {/* 이력 아이템 3 */}
            <div className="relative">
              <div className="absolute w-3 h-3 bg-zinc-600 rounded-full -left-[30px] top-1.5 border-2 border-zinc-900" />
              <span className="text-sm font-mono text-zinc-500">2024. 06</span>
              <h4 className="text-lg font-semibold text-white mt-1">
                RESAT 프론트엔드 개발 챌린지 수료
              </h4>
              <p className="text-sm text-zinc-400 mt-1">팀 프로젝트 기반 프론트엔드 개발 프로세스 경험</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}