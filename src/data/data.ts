/**
 * Datos hardcodeados del catálogo Plaza San José.
 * Toda la información de edificios y módulos se mantiene aquí,
 * con tipado TypeScript estricto.
 */
import plazaImage from "@/assets/plaza-san-jose.jpg";

export type Status = "disponible" | "ocupado";

export interface ModulePhoto {
  url: string;
  alt: string;
}

export interface Module {
  id: string;
  buildingId: "A" | "B" | "C";
  number: string;
  areaM2: number;
  status: Status;
  photos: ModulePhoto[];
  description: string;
}

export interface Building {
  id: "A" | "B" | "C";
  name: string;
  totalModules: number;
  heroImage: string;
  description: string;
  tagline: string;
}

/** Genera un set de fotos placeholder para un módulo (usa imagen real del cliente) */
const fotos = (number: string, count = 4): ModulePhoto[] =>
  Array.from({ length: count }, (_, i) => ({
    url: plazaImage,
    alt: `Foto ${i + 1} del módulo ${number}`,
  }));

export const buildings: Building[] = [
  {
    id: "A",
    name: "Edificio A",
    totalModules: 6,
    heroImage: "https://placehold.co/1920x1080/0B1F3A/ffffff?text=Edificio+A",
    tagline: "Espacios ejecutivos en planta baja con acceso directo",
    description:
      "Diseñado para empresas que valoran la visibilidad y el acceso peatonal inmediato. Cuenta con 6 módulos premium en planta baja.",
  },
  {
    id: "B",
    name: "Edificio B",
    totalModules: 12,
    heroImage: "https://placehold.co/1920x1080/2E7D5B/ffffff?text=Edificio+B",
    tagline: "Torre corporativa con vistas panorámicas",
    description:
      "Nuestro edificio insignia con 12 módulos distribuidos en varios niveles. Ideal para operaciones medianas y corporativas.",
  },
  {
    id: "C",
    name: "Edificio C",
    totalModules: 2,
    heroImage: "https://placehold.co/1920x1080/0F9B8E/ffffff?text=Edificio+C",
    tagline: "Espacios exclusivos para oficinas boutique",
    description:
      "Dos módulos amplios pensados para empresas que buscan privacidad, identidad propia y un entorno boutique.",
  },
];

export const modules: Module[] = [
  // Edificio A — 6 módulos
  {
    id: "A-101",
    buildingId: "A",
    number: "A-101",
    areaM2: 45,
    status: "disponible",
    photos: fotos("A-101"),
    description:
      "Módulo esquinero con doble fachada de vidrio, ideal para showroom o atención al cliente.",
  },
  {
    id: "A-102",
    buildingId: "A",
    number: "A-102",
    areaM2: 60,
    status: "ocupado",
    photos: fotos("A-102"),
    description:
      "Espacio diáfano con recepción incluida y dos privados. Excelente iluminación natural.",
  },
  {
    id: "A-103",
    buildingId: "A",
    number: "A-103",
    areaM2: 38,
    status: "disponible",
    photos: fotos("A-103"),
    description:
      "Módulo compacto perfecto para oficinas profesionales o consultorios.",
  },
  {
    id: "A-104",
    buildingId: "A",
    number: "A-104",
    areaM2: 72,
    status: "disponible",
    photos: fotos("A-104"),
    description:
      "Planta amplia con sala de juntas y kitchenette, ideal para startups en crecimiento.",
  },
  {
    id: "A-105",
    buildingId: "A",
    number: "A-105",
    areaM2: 55,
    status: "ocupado",
    photos: fotos("A-105"),
    description:
      "Módulo con acceso independiente y tres ambientes definidos.",
  },
  {
    id: "A-106",
    buildingId: "A",
    number: "A-106",
    areaM2: 90,
    status: "disponible",
    photos: fotos("A-106"),
    description:
      "Espacio premium con terraza privada. Pensado para empresas con presencia de marca.",
  },

  // Edificio B — 12 módulos
  {
    id: "B-201",
    buildingId: "B",
    number: "B-201",
    areaM2: 50,
    status: "disponible",
    photos: fotos("B-201"),
    description:
      "Módulo en segundo nivel con vista al jardín interior de Plaza San José.",
  },
  {
    id: "B-202",
    buildingId: "B",
    number: "B-202",
    areaM2: 65,
    status: "ocupado",
    photos: fotos("B-202"),
    description:
      "Distribución open space con cabinas de reunión y zona de impresión.",
  },
  {
    id: "B-203",
    buildingId: "B",
    number: "B-203",
    areaM2: 80,
    status: "disponible",
    photos: fotos("B-203"),
    description:
      "Tres privados, sala de juntas para 8 personas y kitchenette completa.",
  },
  {
    id: "B-204",
    buildingId: "B",
    number: "B-204",
    areaM2: 42,
    status: "disponible",
    photos: fotos("B-204"),
    description:
      "Oficina ejecutiva ideal para profesionales independientes o estudios pequeños.",
  },
  {
    id: "B-301",
    buildingId: "B",
    number: "B-301",
    areaM2: 100,
    status: "ocupado",
    photos: fotos("B-301"),
    description:
      "Suite corporativa con recepción, 4 privados y sala de capacitación.",
  },
  {
    id: "B-302",
    buildingId: "B",
    number: "B-302",
    areaM2: 75,
    status: "disponible",
    photos: fotos("B-302"),
    description:
      "Espacio versátil con tabiquería modular adaptable a su operación.",
  },
  {
    id: "B-303",
    buildingId: "B",
    number: "B-303",
    areaM2: 55,
    status: "disponible",
    photos: fotos("B-303"),
    description:
      "Módulo con balcón privado, dos ambientes y baño propio.",
  },
  {
    id: "B-304",
    buildingId: "B",
    number: "B-304",
    areaM2: 88,
    status: "ocupado",
    photos: fotos("B-304"),
    description:
      "Suite de gerencia con sala de espera, dos privados y archivo.",
  },
  {
    id: "B-401",
    buildingId: "B",
    number: "B-401",
    areaM2: 120,
    status: "disponible",
    photos: fotos("B-401"),
    description:
      "Planta completa con vista panorámica a Managua, pensada para sedes regionales.",
  },
  {
    id: "B-402",
    buildingId: "B",
    number: "B-402",
    areaM2: 95,
    status: "disponible",
    photos: fotos("B-402"),
    description:
      "Oficina premium con doble exposición y acabados en madera natural.",
  },
  {
    id: "B-403",
    buildingId: "B",
    number: "B-403",
    areaM2: 68,
    status: "ocupado",
    photos: fotos("B-403"),
    description:
      "Distribución mixta con dos privados grandes y open space para 10 puestos.",
  },
  {
    id: "B-404",
    buildingId: "B",
    number: "B-404",
    areaM2: 48,
    status: "disponible",
    photos: fotos("B-404"),
    description:
      "Módulo compacto con excelente iluminación, listo para mudanza inmediata.",
  },

  // Edificio C — 2 módulos
  {
    id: "C-101",
    buildingId: "C",
    number: "C-101",
    areaM2: 110,
    status: "disponible",
    photos: fotos("C-101"),
    description:
      "Suite boutique con entrada independiente, recepción y patio interior privado.",
  },
  {
    id: "C-102",
    buildingId: "C",
    number: "C-102",
    areaM2: 85,
    status: "ocupado",
    photos: fotos("C-102"),
    description:
      "Espacio exclusivo con identidad propia, acabados premium y parqueo dedicado.",
  },
];

/** Contacto centralizado */
export const contact = {
  whatsappNumber: "50581867161",
  whatsappDisplay: "+505 8186 7161",
  phone: "2233-4455",
  email: "plazasanjose@gasdmi.com",
  address: "Plaza San José, Managua, Nicaragua",
  hours: "Lunes a Viernes · 8:00 am – 5:00 pm",
};

/** Genera un link de WhatsApp con mensaje predefinido */
export const whatsappLink = (message: string) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
