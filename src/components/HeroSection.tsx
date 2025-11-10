/**
 * HERO SECTION - SECCIÓN PRINCIPAL/PORTADA
 * =========================================
 * Primera sección visible de la página con el mensaje principal
 * 
 * Características:
 * - Título animado con efecto de escritura de máquina
 * - Efecto parallax en el fondo al hacer scroll
 * - Orbes flotantes y partículas animadas decorativas
 * - Grid de fondo con patrón SVG
 * - Estadísticas de la empresa (uptime, soporte, etc.)
 * - CTAs principales: "Solicitar Auditoría" y "Ver Servicios"
 * - Indicador de scroll animado
 * 
 * Hooks usados:
 * - useTypingEffect: Efecto de escritura para el título
 * - useScroll, useTransform: Efectos parallax de framer-motion
 * 
 * Datos usados:
 * - ANIMATION_DELAYS: Delays sincronizados con el preloader
 * - COMPANY_STATS: Estadísticas de la empresa (constants.ts)
 */

"use client";

// Importaciones de framer-motion para animaciones y parallax
import { motion, useScroll, useTransform } from "framer-motion";
// Componentes de UI
import { Button } from "./ui/button";
// Iconos
import { ArrowRight, Sparkles } from "lucide-react";
// Hook personalizado para efecto de escritura
import { useTypingEffect } from "@/hooks/useTypingEffect";
// Constantes de la aplicación
import { ANIMATION_DELAYS, COMPANY_STATS } from "@/lib/constants";
// Función de utilidad para scroll suave
import { scrollToSection } from "@/lib/utils/animations";

export default function HeroSection() {
  // Hook de efecto de escritura para el título principal
  const { displayText, isTyping } = useTypingEffect({ text: "IT Y Ciberseguridad" });
  
  // Hook de scroll para efectos parallax
  const { scrollY } = useScroll();
  // Transformaciones parallax: elementos se mueven al hacer scroll
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.8]);

  // Delay base sincronizado con el preloader (3 segundos)
  const baseDelay = ANIMATION_DELAYS.base;

  // Estadísticas a mostrar
  const stats = [
    { value: COMPANY_STATS.uptime, label: "Uptime" },
    { value: COMPANY_STATS.support, label: "Soporte" },
    { value: COMPANY_STATS.responseTime, label: "Respuesta" },
    { value: COMPANY_STATS.experience, label: "Años" },
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh"
    >
      {/* Objetos flotantes animados con parallax */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y }}>
        {/* Orbes grandes flotantes con diferentes animaciones */}
        {[
          { delay: 0, x: -400, y: -400, pos: "top-1/4 -left-20", anim: { x: [0, 100, 0], y: [0, 50, 0] }, dur: 20 },
          { delay: 0.2, x: 400, y: -400, pos: "top-1/3 -right-20", anim: { x: [0, -100, 0], y: [0, -50, 0] }, dur: 25 },
          { delay: 0.4, x: 0, y: 400, pos: "bottom-1/4 left-1/3", anim: { rotate: [0, 180, 360] }, dur: 30 },
        ].map((orb, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${orb.pos} w-96 h-96 bg-gradient-to-br from-[#134423]/30 to-[#134423]/20 rounded-full blur-3xl`}
            initial={{ x: orb.x, y: orb.y, opacity: 0, scale: 0 }}
            animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
              delay: baseDelay + orb.delay,
              ease: [0.6, 0.05, 0.01, 0.9],
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], ...orb.anim }}
              transition={{
                duration: orb.dur,
                repeat: Infinity,
                ease: "easeInOut",
                delay: baseDelay + orb.delay + 1.5,
              }}
            />
          </motion.div>
        ))}

        {/* Partículas pequeñas flotantes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-[#134423]/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: typeof window !== 'undefined' ? window.innerHeight + 100 : 900,
              opacity: 0,
            }}
            animate={{
              x: [
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              ],
              y: [
                typeof window !== 'undefined' ? window.innerHeight + 100 : 900,
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              ],
              opacity: [0, 0.6, 0.6, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: baseDelay + 0.5 + i * 0.1,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>

      {/* Grid overlay de fondo */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSIjMTM0NDIzIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />

      {/* Contenido principal */}
      <motion.div
        className="section-container relative z-10 text-center"
        style={{ opacity, scale }}
      >
        {/* Badge superior */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: baseDelay + 0.2 }}
          className="mb-6"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-full text-[#134423] text-sm font-semibold mb-8 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Sparkles className="w-4 h-4" />
            Impulse su negocio digital
          </motion.div>
        </motion.div>

        {/* Título principal con efecto de escritura */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-foreground mb-8 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: baseDelay + 0.4 }}
        >
          <span className="inline-block">
            {displayText}
            {/* Cursor parpadeante mientras está escribiendo */}
            {isTyping && (
              <motion.span
                className="inline-block w-1 h-16 md:h-24 bg-[#134423] ml-2 align-middle"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </span>
        </motion.h1>

        {/* Subtítulo descriptivo */}
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: baseDelay + 0.6 }}
        >
          Soluciones integrales de ciberseguridad y servicios tecnológicos para
          empresas que buscan protección y transformación digital.
        </motion.p>

        {/* Botones CTA principales */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: baseDelay + 0.8 }}
        >
          {/* CTA primario: Solicitar Auditoría */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#134423] to-[#134423] hover:shadow-2xl hover:shadow-[#134423]/50 text-white px-10 py-7 text-lg border-0 group"
              onClick={() => scrollToSection("contacto")}
            >
              Solicitar Auditoría
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          {/* CTA secundario: Ver Servicios */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="glass-effect px-10 py-7 text-lg border-border/50 hover:border-[#134423] hover:text-[#134423] group"
              onClick={() => scrollToSection("servicios")}
            >
              Ver Servicios
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Grid de estadísticas */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: baseDelay + 1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-effect p-6 rounded-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: baseDelay + 1 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Indicador de scroll animado */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: baseDelay + 1.5 }}
        style={{ opacity }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: baseDelay + 2 }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            className="w-1.5 h-1.5 bg-foreground/50 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: baseDelay + 2 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}