/**
 * Componente reutilizable para headers de sección
 * Mantiene consistencia visual en toda la aplicación
 */

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ANIMATION_DURATIONS, VIEWPORT_CONFIG } from "@/lib/constants";

interface SectionHeaderProps {
  badge?: string;
  icon?: LucideIcon;
  title: string;
  highlight?: string; // parte del título con gradiente
  description: string;
  centered?: boolean;
}

export function SectionHeader({
  badge,
  icon: Icon,
  title,
  highlight,
  description,
  centered = true,
}: SectionHeaderProps) {
  const titleParts = highlight ? title.split(highlight) : [title];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_CONFIG}
      transition={{ duration: ANIMATION_DURATIONS.fadeIn }}
      className={centered ? "text-center mb-20" : "mb-20"}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEWPORT_CONFIG}
          className={`inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full text-sm font-semibold text-[#134423] mb-6 ${
            centered ? "" : "mb-6"
          }`}
        >
          {Icon && <Icon className="w-4 h-4" />}
          {badge}
        </motion.div>
      )}

      <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
        {highlight ? (
          <>
            {titleParts[0]}
            <span className="text-gradient">{highlight}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>

      <p className={`text-xl text-muted-foreground leading-relaxed ${
        centered ? "max-w-2xl mx-auto" : "max-w-2xl"
      }`}>
        {description}
      </p>
    </motion.div>
  );
}
