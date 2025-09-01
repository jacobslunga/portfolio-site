import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useState } from "react";

interface Experience {
  id: string;
  title: string;
  company: string;
  companyUrl: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
  status?: "upcoming" | "current" | "completed";
  logoPath: string;
  logoNeedsBackground?: boolean;
}

const experiences: Experience[] = [
  {
    id: "axis",
    title: "Software Engineer Internship",
    company: "Axis Communications",
    companyUrl: "https://axis.com",
    duration: "Summer 2025",
    location: "Linköping, Sweden",
    description:
      "Worked on an internal tool. I learned a lot about Git and how to collaborate in bigger codebases.",
    technologies: ["Swift", "Mob programming"],
    status: "upcoming",
    logoPath: "/logos/axis.png",
    logoNeedsBackground: true,
  },
  {
    id: "liu-ta",
    title: "Teaching Assistant (Amanuens)",
    company: "Linköping University",
    companyUrl: "https://liu.se",
    duration: "Aug 2024 - Jan 2025",
    location: "Linköping, Sweden",
    description:
      "Assisted students in TDDE18 Programming (C++) by guiding them through concepts and lab assignments.",
    technologies: ["C++", "Teaching", "Debugging"],
    status: "current",
    logoPath: "/logos/liu.png",
  },
  {
    id: "dyno",
    title: "Web Developer",
    company: "Dyno Robotics",
    companyUrl: "https://dynorobotics.se",
    duration: "Jun 2024 - Sep 2024",
    location: "Linköping, Sweden",
    description:
      "Developed a web-based platform using React, TypeScript, and Supabase for farmers to manage self-driving tractors.",
    technologies: ["React", "TypeScript", "Supabase"],
    status: "completed",
    logoPath: "/logos/dyno.jpeg",
  },
  {
    id: "skill",
    title: "Programming Coach",
    company: "Skill",
    companyUrl: "https://skill.se",
    duration: "Summer 2023 & 2024",
    location: "Linköping, Sweden",
    description:
      "Taught programming to children during 3-week summer camps, introducing them to coding concepts and inspiring a love for technology.",
    technologies: ["Python", "JavaScript", "Scratch"],
    status: "completed",
    logoPath: "/logos/skill.svg",
  },
];

export default function WorkPage() {
  useScrollToTop();
  const [activeExperience, setActiveExperience] = useState<string | null>(
    "axis"
  );

  const toggleExperience = (id: string) => {
    setActiveExperience(activeExperience === id ? null : id);
  };

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-start px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl w-full space-y-6 sm:space-y-8">
        <div className="text-center space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            My Work Experience
          </h1>
          <p className="text-lg sm:text-xl text-foreground/70">
            A journey through my professional development and learning
            experiences
          </p>
        </div>

        <div className="space-y-4">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleExperience(experience.id)}
                className="w-full cursor-pointer px-6 py-4 text-left bg-background hover:bg-secondary/50 transition-colors duration-200 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  {/* Company Logo */}
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 ${
                      experience.logoNeedsBackground ? "bg-white p-2" : ""
                    }`}
                  >
                    <img
                      src={experience.logoPath}
                      alt={`${experience.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {experience.title} @ {experience.company}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-foreground/60">
                        {experience.duration}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-foreground/40">
                  {activeExperience === experience.id ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </div>
              </button>

              {/* Accordion Content */}
              {activeExperience === experience.id && (
                <div className="px-6 py-4 border-t border-border bg-secondary/20">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <a
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-foreground hover:underline font-medium"
                      >
                        {experience.company}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      <span className="text-foreground/60">
                        • {experience.location}
                      </span>
                    </div>

                    <p className="text-foreground/80 leading-relaxed">
                      {experience.description}
                    </p>

                    <div>
                      <h4 className="text-sm font-medium text-foreground/70 mb-2">
                        Technologies & skills:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            className="px-3 py-1 text-sm bg-accent text-accent-foreground rounded-full"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
