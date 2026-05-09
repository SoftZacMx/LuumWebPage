"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import {
  boutiqueEase,
  boutiqueTransition,
  boutiqueViewport,
} from "@/lib/motion-boutique";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
} & Omit<HTMLMotionProps<"section">, "children">;

export function MotionSection({
  children,
  className,
  delay = 0,
  ...props
}: MotionSectionProps) {
  const reduce = useReducedMotion();

  return (
    <motion.section
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={boutiqueViewport}
      transition={{ ...boutiqueTransition(0.85, delay) }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function MotionDiv({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={boutiqueViewport}
      transition={{ ...boutiqueTransition(0.85, delay), ease: boutiqueEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
