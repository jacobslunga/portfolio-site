import { useState } from "react";
import {
  Rocket,
  Users,
  Code2,
  Briefcase,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    id: 1,
    title: "Software Developer Intern",
    company: "Axis Communications",
    period: "Summer 2025",
    location: "Linköping, Sweden",
    website: "axis.com",
    description:
      "Upcoming summer internship developing a web application for an internal testing platform.",
    technologies: ["TBD"],
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
      "Assisted students in TDDE18 Programming (C++) by guiding them through concepts and lab assignments.",
    technologies: ["C++", "Teaching", "Debugging"],
    icon: Users,
    logo: "/logos/liu.jpeg",
  },
  {
    id: 3,
    title: "Web Developer",
    company: "Dyno Robotics",
    period: "Jun 2024 - Sep 2024",
    location: "Linköping, Sweden",
    website: "dynorobotics.se",
    description:
      "Developed a web-based platform using React, TypeScript, and Supabase for farmers to manage self-driving tractors.",
    technologies: ["React", "TypeScript", "Supabase"],
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
      "Taught programming to children during 3-week summer camps, introducing them to coding concepts and inspiring a love for technology.",
    technologies: ["Python", "JavaScript", "Scratch"],
    icon: Briefcase,
    logo: "/logos/skill.jpeg",
  },
];

export default function WorkPage() {
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
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center px-6"
      data-section="Work"
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center flex flex-col items-center mb-16">
          <h1 className="text-4xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#FE2C55] to-red-400 mb-4">
            Work
          </h1>
          <p className="text-base text-muted-foreground">
            My professional experience and journey
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-4">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="bg-background border backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ease-in-out"
            >
              {/* Main Card - Always Visible */}
              <div
                className="p-6 cursor-pointer transition-all duration-200 ease-in-out hover:bg-secondary/80"
                onClick={() => toggleRow(experience.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    {/* Company Logo */}
                    <div className="flex-shrink-0">
                      {experience.logo ? (
                        <div
                          className={`w-16 h-16 rounded-xl overflow-hidden flex items-center justify-center p-2 shadow-sm ${
                            experience.company === "Axis Communications"
                              ? "bg-white"
                              : "bg-background"
                          }`}
                        >
                          <img
                            src={experience.logo}
                            alt={`${experience.company} logo`}
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
                          <div className="w-full h-full bg-muted rounded-lg items-center justify-center hidden">
                            <experience.icon className="w-6 h-6 text-muted-foreground" />
                          </div>
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center shadow-sm">
                          <experience.icon className="w-8 h-8 text-muted-foreground" />
                        </div>
                      )}
                    </div>

                    {/* Experience Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {experience.title}{" "}
                        <span className="text-primary">@</span>{" "}
                        {experience.company}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {experience.period}
                      </p>

                      {/* Location and Website - Mobile Layout */}
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          {experience.location}
                        </div>
                        {experience.website && (
                          <a
                            href={`https://${experience.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-3 h-3" />
                            {experience.website}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expand/Collapse Button */}
                  <div className="flex-shrink-0 ml-4">
                    <div className="transition-transform duration-300 ease-in-out">
                      {expandedRows.has(experience.id) ? (
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
                  expandedRows.has(experience.id)
                    ? "max-h-[800px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className={`px-6 pb-6 transition-all duration-500 ease-in-out ${
                    expandedRows.has(experience.id)
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
                        {experience.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-muted/50 rounded-md text-xs text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Note about work experience */}
      <Link to="/projects" className="mt-16">
        <Button variant="secondary" className="flex gap-2">
          <p className="font-medium">View my projects</p>
          <ExternalLink className="w-4 h-4" strokeWidth={3} />
        </Button>
      </Link>
    </div>
  );
}
