import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer
      className={cn(
        "w-full bg-background transition-colors duration-300 py-12 px-4"
      )}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-8">
          {/* Left side - GitHub profile with separate background */}
          <a
            href="https://github.com/jacobslunga"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-105",
              "bg-muted/50 border border-border/30 hover:bg-muted/70"
            )}
          >
            <div
              className={cn(
                "w-12 h-12 bg-foreground rounded-xl flex items-center justify-center",
                "transition-colors duration-300"
              )}
            >
              <FaGithub className="text-background text-xl transition-colors duration-300" />
            </div>
            <div>
              <div className="text-foreground font-medium transition-colors duration-300">
                jacobslunga
              </div>
              <div className="text-muted-foreground text-lg font-semibold transition-colors duration-300">
                Jacob Slunga
              </div>
            </div>
          </a>

          {/* Right side - Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-foreground font-semibold text-lg mb-3 transition-colors duration-300">
              Connect
            </h3>
            <div className="flex flex-col items-center md:items-end gap-2">
              <a
                href="https://www.linkedin.com/in/jacob-slunga-9121131a2/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg",
                  "transition-all duration-300 hover:bg-muted/30"
                )}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/jacobslunga"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg",
                  "transition-all duration-300 hover:bg-muted/30"
                )}
              >
                Github
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg",
                  "transition-all duration-300 hover:bg-muted/30"
                )}
              >
                CV
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={cn(
            "mt-8 pt-6 border-t border-border transition-colors duration-300"
          )}
        >
          <p className="text-muted-foreground text-sm text-center transition-colors duration-300">
            © 2025 Jacob Slunga
          </p>
        </div>
      </div>
    </footer>
  );
}
