import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { BuildingFullPanel } from "@/components/BuildingFullPanel";
import { ExtraDetailView } from "@/components/ExtraDetailView";
import { ExtraFullPanel } from "@/components/ExtraFullPanel";
import { ModuleStackView } from "@/components/ModuleStackView";
import {
  buildings,
  modules,
  portfolioExtras,
  type Building,
  type PortfolioExtra,
} from "@/data/data";

export const Route = createFileRoute("/portafolio")({
  head: () => ({
    meta: [
      { title: "Portafolio — Plaza San José" },
      {
        name: "description",
        content:
          "Explora los 3 edificios, 20 módulos de oficinas, parqueos y exteriores en Plaza San José, Managua.",
      },
      { property: "og:title", content: "Portafolio — Plaza San José" },
      {
        property: "og:description",
        content:
          "Recorre interactivamente nuestros edificios A, B y C, parqueos y exteriores.",
      },
    ],
  }),
  component: Portafolio,
});

type PortfolioSelection =
  | { kind: "building"; id: Building["id"] }
  | { kind: "extra"; id: PortfolioExtra["id"] }
  | null;

function scrollToPageTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function Portafolio() {
  const [selected, setSelected] = useState<PortfolioSelection>(null);

  const handleSelectBuilding = (id: Building["id"]) => {
    scrollToPageTop();
    setSelected({ kind: "building", id });
  };

  const handleSelectExtra = (id: PortfolioExtra["id"]) => {
    scrollToPageTop();
    setSelected({ kind: "extra", id });
  };

  const handleBack = () => {
    scrollToPageTop();
    setSelected(null);
  };

  const selectedBuilding = useMemo(
    () =>
      selected?.kind === "building"
        ? (buildings.find((b) => b.id === selected.id) ?? null)
        : null,
    [selected],
  );

  const selectedExtra = useMemo(
    () =>
      selected?.kind === "extra"
        ? (portfolioExtras.find((e) => e.id === selected.id) ?? null)
        : null,
    [selected],
  );

  const selectedModules = useMemo(
    () =>
      selectedBuilding ? modules.filter((m) => m.buildingId === selectedBuilding.id) : [],
    [selectedBuilding],
  );

  const showList = !selectedBuilding && !selectedExtra;

  return (
    <div className="bg-navy">
      <AnimatePresence mode="wait">
        {showList ? (
          <motion.div
            key="portfolio-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
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
                Selecciona un edificio para recorrer sus módulos, o conoce parqueos y exteriores
                que forman parte de Plaza San José.
              </p>
            </motion.div>

            {buildings.map((b, i) => (
              <BuildingFullPanel
                key={b.id}
                building={b}
                index={i}
                onSelect={handleSelectBuilding}
              />
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="py-16 md:py-20 px-6 max-w-7xl mx-auto text-white border-t border-white/10"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-warm-orange font-semibold">
                Más del complejo
              </span>
              <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
                Parqueos y exteriores
              </h2>
            </motion.div>

            {portfolioExtras.map((e, i) => (
              <ExtraFullPanel
                key={e.id}
                extra={e}
                index={i}
                onSelect={handleSelectExtra}
              />
            ))}
          </motion.div>
        ) : selectedBuilding ? (
          <ModuleStackView
            key={`modules-${selectedBuilding.id}`}
            building={selectedBuilding}
            modules={selectedModules}
            onBack={handleBack}
          />
        ) : selectedExtra ? (
          <ExtraDetailView key={`extra-${selectedExtra.id}`} extra={selectedExtra} onBack={handleBack} />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
