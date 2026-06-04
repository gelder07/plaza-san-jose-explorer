import { motion } from "framer-motion";
import type { PortfolioExtra } from "@/data/data";

interface ExtraFullPanelProps {
  extra: PortfolioExtra;
  index: number;
  onSelect: (id: PortfolioExtra["id"]) => void;
}

function ParkingIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    >
      <rect x="8" y="20" width="48" height="36" rx="2" />
      <path d="M8 28h48" />
      <circle cx="20" cy="46" r="4" />
      <circle cx="44" cy="46" r="4" />
      <path d="M26 32h12v14" />
      <path d="M26 32c0-4 3-6 6-6s6 2 6 6" />
    </svg>
  );
}

function OutdoorsIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    >
      <path d="M32 8 L48 44 H16 Z" />
      <path d="M12 44 Q32 36 52 44" />
      <path d="M8 52 H56" />
      <circle cx="48" cy="18" r="6" />
    </svg>
  );
}

export function ExtraFullPanel({ extra, index, onSelect }: ExtraFullPanelProps) {
  const overlayClass =
    extra.id === "parqueos"
      ? "from-navy/85 to-teal/45"
      : "from-corporate-green/85 to-navy/50";

  const Icon = extra.id === "parqueos" ? ParkingIcon : OutdoorsIcon;
  const decorLabel = extra.id === "parqueos" ? "P" : "E";

  return (
    <motion.button
      onClick={() => onSelect(extra.id)}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      whileHover="hover"
      className="relative w-full h-screen overflow-hidden group text-left block"
    >
      <motion.img
        src={extra.heroImage}
        alt={extra.name}
        variants={{ hover: { scale: 1.06 } }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className={`absolute inset-0 bg-gradient-to-r ${overlayClass}`} />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center text-white">
        <motion.div layoutId={`extra-${extra.id}-icon`} className="text-warm-orange mb-6">
          <Icon className="w-16 h-16 md:w-20 md:h-20" />
        </motion.div>

        <motion.h2
          layoutId={`extra-${extra.id}-name`}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
        >
          {extra.name}
        </motion.h2>

        <p className="mt-4 text-xl md:text-2xl text-white/90 max-w-2xl">{extra.tagline}</p>

        <p className="mt-6 text-base md:text-lg text-white/75 max-w-xl leading-relaxed">
          {extra.description}
        </p>

        <div className="mt-8 flex items-center gap-6">
          <motion.span
            variants={{ hover: { width: "12rem" } }}
            initial={{ width: "3rem" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-0.5 bg-warm-orange"
          />
          <span className="text-sm uppercase tracking-wider text-warm-orange font-semibold flex items-center gap-2">
            Explorar
            <motion.span
              variants={{ hover: { x: 6 } }}
              transition={{ duration: 0.4 }}
              className="inline-block"
            >
              →
            </motion.span>
          </span>
        </div>
      </div>

      <span className="absolute right-6 md:right-12 bottom-6 md:bottom-10 text-[12rem] md:text-[18rem] leading-none font-extrabold text-white/5 select-none pointer-events-none">
        {decorLabel}
      </span>
    </motion.button>
  );
}
