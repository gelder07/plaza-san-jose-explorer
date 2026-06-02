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
    heroImage: plazaImage,
    tagline: "Espacios ejecutivos en planta baja con acceso directo",
    description:
      "Diseñado para empresas que valoran la visibilidad y el acceso peatonal inmediato. Cuenta con 6 módulos premium en planta baja.",
  },
  {
    id: "B",
    name: "Edificio B",
    totalModules: 12,
    heroImage: plazaImage,
    tagline: "Torre corporativa con vistas panorámicas",
    description:
      "Nuestro edificio insignia con 12 módulos distribuidos en varios niveles. Ideal para operaciones medianas y corporativas.",
  },
  {
    id: "C",
    name: "Edificio C",
    totalModules: 2,
    heroImage: plazaImage,
    tagline: "Espacios exclusivos para oficinas boutique",
    description:
      "Dos módulos amplios pensados para empresas que buscan privacidad, identidad propia y un entorno boutique.",
  },
];

export const modules: Module[] = [
  // Edificio A — 6 módulos
  {
    id: "A-1",
    buildingId: "A",
    number: "A-1",
    areaM2: 170,
    status: "disponible",
    photos: fotos("A-101"),
    description:
      "Módulo esquinero con doble fachada de vidrio, ideal para showroom o atención al cliente.",
  },
  {
    id: "A-2",
    buildingId: "A",
    number: "A-2",
    areaM2: 86.132,
    status: "ocupado",
    photos: fotos("A-102"),
    description:
      "Espacio diáfano con recepción incluida y dos privados. Excelente iluminación natural.",
  },
  {
    id: "A-3",
    buildingId: "A",
    number: "A-3",
    areaM2: 109.20,
    status: "disponible",
    photos: fotos("A-103"),
    description:
      "Módulo compacto perfecto para oficinas profesionales o consultorios.",
  },
  {
    id: "A-4",
    buildingId: "A",
    number: "A-4",
    areaM2: 85,
    status: "disponible",
    photos: fotos("A-104"),
    description:
      "Planta amplia con sala de juntas y kitchenette, ideal para startups en crecimiento.",
  },
  {
    id: "A-5",
    buildingId: "A",
    number: "A-5",
    areaM2: 85,
    status: "disponible",
    photos: fotos("A-105"),
    description:
      "Módulo con acceso independiente y tres ambientes definidos.",
  },
  {
    id: "A-6",
    buildingId: "A",
    number: "A-6",
    areaM2: 85,
    status: "disponible",
    photos: fotos("A-106"),
    description:
      "Espacio premium con terraza privada. Pensado para empresas con presencia de marca.",
  },

  // Edificio B — 12 módulos
  {
    id: "B-1",
    buildingId: "B",
    number: "B-1",
    areaM2: 88.94,
    status: "ocupado",
    photos: fotos("B-201"),
    description:
      "Módulo en segundo nivel con vista al jardín interior de Plaza San José.",
  },
  {
    id: "B-2",
    buildingId: "B",
    number: "B-2",
    areaM2: 78.706,
    status: "ocupado",
    photos: fotos("B-202"),
    description:
      "Distribución open space con cabinas de reunión y zona de impresión.",
  },
  {
    id: "B-3",
    buildingId: "B",
    number: "B-3",
    areaM2: 109.5,
    status: "ocupado",
    photos: fotos("B-203"),
    description:
      "Tres privados, sala de juntas para 8 personas y kitchenette completa.",
  },
  {
    id: "B-4",
    buildingId: "B",
    number: "B-4",
    areaM2: 78.786,
    status: "ocupado",
    photos: fotos("B-204"),
    description:
      "Oficina ejecutiva ideal para profesionales independientes o estudios pequeños.",
  },
  {
    id: "B-5",
    buildingId: "B",
    number: "B-5",
    areaM2: 78.24,
    status: "ocupado",
    photos: fotos("B-301"),
    description:
      "Suite corporativa con recepción, 4 privados y sala de capacitación.",
  },
  {
    id: "B-6",
    buildingId: "B",
    number: "B-6",
    areaM2: 83.348,
    status: "ocupado",
    photos: fotos("B-302"),
    description:
      "Espacio versátil con tabiquería modular adaptable a su operación.",
  },
  {
    id: "B-7",
    buildingId: "B",
    number: "B-7",
    areaM2: 80,
    status: "ocupado",
    photos: fotos("B-303"),
    description:
      "Módulo con balcón privado, dos ambientes y baño propio.",
  },
  {
    id: "B-8",
    buildingId: "B",
    number: "B-8",
    areaM2: 85,
    status: "ocupado",
    photos: fotos("B-304"),
    description:
      "Suite de gerencia con sala de espera, dos privados y archivo.",
  },
  {
    id: "B-9",
    buildingId: "B",
    number: "B-9",
    areaM2: 78.55,
    status: "ocupado",
    photos: fotos("B-401"),
    description:
      "Planta completa con vista panorámica a Managua, pensada para sedes regionales.",
  },
  {
    id: "B-10",
    buildingId: "B",
    number: "B-10",
    areaM2: 101.233,
    status: "ocupado",
    photos: fotos("B-402"),
    description:
      "Oficina premium con doble exposición y acabados en madera natural.",
  },
  {
    id: "B-11",
    buildingId: "B",
    number: "B-11",
    areaM2: 88.78,
    status: "ocupado",
    photos: fotos("B-403"),
    description:
      "Distribución mixta con dos privados grandes y open space para 10 puestos.",
  },
  {
    id: "B-12",
    buildingId: "B",
    number: "B-12",
    areaM2: 99.987,
    status: "ocupado",
    photos: fotos("B-404"),
    description:
      "Módulo compacto con excelente iluminación, listo para mudanza inmediata.",
  },

  // Edificio C — 2 módulos
  {
    id: "C-1",
    buildingId: "C",
    number: "C-1",
    areaM2: 253.41,
    status: "disponible",
    photos: fotos("C-101"),
    description:
      "Suite boutique con entrada independiente, recepción y patio interior privado.",
  },
  {
    id: "C-2",
    buildingId: "C",
    number: "C-2",
    areaM2: 82.63,
    status: "ocupado",
    photos: fotos("C-102"),
    description:
      "Espacio exclusivo con identidad propia, acabados premium y parqueo dedicado.",
  },
];

/** Contacto centralizado */
export const contact = {
  whatsappNumber: "50578266673",
  whatsappDisplay: "+505 7826 6673",
  phone: "2255-8888 Ext: 3250 ",
  email: "gameneses@lafise.com",
  address: "KM 7.5 Carretera Sur, Managua, Nicaragua",
  hours: "Lunes a Viernes · 8:00 am – 5:00 pm",
};

/** Genera un link de WhatsApp con mensaje predefinido */
export const whatsappLink = (message: string) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
