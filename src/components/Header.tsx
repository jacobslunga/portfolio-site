import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { HiSun, HiMoon, HiBars3 } from "react-icons/hi2";
// import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Work", path: "/work" },
  // { name: "Ask AI", path: "/chat", icon: Sparkles },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const currentNavItem = navItems.find(
    (item) => item.path === location.pathname
  );

  // Check if current page is in navigation (hide indicator for 404 and other pages)
  const isValidNavPage = navItems.some(
    (item) => item.path === location.pathname
  );

  useEffect(() => {
    const activeEl = containerRef.current?.querySelector(".nav-active");
    if (activeEl && isValidNavPage) {
      const { offsetLeft, offsetWidth } = activeEl as HTMLElement;
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
    } else {
      // Hide indicator for 404 or other non-nav pages
      setIndicatorStyle({ left: 0, width: 0 });
    }
  }, [location.pathname, isValidNavPage]);

  return (
    <>
      {/* Desktop Header */}
      <div className="fixed top-5 z-50 w-full justify-center pointer-events-none hidden md:flex">
        <div
          ref={containerRef}
          className={cn(
            "relative flex items-center gap-x-2 px-4 py-2 rounded-full",
            "border border-border/50 bg-secondary/60 backdrop-blur-md",
            "pointer-events-auto transition-colors duration-300"
          )}
        >
          {/* Sliding Indicator */}
          {isValidNavPage && (
            <div
              className={cn(
                "absolute top-1/2 -translate-y-1/2 h-8 rounded-full",
                "bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-purple-400/30 dark:to-pink-400/30",
                "border border-purple-200/30 dark:border-purple-400/20 transition-all duration-300",
                "backdrop-blur-sm"
              )}
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
            />
          )}

          {/* Links */}
          {navItems.map(({ name, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                cn(
                  "relative z-10 px-4 py-2 transition-all duration-200 rounded-full flex items-center gap-1",
                  isActive
                    ? "nav-active font-semibold text-foreground"
                    : "text-foreground opacity-60 hover:opacity-100"
                )
              }
            >
              {/* {Icon && <Icon className="w-4 h-4" />} */}
              {name}
            </NavLink>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={cn(
              "relative z-10 ml-2 p-2 text-foreground rounded-full",
              "opacity-60 hover:opacity-100 transition-all duration-200",
              "hover:bg-muted/50 hover:scale-110"
            )}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <HiMoon className="w-4 h-4" />
            ) : (
              <HiSun className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="fixed top-5 left-5 right-5 z-50 flex md:hidden">
        <div
          className={cn(
            "flex items-center justify-between w-full px-4 py-2 rounded-full",
            "border border-border/50 bg-secondary/60 backdrop-blur-md",
            "transition-colors duration-300"
          )}
        >
          {/* Current Page Indicator */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-foreground">
              {currentNavItem?.name ||
                (location.pathname === "*" || !isValidNavPage
                  ? "404"
                  : "Portfolio")}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={cn(
                "p-2 text-foreground rounded-full",
                "opacity-60 hover:opacity-100 transition-all duration-200",
                "hover:bg-muted/50"
              )}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <HiMoon className="w-4 h-4" />
              ) : (
                <HiSun className="w-4 h-4" />
              )}
            </button>

            {/* Mobile Menu Drawer */}
            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <DrawerTrigger asChild>
                <button
                  className={cn(
                    "p-2 text-foreground rounded-full",
                    "opacity-60 hover:opacity-100 transition-all duration-200",
                    "hover:bg-muted/50"
                  )}
                  aria-label="Open navigation menu"
                >
                  <HiBars3 className="w-5 h-5" />
                </button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm p-6">
                  <div className="flex flex-col space-y-4">
                    <h2 className="text-lg font-semibold text-center mb-4">
                      Navigation
                    </h2>
                    {navItems.map(({ name, path }) => (
                      <DrawerClose key={path} asChild>
                        <NavLink
                          to={path}
                          className={({ isActive }) =>
                            cn(
                              "px-4 py-3 rounded-lg text-center transition-all duration-200 flex items-center justify-center gap-2",
                              isActive
                                ? "bg-muted text-foreground font-medium"
                                : "text-foreground hover:bg-muted"
                            )
                          }
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          {/* {Icon && <Icon className="w-4 h-4" />} */}
                          {name}
                        </NavLink>
                      </DrawerClose>
                    ))}
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </>
  );
}
