import { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Use useLayoutEffect on client, useEffect on server
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Hook for scroll-triggered reveal animations
export const useGsapReveal = (options?: {
  y?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  trigger?: string;
  start?: string;
  ease?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        y: options?.y ?? 60,
        opacity: options?.opacity ?? 0,
        duration: options?.duration ?? 1,
        delay: options?.delay ?? 0,
        ease: options?.ease ?? "power3.out",
        scrollTrigger: {
          trigger: options?.trigger ?? ref.current,
          start: options?.start ?? "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
};

// Hook for staggered children reveals
export const useGsapStagger = (
  selector: string,
  options?: {
    y?: number;
    opacity?: number;
    duration?: number;
    stagger?: number;
    delay?: number;
    start?: string;
    ease?: string;
  }
) => {
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.from(selector, {
        y: options?.y ?? 50,
        opacity: options?.opacity ?? 0,
        duration: options?.duration ?? 0.8,
        stagger: options?.stagger ?? 0.15,
        delay: options?.delay ?? 0,
        ease: options?.ease ?? "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: options?.start ?? "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [selector]);

  return ref;
};

// Hook for split text headline animation
export const useSplitTextAnimation = (options?: {
  duration?: number;
  stagger?: number;
  delay?: number;
  y?: number;
  ease?: string;
  start?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;

    const chars = ref.current.querySelectorAll(".gsap-char, .gsap-word");
    if (!chars.length) return;

    const ctx = gsap.context(() => {
      gsap.from(chars, {
        y: options?.y ?? 100,
        opacity: 0,
        duration: options?.duration ?? 1,
        stagger: options?.stagger ?? 0.03,
        delay: options?.delay ?? 0,
        ease: options?.ease ?? "power4.out",
        scrollTrigger: options?.start ? {
          trigger: ref.current,
          start: options.start,
          toggleActions: "play none none none",
        } : undefined,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
};

// Hook for parallax effects
export const useParallax = (speed: number = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        yPercent: -30 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [speed]);

  return ref;
};

// Hook for counting up numbers
export const useCountUp = (
  endValue: number | string,
  options?: {
    duration?: number;
    delay?: number;
    start?: string;
  }
) => {
  const ref = useRef<HTMLSpanElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;

    const numericValue = typeof endValue === "string" 
      ? parseFloat(endValue.replace(/[^0-9.-]/g, "")) 
      : endValue;
    
    if (isNaN(numericValue)) {
      // If not a number, just fade in
      gsap.from(ref.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        scrollTrigger: {
          trigger: ref.current,
          start: options?.start ?? "top 85%",
          toggleActions: "play none none none",
        },
      });
      return;
    }

    const ctx = gsap.context(() => {
      const obj = { value: 0 };
      
      gsap.to(obj, {
        value: numericValue,
        duration: options?.duration ?? 2,
        delay: options?.delay ?? 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: options?.start ?? "top 85%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (ref.current) {
            const formatted = numericValue >= 1000 
              ? Math.round(obj.value).toLocaleString()
              : Math.round(obj.value);
            ref.current.textContent = `${formatted}`;
          }
        },
      });
    });

    return () => ctx.revert();
  }, [endValue]);

  return ref;
};

// Hook for horizontal line/bar animations
export const useLineReveal = (direction: "left" | "center" | "right" = "center") => {
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        scaleX: 0,
        transformOrigin: direction === "left" ? "left center" : direction === "right" ? "right center" : "center center",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [direction]);

  return ref;
};

// Export GSAP and ScrollTrigger for direct use
export { gsap, ScrollTrigger };
