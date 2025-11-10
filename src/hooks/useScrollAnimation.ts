// src/hooks/useScrollAnimation.ts
import { useScroll, useTransform, type UseScrollOptions } from "framer-motion"
import { RefObject } from "react"

type OffsetType = NonNullable<UseScrollOptions["offset"]>

interface ScrollAnimationOptions {
  ref: RefObject<HTMLElement>
  offset?: OffsetType
}

export function useScrollAnimation({ ref, offset }: ScrollAnimationOptions) {
  const { scrollYProgress } = useScroll({
    target: ref,
    // Usamos literales por defecto y evitamos el ensanchado a string:
    offset: offset ?? (["start end", "end start"] as const),
  })

  // Parallax effects
  const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100])
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [50, -50])
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], [200, -200])

  // Lateral movements
  const xLeft = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, 200])
  const xRight = useTransform(scrollYProgress, [0, 0.5, 1], [200, 0, -200])

  // Depth effects
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const scaleIn = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 1])
  const scaleOut = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.6])

  // Opacity effects
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const opacityFade = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  // Rotation effects
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const rotateReverse = useTransform(scrollYProgress, [0, 1], [360, 0])

  return {
    scrollYProgress,
    yParallax,
    yParallaxSlow,
    yParallaxFast,
    xLeft,
    xRight,
    scale,
    scaleIn,
    scaleOut,
    opacity,
    opacityFade,
    rotate,
    rotateReverse,
  }
}
