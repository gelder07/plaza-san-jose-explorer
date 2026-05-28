import { motion } from "framer-motion";

interface SectionHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  overlay?: "navy" | "green" | "teal";
}

/** Hero reutilizable para cada sección con imagen + overlay corporativo */
export function SectionHero({
  title,
  subtitle,
  image = "https://placehold.co/1920x600/0B1F3A/ffffff?text=Plaza+San+Jos%C3%A9",
  overlay = "navy",
}: SectionHeroProps) {
  const overlayClass = {
    navy: "from-navy/90 via-navy/75 to-navy/60",
    green: "from-corporate-green/90 via-corporate-green/75 to-navy/70",
    teal: "from-teal/85 via-teal/70 to-navy/70",
  }[overlay];

  return (
    <section className="relative w-full h-[60vh] min-h-[420px] overflow-hidden">
      {/* Imagen de fondo */}
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay corporativo */}
      <div className={`absolute inset-0 bg-gradient-to-br ${overlayClass}`} />

      {/* Contenido */}
      <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="w-24 h-1 bg-warm-orange mb-6"
        />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="mt-4 text-lg md:text-xl text-white/85 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
