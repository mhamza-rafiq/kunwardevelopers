import { useRef, useLayoutEffect, forwardRef, useImperativeHandle } from "react";
import { gsap } from "@/hooks/useGsapAnimations";

interface AnimatedLogoRevealProps {
  size?: number;
  duration?: number;
  delay?: number;
  showText?: boolean;
  onComplete?: () => void;
  className?: string;
}

export interface AnimatedLogoRevealRef {
  play: () => void;
  reverse: () => void;
  reset: () => void;
}

const AnimatedLogoReveal = forwardRef<AnimatedLogoRevealRef, AnimatedLogoRevealProps>(
  ({ size = 120, duration = 1.5, delay = 0.2, showText = true, onComplete, className = "" }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const leftPillarRef = useRef<SVGPathElement>(null);
    const rightPillarRef = useRef<SVGPathElement>(null);
    const arcRef = useRef<SVGPathElement>(null);
    const girihRef = useRef<SVGGElement>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    useImperativeHandle(ref, () => ({
      play: () => timelineRef.current?.play(0),
      reverse: () => timelineRef.current?.reverse(),
      reset: () => timelineRef.current?.progress(0).pause(),
    }));

    useLayoutEffect(() => {
      if (!containerRef.current) return;

      const ctx = gsap.context(() => {
        // Get the arc path for drawSVG-like effect
        const arcPath = arcRef.current;
        if (arcPath) {
          const arcLength = arcPath.getTotalLength();
          gsap.set(arcPath, {
            strokeDasharray: arcLength,
            strokeDashoffset: arcLength,
          });
        }

        // Initial states - pillars start separated and converge
        gsap.set(leftPillarRef.current, {
          opacity: 0,
          x: -20,
          transformOrigin: "center center",
        });

        gsap.set(rightPillarRef.current, {
          opacity: 0,
          x: 20,
          transformOrigin: "center center",
        });

        gsap.set(girihRef.current, {
          opacity: 0,
          scale: 0.8,
          transformOrigin: "center center",
        });

        if (textContainerRef.current) {
          gsap.set(textContainerRef.current.children, {
            opacity: 0,
            y: 15,
          });
        }

        // Main animation timeline
        const scaleFactor = duration / 1.5; // Scale timing proportionally
        const tl = gsap.timeline({
          delay,
          onComplete,
        });

        // Phase 1: Left pillar emerges from left (heritage foundation)
        tl.to(leftPillarRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.4 * scaleFactor,
          ease: "power2.out",
        });

        // Phase 2: Right pillar converges from right (innovation arm)
        tl.to(
          rightPillarRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.4 * scaleFactor,
            ease: "power2.out",
          },
          `-=${0.25 * scaleFactor}`
        );

        // Phase 3: Arc draws connecting heritage to innovation
        tl.to(
          arcRef.current,
          {
            strokeDashoffset: 0,
            opacity: 0.7,
            duration: 0.4 * scaleFactor,
            ease: "power2.inOut",
          },
          `-=${0.15 * scaleFactor}`
        );

        // Phase 4: Girih pattern materializes (legacy pattern)
        tl.to(
          girihRef.current,
          {
            opacity: 0.12,
            scale: 1,
            duration: 0.35 * scaleFactor,
            ease: "power2.out",
          },
          `-=${0.2 * scaleFactor}`
        );

        // Phase 5: Text fades up (bilingual identity)
        if (textContainerRef.current) {
          tl.to(
            textContainerRef.current.children,
            {
              opacity: 1,
              y: 0,
              duration: 0.3 * scaleFactor,
              stagger: 0.08,
              ease: "power2.out",
            },
            `-=${0.15 * scaleFactor}`
          );
        }

        timelineRef.current = tl;
      }, containerRef);

      return () => ctx.revert();
    }, [duration, delay, onComplete]);

    const strokeWidth = 2.5;

    return (
      <div ref={containerRef} className={`flex flex-col items-center ${className}`}>
        {/* Animated K Monogram */}
        <svg
          ref={svgRef}
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-brand-gold"
        >
          {/* 8-Point Girih Pattern Background */}
          <g ref={girihRef} opacity={0}>
            {/* Central 8-point star */}
            <path
              d="M50 20L56 35L71 35L59 45L63 60L50 52L37 60L41 45L29 35L44 35Z"
              fill="none"
              stroke="currentColor"
              strokeWidth={0.5}
            />
            {/* Inner geometric lines */}
            <path
              d="M50 30L55 42L50 54L45 42Z"
              fill="none"
              stroke="currentColor"
              strokeWidth={0.3}
            />
            {/* Outer radiating lines */}
            <line x1="50" y1="10" x2="50" y2="20" stroke="currentColor" strokeWidth={0.3} />
            <line x1="50" y1="60" x2="50" y2="70" stroke="currentColor" strokeWidth={0.3} />
            <line x1="25" y1="40" x2="29" y2="40" stroke="currentColor" strokeWidth={0.3} />
            <line x1="71" y1="40" x2="75" y2="40" stroke="currentColor" strokeWidth={0.3} />
            {/* Additional geometric depth */}
            <path
              d="M35 25L50 35L65 25 M35 55L50 45L65 55"
              fill="none"
              stroke="currentColor"
              strokeWidth={0.25}
            />
          </g>

          {/* Left Pillar - Heritage Foundation */}
          <path
            ref={leftPillarRef}
            d="M30 15 L30 85"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            opacity={0}
          />

          {/* Right Diagonal Strokes - Innovation Arms */}
          <path
            ref={rightPillarRef}
            d="M30 50 L65 18 M30 50 L65 82"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0}
          />

          {/* Connecting Arc - Heritage meets Innovation */}
          <path
            ref={arcRef}
            d="M32 50 Q50 50 58 35"
            stroke="currentColor"
            strokeWidth={strokeWidth * 0.6}
            strokeLinecap="round"
            fill="none"
            opacity={0}
          />
        </svg>

        {/* Bilingual Text Lockup */}
        {showText && (
          <div ref={textContainerRef} className="flex flex-col items-center mt-4 space-y-1">
            {/* Arabic Calligraphy */}
            <span 
              className="font-arabic text-brand-gold text-lg tracking-wide"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
            >
              كنور
            </span>
            {/* English Serif */}
            <span className="font-serif text-brand-gold text-xl tracking-[0.25em] font-medium">
              KUNWAR
            </span>
            {/* Sans Descriptor */}
            <span className="font-sans text-brand-cream/80 text-xs tracking-[0.3em]">
              DEVELOPERS
            </span>
          </div>
        )}
      </div>
    );
  }
);

AnimatedLogoReveal.displayName = "AnimatedLogoReveal";

export default AnimatedLogoReveal;
