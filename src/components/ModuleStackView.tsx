import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Building, Module } from "@/data/data";
import { ModuleCard } from "./ModuleCard";

interface ModuleStackViewProps {
  building: Building;
  modules: Module[];
  onBack: () => void;
}

/**
 * Vista de módulos estilo big.dk: cada módulo es una sección 100vh
 * con scroll-snap; el siguiente se desliza desde abajo cubriendo el anterior
 * gracias al sticky stacking.
 */
export function ModuleStackView({
  building,
  modules,
  onBack,
}: ModuleStackViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  // Detecta el índice actualmente visible
  useEffect(() => {
    const sections = containerRef.current?.querySelectorAll("[data-module-section]");
    if (!sections) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            setCurrent(idx);
          }
        });
      },
      { threshold: [0.5, 0.7] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [modules.length]);

  const scrollTo = (i: number) => {
    const el = containerRef.current?.querySelector(
      `[data-index="${i}"]`,
    ) as HTMLElement | null;
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative w-full bg-white"
    >
      {/* Botón volver */}
      <motion.button
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ x: -4 }}
        className="fixed top-24 left-6 z-40 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-navy text-white text-sm font-semibold shadow-lg hover:bg-navy/90 transition-colors"
      >
        ← Volver a edificios
      </motion.button>

      {/* Encabezado fijo con el nombre del edificio */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="fixed top-24 right-6 z-40 hidden md:flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-navy/10"
      >
        <motion.div layoutId={`building-${building.id}-icon`} className="text-teal">
          <svg viewBox="0 0 64 64" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3">
            <rect x="10" y="14" width="44" height="44" rx="1" />
            <path d="M10 14 L32 4 L54 14" />
          </svg>
        </motion.div>
        <motion.span layoutId={`building-${building.id}-name`} className="text-sm font-bold text-navy">
          {building.name}
        </motion.span>
      </motion.div>

      {/* Indicador lateral de progreso */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
        {modules.map((m, i) => (
          <button
            key={m.id}
            onClick={() => scrollTo(i)}
            aria-label={`Ir al módulo ${m.number}`}
            className="group flex items-center gap-3"
          >
            <span
              className={`text-xs font-semibold tabular-nums transition-opacity ${
                i === current ? "text-navy opacity-100" : "text-navy/40 opacity-0 group-hover:opacity-100"
              }`}
            >
              {m.number}
            </span>
            <span
              className={`block rounded-full transition-all ${
                i === current
                  ? "w-3 h-3 bg-warm-orange"
                  : "w-2 h-2 bg-navy/30 group-hover:bg-navy/60"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Contenedor con scroll-snap y stacking sticky */}
      <div
        ref={containerRef}
        className="snap-y snap-mandatory"
        style={{ scrollSnapType: "y mandatory" }}
      >
        {modules.map((m, i) => (
          <section
            key={m.id}
            data-module-section
            data-index={i}
            className="sticky top-0 h-screen snap-start"
            style={{ zIndex: i + 1 }}
          >
            {/* Wrapper con sombra superior para reforzar el efecto de apilamiento */}
            <div className="h-full shadow-[0_-30px_60px_-30px_rgba(11,31,58,0.35)]">
              <ModuleCard
                module={m}
                building={building}
                indexInList={i}
                total={modules.length}
              />
            </div>
          </section>
        ))}
      </div>
    </motion.div>
  );
}
