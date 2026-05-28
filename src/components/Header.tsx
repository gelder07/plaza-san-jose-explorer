import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/** Header global con navegación principal */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { to: "/", label: "Inicio" },
    { to: "/portafolio", label: "Portafolio" },
    { to: "/quienes-somos", label: "Quiénes Somos" },
    { to: "/contacto", label: "Contáctenos" },
  ] as const;

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/90 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-b from-navy/70 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo tipográfico */}
        <Link to="/" className="group flex items-baseline gap-1">
          <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Plaza
          </span>
          <span className="text-2xl md:text-3xl font-light text-warm-orange italic">
            San José
          </span>
        </Link>

        {/* Navegación */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
              activeProps={{ className: "text-white" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-warm-orange rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>

        {/* Botón móvil simplificado: navega a portafolio */}
        <Link
          to="/portafolio"
          className="md:hidden px-3 py-2 text-xs font-semibold bg-warm-orange text-white rounded-md"
        >
          Portafolio
        </Link>
      </div>
    </motion.header>
  );
}
