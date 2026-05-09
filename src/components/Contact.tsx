"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { boutiqueEase, boutiqueTransition, boutiqueViewport } from "@/lib/motion-boutique";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [state, setState] = useState<{ success?: boolean; error?: string }>({});
  const reduce = useReducedMotion();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    // Usaremos Web3Forms (requiere un token gratuito de https://web3forms.com/)
    // Es perfecto para proyectos con estética minimalista
    formData.append("access_key", "TU_TOKEN_AQUÍ"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setState({ success: true });
        (e.target as HTMLFormElement).reset();
      } else {
        setState({ error: "Hubo un error. Por favor, intenta de nuevo." });
      }
    } catch {
      setState({ error: "Error de conexión." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-white py-24 px-6 md:px-12 lg:px-20 border-t border-zinc-100">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={boutiqueViewport}
          transition={{ ...boutiqueTransition(1, 0), ease: boutiqueEase }}
          className="bg-white p-10 rounded-[32px] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border border-zinc-50"
        >
          <header className="text-center mb-12">
            <h2 className="font-fira-mono text-3xl font-bold uppercase tracking-tighter text-graphite md:text-4xl">
              Iniciemos una conversación sobre tu proyecto
            </h2>
          </header>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <label className="block group">
                <span className="font-fira-mono text-[10px] uppercase tracking-widest text-taupe group-focus-within:text-graphite transition-colors">
                  Nombre completo
                </span>
                <input
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full border-b border-zinc-200 bg-transparent py-2 font-fira-mono text-sm text-graphite outline-none focus:border-graphite transition-all"
                  placeholder="Nombre completo"
                />
              </label>
              <label className="block group">
                <span className="font-fira-mono text-[10px] uppercase tracking-widest text-taupe group-focus-within:text-graphite transition-colors">
                  Correo electrónico
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full border-b border-zinc-200 bg-transparent py-2 font-fira-mono text-sm text-graphite outline-none focus:border-graphite transition-all"
                  placeholder="tu@correo.com"
                />
              </label>
            </div>

            <label className="block group">
              <span className="font-fira-mono text-[10px] uppercase tracking-widest text-taupe group-focus-within:text-graphite transition-colors">
                Tipo de proyecto
              </span>
              <select
                name="project_type"
                required
                className="mt-2 w-full cursor-pointer border-b border-zinc-200 bg-transparent py-2 font-fira-mono text-sm text-graphite outline-none focus:border-graphite transition-all appearance-none"
                defaultValue=""
              >
                <option value="" disabled>Selecciona una arquitectura</option>
                <option value="custom">Software a la medida</option>
                <option value="saas">Ecosistema SaaS</option>
                <option value="consulting">Consultoría Técnica</option>
                <option value="otro">Otro</option>
              </select>
            </label>

            <label className="block group">
              <span className="font-fira-mono text-[10px] uppercase tracking-widest text-taupe group-focus-within:text-graphite transition-colors">
                Mensaje
              </span>
              <textarea
                name="message"
                rows={4}
                required
                className="mt-2 w-full resize-none border-b border-zinc-200 bg-transparent py-2 font-fira-mono text-sm text-graphite outline-none focus:border-graphite transition-all"
                placeholder="Describe tu visión técnica..."
              />
            </label>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative z-10 w-full rounded-xl bg-gray-900 py-4 font-fira-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-600/30 disabled:pointer-events-none disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:bg-gray-900 disabled:hover:shadow-none"
              >
                {isSubmitting ? "Procesando..." : "Enviar Consulta"}
              </button>
            </div>

            {state.success && (
              <p className="font-fira-mono text-[10px] text-center text-green-600 uppercase tracking-widest animate-pulse">
                Mensaje enviado con éxito. Te contactaremos pronto.
              </p>
            )}
            {state.error && (
              <p className="font-fira-mono text-[10px] text-center text-red-500 uppercase tracking-widest">
                {state.error}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}