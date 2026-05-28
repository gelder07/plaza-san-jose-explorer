import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ClientsStrip } from "@/components/ClientsStrip";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plaza San José — Renta de oficinas en Managua" },
      {
        name: "description",
        content:
          "Renta módulos de oficinas comerciales en Plaza San José, Managua. 20 módulos disponibles en 3 edificios.",
      },
      { property: "og:title", content: "Plaza San José" },
      {
        property: "og:description",
        content: "Tu próxima oficina en el corazón comercial de Managua.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero principal */}
      <section className="relative w-full h-screen overflow-hidden">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://placehold.co/1920x1080/0B1F3A/F26B1F?text=Plaza+San+Jos%C3%A9"
          alt="Plaza San José"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/80 to-navy/60" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm md:text-base uppercase tracking-[0.4em] text-warm-orange font-semibold mb-4"
          >
            Corporación Bancentro · Managua
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight max-w-4xl leading-[1.05]"
          >
            Tu próxima <span className="text-warm-orange italic font-light">oficina</span>
            <br />
            empieza aquí.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl"
          >
            Módulos de oficinas comerciales en renta en el corazón de Managua.
            Tres edificios, veinte módulos, un solo estándar de excelencia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/portafolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-warm-orange text-white font-semibold shadow-2xl shadow-warm-orange/40 hover:shadow-warm-orange/60 hover:scale-105 active:scale-95 transition-all"
            >
              Ver portafolio
              <span>→</span>
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white transition-all"
            >
              Contáctanos
            </Link>
          </motion.div>
        </div>

        {/* Indicador scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs uppercase tracking-widest flex flex-col items-center gap-2"
        >
          <span>Desliza</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-px h-10 bg-white/40"
          />
        </motion.div>
      </section>

      {/* Clientes */}
      <ClientsStrip />

      {/* Valores destacados */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-warm-orange font-semibold">
              Por qué Plaza San José
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
              Espacios diseñados para crecer.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Ubicación estratégica",
                desc: "En el corazón comercial de Managua, con acceso a las principales rutas y servicios.",
                icon: (
                  <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                ),
              },
              {
                title: "Seguridad 24/7",
                desc: "Vigilancia profesional, control de accesos y monitoreo permanente para tu tranquilidad.",
                icon: (
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                ),
              },
              {
                title: "Espacios flexibles",
                desc: "Módulos desde 30 hasta 120 m², adaptables a la operación de tu empresa.",
                icon: (
                  <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zm-9 9h7v7H4v-7zm9 0h7v7h-7v-7z" />
                ),
              },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl p-8 border border-navy/10 hover:border-warm-orange/30 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-warm-orange/10 text-warm-orange flex items-center justify-center mb-6 group-hover:bg-warm-orange group-hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                    {v.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{v.title}</h3>
                <p className="text-dark-gray/75 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-navy text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Explora nuestros{" "}
            <span className="text-warm-orange italic font-light">20 módulos</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-lg text-white/75 max-w-2xl mx-auto"
          >
            Recorre los edificios A, B y C en una experiencia interactiva y encuentra el espacio perfecto.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10"
          >
            <Link
              to="/portafolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-warm-orange text-white font-semibold shadow-2xl shadow-warm-orange/30 hover:scale-105 transition-all"
            >
              Ver portafolio completo →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
