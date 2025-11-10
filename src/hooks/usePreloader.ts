/**
 * Hook para manejar el estado del preloader
 * Controla el tiempo de carga y el overflow del body
 */

import { useEffect, useState } from "react";
import { ANIMATION_DURATIONS } from "@/lib/constants";

export function usePreloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, ANIMATION_DURATIONS.preloader);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "unset";
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return isLoading;
}
