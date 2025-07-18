import { Outlet, useLocation, NavLink } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import { HiSun, HiMoon, HiBars3, HiXMark } from "react-icons/hi2";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { GalleryHorizontalEnd } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Work", path: "/work" },
  { name: "Projects", path: "/projects" },
];

export default function MainLayout() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Scroll to top when route changes and close mobile menu
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
      {/* Desktop Header */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div className="flex items-center gap-2 px-3 py-2 bg-secondary/85 backdrop-blur-sm rounded-2xl">
          {/* Navigation Links */}
          {navItems.map(({ name, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-background text-secondary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                }`
              }
            >
              {name}
            </NavLink>
          ))}

          {/* Divider */}
          <div className="w-px h-6 bg-foreground/15 mx-1.5" />

          {/* CV Link */}
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl hover:bg-muted/40 transition-colors duration-200 text-muted-foreground hover:text-foreground"
                  aria-label="Download CV"
                >
                  <GalleryHorizontalEnd className="w-5 h-5" />
                </a>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Download CV</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Theme Toggle */}
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-xl hover:bg-muted/40 transition-colors duration-200 text-muted-foreground hover:text-foreground"
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? (
                    <HiMoon className="w-5 h-5" />
                  ) : (
                    <HiSun className="w-5 h-5" />
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Toggle Theme</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </header>

      {/* Mobile Header */}
      <header
        className="fixed top-6 left-6 right-6 z-50 md:hidden"
        ref={mobileMenuRef}
      >
        <div className="flex items-center justify-between w-full px-4 py-2 bg-secondary rounded-2xl">
          {/* Logo/Current Page */}
          <span className="text-sm font-medium text-foreground">
            {navItems.find((item) => item.path === location.pathname)?.name ||
              "Portfolio"}
          </span>

          <div className="flex items-center gap-1">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-muted-foreground hover:text-foreground rounded-2xl hover:bg-muted/50 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <HiMoon className="w-4 h-4" />
              ) : (
                <HiSun className="w-4 h-4" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-muted-foreground hover:text-foreground rounded-2xl hover:bg-muted/50 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <HiXMark className="w-4 h-4" />
              ) : (
                <HiBars3 className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Blur Reveal Animation */}
        <div
          className={`mt-2 overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-[400px] opacity-100 blur-0 translate-y-0"
              : "max-h-0 opacity-0 blur-sm translate-y-[-10px]"
          }`}
        >
          <div className="p-2 gap-2 bg-secondary backdrop-blur-sm rounded-2xl">
            {navItems.map(({ name, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `block px-4 py-2 text-sm font-medium rounded-2xl transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {name}
              </NavLink>
            ))}
          </div>
        </div>
      </header>

      <main className="flex-1 pt-48 pb-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border/20 bg-background/50 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/jacobslunga"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/jacob-slunga-9121131a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Jacob Slunga
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
