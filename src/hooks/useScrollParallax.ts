"use client";

import { useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { RefObject } from "react";

interface ScrollParallaxOptions {
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  spring?: boolean;
}

export function useScrollParallax(
  ref: RefObject<HTMLElement>,
  options: ScrollParallaxOptions = {}
) {
  const { speed = 0.5, direction = "up", spring = true } = options;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  let transform: MotionValue<number>;

  switch (direction) {
    case "up":
      transform = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
      break;
    case "down":
      transform = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);
      break;
    case "left":
      transform = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
      break;
    case "right":
      transform = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);
      break;
  }

  const smoothTransform = spring ? useSpring(transform, { stiffness: 100, damping: 30 }) : transform;

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.95]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, direction === "left" || direction === "right" ? 5 : 0]);

  return {
    y: direction === "up" || direction === "down" ? smoothTransform : 0,
    x: direction === "left" || direction === "right" ? smoothTransform : 0,
    opacity,
    scale,
    rotate,
    scrollYProgress,
  };
}
