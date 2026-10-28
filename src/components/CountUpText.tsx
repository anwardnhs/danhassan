import { useEffect, useMemo, useRef, useState } from 'react';

/** One counter implementation for group metrics, with reduced-motion support. */
export default function CountUpText({ end, prefix = '', suffix = '', decimals = 0, formatter }: {
  end: number; prefix?: string; suffix?: string; decimals?: number; formatter?: (value: number) => string;
}) {
  const [value, setValue] = useState(end);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 1000, 1);
        setValue(end * (1 - Math.pow(1 - progress, 3)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: .3 });
    observer.observe(ref.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [end]);
  const display = useMemo(() => `${prefix}${formatter ? formatter(value) : value.toFixed(decimals)}${suffix}`, [value, formatter, decimals, prefix, suffix]);
  const accessibleValue = `${prefix}${formatter ? formatter(end) : end.toFixed(decimals)}${suffix}`;
  return <div ref={ref} aria-label={accessibleValue}><span aria-hidden="true">{display}</span></div>;
}
