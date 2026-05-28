import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHero } from "@/components/SectionHero";

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: [
      { title: "Quiénes Somos — Plaza San José" },
      {
        name: "description",
        content:
          "Conoce la historia, misión, visión y valores de Plaza San José, un desarrollo de Corporación Bancentro.",
      },
      { property: "og:title", content: "Quiénes Somos — Plaza San José" },
      {
        property: "og:description",
        content: "Más de tres décadas construyendo confianza en Nicaragua.",
      },
    ],
  }),
  component: QuienesSomos,
});

const bloques = [
  {
    titulo: "Nuestra historia",
    texto:
      "Corporación Bancentro nació con la visión de impulsar el desarrollo económico de Nicaragua. A lo largo de más de tres décadas hemos consolidado un grupo empresarial diverso, presente en banca, servicios financieros y bienes raíces comerciales. Plaza San José representa nuestra apuesta por dotar a Managua de espacios corporativos de primer nivel.",
    imagen: "https://placehold.co/1200x800/0B1F3A/F26B1F?text=Historia",
  },
  {
    titulo: "Nuestra misión",
    texto:
      "Ofrecer espacios corporativos seguros, modernos y estratégicamente ubicados que potencien el crecimiento de las empresas que confían en nosotros, respaldados por la solidez y experiencia de Corporación Bancentro.",
    imagen: "https://placehold.co/1200x800/2E7D5B/ffffff?text=Misi%C3%B3n",
  },
  {
    titulo: "Nuestra visión",
    texto:
      "Ser el referente nacional en desarrollo y gestión de centros comerciales y corporativos, reconocidos por la calidad de nuestros espacios, la excelencia en el servicio y nuestro compromiso con el progreso de Nicaragua.",
    imagen: "https://placehold.co/1200x800/0F9B8E/ffffff?text=Visi%C3%B3n",
  },
];

const valores = [
  {
    titulo: "Integridad",
    descripcion: "Actuamos con transparencia, ética y honestidad en cada interacción.",
  },
  {
    titulo: "Excelencia",
    descripcion: "Buscamos la mejora continua en nuestros espacios y procesos.",
  },
  {
    titulo: "Compromiso",
    descripcion: "Acompañamos a nuestros clientes en cada etapa de su crecimiento.",
  },
  {
    titulo: "Innovación",
    descripcion: "Incorporamos nuevas tecnologías y conceptos para anticiparnos al futuro.",
  },
];

function QuienesSomos() {
  return (
    <>
      <SectionHero
        title="Quiénes Somos"
        subtitle="Un desarrollo de Corporación Bancentro al servicio del crecimiento empresarial de Nicaragua."
        image="https://placehold.co/1920x600/0B1F3A/F26B1F?text=Qui%C3%A9nes+Somos"
        overlay="navy"
      />

      {/* Bloques zigzag */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {bloques.map((b, i) => (
            <motion.div
              key={b.titulo}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img src={b.imagen} alt={b.titulo} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-warm-orange font-semibold">
                  0{i + 1}
                </span>
                <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-navy tracking-tight">
                  {b.titulo}
                </h2>
                <div className="w-16 h-1 bg-warm-orange my-5" />
                <p className="text-lg text-dark-gray/80 leading-relaxed">{b.texto}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Valores */}
      <section className="bg-navy text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-14"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-warm-orange font-semibold">
              Nuestros valores
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
              Lo que nos define.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {valores.map((v, i) => (
              <motion.div
                key={v.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-7 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-warm-orange/40 hover:bg-white/[0.06] transition-colors"
              >
                <span className="text-warm-orange text-3xl font-extrabold tabular-nums">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-xl font-bold">{v.titulo}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  {v.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
