
# Plaza San José — Catálogo Interactivo

SPA premium en React + TypeScript + Tailwind + Framer Motion para mostrar los módulos de oficinas de Plaza San José (Corporación Bancentro), con navegación animada estilo BIG.dk en el portafolio y CTA hacia WhatsApp.

## Datos confirmados

- **WhatsApp**: `+505 8186 7161` (formato wa.me: `50581867161`)
- **Dirección**: Plaza San José, Managua
- **Teléfono oficina**: 2233-4455
- **Email**: plazasanjose@gasdmi.com
- **Horario**: Lunes a Viernes, 8am – 5pm
- **Logo**: tipográfico "Plaza San José"
- **Quiénes Somos**: contenido placeholder profesional generado

## Stack y configuración

- React + TypeScript (TanStack Start, ya configurado)
- Tailwind CSS (ya configurado en `src/styles.css`)
- `framer-motion` (instalar con `bun add framer-motion`)
- Tipografía **Plus Jakarta Sans** vía `@fontsource/plus-jakarta-sans` (instalar e importar en `src/start.ts` o similar)
- Sin backend, datos hardcodeados

### Paleta (tokens en `src/styles.css`, formato oklch)

| Token | Hex referencia | Uso |
|---|---|---|
| `--navy` | `#0B1F3A` | Fondos hero, header, footer |
| `--corporate-green` | `#2E7D5B` | Secundario, acentos |
| `--teal` | `#0F9B8E` | Badges disponible, detalles |
| `--accent` | `#F26B1F` | CTAs (naranja cálido) |
| `--dark-gray` | `#2B2B2B` | Texto principal |

Mapeados en `@theme inline` como `--color-navy`, `--color-accent`, etc., para usar `bg-navy`, `text-accent`, `border-teal`.

## Estructura de carpetas

```
src/
  routes/
    __root.tsx           (header + footer + WhatsApp flotante + Outlet)
    index.tsx            (Inicio)
    portafolio.tsx       (vista edificios + módulos animada)
    quienes-somos.tsx
    contacto.tsx
  components/
    Header.tsx
    Footer.tsx
    WhatsAppFloat.tsx
    SectionHero.tsx       (hero con imagen + overlay + título)
    BuildingFullPanel.tsx (edificio fullscreen seleccionable)
    ModuleStackView.tsx   (stack de módulos estilo big.dk)
    ModuleCard.tsx        (un módulo fullscreen con galería)
    ModuleGallery.tsx     (carrusel Framer Motion)
    StatusBadge.tsx
    ClientsStrip.tsx      (logos clientes en Inicio)
    ContactForm.tsx
  data/
    data.ts               (tipado + 20 módulos)
```

## Tipado (`src/data/data.ts`)

```ts
export type Status = "disponible" | "ocupado";
export interface ModulePhoto { url: string; alt: string; }
export interface Module {
  id: string;
  buildingId: "A" | "B" | "C";
  number: string;          // ej: "A-101"
  areaM2: number;          // entre 30 y 120
  status: Status;
  photos: ModulePhoto[];   // 3–5 placeholders 1200×800
  description: string;
}
export interface Building {
  id: "A" | "B" | "C";
  name: string;
  totalModules: number;    // 6, 12, 2
  heroImage: string;
  description: string;
}
```

20 módulos: A (6), B (12), C (2), mezcla de disponibles/ocupados, áreas entre 30 y 120 m². Fotos vía `https://placehold.co/1200x800`.

## Secciones

### Header global
"Plaza San José" tipográfico + nav (Inicio, Portafolio, Quiénes Somos, Contáctenos). Sticky, fondo navy translúcido con blur al hacer scroll. `<Link>` de TanStack Router con `activeProps` (barra naranja inferior).

### Inicio (`/`)
1. **Hero principal** full-bleed (placeholder 1920×1080) con overlay navy, tagline grande animado (fade + slide-up), CTA naranja "Ver Portafolio" → `/portafolio`.
2. **Clientes que trabajan con nosotros**: strip horizontal con 6–8 logos placeholder, animación `whileInView` con stagger.
3. **3 valores destacados** (ubicación estratégica, seguridad 24/7, espacios flexibles) con íconos SVG inline y entrada animada.

### Portafolio (`/portafolio`) — pieza central UX
Estado local con `AnimatePresence`:

- **Vista 1 — Edificios**: los 3 edificios apilados verticalmente, cada uno **100vh**. Cada panel:
  - Ícono SVG de edificio inline (color teal)
  - Nombre grande, número de módulos, descripción corta
  - Imagen de fondo con overlay corporativo (verde/navy según edificio)
  - Hover: parallax sutil + barra naranja que crece a lo ancho
  - Click → seleccionar edificio
- **Transición**: usa `layoutId` compartido entre el panel y la vista de módulos para una transición continua (el ícono/título se mantiene mientras el resto hace fade).
- **Vista 2 — Módulos del edificio** (estilo [big.dk](https://big.dk)):
  - Cada módulo ocupa la pantalla completa
  - Navegación vertical con scroll-snap + Framer Motion: el siguiente módulo entra desde abajo cubriendo al anterior (efecto "stack" con `useScroll` y `motion.div` traducido en Y).
  - Indicador lateral fijo con número actual / total y dots clicables
  - Botón "← Volver a edificios" arriba a la izquierda con transición inversa
- **ModuleCard** (fullscreen):
  - Izquierda: galería/carrusel con `motion` drag horizontal + dots
  - Derecha: número grande, área en m², `StatusBadge` (verde teal "Disponible" / rojo "Ocupado"), descripción, botón naranja "Consultar disponibilidad" → `https://wa.me/50581867161?text=Hola, me interesa el módulo {number} del Edificio {X}, ¿podrían darme más información?`
  - Hover en card: `scale: 1.01` + shadow

### Quiénes Somos (`/quienes-somos`)
SectionHero + bloques alternados (zigzag): historia, misión, visión, valores (4 cards con íconos). Contenido placeholder profesional sobre Corporación Bancentro. Animaciones `whileInView` con stagger.

### Contáctenos (`/contacto`)
SectionHero + dos columnas:
- **Formulario** (nombre, email, teléfono, mensaje) sin backend — al enviar muestra toast de confirmación con sonner.
- **Datos de contacto**: Plaza San José Managua, 2233-4455, plazasanjose@gasdmi.com, Lun–Vie 8am–5pm, + bloque WhatsApp con el número.

### WhatsApp flotante
`WhatsAppFloat` fijo `bottom-6 right-6`, ícono SVG verde WhatsApp, en hover se expande mostrando "+505 8186 7161". `motion.a` con pulso sutil infinito. Visible en todas las rutas.

### SectionHero reutilizable
`<SectionHero title="..." image="https://placehold.co/1920x600" overlayColor="navy" />` — imagen full-bleed 1920×600, overlay con color corporativo, título centrado animado al montar (fade + slide-up).

## SEO y metadata
Cada ruta define `head()` con `title`, `description`, `og:title`, `og:description` propios.

## Detalles técnicos

- Todas las transiciones usan **Framer Motion** (`motion`, `AnimatePresence`, `layoutId`, `whileInView`, `useScroll`). Nada de transiciones CSS puras entre vistas.
- Todos los comentarios del código **en español**.
- Responsivo completo: mobile, tablet, desktop. En mobile las vistas fullscreen siguen siendo 100vh con tipografía y paddings adaptados; el stack del portafolio funciona igual.
- Sin librerías de UI externas; se usa solo `sonner` (ya incluido) para el toast del form.

## Entregables del primer build

1. Tokens de color + fuente Plus Jakarta Sans configurados
2. `data/data.ts` con 20 módulos realistas
3. Layout global (header tipográfico, footer, WhatsApp flotante)
4. 4 rutas funcionales con SectionHero y metadata propia
5. Portafolio con flujo animado edificios → módulos estilo big.dk
6. Formulario de contacto con toast de confirmación
