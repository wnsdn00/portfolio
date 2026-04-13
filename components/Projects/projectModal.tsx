"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "./projectsType";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          layoutId={project.title}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 max-w-xl w-full relative"
        >
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <p className="text-zinc-400 mt-2">{project.description}</p>

          <pre className="whitespace-pre-wrap text-sm text-zinc-300 bg-zinc-800/30 p-4 rounded-xl mt-6 border border-zinc-700">
            {project.details}
          </pre>

          {/* 버튼 영역 */}
          <div className="flex gap-4 mt-6">
            {/* 배포 사이트 버튼 */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 block py-2 px-4 text-center rounded-xl font-semibold border border-zinc-600 hover:bg-white hover:text-black transition-all duration-300"
              >
                배포 사이트 보기 →
              </a>
            )}

            {/* 깃허브 버튼 */}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 block py-2 px-4 text-center rounded-xl font-semibold border border-zinc-600 hover:bg-white hover:text-black transition-all duration-300"
              >
                깃허브 연결하기 →
              </a>
            )}
          </div>

          {/* 창 닫음 버튼 */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-zinc-400 hover:text-white"
          >
            ✕
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
