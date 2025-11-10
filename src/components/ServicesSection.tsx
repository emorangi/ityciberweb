"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Card } from "./ui/card";
import { SectionHeader } from "./common/SectionHeader";
import { AnimatedIcon } from "./common/AnimatedIcon";
import { services } from "@/lib/data/sections";
import { scrollToSection } from "@/lib/utils/animations";

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
      className="py-32 bg-background relative overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y }}
        className="absolute top-20 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-[#134423]/10 to-[#134423]/10 rounded-full blur-3xl"
      />

      <div className="section-container relative z-10">
        <SectionHeader
          badge="Lo que hacemos mejor"
          title="Nuestros Servicios"
          description="Soluciones integrales de IT y ciberseguridad diseñadas para proteger y optimizar tu negocio digital"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="p-8 h-full glass-effect hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-[#134423]/50 group relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                  
                  <div className="relative z-10">
                    <div className="mb-6">
                      <AnimatedIcon icon={service.icon} />
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={feature}
                          className="flex items-center text-foreground/80"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + i * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#134423] to-[#134423] rounded-full mr-3" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    <motion.button
                      onClick={() => scrollToSection("contacto")}
                      className="inline-flex items-center text-[#134423] font-semibold hover:text-[#134423] group/link cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      Más información
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </motion.button>
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