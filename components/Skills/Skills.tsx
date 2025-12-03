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
    <section id="skills" className="w-full max-w-4xl mx-auto py-12 -mt-40 transition-all">
      <h2 className="text-xl font-bold text-center mb-8">기술 스택 및 도구</h2>

      {/* 카테고리 버튼 */}
      <div className="flex justify-center gap-3 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelected(selected === cat.key ? "" : cat.key)}
            className={`px-4 py-2 rounded-full border transition
              ${selected === cat.key 
                ? "bg-[#ECFA2C] text-black border-[#ECFA2C]" 
                : "bg-white text-black border-gray-300 hover:bg-gray-100"}
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 아이콘 리스트 */}
      <div className="w-full max-w-[320px] sm:max-w-[450px] mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 text-center">
          {skills.map((skill) => {
            const isDimmed = selected && skill.category !== selected;

            return (
              <div
                key={skill.name}
                className={`flex flex-col items-center justify-center p-1 rounded-xl text-black bg-white border border-white transition-all duration-300 cursor-pointer
                  ${isDimmed ? "opacity-20 blur-[2px]" : "opacity-100 blur-0"}
                `}
              >
                <Image
                  src={skill.icon}
                  width={40}
                  height={40}
                  alt={skill.name}
                  className="mb-2"
                />
                <span className="text-sm">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
