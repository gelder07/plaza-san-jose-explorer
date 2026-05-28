import { motion } from "framer-motion";
import type { Building } from "@/data/data";

interface BuildingFullPanelProps {
  building: Building;
  index: number;
  onSelect: (id: Building["id"]) => void;
}

/** Ícono SVG de edificio (inline, color hereda de currentColor) */
function BuildingIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    >
      <rect x="10" y="14" width="44" height="44" rx="1" />
      <rect x="16" y="20" width="6" height="6" />
      <rect x="29" y="20" width="6" height="6" />
      <rect x="42" y="20" width="6" height="6" />
      <rect x="16" y="32" width="6" height="6" />
      <rect x="29" y="32" width="6" height="6" />
      <rect x="42" y="32" width="6" height="6" />
      <rect x="16" y="44" width="6" height="6" />
      <rect x="42" y="44" width="6" height="6" />
      <rect x="28" y="44" width="8" height="14" />
      <path d="M10 14 L32 4 L54 14" />
    </svg>
  );
}

/** Panel fullscreen de un edificio, seleccionable */
export function BuildingFullPanel({
  building,
  index,
  onSelect,
}: BuildingFullPanelProps) {
  const overlayClass =
    building.id === "A"
      ? "from-navy/85 to-navy/40"
      : building.id === "B"
        ? "from-corporate-green/85 to-navy/50"
        : "from-teal/80 to-navy/50";

  return (
    <motion.button
      onClick={() => onSelect(building.id)}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      whileHover="hover"
      className="relative w-full h-screen overflow-hidden group text-left block"
    >
      {/* Imagen */}
      <motion.img
        src={building.heroImage}
        alt={building.name}
        variants={{ hover: { scale: 1.06 } }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${overlayClass}`} />

      {/* Contenido */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center text-white">
        <motion.div
          layoutId={`building-${building.id}-icon`}
          className="text-warm-orange mb-6"
        >
          <BuildingIcon className="w-16 h-16 md:w-20 md:h-20" />
        </motion.div>

        <span className="text-sm md:text-base uppercase tracking-[0.3em] text-warm-orange font-semibold mb-3">
          Edificio · 0{index + 1}
        </span>

        <motion.h2
          layoutId={`building-${building.id}-name`}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
        >
          {building.name}
        </motion.h2>

        <p className="mt-4 text-xl md:text-2xl text-white/90 max-w-2xl">
          {building.tagline}
        </p>

        <p className="mt-6 text-base md:text-lg text-white/75 max-w-xl leading-relaxed">
          {building.description}
        </p>

        <div className="mt-8 flex items-center gap-6">
          <span className="text-sm uppercase tracking-wider text-white/70">
            {building.totalModules} módulos
          </span>
          <motion.span
            variants={{
              hover: { width: "12rem" },
            }}
            initial={{ width: "3rem" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-0.5 bg-warm-orange"
          />
          <span className="text-sm uppercase tracking-wider text-warm-orange font-semibold flex items-center gap-2">
            Ver módulos
            <motion.span
              variants={{ hover: { x: 6 } }}
              transition={{ duration: 0.4 }}
              className="inline-block"
            >
              →
            </motion.span>
          </span>
        </div>
      </div>

      {/* Número grande decorativo */}
      <span className="absolute right-6 md:right-12 bottom-6 md:bottom-10 text-[12rem] md:text-[18rem] leading-none font-extrabold text-white/5 select-none pointer-events-none">
        {building.id}
      </span>
    </motion.button>
  );
}
