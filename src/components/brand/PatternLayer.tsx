import { useRef } from "react";

interface PatternLayerProps {
  era?: "colony" | "corridor" | "node" | "girih";
  opacity?: number;
  className?: string;
}

const PatternLayer = ({ era = "girih", opacity = 0.04, className = "" }: PatternLayerProps) => {
  const patternRef = useRef<HTMLDivElement>(null);

  // Era 1: Colony Grid Pattern (1972-1980) - Residential grids
  const colonyPattern = `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23A67C52' stroke-width='0.5'%3E%3Crect x='5' y='5' width='12' height='12'/%3E%3Crect x='23' y='5' width='12' height='12'/%3E%3Crect x='5' y='23' width='12' height='12'/%3E%3Crect x='23' y='23' width='12' height='12'/%3E%3C/g%3E%3C/svg%3E")`;

  // Era 2: Corridor/Bridge Pattern (2010-2018) - Infrastructure
  const corridorPattern = `url("data:image/svg+xml,%3Csvg width='60' height='30' viewBox='0 0 60 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%231B7741' stroke-width='0.5'%3E%3Cline x1='0' y1='15' x2='60' y2='15'/%3E%3Cline x1='10' y1='5' x2='10' y2='25'/%3E%3Cline x1='30' y1='5' x2='30' y2='25'/%3E%3Cline x1='50' y1='5' x2='50' y2='25'/%3E%3Cpath d='M0 10 Q15 5 30 10 T60 10' stroke-width='0.3'/%3E%3C/g%3E%3C/svg%3E")`;

  // Era 3: Node Network Pattern (2024-Present) - Mining veins, smart city nodes
  const nodePattern = `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Ccircle cx='40' cy='40' r='3' fill='%23D4AF37' fill-opacity='0.5'/%3E%3Ccircle cx='10' cy='10' r='2' fill='%23A67C52' fill-opacity='0.4'/%3E%3Ccircle cx='70' cy='10' r='2' fill='%231B7741' fill-opacity='0.4'/%3E%3Ccircle cx='10' cy='70' r='2' fill='%231B7741' fill-opacity='0.4'/%3E%3Ccircle cx='70' cy='70' r='2' fill='%23A67C52' fill-opacity='0.4'/%3E%3Cline x1='10' y1='10' x2='40' y2='40' stroke='%23D4AF37' stroke-width='0.3'/%3E%3Cline x1='70' y1='10' x2='40' y2='40' stroke='%23D4AF37' stroke-width='0.3'/%3E%3Cline x1='10' y1='70' x2='40' y2='40' stroke='%23D4AF37' stroke-width='0.3'/%3E%3Cline x1='70' y1='70' x2='40' y2='40' stroke='%23D4AF37' stroke-width='0.3'/%3E%3C/g%3E%3C/svg%3E")`;

  // Master Girih Pattern - 8-point star (used throughout)
  const girihPattern = `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M40 0L80 40L40 80L0 40z M40 15L65 40L40 65L15 40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

  const patterns = {
    colony: colonyPattern,
    corridor: corridorPattern,
    node: nodePattern,
    girih: girihPattern,
  };

  return (
    <div
      ref={patternRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: patterns[era],
        opacity: opacity,
      }}
      data-lenis-prevent
    />
  );
};

export default PatternLayer;
