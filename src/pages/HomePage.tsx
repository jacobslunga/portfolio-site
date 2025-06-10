import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Mail, FileText, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "LiU Tentor",
    description:
      "An exam archive for Linköping University focusing on better UX. Over 3,500 students use it every exam period to access past exams and study materials.",
    githubUrl: "https://github.com/jacobslunga/liu-tentor-radix",
    liveUrl: "https://liutentor.se",
    technologies: ["React", "Vite", "Supabase", "PDF.js"],
    status: "Live",
  },
  {
    name: "GotStyle",
    description:
      "A React Native app for sharing daily outfit inspiration. Users upload their OOTD (Outfit of the Day) once daily to showcase style and discover fashion inspiration.",
    githubUrl: "https://github.com/jacobslunga/GotStyle",
    technologies: ["React Native", "Flask", "AWS S3", "CloudFront CDN"],
    status: "Completed",
  },
  {
    name: "MEJRA",
    description:
      "Bachelor thesis project for SAAB developing an advanced requirement management system. Focuses on visualization of complex system interactions and dependencies.",
    technologies: ["React", "Flask", "SQLite", "Reagraph", "OSCAL"],
    status: "Completed",
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Axis Communications",
    period: "Summer 2025",
    description:
      "Upcoming summer internship at Axis Communications, developing a web application for an internal testing platform.",
  },
  {
    title: "Teaching Assistant (Amanuens)",
    company: "Linköping University",
    period: "Aug 2024 - Jan 2025",
    description:
      "Assisted students in TDDE18 Programming (C++) by guiding them through C++ programming concepts and lab assignments, explaining complex topics and providing troubleshooting support.",
  },
  {
    title: "Web Developer",
    company: "Dyno Robotics",
    period: "Jun 2024 - Sep 2024",
    description:
      "Developed a web-based platform using React, TypeScript, and Supabase for farmers to manage their self-driving tractors.",
  },
  {
    title: "Programming Coach",
    company: "Skill",
    period: "Summer 2023 & 2024",
    description:
      "Taught programming to children during 3-week summer camps, introducing them to coding concepts and inspiring a love for technology through hands-on projects and activities.",
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
            Hi! I'm Jacob Slunga, a passionate developer and computer science
            student at{" "}
            <a
              href="https://liu.se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary transition-colors"
            >
              Linköping University
            </a>
            . I specialize in modern web development with a focus on{" "}
            <span className="text-foreground font-medium border-b border-primary/30 hover:border-primary transition-colors cursor-default">
              user experience
            </span>{" "}
            and solving real-world problems through technology.
          </p>
          <p>
            Currently based in{" "}
            <span className="text-foreground font-medium border-b border-primary/30 hover:border-primary transition-colors cursor-default">
              Linköping, Sweden
            </span>
            . My expertise spans frontend development with{" "}
            <span className="text-primary hover:text-primary/80 font-medium transition-colors cursor-default">
              React and TypeScript
            </span>
            , mobile development with{" "}
            <span className="text-primary hover:text-primary/80 font-medium transition-colors cursor-default">
              React Native
            </span>
            , and full-stack solutions. I've built applications used by{" "}
            <span className="text-foreground font-medium border-b border-primary/30 hover:border-primary transition-colors cursor-default">
              thousands of students
            </span>{" "}
            and worked on enterprise-level requirement management systems.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <Button
            variant="outline"
            onClick={() =>
              window.open("https://github.com/jacobslunga", "_blank")
            }
            className="justify-center sm:justify-start"
          >
            GitHub <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/cv.pdf";
              link.download = "Jacob_Slunga_Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="justify-center sm:justify-start"
          >
            <FileText className="w-4 h-4 mr-2" />
            Resume
          </Button>
          <Button
            onClick={() => window.open("mailto:jacobslunga21@yahoo.se")}
            className="justify-center sm:justify-start"
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact
          </Button>
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
                <h3 className="text-xl font-medium">{project.name}</h3>
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
                  <h3 className="text-xl font-medium">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground sm:text-right sm:shrink-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-muted-foreground">{exp.description}</p>
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
    </div>
  );
}
