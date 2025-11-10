/**
 * CUSTOM CURSOR - CURSOR PERSONALIZADO
 * =====================================
 * Cursor personalizado que reemplaza el cursor predeterminado del navegador
 * 
 * Características:
 * - Anillo exterior que sigue el mouse con efecto spring
 * - Punto interior que sigue el mouse directamente
 * - Cambia de tamaño y color al hacer hover sobre enlaces/botones
 * - Se reduce al hacer clic
 * - Usa mix-blend-mode para crear efectos visuales
 * 
 * Estados del cursor:
 * - Normal: Anillo de 40px, punto de 6px
 * - Hover: Anillo de 60px, color verde (#134423)
 * - Click: Anillo de 32px, punto de 12px
 * 
 * Nota: Solo visible en dispositivos con mouse (desktop)
 */

"use client";

// Importaciones de React para estado y efectos
import { useEffect, useState } from "react";
// Importaciones de framer-motion para animaciones fluidas
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  // Estado para la posición actual del mouse
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // Estado para detectar si está sobre un elemento interactivo
  const [isHovering, setIsHovering] = useState(false);
  // Estado para detectar si se está haciendo clic
  const [isClicking, setIsClicking] = useState(false);

  // Configuración de la animación spring para suavidad
  const springConfig = { damping: 25, stiffness: 200 };
  // Springs para el anillo exterior (movimiento suave)
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    // Actualizar posición del cursor al mover el mouse
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // Detectar hover sobre elementos interactivos (enlaces, botones)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Detectar clics para animar el cursor
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Registrar todos los event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Cleanup: remover listeners al desmontar
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Anillo exterior del cursor (sigue con spring animation) */}
      <motion.div
        className="custom-cursor fixed rounded-full pointer-events-none z-[9999] mix-blend-difference border-2"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          // Tamaño según el estado
          width: isHovering ? 60 : isClicking ? 32 : 40,
          height: isHovering ? 60 : isClicking ? 32 : 40,
          borderColor: isHovering ? "#134423" : "#134423",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />
      
      {/* Punto interior del cursor (sigue directamente al mouse) */}
      <motion.div
        className="custom-cursor fixed rounded-full pointer-events-none z-[9999]"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          // Tamaño y color según el estado
          width: isClicking ? 12 : 6,
          height: isClicking ? 12 : 6,
          backgroundColor: isHovering ? "#134423" : "#134423",
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
    </>
  );
}