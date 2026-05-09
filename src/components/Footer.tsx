"use client";

import LoaderLava from "@/components/LoaderLava";
import { MotionSection } from "./MotionSection";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <MotionSection className="bg-white border-t border-zinc-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          {/* Información de Marca */}
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start">
            <p className="font-fira-mono text-2xl font-bold tracking-tighter text-graphite uppercase">
              Luum
            </p>
            <p className="mt-4 font-fira-mono text-[10px] uppercase tracking-widest text-taupe leading-relaxed text-center md:text-left">
              © {currentYear} — Ingeniería con alma de diseño.
            </p>
          </div>

          {/* Esfera de Lava Central (Inspirada en Imagen 2) */}
          <div className="order-1 md:order-2 flex justify-center">
            <LoaderLava sizePx={168} opacity={0.45} />
          </div>

          {/* Redes Sociales y Contacto */}
          <div className="order-3 flex flex-col items-center md:items-end gap-6">
            <nav className="flex gap-8">
              <a
                href="https://www.instagram.com/luum.dev?igsh=ZHo4amZ4cTUxZGI3"
                target="_blank"
                rel="noopener noreferrer"
                className="font-fira-mono text-[10px] font-bold uppercase tracking-widest text-graphite hover:text-taupe transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/4924926512"
                target="_blank"
                rel="noopener noreferrer"
                className="font-fira-mono text-[10px] font-bold uppercase tracking-widest text-graphite hover:text-taupe transition-colors"
              >
                WhatsApp
              </a>
            </nav>
            
            <a 
              href="mailto:hola@luum.com"
              className="font-fira-mono text-[10px] uppercase tracking-[0.2em] text-taupe hover:text-graphite transition-colors underline underline-offset-8"
            >
              hola@luum.com
            </a>
          </div>

        </div>

       
      </div>
    </MotionSection>
  );
}