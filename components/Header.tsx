"use client";
import { motion } from "framer-motion";

export default function Header() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({behavior: "smooth"});
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray backdrop-blur-md border-b border-white/10 z-50">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <motion.div
          className="text-lg font-semibold tracking-tight cursor-pointer"
          whileHover={{scale: 1.1}}
          transition={{type: "spring", stiffness: 300 }}
          onClick={() => handleScroll("home")}>
          Portpolio
        </motion.div>

        {/* Navigation Menu */}
        <ul className="flex gap-6 text-zinc-300 text-sm">
          <li className="hover:text-white cursor-pointer transition" onClick={() => handleScroll("home")}>소개</li>
          <li className="hover:text-white cursor-pointer transition" onClick={() => handleScroll("skills")}>기술</li>
          <li className="hover:text-white cursor-pointer transition" onClick={() => handleScroll("projects")}>프로젝트</li>
          <li className="hover:text-white cursor-pointer transition" onClick={() => handleScroll("about")}>경력</li>
        </ul>
      </nav>
    </header>
  );
}
