/**
 * SECTORS SECTION - SECCIÓN DE SECTORES INDUSTRIALES
 * ===================================================
 * Muestra los sectores industriales que atiende la empresa
 * 
 * Características:
 * - Grid responsive de 4 columnas con sectores
 * - Cards con íconos animados de cada sector
 * - Número de clientes por sector
 * - Card destacada final con estadísticas globales
 * - Orbes animados en la card de estadísticas
 * - Grid de fondo con patrón SVG
 * 
 * Componentes reutilizables usados:
 * - SectionHeader: Header consistente con badge y título
 * - AnimatedIcon: Ícono con animaciones
 * 
 * Datos usados:
 * - sectors: Array de sectores industriales (desde sections.ts)
 *   8 sectores: Finanzas, Retail, Salud, Manufactura, Telecomunicaciones, 
 *   Gobierno, Educación, Transporte
 * - COMPANY_STATS: Estadísticas globales (constants.ts)
 */

"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { Card } from "./ui/card";
import { SectionHeader } from "./common/SectionHeader";
import { AnimatedIcon } from "./common/AnimatedIcon";
import { sectors } from "@/lib/data/sections";
import { COMPANY_STATS } from "@/lib/constants";

export default function SectorsSection() {
  const globalStats = [
    { value: COMPANY_STATS.uptime, label: "Uptime" },
    { value: COMPANY_STATS.support, label: "Soporte" },
    { value: COMPANY_STATS.responseTime, label: "Respuesta" },
    { value: `${COMPANY_STATS.experience}`, label: "Años experiencia" },
  ];

  return (
    <section
      id="sectores"
      className="py-32 bg-background relative overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSIjMTM0NDIzIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-50" />

      <div className="section-container relative z-10">
        <SectionHeader
          badge="Confianza global"
          title="Sectores que "
          highlight="Confiaron"
          description="Protegemos empresas de todos los sectores con soluciones especializadas"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="p-6 text-center h-full glass-effect hover:shadow-xl transition-all duration-500 border-border/50 hover:border-[#134423]/50 group relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#134423]/5 to-[#134423]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  <div className="relative z-10">
                    <div className="mb-4 flex justify-center">
                      <AnimatedIcon icon={sector.icon} />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {sector.name}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4">
                      {sector.description}
                    </p>

                    <div className="pt-4 border-t border-border/50">
                      <span className="text-3xl font-bold text-gradient">
                        {sector.clients}
                      </span>
                      <span className="text-sm text-muted-foreground ml-2">clientes</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Global Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <Card className="glass-effect border-border/50 overflow-hidden">
            <div className="relative bg-gradient-to-br from-[#134423] to-[#134423] p-12 md:p-16">
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                  <h3 className="text-4xl md:text-5xl font-bold text-white">
                    {COMPANY_STATS.clients} Clientes Satisfechos
                  </h3>
                </div>
                <p className="text-xl text-white/90 mb-8 text-center">
                  Protegiendo organizaciones en más de {COMPANY_STATS.countries} países
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                  {globalStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-white/80 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}