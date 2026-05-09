"use client";

import { motion, useReducedMotion } from "framer-motion";
import { boutiqueEase } from "@/lib/motion-boutique";
import LoaderLava from "@/components/LoaderLava";

const titleWords = [
  { text: "L", em: false },
  { text: "U", em: false },
  { text: "U", em: false },
  { text: "M", em: false },
] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const titleContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.1,
        delayChildren: reduce ? 0 : 0.8,
      },
    },
  };

  const wordItem = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.01 : 0.82, ease: boutiqueEase },
    },
  };

  const afterTitleDelay = reduce ? 0 : 0.8 + titleWords.length * 0.1 + 0.2;

  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-canvas px-6 pb-36 pt-32 md:px-12 md:pb-44 md:pt-36 lg:px-20 lg:pb-48">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-16 md:gap-24">
        <div className="relative flex items-center justify-center py-10">
          <div className="pointer-events-none absolute inset-0 z-0 flex scale-[2.2] items-center justify-center">
            <LoaderLava />
          </div>

          <motion.h1
            className="relative z-10 font-fira-mono text-7xl leading-none tracking-[-0.05em] text-graphite sm:text-8xl md:text-9xl"
            variants={titleContainer}
            initial="hidden"
            animate="visible"
          >
            {titleWords.map((w, i) => (
              <motion.span
                key={w.text + i}
                variants={wordItem}
                className="inline-block"
              >
                {w.text}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: afterTitleDelay,
            ease: boutiqueEase,
          }}
          className="relative z-10 w-full max-w-2xl text-pretty text-center font-fira-mono text-base leading-relaxed tracking-wide text-taupe md:text-lg lg:leading-loose"
        >
          Ingeniería con alma de diseño. Construimos ecosistemas digitales donde la
          complejidad se vuelve simplicidad y la innovación se convierte en legado.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: afterTitleDelay + 0.3,
            duration: 0.85,
            ease: boutiqueEase,
          }}
          className="relative z-10 flex flex-col items-center gap-12 sm:flex-row sm:gap-20"
        >
          <div className="flex flex-col items-center gap-10 sm:flex-row sm:gap-28">
            <div className="group relative inline-flex items-center justify-center gap-4">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 opacity-60 blur-lg filter transition-all duration-1000 group-hover:opacity-100" />
              <a
                role="button"
                href="#contact"
                className="group relative inline-flex items-center justify-center rounded-xl bg-gray-900 px-8 py-3 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-600/30"
              >
                Preguntar ahora
              </a>
            </div>

            <div className="group relative inline-flex items-center justify-center gap-4">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 opacity-60 blur-lg filter transition-all duration-1000 group-hover:opacity-100" />
              <a
                role="button"
                href="#projects"
                className="group relative inline-flex items-center justify-center rounded-xl bg-gray-900 px-8 py-3 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-600/30"
              >
                Galería de proyectos
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
