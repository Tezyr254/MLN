import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface UseAnimatedCounterOptions {
  duration?: number;
  start?: number;
}

export function useAnimatedCounter(
  target: number,
  options: UseAnimatedCounterOptions = {},
): { ref: React.RefObject<HTMLDivElement>; count: number } {
  const { duration = 2000, start = 0 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(start);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const diff = target - start;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(start + diff * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, target, start, duration]);

  return { ref, count };
}
