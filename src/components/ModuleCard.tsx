import { motion } from "framer-motion";
import type { Building, Module } from "@/data/data";
import { whatsappLink } from "@/data/data";
import { ModuleGallery } from "./ModuleGallery";
import { StatusBadge } from "./StatusBadge";

interface ModuleCardProps {
  module: Module;
  building: Building;
  indexInList: number;
  total: number;
}

/** Card de módulo a pantalla completa con galería + info + CTA WhatsApp */
export function ModuleCard({
  module,
  building,
  indexInList,
  total,
}: ModuleCardProps) {
  const message = `Hola, me interesa el módulo ${module.number} del ${building.name} (${module.areaM2} m²). ¿Podrían darme más información sobre disponibilidad y precios?`;

  return (
    <motion.article
      whileHover={{ scale: 1.005 }}
      transition={{ duration: 0.3 }}
      className="w-full h-screen bg-white flex items-center justify-center px-6 md:px-12 py-24"
    >
      <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        {/* Galería */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="aspect-[4/3] w-full"
        >
          <ModuleGallery photos={module.photos} />
        </motion.div>

        {/* Información */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-[0.3em] text-warm-orange font-semibold">
              {building.name}
            </span>
            <span className="text-xs text-muted-foreground tabular-nums">
              {String(indexInList + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>

          <h3 className="text-5xl md:text-7xl font-extrabold text-navy tracking-tight">
            {module.number}
          </h3>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-teal">{module.areaM2}</span>
              <span className="text-lg text-dark-gray/70">m²</span>
            </div>
            <StatusBadge status={module.status} size="md" />
          </div>

          <p className="mt-6 text-base md:text-lg text-dark-gray/80 leading-relaxed max-w-lg">
            {module.description}
          </p>

          {/* CTA WhatsApp */}
          <motion.a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`mt-8 inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full font-semibold text-white shadow-lg transition-shadow self-start ${
              module.status === "disponible"
                ? "bg-warm-orange hover:shadow-xl hover:shadow-warm-orange/40"
                : "bg-dark-gray/70 hover:bg-dark-gray"
            }`}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
            </svg>
            Consultar disponibilidad
          </motion.a>
        </motion.div>
      </div>
    </motion.article>
  );
}
