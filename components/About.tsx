"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-semibold"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-lg text-zinc-400 leading-relaxed"
        >
          I love building modern web experiences with clean UI, animations, and scalable architecture.
          Always learning, always improving.
        </motion.p>
      </div>
    </section>
  );
}
