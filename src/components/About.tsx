"use client";

import { MotionSection } from "./MotionSection";

export function About() {
  return (
    <MotionSection
      id="about"
      className="bg-white py-24 px-6 md:px-12 lg:px-20 border-t border-zinc-100"
    >
      {/* El contenedor principal se centra con mx-auto y tiene una alineación interna a la izquierda */}
      <div className="mx-auto max-w-3xl flex flex-col items-start justify-center">
        
        <header className="mb-12 w-full text-left">
          <h2 className="font-fira-mono text-4xl font-bold uppercase tracking-tighter text-graphite sm:text-5xl md:text-6xl leading-tight">
            Comprometidos con el oficio. <br />
            <span className="text-taupe/40">Obsesionados con el detalle.</span>
          </h2>
        </header>

        {/* text-justify distribuye el texto uniformemente y max-w-2xl controla la longitud de línea */}
        <div className="space-y-8 font-fira-mono text-sm md:text-base leading-relaxed text-graphite/80 max-w-2xl text-justify">
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
    </MotionSection>
  );
}