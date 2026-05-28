import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import plazaHero from "@/assets/plaza-san-jose.jpg";

/**
 * Hero principal del Home — inspirado en la referencia visual entregada por el cliente.
 * - Foto de fondo a pantalla completa con overlay oscuro
 * - Bloque naranja decorativo en la esquina superior derecha
 * - Título tipográfico gigantesco alineado a la derecha
 * - Barra de "stats" en la parte inferior con borde naranja
 */
export function HeroHome() {
  const stats = [
    { label: "Edificios", value: "3" },
    { label: "Ubicación", value: "Managua" },
    { label: "Precios", value: "Desde $500" },
    { label: "Tipo", value: "Comercial" },
    { label: "Categoría", value: "Premium" },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-navy text-white">
      {/* Foto de fondo con leve zoom de entrada */}
      <motion.img
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        src={plazaHero}
        alt="Plaza San José — fachada"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/55 to-navy/85" />

      {/* Bloque naranja decorativo superior derecho */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
        className="absolute top-0 right-0 w-[18vw] max-w-[260px] h-[12vw] max-h-[170px] bg-warm-orange"
      />

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-44 md:pb-56 min-h-screen flex flex-col">
        {/* Título gigante alineado a la derecha */}
        <div className="flex-1 flex items-center justify-end">
          <div className="text-right">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
              className="font-extrabold uppercase leading-[0.85] tracking-tight text-white"
              style={{ fontSize: "clamp(3.5rem, 12vw, 11rem)" }}
            >
              Plaza
              <br />
              San José
              <span className="text-warm-orange">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-6 text-base md:text-lg text-white/85 tracking-wide"
            >
              Corporación Bancentro
            </motion.p>
          </div>
        </div>

        {/* Barra de stats con borde naranja */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="absolute left-6 right-6 md:left-10 md:right-10 bottom-20 md:bottom-16"
        >
          <div className="border-2 border-warm-orange/90 bg-navy/30 backdrop-blur-sm">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 divide-x divide-warm-orange/30">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 + i * 0.08 }}
                  className="px-5 md:px-7 py-5 md:py-6"
                >
                  <div className="text-sm md:text-base font-bold text-white">
                    {s.label}
                  </div>
                  <div className="mt-2 text-sm md:text-base text-white/85 font-light">
                    {s.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTAs flotando arriba a la izquierda */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="absolute left-6 md:left-10 top-28 md:top-36 flex flex-col gap-3"
        >
          <Link
            to="/portafolio"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-warm-orange text-white font-semibold text-sm shadow-2xl shadow-warm-orange/40 hover:scale-105 active:scale-95 transition-all"
          >
            Ver portafolio
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition-all"
          >
            Contáctanos
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
