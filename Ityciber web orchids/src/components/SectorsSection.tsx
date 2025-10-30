"use client";

import { motion } from "framer-motion";
import {
  Building2,
  ShoppingCart,
  HeartPulse,
  Factory,
  Wifi,
  Landmark,
  GraduationCap,
  Plane,
} from "lucide-react";
import { Card } from "./ui/card";

const sectors = [
  {
    icon: Building2,
    name: "Finanzas",
    description: "Banca, seguros y servicios financieros",
    clients: "25+",
  },
  {
    icon: ShoppingCart,
    name: "Retail",
    description: "E-commerce y comercio minorista",
    clients: "40+",
  },
  {
    icon: HeartPulse,
    name: "Salud",
    description: "Hospitales y sistemas de salud",
    clients: "15+",
  },
  {
    icon: Factory,
    name: "Manufactura",
    description: "Industria y producción",
    clients: "30+",
  },
  {
    icon: Wifi,
    name: "Telecomunicaciones",
    description: "Operadores y servicios de red",
    clients: "12+",
  },
  {
    icon: Landmark,
    name: "Gobierno",
    description: "Sector público y administración",
    clients: "18+",
  },
  {
    icon: GraduationCap,
    name: "Educación",
    description: "Universidades e instituciones",
    clients: "22+",
  },
  {
    icon: Plane,
    name: "Transporte",
    description: "Logística y movilidad",
    clients: "10+",
  },
];

export default function SectorsSection() {
  return (
    <section
      id="sectores"
      className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSIjMTI4MDVDIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-50" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Sectores que Confiaron en Nosotros
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Protegemos empresas de todos los sectores con soluciones
            especializadas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="p-6 text-center h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-[#12805C] group">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-[#12805C]/10 rounded-full flex items-center justify-center group-hover:bg-[#12805C] transition-colors">
                    <sector.icon className="w-8 h-8 text-[#12805C] group-hover:text-white transition-colors" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {sector.name}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {sector.description}
                </p>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-2xl font-bold text-[#12805C]">
                    {sector.clients}
                  </span>
                  <span className="text-sm text-gray-500 ml-2">clientes</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#12805C] to-[#18a078] rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              +170 Clientes Satisfechos
            </h3>
            <p className="text-xl text-white/90 mb-6">
              Protegiendo organizaciones en más de 15 países
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">99.9%</div>
                <div className="text-white/80">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">24/7</div>
                <div className="text-white/80">Soporte</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">&lt;5min</div>
                <div className="text-white/80">Respuesta</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">15+</div>
                <div className="text-white/80">Años experiencia</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
