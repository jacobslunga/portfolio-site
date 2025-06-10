import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Mail, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const projects = [
  {
    name: "LiU Tentor",
    description:
      "An exam archive for Linköping University focusing on better UX. Over 3,500 students use it every exam period to access past exams and study materials.",
    githubUrl: "https://github.com/jacobslunga/liu-tentor-radix",
    liveUrl: "https://liutentor.se",
    technologies: ["React", "Vite", "Supabase", "PDF.js"],
    status: "Live",
    metrics: ["3,500+ active users", "350+ courses covered"],
    highlights: [
      "Most popular exam archive at LiU",
      "Built responsive PDF viewer",
    ],
    emoji: "📚",
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
    emoji: "👗",
  },
  {
    name: "MEJRA",
    description:
      "Bachelor thesis project for SAAB developing an advanced requirement management system. Focuses on visualization of complex system interactions and dependencies.",
    technologies: ["React", "Flask", "SQLite", "Reagraph", "OSCAL"],
    status: "Completed",
    metrics: ["Enterprise-level", "OSCAL compliance"],
    highlights: ["Complex data visualization", "Government security standards"],
    emoji: "🔧",
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
    emoji: "📹",
  },
  {
    title: "Teaching Assistant (Amanuens)",
    company: "Linköping University",
    period: "Aug 2024 - Jan 2025",
    description:
      "Assisted students in TDDE18 Programming (C++) by guiding them through C++ programming concepts and lab assignments, explaining complex topics and providing troubleshooting support.",
    technologies: ["C++", "Teaching", "Debugging"],
    impact: "Helped 100+ students master C++ fundamentals",
    emoji: "👨‍🏫",
  },
  {
    title: "Web Developer",
    company: "Dyno Robotics",
    period: "Jun 2024 - Sep 2024",
    description:
      "Developed a web-based platform using React, TypeScript, and Supabase for farmers to manage their self-driving tractors.",
    technologies: ["React", "TypeScript", "Supabase", "Real-time Updates"],
    impact: "Built tractor management dashboard for autonomous farming",
    emoji: "🚜",
  },
  {
    title: "Programming Coach",
    company: "Skill",
    period: "Summer 2023 & 2024",
    description:
      "Taught programming to children during 3-week summer camps, introducing them to coding concepts and inspiring a love for technology through hands-on projects and activities.",
    technologies: ["Python", "JavaScript", "Scratch", "Game Development"],
    impact: "Inspired 50+ kids to start their coding journey",
    emoji: "🎮",
  },
];

const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "JavaScript",
  "Node.js",
  "Flask",
  "Supabase",
  "SQLite",
  "Python",
  "React Native",
  "Expo",
  "Swift",
  "Git",
  "AWS",
  "Vite",
  "C++",
];

export default function HomePage() {
  const { isDark, toggleTheme } = useTheme();
  const [showFloatingBar, setShowFloatingBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Hide floating bar when user is within 200px of the bottom
      const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
      setShowFloatingBar(distanceFromBottom > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getStatusBadgeStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case "live":
        return "text-xs text-green-700 bg-green-100 border border-green-200 dark:text-green-300 dark:bg-green-900/30 dark:border-green-800";
      case "completed":
        return "text-xs text-blue-700 bg-blue-100 border border-blue-200 dark:text-blue-300 dark:bg-blue-900/30 dark:border-blue-800";
      case "in progress":
        return "text-xs text-yellow-700 bg-yellow-100 border border-yellow-200 dark:text-yellow-300 dark:bg-yellow-900/30 dark:border-yellow-800";
      case "planning":
        return "text-xs text-purple-700 bg-purple-100 border border-purple-200 dark:text-purple-300 dark:bg-purple-900/30 dark:border-purple-800";
      default:
        return "text-xs text-muted-foreground bg-muted border border-border";
    }
  };

  return (
    <div className="space-y-16">
      {/* Header with name and theme toggle */}
      <header className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-2 sm:mb-4">
            Jacob Slunga
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Software Developer & Computer Science Student
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleTheme}
          className="p-2 sm:p-3 hover:bg-muted/50 transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="h-5 w-5 sm:h-6 sm:w-6" />
          ) : (
            <Moon className="h-5 w-5 sm:h-6 sm:w-6" />
          )}
        </Button>
      </header>

      {/* About */}
      <section>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6 border-b border-primary/20 pb-3">
          About
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p className="text-foreground">
            Hey! I'm Jacob Slunga, a{" "}
            <span className="text-foreground font-medium border-b border-primary/30 hover:border-primary transition-colors cursor-default">
              design-focused developer
            </span>{" "}
            and computer science student at{" "}
            <a
              href="https://liu.se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary transition-colors"
            >
              Linköping University
            </a>
            . I love creating{" "}
            <span className="text-foreground font-medium border-b border-primary/30 hover:border-primary transition-colors cursor-default">
              digital experiences
            </span>{" "}
            that actually make sense to people.
          </p>
          <p>
            My thing is{" "}
            <span className="text-primary hover:text-primary/80 font-medium transition-colors cursor-default">
              user-centered design
            </span>
            . Teaching over{" "}
            <span className="text-foreground font-medium border-b border-primary/30 hover:border-primary transition-colors cursor-default">
              150+ students and kids
            </span>{" "}
            has taught me a lot about how people actually think and use
            technology. Turns out, watching someone struggle with your interface
            is the best way to learn what works and what doesn't.
          </p>
          <p>
            I'm based in{" "}
            <span className="text-foreground font-medium border-b border-primary/30 hover:border-primary transition-colors cursor-default">
              Linköping, Sweden
            </span>
            , and I enjoy taking messy problems and turning them into clean,
            simple solutions. Whether it's fixing an exam archive that{" "}
            <span className="text-foreground font-medium border-b border-primary/30 hover:border-primary transition-colors cursor-default">
              3,500+ students
            </span>{" "}
            rely on or building dashboards for self-driving tractors, I always
            start by asking: what's the{" "}
            <span className="text-primary hover:text-primary/80 font-medium transition-colors cursor-default">
              real problem
            </span>{" "}
            we're trying to solve?
          </p>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6 border-b border-primary/20 pb-3">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 bg-muted rounded-full text-sm sm:text-xs text-muted-foreground hover:bg-muted/80 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-8 border-b border-primary/20 pb-3">
          Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="border-b border-border pb-8 last:border-b-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{project.emoji}</span>
                  <h3 className="text-xl font-medium">{project.name}</h3>
                </div>
                <span
                  className={`px-3 py-1 rounded-full font-medium text-sm sm:text-xs self-start ${getStatusBadgeStyle(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-muted-foreground mb-3">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="text-xs px-2 py-1 bg-secondary/20 text-secondary-foreground rounded border border-secondary/30"
                  >
                    📊 {metric}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <div className="mb-3">
                <p className="text-sm font-medium text-foreground mb-1">
                  Key Highlights:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.githubUrl && project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground underline"
                  >
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground underline"
                  >
                    Live Site
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-8 border-b border-primary/20 pb-3">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.title + exp.company}
              className="border-b border-border pb-8 last:border-b-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-1 sm:gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{exp.emoji}</span>
                    <h3 className="text-xl font-medium">{exp.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground sm:text-right sm:shrink-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-muted-foreground mb-3">{exp.description}</p>

              {/* Impact */}
              <div className="mb-3 p-3 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm font-medium text-primary mb-1">Impact:</p>
                <p className="text-sm text-muted-foreground">{exp.impact}</p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border pt-8 text-center text-muted-foreground">
        <p className="text-sm">
          © {new Date().getFullYear()} Jacob Slunga. Built with React &
          TypeScript.
        </p>
      </footer>

      {/* Floating Sticky Action Bar */}
      <div
        className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ${
          showFloatingBar
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <div className="backdrop-blur-md bg-background/80 border border-border/50 rounded-full px-4 py-3 shadow-lg shadow-black/10">
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                window.open("https://github.com/jacobslunga", "_blank")
              }
              className="rounded-full border-border/50 bg-background/50 hover:bg-primary/10 hover:border-primary/30 transition-all duration-200"
            >
              <GitHubLogoIcon className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">GitHub</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/cv.pdf";
                link.download = "Jacob_Slunga_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="rounded-full border-border/50 bg-background/50 hover:bg-primary/10 hover:border-primary/30 transition-all duration-200"
            >
              <FileText className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Resume</span>
            </Button>
            <Button
              size="sm"
              onClick={() => window.open("mailto:jacobslunga21@yahoo.se")}
              className="rounded-full bg-primary hover:bg-primary/90 transition-all duration-200"
            >
              <Mail className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Contact</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
