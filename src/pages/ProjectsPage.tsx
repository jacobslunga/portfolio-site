import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useState } from "react";

interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  technologies: string[];
  highlights: string[];
  links: {
    website?: string;
    github?: string;
  };
  status?: "active" | "completed" | "in-progress";
  logoPath?: string;
  logoNeedsBackground?: boolean;
}

const projects: Project[] = [
  {
    id: "liu-tentor",
    title: "LiU Tentor",
    year: "2025",
    description:
      "An exam archive for Linköping University focusing on better UX. Over 4,900 students use it every exam period to access past exams and study materials.",
    technologies: ["React", "Vite", "Supabase", "PDF.js", "FastAPI"],
    highlights: [
      "Most popular exam archive at LiU",
      "Built responsive PDF viewer",
      "4,900+ active users",
    ],
    links: {
      website: "https://liutentor.se",
      github: "https://github.com/jacobslunga/liu-tentor-radix",
    },
    status: "active",
    logoPath: "/logos/liutentor.svg",
  },
  {
    id: "mejra",
    title: "MEJRA",
    year: "2025",
    description:
      "Bachelor thesis project for SAAB developing an advanced requirement management system. Focuses on visualization of complex system interactions and dependencies.",
    technologies: ["React", "Flask", "SQLite", "Reagraph", "OSCAL"],
    highlights: [
      "Complex data visualization",
      "Government security standards",
      "Enterprise-level system",
    ],
    links: {},
    status: "completed",
    logoPath: "/logos/mejra.png",
  },
  {
    id: "gotstyle",
    title: "GotStyle",
    year: "2023",
    description:
      "A React Native app for sharing daily outfit inspiration. Users upload their OOTD (Outfit of the Day) once daily to showcase style and discover fashion inspiration.",
    technologies: ["React Native", "Flask", "AWS S3", "CloudFront CDN"],
    highlights: [
      "Daily posting limitation system",
      "AWS cloud infrastructure",
      "Cross-platform mobile app",
    ],
    links: {
      github: "https://github.com/jacobslunga/GotStyle",
    },
    status: "completed",
  },
];

export default function ProjectsPage() {
  useScrollToTop();
  const [activeProject, setActiveProject] = useState<string | null>(
    "liu-tentor"
  );

  const toggleProject = (id: string) => {
    setActiveProject(activeProject === id ? null : id);
  };

  const getStatusBadge = (status: Project["status"]) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "in-progress":
        return <Badge variant="outline">In Progress</Badge>;
      case "completed":
        return <Badge variant="outline">Completed</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-start px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl w-full space-y-6 sm:space-y-8">
        <div className="text-center space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            My Projects
          </h1>
          <p className="text-lg sm:text-xl text-foreground/70">
            Building solutions that make a difference, one project at a time
          </p>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleProject(project.id)}
                className="w-full cursor-pointer px-6 py-4 text-left bg-background hover:bg-secondary/50 transition-colors duration-200 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  {/* Project Logo */}
                  {project.logoPath && (
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 ${
                        project.logoNeedsBackground ? "bg-white p-2" : ""
                      }`}
                    >
                      <img
                        src={project.logoPath}
                        alt={`${project.title} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-foreground/60">{project.year}</p>
                      {getStatusBadge(project.status)}
                    </div>
                  </div>
                </div>
                <div className="text-foreground/40">
                  {activeProject === project.id ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </div>
              </button>

              {/* Accordion Content */}
              {activeProject === project.id && (
                <div className="px-6 py-4 border-t border-border bg-secondary/20">
                  <div className="space-y-4">
                    {/* Links */}
                    {(project.links.website || project.links.github) && (
                      <div className="flex items-center gap-4">
                        {project.links.website && (
                          <a
                            href={project.links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-foreground hover:underline font-medium"
                          >
                            Visit Website
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-foreground hover:underline font-medium"
                          >
                            <GitHubLogoIcon className="h-4 w-4" />
                            GitHub
                          </a>
                        )}
                      </div>
                    )}

                    <p className="text-foreground/80 leading-relaxed">
                      {project.description}
                    </p>

                    <div>
                      <h4 className="text-sm font-medium text-foreground/70 mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            className="px-3 py-1 text-sm bg-accent text-accent-foreground rounded-full"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-foreground/70 mb-2">
                        Highlights:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-foreground/80">
                        {project.highlights.map((highlight, index) => (
                          <li key={index} className="text-sm">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <Link
          to="https://github.com/jacobslunga"
          target="_blank"
          className="self-center"
        >
          <Button variant="link">
            Check out my GitHub for more projects
            <ExternalLink />
          </Button>
        </Link>
      </div>
    </div>
  );
}
