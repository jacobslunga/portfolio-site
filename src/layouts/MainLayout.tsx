import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function MainLayout() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isHeaderVisible } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress =
        totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Scroll Progress Bar */}
      <div
        className={`fixed top-0 left-0 w-full h-1 bg-muted/30 z-50 transition-all duration-300 ${
          isHeaderVisible ? "opacity-0" : "opacity-100"
        }`}
      >
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Outlet />
      </main>
    </div>
  );
}
