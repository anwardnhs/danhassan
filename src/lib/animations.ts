import { gsap } from './gsap';

// Reusable AE-style animation functions

// Text reveal with character stagger (simulating SplitText)
export const textReveal = (selector: string, delay = 0) => {
  gsap.from(selector, {
    duration: 1,
    stagger: 0.05,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay,
    scrollTrigger: {
      trigger: selector,
      start: 'top 80%',
    },
  });
};

// Staggered element reveal (for grids/lists)
export const staggerReveal = (container: string, items: string, duration = 0.8) => {
  gsap.from(items, {
    duration,
    stagger: 0.1,
    y: 30,
    opacity: 0,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: container,
      start: 'top 85%',
    },
  });
};


export const morphEffect = (element: string, trigger?: string) => {
  gsap.to(`#${element}`, {
    scale: 1.1,
    rotation: 5,
    duration: 0.5,
    yoyo: true,
    repeat: -1,
    ease: 'elastic.out(1, 0.3)',
    scrollTrigger: trigger ? {
      trigger,
      start: 'top center',
      scrub: true,
    } : undefined,
  });
};

// Parallax background (simple AE depth effect)
export const parallaxBg = (bgSelector: string, speed = 0.5) => {
  gsap.to(bgSelector, {
    yPercent: -speed * 100,
    ease: 'none',
    scrollTrigger: {
      trigger: bgSelector,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};

// Framer Motion variants for AE-style fades/scales
export const fadeInUpVariant = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export const scaleInVariant = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export const childVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// Lottie integration helper (to be used in LottieAnimation component)
export const playLottie = (lottieRef: React.RefObject<unknown>, loop = true) => {
  if (lottieRef.current && typeof lottieRef.current === 'object' && lottieRef.current !== null) {
    (lottieRef.current as any).setLoop(loop);
    (lottieRef.current as any).play();
  }
};
