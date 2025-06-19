import { useState } from "react";
import {
  ChevronDownIcon,
  GraduationCap,
  Terminal,
  Smartphone,
  Rocket,
  Users,
  Code2,
  Briefcase,
  Github,
  ExternalLink,
  MapPin,
  Link,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import GradientText from "@/components/GradientText";

const projects = [
  {
    id: 1,
    name: "LiU Tentor",
    description:
      "An exam archive for Linköping University focusing on better UX. Over 4,300 students use it every exam period to access past exams and study materials.",
    githubUrl: "https://github.com/jacobslunga/liu-tentor-radix",
    liveUrl: "https://liutentor.se",
    technologies: ["React", "Vite", "Supabase", "PDF.js"],
    status: "Live",
    metrics: ["4,300+ active users", "350+ courses covered"],
    highlights: [
      "Most popular exam archive at LiU",
      "Built responsive PDF viewer",
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
    status: "Completed",
    metrics: ["Enterprise-level", "OSCAL compliance"],
    highlights: ["Complex data visualization", "Government security standards"],
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
    status: "Completed",
    metrics: ["Cross-platform mobile app", "Image upload & CDN"],
    highlights: ["Daily posting limitation system", "AWS cloud infrastructure"],
    icon: Smartphone,
    // logo: "/logos/gotstyle.png",
    year: "2023",
  },
];

const experiences = [
  {
    id: 1,
    title: "Software Developer Intern",
    company: "Axis Communications",
    period: "Summer 2025",
    location: "Lund, Sweden",
    website: "axis.com",
    description:
      "Upcoming summer internship at Axis Communications, developing a web application for an internal testing platform.",
    technologies: ["TBD"],
    impact: "Starting soon! 🚀",
    icon: Rocket,
    logo: "/logos/axis.png",
  },
  {
    id: 2,
    title: "Teaching Assistant (Amanuens)",
    company: "Linköping University",
    period: "Aug 2024 - Jan 2025",
    location: "Linköping, Sweden",
    website: "liu.se",
    description:
      "Assisted students in TDDE18 Programming (C++) by guiding them through C++ programming concepts and lab assignments, explaining complex topics and providing troubleshooting support.",
    technologies: ["C++", "Teaching", "Debugging"],
    impact: "Helped 100+ students master C++ fundamentals",
    icon: Users,
    logo: "/logos/liu.jpeg",
  },
  {
    id: 3,
    title: "Web Developer",
    company: "Dyno Robotics",
    period: "Jun 2024 - Sep 2024",
    location: "Linköping, Sweden",
    website: "dyno.se",
    description:
      "Developed a web-based platform using React, TypeScript, and Supabase for farmers to manage their self-driving tractors.",
    technologies: ["React", "TypeScript", "Supabase", "Real-time Updates"],
    impact: "Built tractor management dashboard for autonomous farming",
    icon: Code2,
    logo: "/logos/dyno.jpeg",
  },
  {
    id: 4,
    title: "Programming Coach",
    company: "Skill",
    period: "Summer 2023 & 2024",
    location: "Linköping, Sweden",
    website: "skill.se",
    description:
      "Taught programming to children during 3-week summer camps, introducing them to coding concepts and inspiring a love for technology through hands-on projects and activities.",
    technologies: ["Python", "JavaScript", "Scratch", "Game Development"],
    impact: "Inspired 50+ kids to start their coding journey",
    icon: Briefcase,
    logo: "/logos/skill.jpeg",
  },
];

export default function WorkPage() {
  const [openWork, setOpenWork] = useState<number | null>(
    experiences[0]?.id || null
  );
  const [openProject, setOpenProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen w-full py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <GradientText className="text-5xl md:text-7xl lg:text-8xl mb-4">
            My Work
          </GradientText>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my professional experience and projects
          </p>
        </div>

        {/* Projects Section - Featured First */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project) => (
              <Collapsible
                key={project.id}
                open={openProject === project.id}
                onOpenChange={(isOpen) =>
                  setOpenProject(isOpen ? project.id : null)
                }
              >
                <CollapsibleTrigger className="w-full">
                  <div className="p-6 bg-gradient-to-r from-muted/20 to-muted/40 hover:from-muted/30 hover:to-muted/50 rounded-2xl border border-border/20 transition-all duration-200 group">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Left side - Project logo and info */}
                      <div className="flex items-start gap-4 lg:min-w-[250px]">
                        <div className="flex items-center gap-4">
                          {project.logo ? (
                            <div className="w-16 h-16 rounded-xl overflow-hidden border border-border/20 flex items-center justify-center bg-background p-2">
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
                              <div className="w-full h-full bg-muted rounded-lg items-center justify-center text-lg font-medium text-muted-foreground hidden">
                                <project.icon className="w-6 h-6" />
                              </div>
                            </div>
                          ) : (
                            <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center">
                              <project.icon className="w-8 h-8 text-muted-foreground" />
                            </div>
                          )}
                          <div className="text-left">
                            <h3 className="text-2xl font-bold text-foreground mb-1">
                              {project.name}
                            </h3>
                            <div className="flex items-center gap-3 mb-2">
                              <span
                                className={`px-3 py-1 rounded-full text-sm font-medium ${
                                  project.status === "Live"
                                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                    : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                                }`}
                              >
                                {project.status}
                              </span>
                              <span className="text-sm text-muted-foreground font-medium">
                                {project.year}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right side - Tech stack and actions */}
                      <div className="flex-1 text-left">
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {project.description.split(".")[0]}.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-background/60 border border-border/30 rounded-full text-sm font-medium text-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          {project.githubUrl && (
                            <Button asChild size="sm" className="rounded-2xl">
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Github className="w-4 h-4 mr-2" />
                                GitHub
                              </a>
                            </Button>
                          )}
                          {project.liveUrl && (
                            <Button
                              asChild
                              variant="outline"
                              size="sm"
                              className="rounded-2xl"
                            >
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>

                      {/* Chevron */}
                      <div className="flex items-center justify-center lg:justify-start">
                        <ChevronDownIcon
                          className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                            openProject === project.id ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-6 pt-2 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {project.metrics && project.metrics.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">
                          Metrics
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.metrics.map((metric) => (
                            <span
                              key={metric}
                              className="px-3 py-1 bg-foreground/10 rounded-lg text-sm text-foreground font-medium"
                            >
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.highlights && project.highlights.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">
                          Highlights
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {project.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>

        {/* Work Experience Section */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Experience
          </h2>
          <div className="space-y-4">
            {experiences.map((work) => (
              <Collapsible
                key={work.id}
                open={openWork === work.id}
                onOpenChange={(isOpen) => setOpenWork(isOpen ? work.id : null)}
              >
                <CollapsibleTrigger className="w-full">
                  <div className="p-6 bg-muted/30 hover:bg-muted/50 rounded-2xl border border-border/20 transition-colors duration-200 group">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Left side - Company info */}
                      <div className="flex items-start gap-4 lg:min-w-[300px]">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl overflow-hidden border border-border/20 flex items-center justify-center bg-background">
                            <img
                              src={work.logo}
                              alt={`${work.company} logo`}
                              className={`w-full h-full object-contain ${
                                work.company === "Axis Communications"
                                  ? "dark:bg-white dark:p-1 dark:rounded-lg"
                                  : ""
                              }`}
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
                            <div className="w-full h-full bg-muted rounded-lg items-center justify-center text-xs font-medium text-muted-foreground hidden">
                              {work.company.charAt(0)}
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <MapPin className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground font-medium">
                                {work.location}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Link className="w-4 h-4 text-muted-foreground" />
                              <a
                                href={`https://${work.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {work.website}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right side - Job details */}
                      <div className="flex-1 text-left">
                        <div className="mb-2">
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {work.title}
                          </h3>
                          <p className="text-lg font-medium text-muted-foreground mb-1">
                            {work.company}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {work.period}
                          </p>
                        </div>
                      </div>

                      {/* Chevron */}
                      <div className="flex items-center justify-center lg:justify-start">
                        <ChevronDownIcon
                          className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                            openWork === work.id ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-6 pt-2 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {work.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {work.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-background/50 border border-border/30 rounded-full text-xs font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm font-medium text-foreground">
                      Impact: {work.impact}
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
