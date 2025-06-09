import {
  Sun,
  Moon,
  FileText,
  Mail,
  ExternalLink,
  PanelLeftClose,
  PanelRightClose,
} from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const { isDark, toggleTheme } = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.aside
      className="hidden xl:flex flex-col h-screen bg-card border-r border-border top-0 relative overflow-hidden"
      initial={{ width: isCollapsed ? 80 : 288 }}
      animate={isMounted ? { width: isCollapsed ? 80 : 288 } : false}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Toggle Button */}
      <Button
        variant="secondary"
        size="icon"
        className={`absolute top-4 z-10 transition-all duration-300 ${
          isCollapsed ? "left-1/2 -translate-x-1/2" : "right-4"
        }`}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? (
          <PanelRightClose className="w-4 h-4" />
        ) : (
          <PanelLeftClose className="w-4 h-4" />
        )}
      </Button>

      {/* Expanded Content */}
      <AnimatePresence mode="wait">
        {!isCollapsed && (
          <motion.div
            key="expanded"
            className="px-8 py-10 flex flex-col h-full"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{
              duration: 0.2,
              delay: isCollapsed ? 0 : 0.15, // Delay when expanding
              ease: "easeOut",
            }}
          >
            {/* Profile Section */}
            {/* Profile Section */}
            <div className="mb-8 mt-8">
              <Link to="/" className="block group">
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="relative">
                    <img
                      src="/jag.jpg"
                      alt="Jacob Slunga"
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    {/* Replace the status dot with your flower logo */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-background rounded-full border-2 border-background flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        className="w-4 h-4"
                      >
                        <defs>
                          <radialGradient
                            id="petalGradient"
                            cx="50%"
                            cy="30%"
                            r="70%"
                          >
                            <stop offset="0%" stopColor="#b8845f" />
                            <stop offset="100%" stopColor="#8b5a3c" />
                          </radialGradient>
                          <radialGradient
                            id="centerGradient"
                            cx="50%"
                            cy="50%"
                            r="50%"
                          >
                            <stop offset="0%" stopColor="#d4a574" />
                            <stop offset="100%" stopColor="#a0724a" />
                          </radialGradient>
                        </defs>
                        <g>
                          <ellipse
                            cx="8"
                            cy="4.5"
                            rx="1.2"
                            ry="2.5"
                            fill="url(#petalGradient)"
                            transform="rotate(0 8 8)"
                          />
                          <ellipse
                            cx="8"
                            cy="4.5"
                            rx="1.2"
                            ry="2.5"
                            fill="url(#petalGradient)"
                            transform="rotate(60 8 8)"
                          />
                          <ellipse
                            cx="8"
                            cy="4.5"
                            rx="1.2"
                            ry="2.5"
                            fill="url(#petalGradient)"
                            transform="rotate(120 8 8)"
                          />
                          <ellipse
                            cx="8"
                            cy="4.5"
                            rx="1.2"
                            ry="2.5"
                            fill="url(#petalGradient)"
                            transform="rotate(180 8 8)"
                          />
                          <ellipse
                            cx="8"
                            cy="4.5"
                            rx="1.2"
                            ry="2.5"
                            fill="url(#petalGradient)"
                            transform="rotate(240 8 8)"
                          />
                          <ellipse
                            cx="8"
                            cy="4.5"
                            rx="1.2"
                            ry="2.5"
                            fill="url(#petalGradient)"
                            transform="rotate(300 8 8)"
                          />
                        </g>
                        <circle
                          cx="8"
                          cy="8"
                          r="1.5"
                          fill="url(#centerGradient)"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h1 className="text-xl font-serif font-semibold text-foreground leading-tight">
                      Jacob Slunga
                    </h1>
                    <p className="text-sm text-muted-foreground mt-1">
                      CS Student & Developer
                    </p>
                    <p className="text-xs text-primary mt-1">
                      Linköping, Sweden
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <nav className="flex-1 flex flex-col justify-between">
              <div className="space-y-6">
                {/* Connect Section */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <h2 className="text-sm font-serif font-medium text-foreground">
                      Connect
                    </h2>
                    <div className="flex-1 h-px bg-border" />
                  </div>

                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      className="w-full justify-start px-4 py-3 h-auto text-sm hover:bg-muted/70 group"
                      onClick={() =>
                        window.open("https://github.com/jacobslunga", "_blank")
                      }
                      aria-label="GitHub"
                    >
                      <GitHubLogoIcon className="h-4 w-4 mr-3 text-muted-foreground group-hover:text-foreground transition-colors" />
                      <span>GitHub</span>
                      <ExternalLink className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>

                    <Button
                      variant="ghost"
                      className="w-full justify-start px-4 py-3 h-auto text-sm hover:bg-muted/70 group"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/jacob-slunga-9121131a2/",
                          "_blank"
                        )
                      }
                      aria-label="LinkedIn"
                    >
                      <LinkedInLogoIcon className="h-4 w-4 mr-3 text-muted-foreground group-hover:text-foreground transition-colors" />
                      <span>LinkedIn</span>
                      <ExternalLink className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>

                    <Button
                      variant="ghost"
                      className="w-full justify-start px-4 py-3 h-auto text-sm hover:bg-muted/70 group"
                      onClick={() =>
                        window.open("mailto:jacobslunga21@yahoo.se")
                      }
                      aria-label="Email"
                    >
                      <Mail className="h-4 w-4 mr-3 text-muted-foreground group-hover:text-foreground transition-colors" />
                      <span>Email</span>
                      <ExternalLink className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {/* Actions Section */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FileText className="w-4 h-4 text-primary" />
                    </div>
                    <h2 className="text-sm font-serif font-medium text-foreground">
                      Resources
                    </h2>
                    <div className="flex-1 h-px bg-border" />
                  </div>

                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full justify-start text-sm border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href = "/cv.pdf";
                        link.download = "Jacob_Slunga_Resume.pdf";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      <FileText className="h-4 w-4 mr-3" />
                      <span>Download Resume</span>
                    </Button>

                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm hover:bg-muted/70"
                      onClick={toggleTheme}
                      aria-label="Toggle theme"
                    >
                      {isDark ? (
                        <>
                          <Sun className="h-4 w-4 mr-3" />
                          <span>Light Mode</span>
                        </>
                      ) : (
                        <>
                          <Moon className="h-4 w-4 mr-3" />
                          <span>Dark Mode</span>
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">
                    © 2025 Jacob Slunga
                  </p>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Collapsed Content */}
      <AnimatePresence mode="wait">
        {isCollapsed && (
          <motion.div
            key="collapsed"
            className="px-4 py-10 flex flex-col h-full items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.2,
              delay: isCollapsed ? 0.15 : 0, // Delay when collapsing
              ease: "easeOut",
            }}
          >
            {/* Collapsed Profile */}
            <div className="mb-8 mt-8">
              <Link to="/" className="block">
                <div className="relative group">
                  <img
                    src="/jag.jpg"
                    alt="Jacob Slunga"
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 hover:ring-primary/40 transition-all"
                  />
                  {/* Add flower logo for collapsed state */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-background rounded-full border-2 border-background flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      className="w-3 h-3"
                    >
                      <defs>
                        <radialGradient
                          id="petalGradientCollapsed"
                          cx="50%"
                          cy="30%"
                          r="70%"
                        >
                          <stop offset="0%" stopColor="#a0724a" />
                          <stop offset="100%" stopColor="#8b5a3c" />
                        </radialGradient>
                        <radialGradient
                          id="centerGradientCollapsed"
                          cx="50%"
                          cy="50%"
                          r="50%"
                        >
                          <stop offset="0%" stopColor="#b8845f" />
                          <stop offset="100%" stopColor="#a0724a" />
                        </radialGradient>
                      </defs>
                      <g>
                        <ellipse
                          cx="8"
                          cy="4.5"
                          rx="1.2"
                          ry="2.5"
                          fill="url(#petalGradientCollapsed)"
                          transform="rotate(0 8 8)"
                        />
                        <ellipse
                          cx="8"
                          cy="4.5"
                          rx="1.2"
                          ry="2.5"
                          fill="url(#petalGradientCollapsed)"
                          transform="rotate(60 8 8)"
                        />
                        <ellipse
                          cx="8"
                          cy="4.5"
                          rx="1.2"
                          ry="2.5"
                          fill="url(#petalGradientCollapsed)"
                          transform="rotate(120 8 8)"
                        />
                        <ellipse
                          cx="8"
                          cy="4.5"
                          rx="1.2"
                          ry="2.5"
                          fill="url(#petalGradientCollapsed)"
                          transform="rotate(180 8 8)"
                        />
                        <ellipse
                          cx="8"
                          cy="4.5"
                          rx="1.2"
                          ry="2.5"
                          fill="url(#petalGradientCollapsed)"
                          transform="rotate(240 8 8)"
                        />
                        <ellipse
                          cx="8"
                          cy="4.5"
                          rx="1.2"
                          ry="2.5"
                          fill="url(#petalGradientCollapsed)"
                          transform="rotate(300 8 8)"
                        />
                      </g>
                      <circle
                        cx="8"
                        cy="8"
                        r="1.5"
                        fill="url(#centerGradientCollapsed)"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>

            {/* Collapsed Navigation Icons */}
            <div className="flex flex-col gap-4 mb-auto">
              <Button
                variant="ghost"
                size="sm"
                className="w-12 h-12 p-0 hover:bg-muted/70"
                onClick={() =>
                  window.open("https://github.com/jacobslunga", "_blank")
                }
                aria-label="GitHub"
              >
                <GitHubLogoIcon className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="w-12 h-12 p-0 hover:bg-muted/70"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/jacob-slunga-9121131a2/",
                    "_blank"
                  )
                }
                aria-label="LinkedIn"
              >
                <LinkedInLogoIcon className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="w-12 h-12 p-0 hover:bg-muted/70"
                onClick={() => window.open("mailto:jacobslunga21@yahoo.se")}
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>

            {/* Collapsed Actions */}
            <div className="flex flex-col gap-3">
              <Button
                variant="outline"
                size="sm"
                className="w-12 h-12 p-0 border-primary/30 hover:bg-primary hover:text-primary-foreground"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/cv.pdf";
                  link.download = "Jacob_Slunga_Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                aria-label="Download Resume"
              >
                <FileText className="h-4 w-4" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="w-12 h-12 p-0 hover:bg-muted/70"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.aside>
  );
}
