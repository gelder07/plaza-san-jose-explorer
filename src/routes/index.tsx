import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
// import { ClientsStrip } from "@/components/ClientsStrip";
import { HeroHome } from "@/components/HeroHome";
import { BuildingsPreview } from "@/components/BuildingsPreview";

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
      {/* Hero principal — inspirado en la referencia del cliente */}
      <HeroHome />

      {/* Vista previa de edificios desde el inicio */}
      <BuildingsPreview />

      {/* Clientes */}
      {/* <ClientsStrip /> */}

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
