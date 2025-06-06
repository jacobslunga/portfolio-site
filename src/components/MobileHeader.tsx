import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

interface MobileHeaderProps {
  scrolled: boolean;
}

export default function MobileHeader({ scrolled }: MobileHeaderProps) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="lg:hidden sticky top-0 left-0 right-0 z-50 bg-background border-b-2 border-primary">
      <div className="flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center font-mono">
          <span className="text-primary">$</span>
          <span className="ml-2 text-sm font-semibold">
            {scrolled ? "js" : "jacob.slunga"}
          </span>
          <div className="w-2 h-4 bg-primary ml-1 animate-pulse" />
        </Link>

        <div className="flex items-center gap-1 font-mono text-xs">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="h-7 px-2 rounded-none hover:bg-primary/10"
          >
            {isDark ? "light" : "dark"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/cv.pdf";
              link.download = "Jacob_Slunga_Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="h-7 px-2 rounded-none border-primary hover:bg-primary hover:text-primary-foreground"
          >
            cv
          </Button>
        </div>
      </div>
    </header>
  );
}
