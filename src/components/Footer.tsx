import { Link } from "@tanstack/react-router";
import { contact } from "@/data/data";

/** Footer institucional */
export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-1 mb-3">
            <span className="text-2xl font-extrabold text-white">Plaza</span>
            <span className="text-2xl font-light text-warm-orange italic">
              San José
            </span>
          </div>
          <p className="text-sm leading-relaxed max-w-md">
            Módulos de oficinas comerciales en el corazón de Managua. Un
            desarrollo de Corporación Bancentro.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
            Navegación
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-warm-orange transition-colors">Inicio</Link></li>
            <li><Link to="/portafolio" className="hover:text-warm-orange transition-colors">Portafolio</Link></li>
            <li><Link to="/quienes-somos" className="hover:text-warm-orange transition-colors">Quiénes Somos</Link></li>
            <li><Link to="/contacto" className="hover:text-warm-orange transition-colors">Contáctenos</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
            Contacto
          </h4>
          <ul className="space-y-2 text-sm">
            <li>{contact.address}</li>
            <li>Tel: {contact.phone}</li>
            <li>{contact.email}</li>
            <li className="text-white/60">{contact.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 text-xs text-white/50 flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Plaza San José — Corporación Bancentro.</span>
          <span>Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
