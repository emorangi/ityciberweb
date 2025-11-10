/**
 * PROJECTS SECTION - SECCIÓN DE PROYECTOS/CASOS DE ÉXITO
 * ========================================================
 * Muestra el portafolio de proyectos exitosos en formato grid
 * 
 * Características:
 * - Grid responsive de 3 columnas con proyectos destacados
 * - Cards con imagen de fondo y overlay degradado
 * - Badge de categoría en cada proyecto
 * - Tags tecnológicos de cada proyecto
 * - Resultado destacado del proyecto
 * - Efecto hover con zoom en imagen
 * - Blobs animados de fondo para decoración
 * 
 * Componentes reutilizables usados:
 * - SectionHeader: Header consistente con badge y título
 * - BackgroundBlob: Decoración de fondo animada
 * 
 * Datos usados:
 * - projects: Array de proyectos (desde sections.ts)
 *   6 proyectos: Bancario, E-Commerce, Healthcare, Energy, Telecom, Government
 */

"use client";

// Importaciones de framer-motion para animaciones
import { motion } from "framer-motion";
// Componentes de UI
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
// Iconos
import { Sparkles } from "lucide-react";
// Componentes reutilizables
import { SectionHeader } from "./common/SectionHeader";
import { BackgroundBlob } from "./common/BackgroundBlobs";
// Datos de proyectos
import { projects } from "@/lib/data/sections";

export default function ProjectsSection() {
  return (
    <section
      id="proyectos"
      className="py-32 bg-muted/30 relative overflow-hidden"
    >
      {/* Blob animado de fondo para decoración */}
      <BackgroundBlob position="top-left" size="lg" intensity="medium" />

      <div className="section-container relative z-10">
        {/* Header de la sección */}
        <SectionHeader
          badge="Proyectos destacados"
          icon={Sparkles}
          title="Casos de Éxito"
          description="Proyectos que transformaron la seguridad digital de nuestros clientes"
        />

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Card con animación de elevación en hover */}
              <motion.div
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="overflow-hidden h-full glass-effect hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-[#134423]/50 group">
                  {/* Imagen de fondo con overlay */}
                  <div className="relative h-56 overflow-hidden">
                    {/* Imagen con zoom en hover */}
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    {/* Overlay degradado oscuro */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    {/* Badge de categoría */}
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-[#134423] to-[#134423] text-white border-0 shadow-lg">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Contenido del proyecto */}
                  <div className="p-6">
                    {/* Título del proyecto */}
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[#134423] transition-colors">
                      {project.title}
                    </h3>
                    {/* Descripción del proyecto */}
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Tags tecnológicos */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs border-[#134423]/30 text-[#134423] hover:bg-[#134423]/10 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Footer con resultado e ícono */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      {/* Resultado destacado del proyecto */}
                      <span className="text-sm font-semibold text-gradient">
                        {project.result}
                      </span>
                      {/* Ícono del proyecto con animación */}
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <project.icon className="w-5 h-5 text-muted-foreground group-hover:text-[#134423] transition-colors" />
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}