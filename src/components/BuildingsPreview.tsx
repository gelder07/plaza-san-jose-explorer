import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { buildings, modules } from "@/data/data";
import plazaImg from "@/assets/plaza-san-jose.jpg";

/**
 * Vista rápida de los 3 edificios directamente desde el Home.
 * Cada tarjeta muestra: imagen del edificio, nombre, tagline,
 * # de módulos totales / disponibles y un CTA al portafolio.
 */
export function BuildingsPreview() {
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-warm-orange font-semibold">
              Nuestros espacios
            </span>
            <h2 className="mt-3 text-4xl md:text-6xl font-extrabold text-navy tracking-tight leading-[0.95]">
              Tres edificios.
              <br />
              <span className="italic font-light text-warm-orange">Un solo estándar.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Link
              to="/portafolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-warm-orange transition-colors"
            >
              Ver portafolio completo
              <span>→</span>
            </Link>
          </motion.div>
        </div>

        {/* Grid de edificios */}
        <div className="grid md:grid-cols-3 gap-6">
          {buildings.map((b, i) => {
            const available = modules.filter(
              (m) => m.buildingId === b.id && m.status === "disponible",
            ).length;

            return (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className="group relative h-[460px] overflow-hidden rounded-2xl bg-navy"
              >
                {/* Imagen de fondo */}
                <motion.img
                  src={plazaImg}
                  alt={b.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />

                {/* Identificador grande del edificio */}
                <div className="absolute top-6 left-6 text-7xl font-extrabold text-warm-orange/90 leading-none">
                  {b.id}
                </div>

                {/* Disponibilidad chip */}
                <div className="absolute top-8 right-6 bg-white/95 text-navy text-xs font-bold px-3 py-1.5 rounded-full">
                  {available} disponibles
                </div>

                {/* Contenido */}
                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <h3 className="text-2xl font-bold mb-1">{b.name}</h3>
                  <p className="text-sm text-white/80 mb-4 line-clamp-2">{b.tagline}</p>

                  <div className="flex items-center justify-between border-t border-white/20 pt-4">
                    <span className="text-xs uppercase tracking-widest text-white/70">
                      {b.totalModules} módulos
                    </span>
                    <Link
                      to="/portafolio"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-warm-orange group-hover:gap-3 transition-all"
                    >
                      Explorar
                      <span>→</span>
                    </Link>
                  </div>
                </div>

                {/* Barra naranja inferior animada */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-warm-orange"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.12 + 0.4 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
