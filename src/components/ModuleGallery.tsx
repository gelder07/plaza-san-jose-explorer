import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { ModulePhoto } from "@/data/data";

interface ModuleGalleryProps {
  photos: ModulePhoto[];
}

/** Carrusel de fotos con drag horizontal, dots y pantalla completa */
export function ModuleGallery({ photos }: ModuleGalleryProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const go = useCallback(
    (next: number) => {
      setDirection(next > index ? 1 : -1);
      setIndex((next + photos.length) % photos.length);
    },
    [index, photos.length],
  );

  const closeFullscreen = useCallback(() => setFullscreen(false), []);

  useEffect(() => {
    if (!fullscreen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeFullscreen();
      else if (e.key === "ArrowLeft") go(index - 1);
      else if (e.key === "ArrowRight") go(index + 1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [fullscreen, index, go, closeFullscreen]);

  const current = photos[index];

  return (
    <>
      <div className="relative w-full h-full bg-navy overflow-hidden rounded-2xl">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={index}
            src={current.url}
            alt={current.alt}
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

        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Foto anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-navy flex items-center justify-center shadow-lg transition"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Foto siguiente"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-navy flex items-center justify-center shadow-lg transition"
        >
          ›
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {photos.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Ir a foto ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-warm-orange" : "w-1.5 bg-white/60"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setFullscreen(true)}
          aria-label="Pantalla completa"
          title="Pantalla completa"
          className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-lg bg-navy/80 hover:bg-navy text-white flex items-center justify-center shadow-lg backdrop-blur-sm transition-colors cursor-pointer"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
          </svg>
        </button>
      </div>

      {fullscreen &&
        createPortal(
          <div
            className="fixed inset-0 z-[200] flex flex-col bg-black"
            role="dialog"
            aria-modal="true"
            aria-label="Galería en pantalla completa"
          >
            <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-6 shrink-0">
              <span className="text-sm text-white/80 tabular-nums">
                {index + 1} / {photos.length}
              </span>
              <button
                type="button"
                onClick={closeFullscreen}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
              >
                Cerrar
              </button>
            </div>

            <div className="relative flex-1 min-h-0 flex items-center justify-center px-14 md:px-20">
              <AnimatePresence initial={false} mode="wait">
                <motion.img
                  key={index}
                  src={current.url}
                  alt={current.alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="max-w-full max-h-full object-contain"
                />
              </AnimatePresence>

              {photos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => go(index - 1)}
                    aria-label="Foto anterior"
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white text-2xl flex items-center justify-center transition"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => go(index + 1)}
                    aria-label="Foto siguiente"
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white text-2xl flex items-center justify-center transition"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {photos.length > 1 && (
              <div className="flex justify-center gap-2 pb-6 shrink-0">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Ir a foto ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-8 bg-warm-orange" : "w-1.5 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>,
          document.body,
        )}
    </>
  );
}
