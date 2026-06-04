import { motion } from "framer-motion";
import { useEffect } from "react";
import type { PortfolioExtra } from "@/data/data";
import { contact, whatsappLink } from "@/data/data";
import { ModuleGallery } from "./ModuleGallery";

interface ExtraDetailViewProps {
  extra: PortfolioExtra;
  onBack: () => void;
}

export function ExtraDetailView({ extra, onBack }: ExtraDetailViewProps) {
  const message = `Hola, me gustaría conocer más sobre ${extra.name.toLowerCase()} en Plaza San José.`;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [extra.id]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative w-full min-h-screen bg-white"
    >
      <motion.button
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ x: -4 }}
        className="fixed top-24 left-6 z-40 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-navy text-white text-sm font-semibold shadow-lg hover:bg-navy/90 transition-colors"
      >
        ← Volver al portafolio
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="fixed top-24 right-6 z-40 hidden md:flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-navy/10"
      >
        <motion.div layoutId={`extra-${extra.id}-icon`} className="text-warm-orange">
          <svg viewBox="0 0 64 64" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3">
            {extra.id === "parqueos" ? (
              <>
                <rect x="10" y="22" width="44" height="30" rx="1" />
                <circle cx="22" cy="44" r="3" />
                <circle cx="42" cy="44" r="3" />
              </>
            ) : (
              <path d="M32 12 L44 40 H20 Z" />
            )}
          </svg>
        </motion.div>
        <motion.span layoutId={`extra-${extra.id}-name`} className="text-sm font-bold text-navy">
          {extra.name}
        </motion.span>
      </motion.div>

      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full min-h-screen flex items-center justify-center px-6 md:px-12 py-28 md:py-32"
      >
        <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="aspect-[4/3] w-full"
          >
            <ModuleGallery photos={extra.photos} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-warm-orange font-semibold">
              Parte del complejo · no es oficina en renta
            </span>

            <h3 className="mt-4 text-5xl md:text-7xl font-extrabold text-navy tracking-tight">
              {extra.name}
            </h3>

            <p className="mt-4 text-lg md:text-xl text-teal font-medium">{extra.tagline}</p>

            <p className="mt-6 text-base md:text-lg text-dark-gray/80 leading-relaxed max-w-lg">
              {extra.description}
            </p>

            <p className="mt-4 text-sm text-dark-gray/60 max-w-lg">
              Forma parte de Plaza San José y acompaña el día a día en los edificios A, B y C.
            </p>

            <motion.a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full font-semibold text-white shadow-lg transition-shadow self-start bg-warm-orange hover:shadow-xl hover:shadow-warm-orange/40"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
              </svg>
              Consultar en WhatsApp
            </motion.a>

            <a
              href={`mailto:${contact.email}`}
              className="mt-4 text-sm text-navy/70 hover:text-warm-orange transition-colors self-start"
            >
              {contact.email}
            </a>
          </motion.div>
        </div>
      </motion.article>
    </motion.div>
  );
}
