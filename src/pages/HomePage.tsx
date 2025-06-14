import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import {
  Sun,
  Moon,
  ExternalLink,
  Code2,
  Terminal,
  Palette,
  Smartphone,
  GraduationCap,
  Briefcase,
  Rocket,
  Users,
  Github,
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  SiReact,
  SiSvelte,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiSwift,
  SiCplusplus,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiFlask,
  SiSupabase,
  SiSqlite,
  SiExpo,
  SiFlutter,
  SiGit,
  SiAmazon,
  SiVite,
  SiNginx,
  SiFigma,
} from "react-icons/si";

const projects = [
  {
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
    title: "Software Developer Intern",
    company: "Axis Communications",
    period: "Summer 2025",
    description:
      "Upcoming summer internship at Axis Communications, developing a web application for an internal testing platform.",
    technologies: ["TBD"],
    impact: "Starting soon! 🚀",
    icon: Rocket,
    logo: "/logos/axis.png",
  },
  {
    title: "Teaching Assistant (Amanuens)",
    company: "Linköping University",
    period: "Aug 2024 - Jan 2025",
    description:
      "Assisted students in TDDE18 Programming (C++) by guiding them through C++ programming concepts and lab assignments, explaining complex topics and providing troubleshooting support.",
    technologies: ["C++", "Teaching", "Debugging"],
    impact: "Helped 100+ students master C++ fundamentals",
    icon: Users,
    logo: "/logos/liu.jpeg",
  },
  {
    title: "Web Developer",
    company: "Dyno Robotics",
    period: "Jun 2024 - Sep 2024",
    description:
      "Developed a web-based platform using React, TypeScript, and Supabase for farmers to manage their self-driving tractors.",
    technologies: ["React", "TypeScript", "Supabase", "Real-time Updates"],
    impact: "Built tractor management dashboard for autonomous farming",
    icon: Code2,
    logo: "/logos/dyno.jpeg",
  },
  {
    title: "Programming Coach",
    company: "Skill",
    period: "Summer 2023 & 2024",
    description:
      "Taught programming to children during 3-week summer camps, introducing them to coding concepts and inspiring a love for technology through hands-on projects and activities.",
    technologies: ["Python", "JavaScript", "Scratch", "Game Development"],
    impact: "Inspired 50+ kids to start their coding journey",
    icon: Briefcase,
    logo: "/logos/skill.jpeg",
  },
];

const toolCategories = {
  Design: {
    tools: [
      { name: "Figma", icon: SiFigma },
      { name: "Prototyping", icon: Palette },
      { name: "Wireframing", icon: Palette },
    ],
  },
  Languages: {
    tools: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
      { name: "Swift", icon: SiSwift },
      { name: "C++", icon: SiCplusplus },
    ],
  },
  Frontend: {
    tools: [
      { name: "React", icon: SiReact },
      { name: "Svelte", icon: SiSvelte },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  "Backend & Data": {
    tools: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Flask", icon: SiFlask },
      { name: "Supabase", icon: SiSupabase },
      { name: "SQLite", icon: SiSqlite },
    ],
  },
  Mobile: {
    tools: [
      { name: "React Native", icon: SiReact },
      { name: "Flutter", icon: SiFlutter },
      { name: "Expo", icon: SiExpo },
    ],
  },
  "DevOps & Tools": {
    tools: [
      { name: "Git", icon: SiGit },
      { name: "AWS", icon: SiAmazon },
      { name: "Vite", icon: SiVite },
      { name: "NGINX", icon: SiNginx },
    ],
  },
};

export default function HomePage() {
  const { isDark, toggleTheme, isHeaderVisible, setIsHeaderVisible } =
    useTheme();
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Header hide/show logic
      const scrollDifference = scrollTop - lastScrollY;
      const scrollThreshold = 10; // Minimum scroll distance to trigger hide/show

      if (Math.abs(scrollDifference) > scrollThreshold) {
        if (scrollTop > lastScrollY && scrollTop > 100) {
          // Scrolling down and past threshold - hide header
          setIsHeaderVisible(false);
        } else {
          // Scrolling up or at top - show header
          setIsHeaderVisible(true);
        }
        setLastScrollY(scrollTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, setIsHeaderVisible]);

  return (
    <div className="min-h-screen bg-background bg-paper relative">
      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:font-medium"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 transition-all duration-300 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        role="banner"
      >
        {/* Top Header Line */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground font-sans">
            <div className="flex items-center gap-4">
              <span>Portfolio Edition</span>
              <span>•</span>
              <span>Linköping, Sweden</span>
            </div>
            <div className="flex items-center gap-4">
              <span>
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>•</span>
              <span>Vol. 2025</span>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 md:gap-4">
              <div
                className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-card"
                aria-hidden="true"
              >
                <img
                  src="/jag.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-serif font-bold tracking-tight">
                  Jacob Slunga
                </h1>
                <p className="text-xs md:text-sm text-muted-foreground font-sans">
                  Computer Science Student
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <div className="hidden md:block text-right">
                <p className="text-xs text-muted-foreground font-sans">
                  Student • Developer • Teacher
                </p>
                <p className="text-xs text-muted-foreground font-sans">
                  Available for opportunities
                </p>
              </div>
              <div className="w-px h-10 bg-muted/30"></div>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="rounded-full transition-all duration-200 focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
              >
                {isDark ? (
                  <Sun className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Moon className="h-5 w-5" aria-hidden="true" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-16 relative z-10" role="main">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Hero Section - Newspaper Style */}
          <section className="mb-16 md:mb-24" aria-labelledby="hero-heading">
            <div className="mb-4 md:mb-6">
              <span className="text-sm text-muted-foreground font-medium tracking-wide">
                Portfolio 2025 — Linköping, Sweden
              </span>
            </div>
            <h1 id="hero-heading" className="mb-6 md:mb-8">
              <span className="block font-serif text-3xl md:text-4xl lg:text-5xl text-primary/80 italic mb-2 md:mb-3 tracking-wide">
                Crafting Digital
              </span>
              <span className="block font-sans text-5xl md:text-6xl lg:text-8xl font-bold text-foreground leading-none tracking-tight">
                Experiences
              </span>
              <span className="block font-sans text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mt-2 md:mt-3 tracking-widest uppercase">
                with Purpose
              </span>
            </h1>
            <div className="columns-1 md:columns-2 gap-8 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              <p className="hero-drop-cap">
                I'm a Computer Science student at Linköping University who
                believes that great design isn't just about how something
                looks—it's about how it works for real people. Through teaching
                over 150+ students and building products used by thousands, I've
                learned that the best interfaces are the ones you don't notice.
              </p>
              <p className="mt-4">
                Based in Linköping, Sweden, I specialize in turning complex
                problems into clean, simple solutions. Whether it's improving an
                exam archive used by 3,500+ students or building dashboards for
                self-driving tractors, I always start by asking: what's the real
                problem we're trying to solve?
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                onClick={() => window.open("mailto:jacobslunga21@yahoo.se")}
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Send email to Jacob Slunga"
              >
                Let's collaborate
                <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  window.open("https://github.com/jacobslunga", "_blank")
                }
                className="rounded-full focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="View Jacob Slunga's GitHub profile (opens in new tab)"
              >
                <Github className="mr-2 h-5 w-5" aria-hidden="true" />
                View Work
              </Button>
            </div>
          </section>

          {/* Projects Section - Newspaper Grid */}
          <section
            className="mb-16 md:mb-24"
            aria-labelledby="projects-heading"
          >
            <div className="mb-8 md:mb-12">
              <h2 id="projects-heading" className="mb-4">
                <span className="block font-sans text-sm md:text-base text-primary uppercase tracking-widest font-semibold mb-1">
                  Portfolio
                </span>
                <span className="block font-serif text-2xl md:text-4xl font-bold text-foreground section-title-enhanced">
                  Selected <em className="font-serif">Projects</em>
                </span>
              </h2>
              <p className="text-editorial text-base md:text-lg text-muted-foreground max-w-2xl">
                A collection of projects that showcase my approach to solving
                real-world problems through thoughtful design and robust
                engineering.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <article
                    key={project.name}
                    className="group relative"
                    role="listitem"
                  >
                    <div className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-sm">
                      {/* Article Header */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-xs font-semibold text-primary uppercase tracking-wide">
                            {project.year} • {project.status}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center overflow-hidden">
                              {project.logo ? (
                                <img
                                  src={project.logo}
                                  alt={`${project.name} logo`}
                                  className="w-full h-full object-contain p-0.5"
                                  onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                    e.currentTarget.nextElementSibling?.classList.remove(
                                      "hidden"
                                    );
                                  }}
                                />
                              ) : null}
                              <Icon
                                className={`h-4 w-4 text-primary ${
                                  project.logo ? "hidden" : ""
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-2">
                          {project.name}
                        </h3>
                        <div className="text-sm text-muted-foreground mb-4">
                          By Jacob Slunga •{" "}
                          {project.technologies.slice(0, 3).join(", ")}
                          {project.technologies.length > 3 &&
                            ` +${project.technologies.length - 3} more`}
                        </div>
                      </div>

                      {/* Article Content */}
                      <div className="mb-4">
                        <p className="text-base font-medium text-foreground mb-3">
                          {project.description.split(".")[0]}.
                        </p>
                        <div className="text-sm text-muted-foreground">
                          <p className="mb-4">
                            {project.description
                              .split(".")
                              .slice(1)
                              .join(".")
                              .trim()}
                          </p>

                          {/* Metrics */}
                          {project.metrics.length > 0 && (
                            <div className="mt-4 p-3 bg-muted/30 rounded-lg">
                              <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                                Key Metrics
                              </div>
                              <div className="space-y-1">
                                {project.metrics.map((metric) => (
                                  <div key={metric} className="text-sm">
                                    • {metric}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Highlights */}
                          {project.highlights &&
                            project.highlights.length > 0 && (
                              <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                                <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                                  Notable Features
                                </div>
                                <div className="space-y-1">
                                  {project.highlights.map((highlight) => (
                                    <div key={highlight} className="text-sm">
                                      • {highlight}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                        </div>
                      </div>

                      {/* Article Meta/Footer */}
                      <div className="pt-4 mt-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            {project.githubUrl && project.githubUrl !== "#" && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  window.open(project.githubUrl, "_blank")
                                }
                                className="rounded-full text-xs h-8"
                                aria-label={`View ${project.name} source code on GitHub`}
                              >
                                <Github className="h-3 w-3" />
                                <span className="ml-1">Code</span>
                              </Button>
                            )}
                            {project.liveUrl && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  window.open(project.liveUrl, "_blank")
                                }
                                className="rounded-full text-xs h-8"
                                aria-label={`Visit ${project.name} live website`}
                              >
                                <ExternalLink className="h-3 w-3" />
                                <span className="ml-1">Live</span>
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Experience Section - Simplified Timeline */}
          <section
            className="mb-16 md:mb-24"
            aria-labelledby="experience-heading"
          >
            <div className="mb-8 md:mb-12">
              <h2 id="experience-heading" className="mb-4">
                <span className="block font-sans text-sm md:text-base text-primary uppercase tracking-widest font-semibold mb-1">
                  Career
                </span>
                <span className="block font-serif text-2xl md:text-4xl font-bold text-foreground section-title-enhanced">
                  Professional <em className="font-serif italic">Journey</em>
                </span>
              </h2>
              <p className="text-editorial text-base md:text-lg text-muted-foreground max-w-2xl">
                From teaching students to building enterprise solutions, each
                role has shaped my understanding of technology's impact on
                people.
              </p>
            </div>

            {/* Mobile: Simple stacked layout */}
            <div className="md:hidden space-y-6">
              {experiences.map((exp) => {
                const Icon = exp.icon;
                return (
                  <article
                    key={exp.title + exp.company}
                    className="bg-card border border-border rounded-lg p-4 transition-all duration-300"
                    role="listitem"
                  >
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-xs font-semibold text-primary uppercase tracking-wide">
                          {exp.period}
                        </div>
                        <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center overflow-hidden">
                          {exp.logo ? (
                            <img
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              className="w-full h-full object-contain p-0.5"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                                e.currentTarget.nextElementSibling?.classList.remove(
                                  "hidden"
                                );
                              }}
                            />
                          ) : null}
                          <Icon
                            className={`h-3 w-3 text-primary ${
                              exp.logo ? "hidden" : ""
                            }`}
                          />
                        </div>
                      </div>
                      <h3 className="text-lg font-serif font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <div className="text-sm text-muted-foreground">
                        {exp.company} •{" "}
                        {exp.technologies.slice(0, 2).join(", ")}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {exp.description}
                      </p>

                      <div className="mt-3 p-3 bg-primary/5 rounded-lg">
                        <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                          Impact
                        </div>
                        <p className="text-sm font-medium">{exp.impact}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Desktop: Traditional timeline */}
            <div className="hidden md:block relative">
              <div className="space-y-12">
                {experiences.map((exp) => {
                  const Icon = exp.icon;
                  return (
                    <article
                      key={exp.title + exp.company}
                      className="relative flex gap-8 group"
                      role="listitem"
                    >
                      {/* Timeline node */}
                      <div className="flex-shrink-0 relative z-10">
                        <div className="w-16 h-16 rounded-lg bg-card group-hover:bg-primary/10 transition-colors duration-200 shadow-sm overflow-hidden flex items-center justify-center">
                          {exp.logo ? (
                            <img
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              className={`w-full h-full object-contain p-2 ${
                                exp.company === "Axis Communications"
                                  ? "bg-white"
                                  : ""
                              }`}
                              onError={(e) => {
                                // Fallback to icon if logo fails to load
                                e.currentTarget.style.display = "none";
                                e.currentTarget.nextElementSibling?.classList.remove(
                                  "hidden"
                                );
                              }}
                            />
                          ) : null}
                          <Icon
                            className={`h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-200 ${
                              exp.logo ? "hidden" : ""
                            }`}
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 pb-8">
                        <div className="bg-card border border-border rounded-lg p-6 transition-all duration-200 hover:shadow-sm">
                          <div className="mb-4">
                            <div className="flex items-center justify-between mb-3">
                              <div className="text-xs font-semibold text-primary uppercase tracking-wide">
                                {exp.period}
                              </div>
                            </div>
                            <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                              {exp.title}
                            </h3>
                            <div className="text-sm text-muted-foreground mb-4">
                              {exp.company} •{" "}
                              {exp.technologies.slice(0, 3).join(", ")}
                              {exp.technologies.length > 3 &&
                                ` +${exp.technologies.length - 3} more`}
                            </div>
                          </div>

                          <div className="mb-4">
                            <p className="text-base font-medium text-foreground mb-3">
                              {exp.description.split(".")[0]}.
                            </p>
                            <div className="text-sm text-muted-foreground">
                              <p className="mb-4">
                                {exp.description
                                  .split(".")
                                  .slice(1)
                                  .join(".")
                                  .trim()}
                              </p>

                              <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                                <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                                  Impact & Results
                                </div>
                                <p className="text-sm font-medium">
                                  {exp.impact}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="pt-4 mt-4">
                            <div className="flex flex-wrap gap-1">
                              {exp.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Skills Section - Animated Carousel */}
          <section className="mb-16 md:mb-24" aria-labelledby="skills-heading">
            <div className="mb-8 md:mb-12">
              <h2 id="skills-heading" className="mb-4">
                <span className="block font-sans text-sm md:text-base text-primary uppercase tracking-widest font-semibold mb-1">
                  Technical
                </span>
                <span className="block font-serif text-2xl md:text-4xl font-bold text-foreground section-title-enhanced">
                  Tools & <em className="font-serif italic">Technologies</em>
                </span>
              </h2>
              <p className="text-editorial text-base md:text-lg text-muted-foreground max-w-2xl">
                A curated selection of technologies I use to bring ideas to
                life, from initial concept to final deployment.
              </p>
            </div>

            {/* Mobile: Simple grid */}
            <div className="md:hidden">
              <div className="grid grid-cols-2 gap-3">
                {Object.values(toolCategories)
                  .flatMap(({ tools }) => tools)
                  .map((tool) => {
                    const IconComponent = tool.icon;
                    const getBrandColor = (toolName: string) => {
                      const colors: { [key: string]: string } = {
                        React: "#61DAFB",
                        TypeScript: "#3178C6",
                        JavaScript: "#F7DF1E",
                        Python: "#3776AB",
                        Swift: "#FA7343",
                        "C++": "#00599C",
                        Svelte: "#FF3E00",
                        "Next.js": "#000000",
                        "Tailwind CSS": "#06B6D4",
                        "Node.js": "#339933",
                        Flask: "#000000",
                        Supabase: "#3ECF8E",
                        SQLite: "#003B57",
                        "React Native": "#61DAFB",
                        Flutter: "#02569B",
                        Expo: "#000020",
                        Git: "#F05032",
                        AWS: "#FF9900",
                        Vite: "#646CFF",
                        NGINX: "#009639",
                        Figma: "#F24E1E",
                      };
                      return colors[toolName] || "#6B7280";
                    };

                    const brandColor = getBrandColor(tool.name);
                    const isDarkIcon = ["Next.js", "Flask", "Expo"].includes(
                      tool.name
                    );

                    return (
                      <div
                        key={tool.name}
                        className="bg-card border border-border rounded-lg p-3 flex items-center gap-2"
                      >
                        <div
                          className={`p-1 rounded-md ${
                            isDarkIcon && isDark ? "bg-white" : ""
                          }`}
                        >
                          <IconComponent
                            className="w-4 h-4"
                            style={{ color: brandColor }}
                            aria-hidden="true"
                          />
                        </div>
                        <span className="text-sm font-medium text-foreground">
                          {tool.name}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Desktop: Animated sliding layers */}
            <div className="hidden md:block relative overflow-hidden">
              <div className="flex flex-col gap-6">
                {/* Layer 1 - Moving left to right */}
                <div className="relative">
                  <div className="flex gap-4 animate-scroll-right">
                    {[...Array(3)].map((_, setIndex) => (
                      <div key={setIndex} className="flex gap-4 shrink-0">
                        {Object.values(toolCategories)
                          .slice(0, 3)
                          .flatMap(({ tools }) => tools)
                          .map((tool, index) => {
                            const IconComponent = tool.icon;
                            const getBrandColor = (toolName: string) => {
                              const colors: { [key: string]: string } = {
                                React: "#61DAFB",
                                TypeScript: "#3178C6",
                                JavaScript: "#F7DF1E",
                                Python: "#3776AB",
                                Swift: "#FA7343",
                                "C++": "#00599C",
                                Svelte: "#FF3E00",
                                "Next.js": "#000000",
                                "Tailwind CSS": "#06B6D4",
                                "Node.js": "#339933",
                                Flask: "#000000",
                                Supabase: "#3ECF8E",
                                SQLite: "#003B57",
                                "React Native": "#61DAFB",
                                Flutter: "#02569B",
                                Expo: "#000020",
                                Git: "#F05032",
                                AWS: "#FF9900",
                                Vite: "#646CFF",
                                NGINX: "#009639",
                                Figma: "#F24E1E",
                              };
                              return colors[toolName] || "#6B7280";
                            };

                            const brandColor = getBrandColor(tool.name);
                            const isDarkIcon = [
                              "Next.js",
                              "Flask",
                              "Expo",
                            ].includes(tool.name);

                            return (
                              <div
                                key={`${setIndex}-${tool.name}-${index}`}
                                className="relative group"
                              >
                                {/* Shadow layers */}
                                <div className="absolute inset-0 bg-card border border-border rounded-lg transform translate-x-2 translate-y-2 opacity-20"></div>
                                <div className="absolute inset-0 bg-card border border-border rounded-lg transform translate-x-1 translate-y-1 opacity-40"></div>

                                {/* Main card */}
                                <div className="relative bg-card border border-border rounded-lg p-4 w-32 h-20 flex flex-col items-center justify-center gap-2 transition-all duration-300 group-hover:shadow-lg">
                                  <div
                                    className={`p-1 rounded-md ${
                                      isDarkIcon && isDark ? "bg-white" : ""
                                    }`}
                                  >
                                    <IconComponent
                                      className="w-6 h-6"
                                      style={{ color: brandColor }}
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <span className="text-xs font-medium text-foreground text-center leading-tight">
                                    {tool.name}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Layer 2 - Moving right to left */}
                <div className="relative">
                  <div className="flex gap-4 animate-scroll-left">
                    {[...Array(3)].map((_, setIndex) => (
                      <div key={setIndex} className="flex gap-4 shrink-0">
                        {Object.values(toolCategories)
                          .slice(3)
                          .flatMap(({ tools }) => tools)
                          .map((tool, index) => {
                            const IconComponent = tool.icon;
                            const getBrandColor = (toolName: string) => {
                              const colors: { [key: string]: string } = {
                                React: "#61DAFB",
                                TypeScript: "#3178C6",
                                JavaScript: "#F7DF1E",
                                Python: "#3776AB",
                                Swift: "#FA7343",
                                "C++": "#00599C",
                                Svelte: "#FF3E00",
                                "Next.js": "#000000",
                                "Tailwind CSS": "#06B6D4",
                                "Node.js": "#339933",
                                Flask: "#000000",
                                Supabase: "#3ECF8E",
                                SQLite: "#003B57",
                                "React Native": "#61DAFB",
                                Flutter: "#02569B",
                                Expo: "#000020",
                                Git: "#F05032",
                                AWS: "#FF9900",
                                Vite: "#646CFF",
                                NGINX: "#009639",
                                Figma: "#F24E1E",
                              };
                              return colors[toolName] || "#6B7280";
                            };

                            const brandColor = getBrandColor(tool.name);
                            const isDarkIcon = [
                              "Next.js",
                              "Flask",
                              "Expo",
                            ].includes(tool.name);

                            return (
                              <div
                                key={`${setIndex}-${tool.name}-${index}`}
                                className="relative group"
                              >
                                {/* Shadow layers */}
                                <div className="absolute inset-0 bg-card border border-border rounded-lg transform translate-x-2 translate-y-2 opacity-20"></div>
                                <div className="absolute inset-0 bg-card border border-border rounded-lg transform translate-x-1 translate-y-1 opacity-40"></div>

                                {/* Main card */}
                                <div className="relative bg-card border border-border rounded-lg p-4 w-32 h-20 flex flex-col items-center justify-center gap-2 transition-all duration-300 group-hover:shadow-lg">
                                  <div
                                    className={`p-1 rounded-md ${
                                      isDarkIcon && isDark ? "bg-white" : ""
                                    }`}
                                  >
                                    <IconComponent
                                      className="w-6 h-6"
                                      style={{ color: brandColor }}
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <span className="text-xs font-medium text-foreground text-center leading-tight">
                                    {tool.name}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fade overlays */}
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="border-t border-border relative z-10 bg-background"
        role="contentinfo"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-8 text-center">
          <p className="text-sm text-muted-foreground font-sans">
            © {new Date().getFullYear()} Jacob Slunga
          </p>
        </div>
      </footer>
    </div>
  );
}
