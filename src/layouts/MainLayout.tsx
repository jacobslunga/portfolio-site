import { Outlet, useLocation, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { HiSun, HiMoon } from "react-icons/hi2";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Work", path: "/work" },
  { name: "Projects", path: "/projects" },
];

export default function MainLayout() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
      {/* Minimal Header */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-1 px-2 py-2 bg-secondary/80 backdrop-blur-sm border border-border rounded-full">
          {/* Navigation Links */}
          {navItems.map(({ name, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`
              }
            >
              {name}
            </NavLink>
          ))}

          {/* Divider */}
          <div className="w-px h-6 bg-primary/10 mx-2" />

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/50 transition-all duration-200"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <HiMoon className="w-4 h-4" />
            ) : (
              <HiSun className="w-4 h-4" />
            )}
          </button>
        </div>
      </header>

      <main className="flex-1 pt-52 pb-16">
        <Outlet />
      </main>

      {/* Global Footer */}
      <footer className="border-t border-border/30 bg-background backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-col items-center space-y-6">
            {/* Social Links */}
            <div className="flex items-center gap-8">
              <a
                href="https://github.com/jacobslunga"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <FaGithub className="w-5 h-5" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/jacob-slunga-9121131a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <FaLinkedin className="w-5 h-5" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Jacob Slunga.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
