"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MotionSection } from "./MotionSection";
import { boutiqueTransition, boutiqueViewport } from "@/lib/motion-boutique";

export function About() {
  const reduce = useReducedMotion();

  return (
    <MotionSection
      id="about"
      className="bg-white py-24 px-6 md:px-12 lg:px-20 border-t border-zinc-100"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Columna de Texto - Lado Izquierdo */}
          <div className="lg:col-span-7">
            <header className="mb-12">
              
              <h2 className="font-fira-mono text-4xl font-bold uppercase tracking-tighter text-graphite sm:text-5xl md:text-6xl leading-tight">
                Comprometidos con el oficio. <br />
                <span className="text-taupe/40">Obsesionados con el detalle.</span>
              </h2>
            </header>

            <div className="space-y-8 font-fira-mono text-sm md:text-base leading-relaxed text-graphite/80 max-w-2xl">
              <p>
                Luum nació de una idea simple: recuperar el valor de las cosas bien hechas. 
                En un mundo que corre demasiado rápido, nosotros elegimos detenernos.
              </p>
              <p>
                Preferimos trabajar con pocos clientes para darles todo nuestro enfoque, 
                creando software que se siente bien al usarlo. Nos fijamos en la armonía 
                de una buena letra y la seguridad de un sistema diseñado con cuidado.
              </p>
              
            </div>
          </div>

          {/* Columna de Perfil - Lado Derecho */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <motion.div 
              className="relative group"
              initial={reduce ? false : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={boutiqueViewport}
              transition={boutiqueTransition(1, 0.2)}
            >
              {/* Aura de color sutil (como en las esferas de proyectos) */}
              <div className="absolute inset-0 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-indigo-500 via-pink-500 to-yellow-400 group-hover:opacity-40 transition-opacity duration-1000" />
              
              <div className="relative h-80 w-80 md:h-96 md:w-96 rounded-full overflow-hidden border border-zinc-100 bg-white shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-2">
                <div className="h-full w-full rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <Image
                    src="/assets/Karina_GB.png"
                    alt="Karina García"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 320px, 400px"
                  />
                </div>
              </div>

              {/* Tag de Firma */}
              <div className="mt-8 text-center lg:text-right font-fira-mono">
                <p className="text-xs font-bold uppercase tracking-widest text-graphite">
                   Karina García Bartolo
                </p>
                <p className="text-[10px] uppercase tracking-wider text-taupe mt-1">
                  Ing. en Sistemas — Fundadora
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </MotionSection>
  );
}