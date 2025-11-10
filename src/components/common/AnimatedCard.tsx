/**
 * Tarjeta con animaciones predefinidas
 * Componente reutilizable para mantener consistencia
 */

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ANIMATION_DURATIONS, SPRING_CONFIG } from "@/lib/constants";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  hoverY?: number;
  className?: string;
}

export function AnimatedCard({ 
  children, 
  delay = 0, 
  hoverY = -8,
  className = ""
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div
        whileHover={{ y: hoverY }}
        transition={{ 
          type: "spring", 
          stiffness: SPRING_CONFIG.smooth.stiffness, 
          damping: SPRING_CONFIG.smooth.damping 
        }}
      >
        <Card className={`glass-effect hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-[#134423]/50 group ${className}`}>
          {children}
        </Card>
      </motion.div>
    </motion.div>
  );
}
