import { useRef, useLayoutEffect } from "react";
import { gsap } from "@/hooks/useGsapAnimations";

interface PillarKProps {
  size?: number;
  variant?: "primary" | "monogram" | "favicon";
  animated?: boolean;
  className?: string;
}

const PillarK = ({ size = 64, variant = "primary", animated = false, className = "" }: PillarKProps) => {
  const leftPillarRef = useRef<SVGPathElement>(null);
  const rightPillarRef = useRef<SVGPathElement>(null);
  const arcRef = useRef<SVGPathElement>(null);
  const girihRef = useRef<SVGGElement>(null);
  const containerRef = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    if (!animated || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Initial state
      gsap.set([leftPillarRef.current, rightPillarRef.current], {
        opacity: 0,
        x: (i) => (i === 0 ? -10 : 10),
      });
      gsap.set(arcRef.current, {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "center center",
      });
      gsap.set(girihRef.current, {
        opacity: 0,
      });

      // Animation timeline (1.5s total)
      const tl = gsap.timeline({ delay: 0.2 });

      // Left pillar fades in from left
      tl.to(leftPillarRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.4,
        ease: "power2.out",
      });

      // Right pillar fades in from right
      tl.to(
        rightPillarRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // Connecting arc draws between them
      tl.to(
        arcRef.current,
        {
          opacity: 1,
          scaleX: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.2"
      );

      // Girih pattern fades in
      tl.to(
        girihRef.current,
        {
          opacity: 0.15,
          duration: 0.3,
          ease: "power2.out",
        },
        "-=0.1"
      );
    }, containerRef);

    return () => ctx.revert();
  }, [animated]);

  // Scale viewBox based on variant
  const viewBoxSize = 100;
  const strokeWidth = variant === "favicon" ? 4 : 2.5;

  return (
    <svg
      ref={containerRef}
      width={size}
      height={size}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 8-Point Girih Pattern Background */}
      <g ref={girihRef} opacity={animated ? 0 : 0.15}>
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
      </g>

      {/* Left Pillar of K */}
      <path
        ref={leftPillarRef}
        d="M30 15 L30 85"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        opacity={animated ? 0 : 1}
      />

      {/* Right diagonal strokes forming K */}
      <path
        ref={rightPillarRef}
        d="M30 50 L65 18 M30 50 L65 82"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={animated ? 0 : 1}
      />

      {/* Connecting arc (heritage meets innovation) */}
      <path
        ref={arcRef}
        d="M32 50 Q50 50 58 35"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.6}
        strokeLinecap="round"
        fill="none"
        opacity={animated ? 0 : 0.6}
      />
    </svg>
  );
};

export default PillarK;
