"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function ProjectGallery() {
  const projects = [
    { 
      id: "SIDGDEP", 
      title: "SIDGDEP", 
      tag: " Gestión Deportiva",
      description: "Sistema integral para academias y gimnasios. Automatiza membresías, pagos, inventarios y comisiones de instructores en una plataforma unificada.",
      link: "https://academies-demo-frontned.onrender.com/auth/login",
      access: { user: "admin@gmail.com", pass: "adminadmin" }
    },
    { 
      id: "SIDGDER", 
      title: "SIDGDER", 
      tag: "Sector Restaurantero",
      description: "Sistema web integral desarrollado para gestionar las operaciones de un restaurante, incluyendo ventas, inventario, menús digitales con códigos QR, nómina e informes financieros.",
      link: "https://sdigder-frontend-example.onrender.com/",
      access: { user: "admin@gmail.com", pass: "adminadmin" }
    },
    { 
      id: "NeuroFile", 
      title: "NeuroFile", 
      tag: " HealthTech & IA",
      description: "Sistema de gestión de historiales clínicos para consultas de psicología y neuropsicología. Digitaliza los expedientes con flujos de trabajo basados en voz y transcripción automática.",
      link: "https://neurofile-frontend-qa.up.railway.app/login",
      access: { user: "maria.garcia@neurofile.com", pass: "NeuroFile2025" }
    },
    { 
      id: "Restify", 
      title: "Restify", 
      tag: "Arquitectura Cloud",
      description: "Migración sin servidor de un sistema de gestión de restaurantes a AWS. Incluye pagos con Stripe, WebSockets y arquitectura orientada a eventos.",
      link: "https://restify-qa.up.railway.app/auth/login",
      access: { user: "admin@restify.com", pass: "Restify123!" }
    },
    { 
      id: "GYF", 
      title: "GYF System", 
      tag: "// Gestión Educativa",
      description: "Sistema de gestión de documentos y estudiantes para instituciones educativas. Centraliza certificados, calificaciones y conexión entre padres y profesores.",
      link: "https://gyfsystem-frontend-qa.up.railway.app/login",
      access: { user: "admin@filesmanager.com", pass: "password123" }
    },
  ];

  return (
    <section id="projects" className="bg-white py-24 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16">
          <p className="font-fira-mono text-xs uppercase tracking-[0.3em] text-taupe mb-4">
            {"Galeria de Proyectos"}
          </p>
          <h2 className="font-fira-mono text-4xl font-bold uppercase tracking-tighter text-graphite sm:text-5xl">
            Sistemas en Producción
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col justify-between items-start gap-4 w-full h-[22rem] duration-500 rounded-[32px] p-8 md:p-10 bg-white border border-zinc-100 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] hover:-translate-y-2 hover:shadow-[25px_25px_75px_#b1b1b1,-25px_-25px_75px_#ffffff]"
            >
              {/* Cuadro de Credenciales (Access Card) */}
              <div
                className="absolute -bottom-6 -right-6 h-36 w-44 rounded-3xl bg-[#fdfdfd] border border-zinc-50 shadow-lg duration-700 group-hover:-translate-x-6 group-hover:-translate-y-6 flex flex-col justify-center p-5 z-20"
              >
                <p className="font-fira-mono text-[9px] uppercase tracking-tighter text-taupe mb-2 border-b border-zinc-100 pb-1">
                  Access Keys
                </p>
                <div className="space-y-1">
                  <div className="flex flex-col">
                    <span className="font-fira-mono text-[8px] text-taupe/60 uppercase">User</span>
                    <span className="font-fira-mono text-[10px] text-graphite font-bold truncate">{project.access.user}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-fira-mono text-[8px] text-taupe/60 uppercase">Pass</span>
                    <span className="font-fira-mono text-[10px] text-graphite font-bold">{project.access.pass}</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 w-full pr-10">
                <span className="font-fira-mono text-[10px] tracking-widest text-taupe uppercase mb-2 block">
                  {project.tag}
                </span>
                <h3 className="text-2xl font-bold text-graphite font-fira-mono uppercase tracking-tighter mb-4">
                  {project.title}
                </h3>
                <p className="text-graphite/70 font-fira-mono text-sm leading-relaxed line-clamp-4">
                  {project.description}
                </p>
              </div>

              <div className="group relative z-10 inline-flex items-center justify-center gap-4">
                <div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 opacity-60 blur-lg filter transition-all duration-1000 group-hover:opacity-100 group-hover:duration-200"
                  aria-hidden
                />
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                  className="relative inline-flex items-center justify-center rounded-xl bg-gray-900 px-8 py-3 font-fira-mono text-[10px] font-bold uppercase tracking-widest text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-600/30"
                >
                  Explorar Proyecto
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}