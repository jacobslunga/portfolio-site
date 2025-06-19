import { type ReactNode } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export default function GradientText({
  children,
  className = "",
  colors,
  animationSpeed = 8,
  showBorder = false,
}: {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}) {
  const { theme } = useTheme();

  // Use header indicator colors if no custom colors provided
  const defaultColors =
    theme === "dark"
      ? ["#603A51", "#563D5F", "#5D3C57", "#694D82"] // darker purple-pink for dark mode
      : ["#E9D1DE", "#E2D5EA", "#E2D4F1", "#E8D1E0"]; // same colors but they'll appear lighter on light background

  const finalColors = colors || defaultColors;

  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, ${finalColors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
    backgroundSize: "300% 300%",
  };

  return (
    <div
      className={`relative mx-auto flex max-w-fit items-center justify-center rounded-[1.25rem] font-bold backdrop-blur transition-all duration-500 py-2 ${className}`}
    >
      {showBorder && (
        <div
          className="absolute inset-0 z-0 pointer-events-none animate-gradient-random"
          style={gradientStyle}
        >
          <div
            className="absolute inset-0 rounded-[1.25rem] z-[-1] transition-colors duration-300"
            style={{
              width: "calc(100% - 2px)",
              height: "calc(100% - 2px)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      )}
      <div
        className="inline-block relative z-2 text-transparent animate-gradient-random drop-shadow-sm leading-tight"
        style={{
          ...gradientStyle,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          lineHeight: "1.1",
        }}
      >
        {children}
      </div>
    </div>
  );
}
