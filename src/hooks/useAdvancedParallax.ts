import { useScroll, useTransform, MotionValue } from "framer-motion";
import { RefObject } from "react";

export function useAdvancedParallax(ref: RefObject<HTMLElement>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Movimiento vertical
  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const yFast = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const ySlow = useTransform(scrollYProgress, [0, 1], [80, -80]);

  // Movimiento horizontal
  const xLeft = useTransform(scrollYProgress, [0, 1], [-200, 100]);
  const xRight = useTransform(scrollYProgress, [0, 1], [200, -100]);

  // Opacidad y escala
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const scaleDown = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 0.8]);

  // Rotación
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateReverse = useTransform(scrollYProgress, [0, 1], [0, -360]);

  return {
    scrollYProgress,
    y,
    yFast,
    ySlow,
    xLeft,
    xRight,
    opacity,
    opacityFade,
    scale,
    scaleDown,
    rotate,
    rotateReverse,
  };
}
