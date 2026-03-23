"use client";

import { useState } from "react";
import { skills } from "./skillsData";
import Image from "next/image";

const categories = [
  { key: "frontend", label: "프론트엔드" },
  { key: "library", label: "라이브러리" },
  { key: "deploy", label: "환경 및 배포" },
  { key: "design", label: "디자인" },
];

export default function SkillSection() {
  const [selected, setSelected] = useState("");

  return (
    <section id="skills" className="w-full mx-auto pt-24  transition-all">
      <h2 className="text-xl font-bold text-center mb-10">기술 스택 및 도구</h2>

      {/* 카테고리 버튼 */}
      <div className="flex justify-center gap-3 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelected(selected === cat.key ? "" : cat.key)}
            className={`px-3 py-1.5 rounded-full border transition
              ${selected === cat.key 
                ? "bg-[#7AAACE] text-black border-[#7AAACE]" 
                : "bg-white text-black border-gray-300 hover:bg-gray-100"}
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 아이콘 리스트 */}
      <div className="w-full max-w-[400px] mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 text-center">
          {skills.map((skill) => {
            const isDimmed = selected && skill.category !== selected;

            return (
              <div
                key={skill.name}
                className={`group relative flex flex-col items-center justify-center pb-3 rounded-sm border-white transition-all duration-300
                  ${isDimmed ? "opacity-20 blur-[2px]" : "opacity-100 blur-0"}
                `}
              >
                <Image
                  src={skill.icon}
                  width={45}
                  height={45}
                  alt={skill.name}
                  className="mb-2 relative z-10"
                />
                <span className="text-xs z-20 absolute bottom-1 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white/30 text-white px-2 rounded whitespace-nowrap w-auto">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
