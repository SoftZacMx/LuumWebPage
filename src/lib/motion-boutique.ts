import type { Transition } from "framer-motion";

/** Curva orgánica boutique (cubic-bezier) */
export const boutiqueEase = [0.22, 1, 0.36, 1] as const;

/** whileInView: una vez, margen viewport -100px (px-only por compatibilidad iOS Safari) */
export const boutiqueViewport = {
  once: true as const,
  margin: "-100px",
};

export function boutiqueTransition(
  duration = 0.85,
  delay = 0
): Transition {
  return { duration, delay, ease: boutiqueEase };
}
