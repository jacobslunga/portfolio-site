import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Link, NavLink } from "react-router-dom";
import { Menu, Monitor, Moon, Sun, X } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "./ui/button";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const cycle = () => {
    if (theme === "system") setTheme("light");
    else if (theme === "light") setTheme("dark");
    else setTheme("system");
  };
  const Icon = theme === "system" ? Monitor : theme === "light" ? Sun : Moon;
  const label =
    theme === "system"
      ? "Theme: System"
      : theme === "light"
      ? "Theme: Light"
      : "Theme: Dark";

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            onClick={cycle}
            aria-label={label}
          >
            <Icon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>{label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Work", to: "/work" },
    { name: "Projects", to: "/projects" },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 h-14 w-screen bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-full items-center justify-between px-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link to="/" className="cursor-default text-lg font-medium">
                  Jacob Slunga
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Software Engineer</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-row items-center gap-3">
            <ul className="flex flex-row gap-2">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} end>
                    {({ isActive }) => (
                      <Button
                        size="sm"
                        variant={isActive ? "secondary" : "ghost"}
                      >
                        {link.name}
                      </Button>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="h-[30px] w-[1px] bg-foreground/10" />

            <div className="flex flex-row gap-2">
              <a
                href="https://github.com/jacobslunga"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="icon" variant="outline">
                  <GitHubLogoIcon />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/jacob-slunga-9121131a2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="icon" variant="outline">
                  <LinkedInLogoIcon className="text-[#0B65C2]" />
                </Button>
              </a>
              <ThemeToggleButton />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggleButton />
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-14 z-40 bg-background/95 backdrop-blur-sm md:hidden">
          <nav className="flex flex-col h-full">
            <div className="flex-1 px-5 py-6 space-y-6">
              {/* Navigation Links */}
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.to}>
                    <NavLink to={link.to} end onClick={closeMobileMenu}>
                      {({ isActive }) => (
                        <Button
                          size="lg"
                          variant={isActive ? "secondary" : "ghost"}
                          className="w-full justify-start text-lg"
                        >
                          {link.name}
                        </Button>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-foreground/70">
                  Connect
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/jacobslunga"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                  >
                    <Button size="icon" variant="outline">
                      <GitHubLogoIcon />
                    </Button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jacob-slunga-9121131a2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                  >
                    <Button size="icon" variant="outline">
                      <LinkedInLogoIcon className="text-[#0B65C2]" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
