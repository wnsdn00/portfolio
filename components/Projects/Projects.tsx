"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProjectModal from "@/components/Projects/projectModal";
import { Project } from "./projectsType";

const projects = [
  {
    title: "Nomadia",
    description: "노마드를 위한 액티비티 예약 플랫폼",
    tech: ["Next.js", "TypeScript", "React", "TailwindCSS"],
    link: "https://nomadia-two.vercel.app/",
    image: "/images/nomadia.svg",
    details: `
      · 여행 목적지 기반 활동 추천
      · 로그인 / 회원가입 기능
      · 반응형 UI 설계
      · Firebase 연동
    `,
  },
  {
    title: "Portfolio Website",
    description: "애니메이션 기반 인터랙티브 포트폴리오 사이트",
    tech: ["Next.js", "TypeScript", "React", "Framer Motion", "TailwindCSS"],
    link: "https://github.com/wnsdn00/portfolio",
    image: "/portfolio.png",
    details: `
      · Framer Motion 기반 인터랙션 구현
      · 컴포넌트 구조 설계
      · 다크모드 스타일링
      · Motion Layout Animation 적용
    `,
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  // ESC로 모달 닫기
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center pt-24 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-xl font-semibold"
      >
        프로젝트
      </motion.h2>

      <div className="mt-16 w-full max-w-4xl space-y-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            layoutId={project.title}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="group flex flex-col md:flex-row bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-2xl hover:border-zinc-600 p-6 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all duration-300 cursor-pointer"
            onClick={() => setSelected(project)}
          >
            {/* Thumbnail */}
            <div className="md:w-1/3 flex items-center justify-center">
              <Image
                src={project.image}
                alt={project.title}
                width={200}
                height={100}
                className="rounded-xl object-cover group-hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Text */}
            <div className="md:w-2/3 md:pl-6 flex flex-col justify-between mt-4 md:mt-0">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-zinc-400 mt-2">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <span className="mt-6 text-sm text-zinc-400">
                클릭하여 상세보기 →
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detached Modal */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
