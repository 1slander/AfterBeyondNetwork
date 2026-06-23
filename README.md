# AfterBeyond Networks Landing Page

Landing page oficial de **AfterBeyond Networks**, una comunidad gaming sin animo de lucro creada por jugadores y para jugadores.

El proyecto presenta la identidad de la comunidad, su historia, servicios, objetivos, fundadores, staff y canales principales de contacto. Esta web ha sido creada por mi como una experiencia visual moderna, responsive y pensada para comunicar el espiritu de AfterBeyond: buen rollo, respeto, comunidad y grandes momentos compartidos.

## Tecnologias

- **React 18** para construir la interfaz mediante componentes reutilizables.
- **TypeScript** para mejorar la mantenibilidad y reducir errores durante el desarrollo.
- **Vite** como entorno de desarrollo y build.
- **Tailwind CSS 4** para estilos utilitarios y composicion responsive.
- **CSS custom properties** para temas, colores y tokens visuales.
- **Lucide React** y componentes SVG propios para iconografia.
- **Radix UI** como base disponible para componentes accesibles.

## Caracteristicas

- Landing page responsive.
- Contenido en espanol e ingles.
- Tema claro y oscuro.
- Secciones independientes y reutilizables.
- Enlace centralizado a Discord.
- Footer con ano dinamico.
- Animaciones y efectos visuales respetando `prefers-reduced-motion`.
- Arquitectura separada por `layout`, `sections`, `shared` y `content`.

## Estructura Principal

```text
src/
  app/
    App.tsx
    components/
      layout/
      sections/
      shared/
    content/
      site.ts
      translations.ts
  styles/
    globals.css
    index.css
    tailwind.css
    theme.css
```

## Instalacion

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Autor

Proyecto creado por **Hector Gonzalez aka 1slander**.
