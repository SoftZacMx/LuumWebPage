"use client";

import type { CSSProperties } from "react";

interface SliderItem {
  id: number;
  label: string;
  content: string;
}

const sliderData: SliderItem[] = [
  { id: 1, label: "// TECH", content: "Next.js 15" },
  { id: 2, label: "// DEV", content: "Tailwind CSS 4" },
  { id: 3, label: "// DATA", content: "PostgreSQL" },
  { id: 4, label: "// CLOUD", content: "AWS Services" },
  { id: 5, label: "// UI/UX", content: "Framer Motion" },
  { id: 6, label: "// ARCH", content: "Clean Code" },
  { id: 7, label: "// API", content: "Spring Boot" },
  { id: 8, label: "// MOBILE", content: "React Native" },
  { id: 9, label: "// CORE", content: "Java 21" },
];

const trackVars = {
  "--width": "220px",
  "--height": "180px",
} as const;

/** Máscara + variables; animación vía Tailwind (`animate-autoRun15`) — evita styled-jsx en el bundle */
export function InfiniteSlider() {
  const quantity = sliderData.length;

  return (
    <section className="overflow-hidden bg-white py-20">
      <div
        className="group relative mx-auto w-full"
        style={
          {
            ...trackVars,
            "--quantity": quantity,
            height: "var(--height)",
            maskImage: "linear-gradient(to right, transparent, #000 10% 90%, transparent)",
          } as CSSProperties
        }
      >
        <div className="relative flex h-full w-full min-w-[calc(var(--width)*var(--quantity))]">
          {sliderData.map((item, index) => (
            <div
              key={item.id}
              className="absolute left-full h-[var(--height)] w-[var(--width)] px-3 transition-all duration-500 animate-autoRun15 group-hover:[animation-play-state:paused] group-hover:grayscale hover:grayscale-0"
              style={
                {
                  animationDelay: `calc((15s / ${quantity}) * ${index})`,
                } as CSSProperties
              }
            >
              <div className="flex h-full w-full flex-col items-center justify-center rounded-[24px] border border-zinc-100 bg-[#fdfdfd] p-6 text-center font-fira-mono shadow-[6px_6px_12px_#eeeeee,-6px_-6px_12px_#ffffff]">
                <span className="mb-3 text-[10px] uppercase tracking-[0.2em] text-taupe">{item.label}</span>
                <p className="text-sm font-bold uppercase tracking-tight text-graphite">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
