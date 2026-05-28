import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHero } from "@/components/SectionHero";
import { ContactForm } from "@/components/ContactForm";
import { contact, whatsappLink } from "@/data/data";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contáctenos — Plaza San José" },
      {
        name: "description",
        content:
          "Ponte en contacto con el equipo de Plaza San José para consultar disponibilidad y agendar una visita.",
      },
      { property: "og:title", content: "Contáctenos — Plaza San José" },
      {
        property: "og:description",
        content: "Estamos listos para encontrar el módulo perfecto para tu empresa.",
      },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  const items = [
    {
      label: "Dirección",
      value: contact.address,
      icon: <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />,
    },
    {
      label: "Teléfono",
      value: contact.phone,
      icon: <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />,
    },
    {
      label: "Email",
      value: contact.email,
      icon: <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />,
    },
    {
      label: "Horario",
      value: contact.hours,
      icon: <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z" />,
    },
  ];

  return (
    <>
      <SectionHero
        title="Contáctenos"
        subtitle="Estamos listos para mostrarte los espacios y encontrar el módulo perfecto para tu empresa."
        image="https://placehold.co/1920x600/2E7D5B/ffffff?text=Cont%C3%A1ctenos"
        overlay="green"
      />

      <section className="bg-secondary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Formulario */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-navy/10">
            <span className="text-xs uppercase tracking-[0.3em] text-warm-orange font-semibold">
              Escríbenos
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-navy">
              Envíanos un mensaje
            </h2>
            <p className="mt-3 text-dark-gray/70">
              Cuéntanos qué tipo de módulo buscas y te contactaremos a la brevedad.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-navy text-white rounded-2xl p-8"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-warm-orange font-semibold">
                Información
              </span>
              <h3 className="mt-2 text-2xl font-bold">Datos de contacto</h3>

              <ul className="mt-6 space-y-5">
                {items.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-warm-orange/15 text-warm-orange flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                        {item.icon}
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/50 font-semibold">
                        {item.label}
                      </p>
                      <p className="text-white">{item.value}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.a
              href={whatsappLink("Hola, me gustaría más información sobre Plaza San José.")}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="block rounded-2xl bg-whatsapp text-white p-6 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/80 font-semibold">
                    WhatsApp directo
                  </p>
                  <p className="text-lg font-bold">{contact.whatsappDisplay}</p>
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
}
