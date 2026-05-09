'use client';

import React from 'react';

type LoaderLavaProps = {
  /** Tamaño del orbe en px (por defecto 100, como en Hero) */
  sizePx?: number;
  /** Opacidad global del componente (0–1). Por defecto 1. */
  opacity?: number;
};

const LoaderLava = ({ sizePx = 100, opacity = 1 }: LoaderLavaProps) => {
  const timeAnimation = "4s";

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
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[var(--color-five)] to-[var(--color-four)] shadow-[inset_0_14px_24px_0_rgba(255,191,71,0.35),inset_0_-14px_24px_0_rgba(191,74,29,0.35)]" />
        
        {/* SVG único: gradient + mask + rect enmascarado en el mismo árbol SVG.
            Safari iOS ignora `mask: url(#id)` aplicado a un <div> vía CSS, así que
            usamos `mask="url(#id)"` como atributo SVG sobre el <rect>. */}
        <svg
          className="absolute left-0 top-0"
          width={sizePx}
          height={sizePx}
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient id="lavaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="30%" stopColor="#ffbf48" />
              <stop offset="70%" stopColor="#be4a1d" />
            </linearGradient>
            {/* Filtro "liquid" SVG-nativo (compat Safari/iOS): blur amplio sobre los
                polígonos + threshold MUY suave del alpha vía feColorMatrix. La idea
                no es definir blobs nítidos (metaball) sino dejar pasar un degradado
                difuso que solo insinúe el movimiento, como un líquido. El pulso del
                antiguo `roundness` se preserva con SMIL pero entre valores bajos
                (3 ↔ 2), de modo que los bordes nunca se endurecen. */}
            <filter id="goo" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="11" result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 2 -0.6"
              >
                <animate
                  attributeName="values"
                  dur="2s"
                  repeatCount="indefinite"
                  keyTimes="0;0.2;0.4;0.6;1"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 2 -0.6;
                          1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1.5 -0.4;
                          1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1.5 -0.4;
                          1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 2 -0.6;
                          1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 2 -0.6"
                />
              </feColorMatrix>
            </filter>
            <mask id="clipping">
              <rect x="-10" y="-10" width="120" height="120" fill="black" />
              <g filter="url(#goo)">
                <polygon className="p1" points="25,25 75,25 50,75" fill="white" />
                <polygon className="p2" points="50,25 75,75 25,75" fill="white" />
                <polygon className="p3" points="35,35 65,35 50,65" fill="white" />
                <polygon className="p4" points="35,35 65,35 50,65" fill="white" />
                <polygon className="p5" points="35,35 65,35 50,65" fill="white" />
                <polygon className="p6" points="35,35 65,35 50,65" fill="white" />
                <polygon className="p7" points="35,35 65,35 50,65" fill="white" />
              </g>
            </mask>
          </defs>
          <rect
            width="100"
            height="100"
            fill="url(#lavaGradient)"
            mask="url(#clipping)"
          />
        </svg>
      </div>
    </div>
  );
};

export default LoaderLava;