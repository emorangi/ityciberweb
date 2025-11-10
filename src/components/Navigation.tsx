/**
 * NAVIGATION - BARRA DE NAVEGACIÓN PRINCIPAL
 * ===========================================
 * Barra de navegación sticky que permanece visible al hacer scroll
 * 
 * Características:
 * - Sticky en la parte superior (fixed position)
 * - Efecto glass (vidrio esmerilado) al hacer scroll
 * - Indicador de sección activa (pill/burbuja verde)
 * - Logo animado con enlace a inicio
 * - Menú responsive (desktop y mobile)
 * - Botón CTA "Consulta Gratis"
 * 
 * Hooks usados:
 * - useActiveSection: Detecta qué sección está visible
 * 
 * Datos usados:
 * - navLinks: Array de enlaces de navegación (desde sections.ts)
 * 
 * Funciones de utilidad:
 * - scrollToSection: Scroll suave a una sección
 */

"use client";

// Importaciones de React para estado y efectos
import { useState, useEffect } from "react";
// Importaciones de framer-motion para animaciones
import { motion, AnimatePresence } from "framer-motion";
// Iconos de lucide-react
import { Shield, Menu, X } from "lucide-react";
// Componente de botón de shadcn/ui
import { Button } from "./ui/button";
// Hook personalizado para detectar sección activa
import { useActiveSection } from "@/hooks/useActiveSection";
// Datos de los enlaces de navegación
import { navLinks } from "@/lib/data/sections";
// Función de utilidad para scroll suave
import { scrollToSection } from "@/lib/utils/animations";

export default function Navigation() {
  // Estado para detectar si se ha hecho scroll
  const [isScrolled, setIsScrolled] = useState(false);
  // Estado para el menú mobile (abierto/cerrado)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Array de IDs de secciones para el hook
  const sectionIds = navLinks.map(link => link.id);
  // Hook que detecta qué sección está actualmente visible
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    // Detectar scroll para aplicar efecto glass
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      // Clase condicional: glass-effect cuando hay scroll
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-effect shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Izquierda */}
          <motion.a 
            href="#inicio" 
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("inicio");
            }}
          >
            {/* Icono de escudo con efecto de pulso */}
            <div className="relative">
              <Shield className="w-9 h-9 text-[#134423] group-hover:text-[#134423] transition-all duration-300" />
              <motion.div
                className="absolute inset-0 bg-[#134423]/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
             <Image
                src="/GI-Consultoria-logo.jpg"
                alt="GI Consultoría"
                width={160}   // ajusta si quieres más grande/pequeño
                height={40}
                priority
              />
          </motion.a>

          {/* Menú Desktop - Centro/Derecha */}
          <div className="hidden md:flex items-center gap-1 relative">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors relative z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                // Color blanco cuando la sección está activa
                style={{
                  color: activeSection === link.id ? "white" : undefined,
                }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
              >
                {link.label}
                {/* Pill/burbuja animada que indica la sección activa */}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="bubble"
                    className="absolute inset-0 bg-gradient-to-r from-[#134423] to-[#134423] rounded-full -z-10 shadow-lg shadow-[#134423]/30"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </motion.a>
            ))}
            {/* Botón CTA "Consulta Gratis" */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                className="ml-4 bg-gradient-to-r from-[#134423] to-[#134423] hover:shadow-lg hover:shadow-[#134423]/50 text-white border-0 transition-all duration-300"
                onClick={() => scrollToSection("contacto")}
              >
                Consulta Gratis
              </Button>
            </motion.div>
          </div>

          {/* Botón de menú Mobile */}
          <motion.button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Menú Mobile desplegable */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden glass-effect border-t border-border/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="section-container py-6 flex flex-col gap-2">
              {/* Enlaces del menú mobile */}
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 text-sm font-medium rounded-xl transition-all relative ${
                    activeSection === link.id
                      ? "text-white bg-gradient-to-r from-[#134423] to-[#134423]"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    scrollToSection(link.id);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
              {/* Botón CTA en mobile */}
              <Button 
                className="mt-2 bg-gradient-to-r from-[#134423] to-[#134423] text-white w-full"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToSection("contacto");
                }}
              >
                Consulta Gratis
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
