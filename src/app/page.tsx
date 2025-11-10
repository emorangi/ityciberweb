/**
 * PÁGINA PRINCIPAL (HOME)
 * =====================
 * Esta es la página principal de la aplicación que se muestra en la ruta "/"
 * 
 * Componentes que renderiza (en orden):
 * - PreLoader: Pantalla de carga inicial con animación del logo
 * - CustomCursor: Cursor personalizado que sigue el mouse
 * - Navigation: Barra de navegación superior sticky
 * - HeroSection: Sección hero con título animado y CTAs
 * - ServicesSection: Grid de servicios ofrecidos
 * - ProjectsSection: Portafolio de proyectos/casos de éxito
 * - SectorsSection: Sectores industriales que atendemos
 * - FAQSection: Preguntas frecuentes con acordeón
 * - ContactSection: Información de contacto y CTA
 * - Footer: Pie de página con enlaces y contacto
 * 
 * Todos los componentes se importan desde @/components/
 */

"use client";

// Importación de componentes desde la carpeta components/
import PreLoader from "@/components/PreLoader";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import SectorsSection from "@/components/SectorsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Pantalla de carga que se muestra primero */}
      <PreLoader />
      
      {/* Contenedor principal de la página */}
      <main className="relative">
        {/* Cursor personalizado que sigue el mouse */}
        <CustomCursor />
        
        {/* Navegación sticky en la parte superior */}
        <Navigation />
        
        {/* Todas las secciones de la página en orden */}
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <SectorsSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}