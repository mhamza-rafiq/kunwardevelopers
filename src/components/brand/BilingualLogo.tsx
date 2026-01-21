interface BilingualLogoProps {
  size?: "sm" | "md" | "lg";
  showArabic?: boolean;
  className?: string;
}

const sizeConfig = {
  sm: {
    arabic: "text-lg",
    kunwar: "text-xl",
    developers: "text-[9px] tracking-[0.2em]",
    gap: "gap-0",
  },
  md: {
    arabic: "text-2xl",
    kunwar: "text-2xl",
    developers: "text-[10px] tracking-[0.25em]",
    gap: "gap-0.5",
  },
  lg: {
    arabic: "text-4xl",
    kunwar: "text-4xl",
    developers: "text-xs tracking-[0.3em]",
    gap: "gap-1",
  },
};

const BilingualLogo = ({ size = "md", showArabic = true, className = "" }: BilingualLogoProps) => {
  const config = sizeConfig[size];

  return (
    <div className={`flex flex-col items-center ${config.gap} ${className}`}>
      {/* Arabic Calligraphy - كنور (Kunwar) */}
      {showArabic && (
        <span
          className={`font-serif text-accent ${config.arabic} leading-none`}
          style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
          dir="rtl"
        >
          كنور
        </span>
      )}

      {/* KUNWAR - Serif, Gold, Institutional */}
      <span
        className={`font-serif text-accent ${config.kunwar} tracking-institutional leading-none`}
      >
        KUNWAR
      </span>

      {/* DEVELOPERS - Sans, Cream, Smaller */}
      <span
        className={`font-sans text-foreground/80 ${config.developers} uppercase leading-none -mt-0.5`}
      >
        Developers
      </span>
    </div>
  );
};

export default BilingualLogo;
