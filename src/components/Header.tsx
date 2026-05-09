"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const nav = [
  
  
  { href: "#about", label: "Sobre nosotros" },
  { href: "#contact", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-graphite/5 bg-canvas/70 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12 lg:px-20">
        <Link
          href="#"
          className="font-fira-mono text-2xl tracking-tight text-graphite"
        >
          Luum
        </Link>

        <nav
          className="hidden items-center gap-10 md:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-widestcaps text-graphite/90 transition hover:text-taupe"
            >
              {item.label}
            </Link>
          ))}
        </nav>

       
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-graphite/10 bg-canvas/95 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-6" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-3 text-sm font-medium uppercase tracking-widestcaps text-graphite"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
             
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
