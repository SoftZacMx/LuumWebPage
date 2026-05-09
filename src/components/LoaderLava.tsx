'use client';

import React from 'react';

type LoaderLavaProps = {
  /** Tamaño del orbe en px (por defecto 100, como en Hero) */
  sizePx?: number;
  /** Opacidad global del componente (0–1). Por defecto 1. */
  opacity?: number;
};

const LoaderLava = ({ sizePx = 100, opacity = 1 }: LoaderLavaProps) => {
  const timeAnimation = "2s";

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ opacity }}
    >
      <style jsx>{`
        @keyframes rotation {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes roundness {
          0%, 60%, 100% { filter: contrast(15); }
          20%, 40% { filter: contrast(3); }
        }
        @keyframes colorize {
          0%, 100% { filter: hue-rotate(0deg); }
          20% { filter: hue-rotate(-30deg); }
          40% { filter: hue-rotate(-60deg); }
          60% { filter: hue-rotate(-90deg); }
          80% { filter: hue-rotate(-45deg); }
        }

        .loader-container {
          --color-one: #ffbf48;
          --color-two: #be4a1d;
          --color-three: #ffbf4780;
          --color-four: #bf4a1d80;
          --color-five: #ffbf4740;
          animation: colorize calc(${timeAnimation} * 3) ease-in-out infinite;
        }

        /* Corregimos el filtro para que no corte los bordes */
        .clipping-mask {
          filter: contrast(15);
          animation: roundness calc(${timeAnimation} / 2) linear infinite;
        }

        .clipping-mask polygon {
          filter: blur(7px);
        }

        .p1 { transform-origin: 75% 25%; transform: rotate(90deg); }
        .p2 { transform-origin: 50% 50%; animation: rotation ${timeAnimation} linear infinite reverse; }
        .p3 { transform-origin: 50% 60%; animation: rotation ${timeAnimation} linear infinite; animation-delay: calc(${timeAnimation} / -3); }
        .p4 { transform-origin: 40% 40%; animation: rotation ${timeAnimation} linear infinite reverse; }
        .p5 { transform-origin: 40% 40%; animation: rotation ${timeAnimation} linear infinite reverse; animation-delay: calc(${timeAnimation} / -2); }
        .p6 { transform-origin: 60% 40%; animation: rotation ${timeAnimation} linear infinite; }
        .p7 { transform-origin: 60% 40%; animation: rotation ${timeAnimation} linear infinite; animation-delay: calc(${timeAnimation} / -1.5); }
      `}</style>

      {/* Agregamos overflow-hidden y aislamos el renderizado */}
      <div
        className="loader-container relative overflow-hidden rounded-full shadow-[0_0_25px_0_rgba(255,191,71,0.5),0_20px_50px_0_rgba(191,74,29,0.5)] isolation-auto"
        style={{ width: sizePx, height: sizePx }}
      >
        
        {/* Fondo y bordes */}
        <div className="absolute inset-0 rounded-full border-b border-t border-[var(--color-two)] border-t-[var(--color-one)] bg-gradient-to-b from-[var(--color-five)] to-[var(--color-four)] shadow-[inset_0_10px_10px_0_rgba(255,191,71,0.5),inset_0_-10px_10px_0_rgba(191,74,29,0.5)]" />
        
        {/* SVG con dimensiones ligeramente mayores para evitar recortes de blur */}
        <svg className="absolute left-0 top-0" width={sizePx} height={sizePx} viewBox="0 0 100 100">
          <defs>
            <mask id="clipping" className="clipping-mask">
              {/* Expandimos el fondo del mask para cubrir todo el contenedor */}
              <rect x="-10" y="-10" width="120" height="120" fill="black" />
              <polygon className="p1" points="25,25 75,25 50,75" fill="white" />
              <polygon className="p2" points="50,25 75,75 25,75" fill="white" />
              <polygon className="p3" points="35,35 65,35 50,65" fill="white" />
              <polygon className="p4" points="35,35 65,35 50,65" fill="white" />
              <polygon className="p5" points="35,35 65,35 50,65" fill="white" />
              <polygon className="p6" points="35,35 65,35 50,65" fill="white" />
              <polygon className="p7" points="35,35 65,35 50,65" fill="white" />
            </mask>
          </defs>
        </svg>

        
        <div 
          className="h-full w-full bg-gradient-to-b from-[#ffbf48] from-[30%] to-[#be4a1d] to-[70%]"
          style={{ 
            mask: 'url(#clipping)', 
            WebkitMask: 'url(#clipping)'
          }}
        />
      </div>
    </div>
  );
};

export default LoaderLava;