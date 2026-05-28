import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Lista de clientes con imágenes/logos.
 * Al hacer click sobre cualquier tarjeta se abre un modal con la imagen ampliada,
 * usando `layoutId` de Framer Motion para una transición fluida.
 */
type Client = {
  id: string;
  name: string;
  image: string;
  description: string;
};

const clients: Client[] = [
  {
    id: "bancentro",
    name: "Bancentro",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
    description: "Banca corporativa y servicios financieros de Corporación Bancentro.",
  },
  {
    id: "lafise",
    name: "Banco LAFISE",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=900&q=80",
    description: "Sucursal regional con atención corporativa y banca personal.",
  },
  {
    id: "claro",
    name: "Claro",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=900&q=80",
    description: "Oficinas comerciales y centro de atención al cliente.",
  },
  {
    id: "tigo",
    name: "Tigo",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
    description: "Punto de servicio corporativo y oficinas regionales.",
  },
  {
    id: "walmart",
    name: "Walmart",
    image: "https://images.unsplash.com/photo-1556740772-1a741367b93e?auto=format&fit=crop&w=900&q=80",
    description: "Oficinas administrativas de operaciones regionales.",
  },
  {
    id: "pricesmart",
    name: "PriceSmart",
    image: "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?auto=format&fit=crop&w=900&q=80",
    description: "Centro logístico y oficinas de membresía corporativa.",
  },
  {
    id: "toyota",
    name: "Toyota",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    description: "Showroom comercial y oficinas regionales.",
  },
  {
    id: "nestle",
    name: "Nestlé",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=900&q=80",
    description: "Oficinas corporativas de operaciones Centroamérica.",
  },
];

export function ClientsStrip() {
  const [selected, setSelected] = useState<Client | null>(null);

  // Cierra el modal con la tecla Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="bg-white py-20 md:py-28 border-y border-navy/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-warm-orange font-semibold">
            Confianza
          </span>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-navy">
            Clientes que trabajan con nosotros
          </h3>
          <p className="mt-3 text-dark-gray/70 max-w-xl mx-auto">
            Empresas líderes que han elegido Plaza San José. Haz click sobre cualquiera
            para ver más detalles.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {clients.map((c, i) => (
            <motion.button
              key={c.id}
              layoutId={`client-card-${c.id}`}
              onClick={() => setSelected(c)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-navy/5 border border-navy/10 hover:border-warm-orange/50 hover:shadow-xl transition-all"
            >
              <motion.img
                layoutId={`client-img-${c.id}`}
                src={c.image}
                alt={c.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/30 to-transparent" />
              <motion.div
                layoutId={`client-label-${c.id}`}
                className="absolute bottom-0 left-0 right-0 p-4 text-white text-left"
              >
                <div className="text-base font-bold">{c.name}</div>
                <div className="text-[10px] uppercase tracking-widest text-warm-orange opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver más →
                </div>
              </motion.div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal con imagen ampliada */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          >
            <motion.div
              layoutId={`client-card-${selected.id}`}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-navy rounded-2xl overflow-hidden shadow-2xl"
            >
              <motion.img
                layoutId={`client-img-${selected.id}`}
                src={selected.image}
                alt={selected.name}
                className="w-full h-[60vh] md:h-[70vh] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent pointer-events-none" />

              <motion.div
                layoutId={`client-label-${selected.id}`}
                className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white"
              >
                <div className="text-3xl md:text-5xl font-extrabold tracking-tight">
                  {selected.name}
                </div>
                <p className="mt-3 text-white/85 max-w-2xl">{selected.description}</p>
              </motion.div>

              {/* Botón cerrar */}
              <button
                onClick={() => setSelected(null)}
                aria-label="Cerrar"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/15 hover:bg-warm-orange text-white flex items-center justify-center transition-colors backdrop-blur"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
