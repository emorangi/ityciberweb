/**
 * Hook para efecto de escritura de texto
 * Simula una máquina de escribir con delay configurable
 */

import { useEffect, useState } from "react";
import { ANIMATION_DURATIONS, ANIMATION_DELAYS } from "@/lib/constants";

interface UseTypingEffectProps {
  text: string;
  startDelay?: number;
  typingSpeed?: number;
}

export function useTypingEffect({ 
  text, 
  startDelay = ANIMATION_DELAYS.base * 1000,
  typingSpeed = ANIMATION_DURATIONS.typing 
}: UseTypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsTyping(true);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!isTyping) return;

    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, [isTyping, text, typingSpeed]);

  return { displayText, isTyping };
}
