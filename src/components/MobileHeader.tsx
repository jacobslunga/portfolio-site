import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function MobileHeader() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.header
      className="lg:hidden sticky top-0 left-0 right-0 z-50 backdrop-blur-xl h-16"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient Background with Blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/95 to-background/80 backdrop-blur-xl" />

      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Bottom Gradient Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="relative flex items-center justify-between px-6 h-full">
        {/* Logo Section */}
        <Link to="/" className="group">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <img
                src="/jag.jpg"
                alt="Jacob Slunga"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-primary/20"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-background" />
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-serif font-semibold text-foreground leading-tight">
                Jacob Slunga
              </span>
              <span className="text-xs text-muted-foreground">Developer</span>
            </div>
          </motion.div>
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="h-9 w-9 p-0 rounded-full hover:bg-muted/70 group"
            aria-label="Toggle theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isDark ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              ) : (
                <Moon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              )}
            </motion.div>
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
            className="h-9 px-3 rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group"
          >
            <FileText className="h-3.5 w-3.5 mr-1.5" />
            <span className="text-xs font-medium">Resume</span>
          </Button>
        </div>
      </div>

      {/* Subtle Shadow */}
      <div className="absolute -bottom-4 left-0 right-0 h-4 bg-gradient-to-b from-background/20 to-transparent pointer-events-none" />
    </motion.header>
  );
}
