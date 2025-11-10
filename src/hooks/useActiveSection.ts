/**
 * Hook para detectar la sección activa en el scroll
 * Útil para navegación con indicadores
 */

import { useEffect, useState } from "react";

export function useActiveSection(sections: string[]) {
  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    // Detección inicial
    const detectInitialSection = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
    };

    const timer = setTimeout(detectInitialSection, 100);

    // Detección durante scroll
    const handleScrollDetection = () => {
      const scrollPosition = window.scrollY + 200;
      let currentSection = sections[0];
      
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScrollDetection, { passive: true });
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScrollDetection);
    };
  }, [sections]);

  return activeSection;
}
