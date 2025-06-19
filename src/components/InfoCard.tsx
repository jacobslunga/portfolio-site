import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  label: string;
  title: string;
  bgColor: string;
  darkBgColor?: string;
  textColor?: string;
  icon: React.ReactNode;
  href: string;
}

export default function InfoCard({
  label,
  title,
  bgColor,
  darkBgColor,
  textColor = "black",
  icon,
  href,
}: InfoCardProps) {
  const { theme } = useTheme();
  const backgroundColor =
    theme === "dark" && darkBgColor ? darkBgColor : bgColor;

  const isWhiteText = textColor === "white";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "relative flex flex-col justify-between rounded-3xl px-8 py-6 w-full h-72",
        "transition-all duration-300 ease-out group overflow-hidden",
        "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "before:absolute before:inset-0 before:rounded-3xl before:bg-white/10 before:opacity-0",
        "before:transition-opacity before:duration-300 hover:before:opacity-100",
        "hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-xl"
      )}
      style={{ backgroundColor }}
    >
      {/* Animated border glow */}
      <div
        className={cn(
          "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100",
          "transition-opacity duration-300 ease-out",
          "bg-gradient-to-r from-white/20 via-white/10 to-white/20",
          "animate-pulse-glow"
        )}
      />

      <div
        className={cn(
          "relative z-10 text-sm tracking-wide font-medium mb-2",
          "transition-all duration-300",
          isWhiteText
            ? "text-white/80 group-hover:text-white"
            : "text-black/80 dark:text-black/90 group-hover:text-black/100 dark:group-hover:text-black/100"
        )}
      >
        {label}
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-between">
        <div
          className={cn(
            "text-3xl font-bold mb-4",
            "transition-all duration-300",
            isWhiteText
              ? "text-white group-hover:text-white/90"
              : "text-black dark:text-black group-hover:text-black/90 dark:group-hover:text-black/90"
          )}
        >
          {title}
        </div>

        <div
          className={cn(
            "text-6xl transition-all duration-300 ease-out",
            "group-hover:rotate-6 group-hover:scale-105",
            "transform-gpu will-change-transform",
            isWhiteText ? "text-white" : "text-black dark:text-black"
          )}
        >
          {icon}
        </div>
      </div>
    </a>
  );
}
