"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Mail, Phone, MapPin, Sparkles, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./common/SectionHeader";
import { BackgroundBlobs } from "./common/BackgroundBlobs";
import { CONTACT_INFO } from "@/lib/constants";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
      description: "Respuesta en menos de 24 horas",
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: CONTACT_INFO.phoneFormatted,
      href: `tel:${CONTACT_INFO.phone}`,
      description: "Lunes a Viernes, 9:00 - 18:00",
    },
    {
      icon: MapPin,
      title: "Oficina",
      content: CONTACT_INFO.fullAddress,
      href: `https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.fullAddress)}`,
      description: "Visítanos en nuestras oficinas",
    },
  ];

  return (
    <section
      id="contacto"
      className="py-32 bg-background relative overflow-hidden"
    >
      <BackgroundBlobs variant="dual" />

      <div className="section-container relative z-10">
        <SectionHeader
          badge="Hablemos"
          icon={Sparkles}
          title="Empieza tu "
          highlight="Transformación"
          description="Nuestro equipo de expertos está listo para ayudarte"
        />

        {/* Contact Cards Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                target={info.icon === MapPin ? "_blank" : undefined}
                rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group block"
              >
                <Card className="relative h-full p-8 glass-effect border-border/50 hover:border-[#134423]/50 transition-all duration-500 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#134423]/5 to-[#134423]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      className="w-16 h-16 mb-6 glass-effect rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#134423] group-hover:to-[#134423] transition-all duration-500"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <info.icon className="w-7 h-7 text-[#134423] group-hover:text-white transition-colors duration-500" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                      {info.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </h3>

                    <p className="text-base font-semibold text-[#134423] mb-2 group-hover:text-[#0d331a] transition-colors">
                      {info.content}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {info.description}
                    </p>
                  </div>
                </Card>
              </motion.a>
            ))}
          </div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
          >
            <Card className="relative overflow-hidden border-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#134423] to-[#134423]" />
              
              {/* Animated orbs */}
              <motion.div
                className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-10 -left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, 30, 0] }}
                transition={{ duration: 10, repeat: Infinity, delay: 2 }}
              />

              <div className="relative z-10 p-10 md:p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mb-6"
                >
                  <Sparkles className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="font-bold text-3xl md:text-4xl mb-4 text-white">
                  Auditoría de Seguridad Gratuita
                </h3>
                <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
                  Agenda ahora una evaluación completa de seguridad sin costo ni compromiso. Descubre vulnerabilidades antes que los atacantes.
                </p>

                <a href={`mailto:${CONTACT_INFO.email}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#134423] font-semibold rounded-full hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer"
                  >
                    Solicitar Auditoría
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}