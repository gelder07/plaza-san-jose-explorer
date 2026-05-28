import { motion } from "framer-motion";

const logos = [
  "Bancentro",
  "LAFISE",
  "Claro",
  "Tigo",
  "Walmart",
  "PriceSmart",
  "Toyota",
  "Nestlé",
];

/** Strip de clientes que trabajan con Plaza San José */
export function ClientsStrip() {
  return (
    <section className="bg-white py-16 md:py-20 border-y border-navy/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-warm-orange font-semibold">
            Confianza
          </span>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold text-navy">
            Clientes que trabajan con nosotros
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {logos.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="h-16 rounded-lg bg-navy/[0.03] border border-navy/10 flex items-center justify-center text-navy/60 font-bold text-sm hover:text-navy hover:border-warm-orange/40 transition-colors"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
