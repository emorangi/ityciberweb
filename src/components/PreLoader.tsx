/**
 * PRELOADER - PANTALLA DE CARGA INICIAL
 * ======================================
 * Componente que muestra una pantalla de carga animada al iniciar la aplicación
 * 
 * Características:
 * - Aparece durante 3 segundos (configurable en constants.ts)
 * - Muestra el texto "IT&CIBER" con efectos de animación y brillo
 * - Tiene orbes flotantes y partículas animadas en el fondo
 * - Se desliza hacia arriba al desaparecer (efecto telón)
 * - Bloquea el scroll mientras está activo
 * 
 * Hook usado:
 * - usePreloader: Gestiona el tiempo de carga y el estado del body
 * 
 * Constantes usadas:
 * - ANIMATION_DURATIONS.preloader: Duración total (3000ms)
 * - ANIMATION_DURATIONS.preloaderExit: Duración de salida (1000ms)
 */

"use client";

// Importaciones de librerías de animación
import { motion, AnimatePresence } from "framer-motion";
// Hook personalizado para gestionar el estado del preloader
import { usePreloader } from "@/hooks/usePreloader";
// Constantes de duración de animaciones
import { ANIMATION_DURATIONS } from "@/lib/constants";

export default function PreLoader() {
  // Hook que controla si el preloader está activo o no
  const isLoading = usePreloader();

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          // Contenedor principal que cubre toda la pantalla
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#134423] origin-top"
          initial={{ scaleY: 1 }}
          // Animación de salida: se desliza hacia arriba como un telón
          exit={{
            scaleY: 0,
            transition: {
              duration: ANIMATION_DURATIONS.preloaderExit / 1000,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          {/* Texto principal animado "IT&CIBER" */}
          <div className="relative">
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.6, 0.05, 0.01, 0.9],
              }}
            >
              <motion.div
                className="relative"
                initial={{ x: 0, opacity: 0, scale: 0.8 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.6, 0.05, 0.01, 0.9],
                }}
              >
                {/* Texto principal */}
                <span className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold text-white tracking-tight leading-none block">
                  IT&CIBER
                </span>
                {/* Efecto de brillo pulsante detrás del texto */}
                <motion.div
                  className="absolute inset-0 text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold text-white/50 tracking-tight leading-none blur-2xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  IT&CIBER
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Línea animada debajo del texto */}
            <motion.div
              className="absolute -bottom-8 left-0 right-0 h-1 bg-white/80 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1,
                delay: 1.2,
                ease: [0.6, 0.05, 0.01, 0.9],
              }}
            />
          </div>

          {/* Orbes flotantes en el fondo (decoración) */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />

          {/* Partículas flotantes (20 elementos) */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0],
                y: [0, -50, -100],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Texto de carga en la parte inferior */}
          <motion.div
            className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            Cargando experiencia digital...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}