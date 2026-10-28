import { useEffect, useRef, useState } from 'react';

interface CountUpTextProps {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  minimumIntegerDigits?: number;
  formatter?: (value: number) => string;
}

/** Animate a metric once when visible; dates and identifiers stay static. */
export default function CountUpText({ end, prefix = '', suffix = '', decimals = 0, minimumIntegerDigits = 1, formatter }: CountUpTextProps) {
  const [value, setValue] = useState(end);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!node || reducedMotion.matches || !('IntersectionObserver' in window)) return;

    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      setValue(0);
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 1200, 1);
        setValue(end * (1 - Math.pow(1 - progress, 3)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.35 });
    observer.observe(node);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [end]);

  const format = (number: number) => `${prefix}${formatter ? formatter(number) : new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    minimumIntegerDigits,
  }).format(number)}${suffix}`;

  return <span ref={ref} className="count-up"><span className="sr-only">{format(end)}</span><span aria-hidden="true">{format(value)}</span></span>;
}
