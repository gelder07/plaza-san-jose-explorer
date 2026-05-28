import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { BuildingFullPanel } from "@/components/BuildingFullPanel";
import { ModuleStackView } from "@/components/ModuleStackView";
import { buildings, modules, type Building } from "@/data/data";

export const Route = createFileRoute("/portafolio")({
  head: () => ({
    meta: [
      { title: "Portafolio — Plaza San José" },
      {
        name: "description",
        content:
          "Explora los 3 edificios y 20 módulos de oficinas en renta en Plaza San José, Managua.",
      },
      { property: "og:title", content: "Portafolio — Plaza San José" },
      {
        property: "og:description",
        content: "Recorre interactivamente nuestros edificios A, B y C.",
      },
    ],
  }),
  component: Portafolio,
});

function Portafolio() {
  // Edificio actualmente seleccionado (null = vista de edificios)
  const [selected, setSelected] = useState<Building["id"] | null>(null);

  const selectedBuilding = useMemo(
    () => buildings.find((b) => b.id === selected) ?? null,
    [selected],
  );

  const selectedModules = useMemo(
    () => (selected ? modules.filter((m) => m.buildingId === selected) : []),
    [selected],
  );

  return (
    <div className="bg-navy">
      <AnimatePresence mode="wait">
        {!selectedBuilding ? (
          <motion.div
            key="buildings"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Mini hero introductorio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 max-w-7xl mx-auto text-white"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-warm-orange font-semibold">
                Portafolio
              </span>
              <h1 className="mt-3 text-5xl md:text-7xl font-extrabold tracking-tight">
                Tres edificios.
                <br />
                <span className="text-warm-orange italic font-light">Veinte módulos.</span>
              </h1>
              <p className="mt-5 text-lg text-white/70 max-w-2xl">
                Selecciona un edificio para recorrer sus módulos disponibles en una experiencia inmersiva.
              </p>
            </motion.div>

            {/* Edificios fullscreen */}
            {buildings.map((b, i) => (
              <BuildingFullPanel
                key={b.id}
                building={b}
                index={i}
                onSelect={setSelected}
              />
            ))}
          </motion.div>
        ) : (
          <ModuleStackView
            key={`modules-${selectedBuilding.id}`}
            building={selectedBuilding}
            modules={selectedModules}
            onBack={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
