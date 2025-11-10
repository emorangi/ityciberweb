/**
 * Blobs animados de fondo
 * Componente reutilizable para decoración de secciones
 */

import { motion } from "framer-motion";

interface BlobProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  size?: "sm" | "md" | "lg";
  intensity?: "light" | "medium" | "strong";
  animated?: boolean;
}

export function BackgroundBlob({ 
  position, 
  size = "md",
  intensity = "medium",
  animated = true 
}: BlobProps) {
  const sizeClasses = {
    sm: "w-64 h-64",
    md: "w-96 h-96",
    lg: "w-[600px] h-[600px]",
  };

  const positionClasses = {
    "top-left": "-top-40 -left-40",
    "top-right": "-top-40 -right-40",
    "bottom-left": "-bottom-40 -left-40",
    "bottom-right": "-bottom-40 -right-40",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  const intensityClasses = {
    light: "bg-[#134423]/5",
    medium: "bg-[#134423]/10",
    strong: "bg-[#134423]/20",
  };

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} ${intensityClasses[intensity]} rounded-full blur-3xl`}
      animate={animated ? {
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      } : {}}
      transition={animated ? {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      } : {}}
    />
  );
}

interface BackgroundBlobsProps {
  variant?: "default" | "dual" | "triple";
}

export function BackgroundBlobs({ variant = "default" }: BackgroundBlobsProps) {
  if (variant === "dual") {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <BackgroundBlob position="top-left" size="lg" intensity="medium" />
        <BackgroundBlob position="bottom-right" size="lg" intensity="light" />
      </div>
    );
  }

  if (variant === "triple") {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <BackgroundBlob position="top-left" size="md" intensity="strong" />
        <BackgroundBlob position="top-right" size="md" intensity="medium" />
        <BackgroundBlob position="bottom-left" size="md" intensity="light" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <BackgroundBlob position="center" size="lg" intensity="medium" />
    </div>
  );
}
