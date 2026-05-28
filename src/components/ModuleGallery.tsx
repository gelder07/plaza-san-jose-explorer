import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { ModulePhoto } from "@/data/data";

interface ModuleGalleryProps {
  photos: ModulePhoto[];
}

/** Carrusel de fotos con drag horizontal y dots */
export function ModuleGallery({ photos }: ModuleGalleryProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex((next + photos.length) % photos.length);
  };

  return (
    <div className="relative w-full h-full bg-navy overflow-hidden rounded-2xl">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.img
          key={index}
          src={photos[index].url}
          alt={photos[index].alt}
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) go(index + 1);
            else if (info.offset.x > 60) go(index - 1);
          }}
          className="absolute inset-0 w-full h-full object-cover cursor-grab active:cursor-grabbing"
        />
      </AnimatePresence>

      {/* Flechas */}
      <button
        onClick={() => go(index - 1)}
        aria-label="Foto anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-navy flex items-center justify-center shadow-lg transition"
      >
        ‹
      </button>
      <button
        onClick={() => go(index + 1)}
        aria-label="Foto siguiente"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-navy flex items-center justify-center shadow-lg transition"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Ir a foto ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-8 bg-warm-orange" : "w-1.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
