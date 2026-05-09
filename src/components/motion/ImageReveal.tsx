"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { boutiqueEase, boutiqueViewport } from "@/lib/motion-boutique";

type ImageRevealProps = {
  children: ReactNode;
  className?: string;
};

/** Escala 1.05 → 1 y fade-in al entrar en vista */
export function ImageReveal({ children, className }: ImageRevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 1.05 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={boutiqueViewport}
      transition={{ duration: 1.05, ease: boutiqueEase }}
    >
      {children}
    </motion.div>
  );
}
