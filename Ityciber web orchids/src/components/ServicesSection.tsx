"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Search, Cloud } from "lucide-react";
import { useRef } from "react";
import { Card } from "./ui/card";

const services = [
  {
    icon: Shield,
    title: "SOC 24/7",
    description:
      "Centro de Operaciones de Seguridad funcionando las 24 horas del día, los 7 días de la semana. Monitoreo continuo, detección de amenazas y respuesta inmediata ante incidentes.",
    features: [
      "Monitoreo en tiempo real",
      "Respuesta a incidentes",
      "Análisis de amenazas",
      "Informes detallados",
    ],
  },
  {
    icon: Search,
    title: "Pentesting",
    description:
      "Pruebas de penetración exhaustivas para identificar vulnerabilidades antes que los atacantes. Simulamos ataques reales para fortalecer tu seguridad.",
    features: [
      "Ethical Hacking",
      "Análisis de vulnerabilidades",
      "Test de penetración web",
      "Auditorías de código",
    ],
  },
  {
    icon: Cloud,
    title: "Migración Cloud",
    description:
      "Transformación digital segura hacia la nube. Migramos tu infraestructura con las mejores prácticas de seguridad y optimización de costos.",
    features: [
      "AWS & Azure & GCP",
      "Arquitectura segura",
      "Optimización de costos",
      "Soporte continuo",
    ],
  },
];

export default function ServicesSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="servicios"
      ref={containerRef}
      className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Parallax background element */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-10 w-96 h-96 bg-[#12805C]/5 rounded-full blur-3xl"
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Soluciones integrales de ciberseguridad diseñadas para proteger y
            optimizar tu negocio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#12805C] group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[#12805C]/10 rounded-lg flex items-center justify-center group-hover:bg-[#12805C] transition-colors">
                    <service.icon className="w-8 h-8 text-[#12805C] group-hover:text-white transition-colors" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-[#12805C] rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.div
                  className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href="#contacto"
                    className="text-[#12805C] font-semibold hover:text-[#0d5e45] flex items-center"
                  >
                    Más información
                    <span className="ml-2">→</span>
                  </a>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
