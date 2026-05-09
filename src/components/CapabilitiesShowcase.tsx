"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const capabilities = [
  {
    id: "01",
    label: "Transformación Digital",
    title: "INGENIERÍA A LA MEDIDA",
    description:
      "Desarrollamos software intuitivo y de alta calidad que impulsa la evolución de los negocios tradicionales hacia el entorno digital, simplificando procesos críticos.",
    stats: [
      { value: "97%", label: "fiabilidad del sistema" },
      { value: "3%", label: "más rápidos en entregas" },
    ],
  },
  {
    id: "02",
    label: "Potencial de Crecimiento",
    title: "ESCALABILIDAD Y EFICIENCIA",
    description:
      "Nuestras soluciones están diseñadas no solo para el presente, sino para potenciar el crecimiento futuro de tu empresa, maximizando la eficiencia operativa.",
    stats: [
      { value: "60%", label: "reducción operativa" },
      { value: "24/7", label: "soporte técnico" },
    ],
  },
  {
    id: "03",
    label: "Experiencia Digital",
    title: "DISEÑO E INNOVACIÓN",
    description:
      "Creamos experiencias digitales excepcionales transformando la manera en que los negocios interactúan con la tecnología, poniendo el alma del diseño en cada línea de código.",
    stats: [
      { value: "+95%", label: "satisfacción del usuario" },
      { value: "20+", label: "premios de diseño" },
    ],
  },
];

const neuTrack =
  "shadow-[inset_5px_5px_12px_#cfcfcf,inset_-5px_-5px_12px_#ffffff]";
const neuCard =
  "shadow-[18px_18px_38px_#cfcfcf,-18px_-18px_38px_#ffffff]";
const neuStat =
  "shadow-[10px_10px_22px_#cfcfcf,-10px_-10px_22px_#ffffff]";

export function CapabilitiesShowcase() {
  const [activeTab, setActiveTab] = useState(capabilities[0].id);
  const activeData = capabilities.find((cap) => cap.id === activeTab)!;

  return (
    <section className="relative bg-canvas px-6 pb-36 pt-8 md:px-12 md:pb-44 md:pt-12 lg:px-20 lg:pb-52 lg:pt-16">
      <div className="mx-auto max-w-5xl">
        <div
          className={`mx-auto mb-20 flex max-w-xl items-center justify-center gap-1 rounded-full bg-canvas p-1.5 ${neuTrack}`}
        >
          {capabilities.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 rounded-full px-4 py-3 text-xs font-medium transition-all duration-300 md:text-sm ${
                activeTab === tab.id
                  ? `bg-graphite text-zinc-100 shadow-[5px_5px_12px_rgba(26,26,26,0.35)]`
                  : "text-graphite/55 hover:text-graphite"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`mx-auto flex max-w-4xl flex-col items-center overflow-hidden rounded-3xl bg-canvas p-8 text-center md:p-16 ${neuCard}`}
          >
            <div className="flex w-full flex-col items-center gap-10">
              <div className="flex flex-col items-center gap-4">
                <span className="font-fira-mono text-sm tracking-widest text-taupe">
                  {activeData.id}
                </span>
                <h3 className="font-fira-mono text-4xl font-bold uppercase leading-tight tracking-tight text-graphite md:text-5xl">
                  {activeData.title}
                </h3>
                <p className="mx-auto max-w-xl font-fira-mono text-base leading-relaxed tracking-wide text-graphite/80">
                  {activeData.description}
                </p>
              </div>

              <div className="mt-4 flex w-full flex-col gap-6 sm:flex-row">
                {activeData.stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-2xl bg-canvas p-10 ${neuStat}`}
                  >
                    <p className="font-fira-mono text-5xl font-extrabold text-graphite">
                      {stat.value}
                    </p>
                    <p className="mt-3 font-fira-mono text-[10px] uppercase tracking-widestcaps text-taupe">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
