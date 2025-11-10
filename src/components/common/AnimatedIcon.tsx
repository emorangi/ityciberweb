/**
 * Ícono con animaciones y efectos hover
 * Componente reutilizable para mantener consistencia
 */

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ANIMATION_DURATIONS } from "@/lib/constants";

interface AnimatedIconProps {
  icon: LucideIcon;
  size?: number;
  hoverRotate?: boolean;
  className?: string;
  containerClassName?: string;
}

export function AnimatedIcon({ 
  icon: Icon, 
  size = 8,
  hoverRotate = true,
  className = "",
  containerClassName = ""
}: AnimatedIconProps) {
  return (
    <motion.div 
      className={`w-16 h-16 glass-effect rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#134423] group-hover:to-[#134423] transition-all duration-500 ${containerClassName}`}
      whileHover={hoverRotate ? { rotate: 360 } : {}}
      transition={{ duration: ANIMATION_DURATIONS.spring }}
    >
      <Icon className={`w-${size} h-${size} text-[#134423] group-hover:text-white transition-colors duration-500 ${className}`} />
    </motion.div>
  );
}
