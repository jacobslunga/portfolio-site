import { useState } from "react";
import {
  GraduationCap,
  Terminal,
  Smartphone,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    name: "LiU Tentor",
    description:
      "An exam archive for Linköping University focusing on better UX. Over 4,300 students use it every exam period to access past exams and study materials.",
    githubUrl: "https://github.com/jacobslunga/liu-tentor-radix",
    liveUrl: "https://liutentor.se",
    technologies: ["React", "Vite", "Supabase", "PDF.js"],
    highlights: [
      "Most popular exam archive at LiU",
      "Built responsive PDF viewer",
      "4,300+ active users",
    ],
    icon: GraduationCap,
    logo: "/logos/liu-tentor.png",
    year: "2025",
  },
  {
    id: 2,
    name: "MEJRA",
    description:
      "Bachelor thesis project for SAAB developing an advanced requirement management system. Focuses on visualization of complex system interactions and dependencies.",
    technologies: ["React", "Flask", "SQLite", "Reagraph", "OSCAL"],
    highlights: [
      "Complex data visualization",
      "Government security standards",
      "Enterprise-level system",
    ],
    icon: Terminal,
    logo: "/logos/mejra.png",
    year: "2025",
  },
  {
    id: 3,
    name: "GotStyle",
    description:
      "A React Native app for sharing daily outfit inspiration. Users upload their OOTD (Outfit of the Day) once daily to showcase style and discover fashion inspiration.",
    githubUrl: "https://github.com/jacobslunga/GotStyle",
    technologies: ["React Native", "Flask", "AWS S3", "CloudFront CDN"],
    highlights: [
      "Daily posting limitation system",
      "AWS cloud infrastructure",
      "Cross-platform mobile app",
    ],
    icon: Smartphone,
    year: "2023",
  },
];

export default function ProjectsPage() {
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set([1])); // First item expanded by default

  const toggleRow = (id: number) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };

  return (
    <div className="min-h-screen w-full px-6" data-section="Projects">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-semibold text-foreground mb-4">
            Projects
          </h1>
          <p className="text-base text-muted-foreground">
            Things I've built and am proud of
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-background border backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ease-in-out"
            >
              {/* Main Card - Always Visible */}
              <div
                className="p-6 cursor-pointer transition-all duration-200 ease-in-out hover:bg-secondary/80"
                onClick={() => toggleRow(project.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    {/* Project Logo */}
                    <div className="flex-shrink-0">
                      {project.logo ? (
                        <div className="w-16 h-16 rounded-xl overflow-hidden flex items-center justify-center bg-background p-2 shadow-sm">
                          <img
                            src={project.logo}
                            alt={`${project.name} logo`}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              const target = e.currentTarget;
                              const fallback =
                                target.nextElementSibling as HTMLElement;
                              target.style.display = "none";
                              if (fallback) {
                                fallback.style.display = "flex";
                              }
                            }}
                          />
                          <div className="w-full h-full bg-secondary rounded-lg items-center justify-center hidden">
                            <project.icon className="w-6 h-6 text-muted-foreground" />
                          </div>
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-xl bg-background flex items-center justify-center shadow-sm">
                          <project.icon className="w-8 h-8 text-muted-foreground" />
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h3 className="text-lg font-semibold text-foreground">
                          {project.name}
                        </h3>
                        <span className="text-sm text-muted-foreground font-medium">
                          {project.year}
                        </span>
                      </div>

                      {/* Quick preview of technologies */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-muted/50 rounded-md text-xs text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs text-muted-foreground">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Links - Always visible */}
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors rounded-md"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaGithub className="w-3 h-3" />
                            Code
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors rounded-md"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-3 h-3" />
                            Live
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expand/Collapse Button */}
                  <div className="flex-shrink-0 ml-4">
                    <div className="transition-transform duration-300 ease-in-out">
                      {expandedRows.has(project.id) ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedRows.has(project.id)
                    ? "max-h-[800px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className={`px-6 pb-6 transition-all duration-500 ease-in-out ${
                    expandedRows.has(project.id)
                      ? "blur-0 translate-y-0"
                      : "blur-sm translate-y-[-10px]"
                  }`}
                >
                  <div className="pt-4 space-y-4">
                    {/* Description */}
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">
                        Description
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* All Technologies */}
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-muted/50 rounded-md text-xs text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">
                          Highlights
                        </h4>
                        <ul className="space-y-1">
                          {project.highlights.map((highlight, index) => (
                            <li
                              key={index}
                              className="text-sm text-muted-foreground flex items-center gap-2"
                            >
                              <span className="w-1 h-1 bg-muted-foreground rounded-2xl flex-shrink-0"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about work experience */}
        <div className="mt-8 p-4 rounded-xl bg-secondary backdrop-blur-sm shadow-sm">
          <p className="text-xs text-muted-foreground text-center">
            View my work experience in the{" "}
            <a
              href="/work"
              className="text-foreground hover:underline font-medium"
            >
              Work
            </a>{" "}
            section
          </p>
        </div>
      </div>
    </div>
  );
}
