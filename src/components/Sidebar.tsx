import { Sun, Moon, FileText, Mail, Terminal } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen bg-background border-r-2 border-green-300 dark:border-green-700 px-6 py-8 sticky top-0">
      {/* Terminal header bar */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-green-500/30">
        <div className="flex items-center gap-2">
          <Terminal className="w-3 h-3 text-green-500" />
          <span className="text-xs font-mono text-green-500">
            jacob@portfolio
          </span>
        </div>
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-red-500 rounded-none"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-none"></div>
          <div className="w-2 h-2 bg-green-500 rounded-none"></div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="mb-6">
        <Link to="/" className="block">
          <div className="flex items-start gap-3 p-3 border border-green-500/30 rounded-none bg-background">
            <div className="relative">
              <img
                src="/jag.jpg"
                alt="Jacob Slunga"
                className="w-12 h-12 rounded-none border-2 border-green-500 object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border rounded-none animate-pulse"></div>
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-sm font-mono font-bold text-green-400 leading-tight">
                Jacob Slunga
              </h1>
              <p className="text-xs font-mono text-green-500/70 mt-1">
                CS Student & Developer
              </p>
              <div className="text-xs font-mono text-green-600 mt-1">
                ~/portfolio/home
              </div>
            </div>
          </div>
        </Link>
      </div>

      <nav className="flex-1 flex flex-col justify-between font-mono">
        <div className="space-y-4">
          {/* Terminal-style section header */}
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1 bg-primary/10 rounded-none">
              <Mail className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm font-mono font-semibold">./connect</span>
            <div className="flex-1 h-px bg-primary/30" />
          </div>

          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start px-3 py-2 h-auto font-mono text-xs rounded-none hover:bg-primary/10 hover:border-l-2 hover:border-primary"
              onClick={() =>
                window.open("https://github.com/jacobslunga", "_blank")
              }
              aria-label="GitHub"
            >
              <GitHubLogoIcon className="h-4 w-4 mr-3" />
              <span>./github</span>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start px-3 py-2 h-auto font-mono text-xs rounded-none hover:bg-primary/10 hover:border-l-2 hover:border-primary"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/jacob-slunga-9121131a2/",
                  "_blank"
                )
              }
              aria-label="LinkedIn"
            >
              <LinkedInLogoIcon className="h-4 w-4 mr-3" />
              <span>./linkedin</span>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start px-3 py-2 h-auto font-mono text-xs rounded-none hover:bg-primary/10 hover:border-l-2 hover:border-primary"
              onClick={() => window.open("mailto:jacobslunga21@yahoo.se")}
              aria-label="Email"
            >
              <Mail className="h-4 w-4 mr-3" />
              <span>./email</span>
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          {/* Terminal-style section header */}
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1 bg-primary/10 rounded-none">
              <FileText className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm font-mono font-semibold">./system</span>
            <div className="flex-1 h-px bg-primary/30" />
          </div>

          <Button
            variant="outline"
            className="w-full justify-start font-mono text-xs rounded-none border-2 border-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/cv.pdf";
              link.download = "Jacob_Slunga_Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <FileText className="h-4 w-4 mr-2" />
            <span>cat resume.pdf</span>
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start font-mono text-xs rounded-none hover:bg-primary/10 hover:border-l-2 hover:border-primary"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <>
                <Sun className="h-4 w-4 mr-2" />
                <span>./light-mode</span>
              </>
            ) : (
              <>
                <Moon className="h-4 w-4 mr-2" />
                <span>./dark-mode</span>
              </>
            )}
          </Button>

          {/* Terminal cursor */}
          <div className="flex items-center pt-2">
            <span className="text-muted-foreground font-mono text-xs">$</span>
            <div className="w-2 h-3 bg-primary ml-1 animate-pulse"></div>
          </div>
        </div>
      </nav>
    </aside>
  );
}
