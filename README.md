# ITyCIBER Web — Guía de estructura y rescate de contenido



Web corporativa de \*\*ityciber.es\*\* construida con \*\*Next.js + React + TypeScript\*\* (estilos utilitarios y PostCSS). Este README está orientado a \*\*reusar contenido o componentes\*\* cuando se cree una web nueva desde cero y haga falta “rescatar” partes útiles de este repositorio.



## Tabla de contenido

- [Stack y requisitos](#stack-y-requisitos)

- [Estructura general](#estructura-general)

- [Dónde está cada cosa (mapa rápido)](#dónde-está-cada-cosa-mapa-rápido)

- [Cómo rescatar contenido](#cómo-rescatar-contenido)

- [Convenciones de componentes y animaciones](#convenciones-de-componentes-y-animaciones)

- [Scripts típicos](#scripts-típicos)

- [Créditos y notas](#créditos-y-notas)



---



## Stack y requisitos

- \*\*Next.js + React + TS\*\*  

- \*\*PostCSS\*\* y utilidades (config en `postcss.config.mjs`).  

- Gestor de paquetes: el repo incluye `package-lock.json` (npm) y `bun.lock` (Bun). Usa \*\*uno u otro\*\* según tu entorno.



> Si solo quieres leer/extraer contenido, no necesitas instalar nada; navega a los archivos listados abajo.



---



## Estructura general



```

.

├─ public/                  # Activos estáticos (imágenes, favicons, etc.)

├─ src/

│  ├─ components/

│  │  └─ common/            # UI reutilizable (SectionHeader, AnimatedCard, etc.)

│  ├─ hooks/                # Hooks personalizados (preloader, typing, active section)

│  ├─ lib/

│  │  ├─ constants.ts       # Colores, timings, datos globales, contacto, stats

│  │  ├─ data/

│  │  │  └─ sections.ts     # Contenido de servicios, proyectos, sectores, FAQs, nav, footer

│  │  └─ utils/

│  │     └─ animations.ts   # Variantes y helpers de animación (fadeIn\*, slideUp, scrollToSection)

│  └─ ...                   # Páginas/secciones (Hero, Services, Projects, Sectors, FAQ, Contact, Footer)

├─ OPTIMIZACION.md          # Resumen de refactor y cómo se organizó el código

├─ package.json

├─ tsconfig.json

└─ ...

```



---



## Dónde está cada cosa (mapa rápido)

| Necesitas… | Mira en… | Notas |
|---|---|---|
| **Textos de la web** (servicios, proyectos, sectores, FAQs, navegación, footer) | `src/lib/data/sections.ts` | Archivo ÚNICO de contenido: perfecto para copiar a otra base de código o transformar a CMS/JSON. |
| **Datos globales** (colores, timings de animación, contacto, métricas) | `src/lib/constants.ts` | Cambios aquí afectan toda la UI en cadena. Útil para portar branding/vars. |
| **Animaciones** reutilizables | `src/lib/utils/animations.ts` | Variantes `fadeInUp/Left/Right`, `scaleIn`, `slideUp`, `createStaggerVariant()`, y `scrollToSection()`. |
| **Hooks** reutilizables | `src/hooks/` | `usePreloader()`, `useTypingEffect()`, `useActiveSection()` encapsulan lógica común. |
| **Cabeceras y tarjetas** estándar | `src/components/common/` | `SectionHeader`, `AnimatedCard`, `AnimatedIcon`, `BackgroundBlobs`… componentes “lego” para nuevas secciones. |
| **Imágenes y estáticos** | `public/` | Copia directa a cualquier proyecto. |
| **Notas del refactor** | `OPTIMIZACION.md` | Explica el “antes/después” y la lógica de la arquitectura. Útil para entender decisiones. |

---

## Cómo rescatar contenido

### 1) Solo textos (contenido puro)

- Copia \*\*solo\*\* `src/lib/data/sections.ts`.  

- Si tu nuevo proyecto no es TS, transpílalo a JS o exporta el contenido como \*\*JSON\*\* (estructura ya viene separada por secciones).



### 2) Branding/vars globales

- Copia `src/lib/constants.ts` y ajusta \*\*colores / timings / contacto\*\*.  

- Ventaja: centralizas decisiones visuales y de movimiento desde el inicio.



### 3) Animaciones y UX

- Copia `src/lib/utils/animations.ts` y los hooks de `src/hooks/`.  

- Integra `scrollToSection()` y variantes `fadeIn\*` para una experiencia consistente.



### 4) UI base y patrones

- Copia los componentes de `src/components/common/` para montar secciones rápidamente (`SectionHeader` + `AnimatedCard/AnimatedIcon` + `BackgroundBlobs`).  

- Esto reduce código duplicado y acelera la maquetación.



### 5) Activos

- Arrastra la carpeta `public/` o los ficheros necesarios (logos, imágenes de proyectos, favicons).



> \*\*Tip:\*\* la separación \*\*datos ↔ lógica ↔ presentación\*\* ya está hecha; puedes llevarte cada capa por separado según te convenga.



---



## Convenciones de componentes y animaciones



- \*\*SectionHeader\*\*: cabecera estándar para cualquier sección (badge, icono, título con highlight y descripción).  

- \*\*AnimatedCard / AnimatedIcon / BackgroundBlobs\*\*: piezas visuales con animaciones predefinidas y estilo consistente.  

- \*\*Hooks\*\*: 

&nbsp; - `usePreloader()` maneja el “loading” inicial y overflow del `<body>`.  

&nbsp; - `useTypingEffect()` crea el efecto “máquina de escribir” de titulares.  

&nbsp; - `useActiveSection()` detecta la sección visible para navegación activa.



---



## Créditos y notas

- Estructura documentada y optimizada en `OPTIMIZACION.md` con comparativas “antes/después” por sección (Hero, Services, Projects, Sectors, FAQ, Contact, Footer).  






