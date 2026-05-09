"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  boutiqueEase,
  boutiqueTransition,
  boutiqueViewport,
} from "@/lib/motion-boutique";

type RevealLinesProps = {
  lines: string[];
  className?: string;
  /** Clase por línea (ej. tipografía del párrafo) */
  lineClassName?: string;
};

export function RevealLines({
  lines,
  className,
  lineClassName = "text-long-prose-line tracking-wide text-graphite/70",
}: RevealLinesProps) {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.08,
        delayChildren: reduce ? 0 : 0.04,
      },
    },
  };

  const lineVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduce
        ? { duration: 0.01 }
        : boutiqueTransition(0.75, 0),
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial={reduce ? "visible" : "hidden"}
      whileInView="visible"
      viewport={boutiqueViewport}
    >
      {lines.map((text, i) => (
        <motion.span
          key={i}
          variants={lineVariant}
          className={`block ${lineClassName}`}
        >
          {text}
        </motion.span>
      ))}
    </motion.div>
  );
}

/** Título multi-línea con misma curva (sin stagger fuerte) */
export function RevealHeadingLines({
  lines,
  className,
  lineClassName,
}: RevealLinesProps) {
  const reduce = useReducedMotion();
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.1,
        delayChildren: reduce ? 0 : 0.06,
      },
    },
  };
  const lineVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduce
        ? { duration: 0.01 }
        : { ...boutiqueTransition(0.85, 0), ease: boutiqueEase },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial={reduce ? "visible" : "hidden"}
      whileInView="visible"
      viewport={boutiqueViewport}
    >
      {lines.map((text, i) => (
        <motion.span
          key={i}
          variants={lineVariant}
          className={
            lineClassName
              ? `${lineClassName} block text-balance`
              : "block text-balance"
          }
        >
          {text}
        </motion.span>
      ))}
    </motion.div>
  );
}
