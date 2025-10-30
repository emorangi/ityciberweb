"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Sistema Bancario Nacional",
    category: "Finanzas",
    description:
      "Implementación de SOC 24/7 y auditorías de seguridad para institución financiera líder.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    tags: ["SOC", "Compliance", "Pentesting"],
    result: "99.9% uptime en seguridad",
  },
  {
    title: "E-Commerce Global",
    category: "Retail",
    description:
      "Migración completa a AWS con arquitectura serverless y protección DDoS.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["Cloud", "AWS", "Migración"],
    result: "70% reducción de costos",
  },
  {
    title: "Healthcare Platform",
    category: "Salud",
    description:
      "Sistema de gestión de datos médicos con cumplimiento HIPAA y encriptación end-to-end.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["Compliance", "Encriptación", "API"],
    result: "100% cumplimiento normativo",
  },
  {
    title: "Energy Management System",
    category: "Energía",
    description:
      "Infraestructura crítica protegida con sistemas IDS/IPS avanzados.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    tags: ["ICS Security", "Monitoring", "IoT"],
    result: "Zero incidentes críticos",
  },
  {
    title: "Telecom Infrastructure",
    category: "Telecomunicaciones",
    description:
      "Red 5G segura con implementación de Zero Trust Architecture.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    tags: ["5G", "Zero Trust", "Network"],
    result: "500K usuarios protegidos",
  },
  {
    title: "Government Portal",
    category: "Gobierno",
    description:
      "Portal ciudadano con autenticación multifactor y auditorías continuas.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    tags: ["Gov-Cloud", "MFA", "Auditoría"],
    result: "3M ciudadanos servidos",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="proyectos"
      className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Casos de Éxito
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Proyectos que transformaron la seguridad digital de nuestros clientes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-[#12805C] text-white">
                    {project.category}
                  </Badge>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs border-[#12805C] text-[#12805C]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-sm font-semibold text-[#12805C]">
                      {project.result}
                    </span>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#12805C] transition-colors" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
