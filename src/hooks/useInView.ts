import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref and a boolean that becomes true once the element enters the viewport.
 * Uses "animate once" semantics — the value never resets to false.
 */
export function useInView<T extends Element = Element>(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // stop observing once visible
        }
      },
      { threshold },
    );
    const current = ref.current;
    if (current) observer.observe(current);
    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return [ref, isVisible] as const;
}
