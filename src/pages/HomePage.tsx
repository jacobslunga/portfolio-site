import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Code2,
  Briefcase,
  User,
  MessageCircle,
  Terminal,
  Wrench,
} from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { ScrambleText } from "@/components/ScrambleText";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiFlask,
  SiSupabase,
  SiSqlite,
  SiGit,
  SiAmazon,
  SiVite,
  SiExpo,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiSwift,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    name: "LiU Tentor",
    description:
      "An exam archive for Linköping University focusing on better UX. Over 3,500 students use it every exam period to access past exams and study materials.",
    githubUrl: "https://github.com/jacobslunga/liu-tentor-radix",
    liveUrl: "https://liutentor.se",
    technologies: ["React", "Vite", "Supabase", "PDF.js"],
    status: "Live",
    featured: true,
    stars: 0,
    forks: 0,
    language: "TypeScript",
    logo: "/logos/liu-tentor.png",
  },
  {
    id: 2,
    name: "GotStyle",
    description:
      "A React Native app for sharing daily outfit inspiration. Users upload their OOTD (Outfit of the Day) once daily to showcase style and discover fashion inspiration.",
    githubUrl: "https://github.com/jacobslunga/GotStyle",
    technologies: ["React Native", "Flask", "AWS S3", "CloudFront CDN"],
    status: "Development",
    featured: true,
    stars: 0,
    forks: 0,
    language: "TypeScript",
  },
  {
    id: 3,
    name: "MEJRA",
    description:
      "Bachelor thesis project for SAAB developing an advanced requirement management system. Focuses on visualization of complex system interactions and dependencies.",
    githubUrl: "#",
    technologies: ["React", "Flask", "SQLite", "Reagraph", "OSCAL"],
    status: "Completed",
    featured: true,
    stars: 0,
    forks: 0,
    language: "TypeScript",
    logo: "/logos/mejra.png",
  },
];

const experiences = [
  {
    id: 1,
    title: "Software Developer Intern",
    company: "Axis Communications",
    location: "Linköping, Sweden",
    period: "Summer 2025",
    description:
      "Upcoming summer internship at Axis Communications, developing a web application for an internal testing platform.",
    technologies: ["TBD"],
    type: "Internship",
    logo: "/logos/axis.png",
  },
  {
    id: 2,
    title: "Teaching Assistant (Amanuens)",
    company: "Linköping University",
    location: "Linköping, Sweden",
    period: "Aug 2024 - Jan 2025",
    description:
      "Assisted students in the TDDE18 course by guiding them through C++ programming concepts and lab assignments. Explained complex topics, facilitated lab sessions, and provided troubleshooting support.",
    technologies: ["C++", "Programming Fundamentals", "Teaching"],
    type: "Part-time",
    logo: "/logos/liu.jpeg",
  },
  {
    id: 3,
    title: "Web Developer",
    company: "Dyno Robotics",
    location: "Linköping, Sweden",
    period: "Jun 2024 - Sep 2024",
    description:
      "Developed a web-based platform using React, TypeScript, and Supabase for farmers to manage their self-driving tractors. The platform allows users to monitor and edit tasks, providing comprehensive tractor management solutions.",
    technologies: ["React", "TypeScript", "Supabase", "Web Development"],
    type: "Internship",
    logo: "/logos/dyno.jpeg",
  },
  {
    id: 4,
    title: "Programming Coach",
    company: "Skill",
    location: "Linköping, Sweden",
    period: "May 2023 - Jul 2024",
    description:
      "Continued teaching and mentoring in programming, assisting in organizing camp activities to create an engaging learning environment, and inspiring a love for technology among participants.",
    technologies: [
      "Programming Education",
      "Mentoring",
      "Python",
      "JavaScript",
    ],
    type: "Part-time",
    logo: "/logos/skill.jpeg",
  },
];

const skills = {
  Frontend: [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  ],
  Backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Flask", icon: SiFlask, color: "#000000" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { name: "SQLite", icon: SiSqlite, color: "#003B57" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
  ],
  Mobile: [
    { name: "React Native", icon: SiReact, color: "#61DAFB" },
    { name: "Expo", icon: SiExpo, color: "#000020" },
    { name: "Swift", icon: SiSwift, color: "#FF6B00" },
  ],
  Tools: [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "AWS", icon: SiAmazon, color: "#FF9900" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
  ],
};

const SectionHeader = ({ icon: Icon, title }: { icon: any; title: string }) => (
  <div className="relative mb-6">
    <div className="flex items-center gap-2 mb-1">
      <div className="p-1 bg-primary/10 rounded-none">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <h2 className="text-lg font-mono font-semibold text-foreground">
        <ScrambleText text={title} delay={200} />
      </h2>
    </div>
    <div className="ml-6 w-16 h-px bg-primary" />
  </div>
);

export default function HomePage() {
  return (
    <div className="w-full flex flex-col space-y-8 sm:space-y-12 px-4 sm:px-6 lg:px-0">
      {/* About Section */}
      <section className="w-full max-w-4xl mx-auto">
        <SectionHeader icon={User} title="About" />

        <div className="space-y-3 text-sm font-mono">
          <p className="leading-relaxed">
            <ScrambleText
              text="Hi! I'm Jacob Slunga, a passionate developer and computer science student at Linköping University. I specialize in modern web development with a focus on user experience and solving real-world problems through technology."
              delay={200}
            />
          </p>
          <p className="text-foreground/70 leading-relaxed">
            <ScrambleText
              text="Currently based in Linköping, Sweden. My expertise spans frontend development with React and TypeScript, mobile development with React Native, and full-stack solutions. I've built applications used by thousands of students and worked on enterprise-level requirement management systems."
              delay={400}
            />
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              className="h-7 text-xs font-mono rounded-none"
              onClick={() =>
                window.open("https://github.com/jacobslunga", "_blank")
              }
            >
              <GitHubLogoIcon className="w-3 h-3 mr-1" />
              GitHub
            </Button>
            <Button
              size="sm"
              className="h-7 text-xs font-mono rounded-none"
              onClick={() => window.open("mailto:jacobslunga21@yahoo.se")}
            >
              Contact
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full max-w-4xl mx-auto">
        <SectionHeader icon={Wrench} title="Skills" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {Object.entries(skills).map(([category, techs]) => (
            <div key={category} className="space-y-3">
              <h3 className="text-sm font-mono text-primary font-semibold border-b border-primary/30 pb-1">
                {category}
              </h3>
              <div className="space-y-2">
                {techs.map(({ name, icon: Icon, color }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 text-xs font-mono bg-muted px-2 py-1.5 rounded-none hover:bg-primary/10 transition-colors cursor-default"
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" style={{ color }} />
                    <ScrambleText text={name} delay={200} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full max-w-4xl mx-auto">
        <SectionHeader icon={Code2} title="Projects" />
        <div className="space-y-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="w-full max-w-4xl mx-auto">
        <SectionHeader icon={Briefcase} title="Experience" />
        <div className="space-y-4">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </section>

      {/* Contact Section - Terminal/ASCII Style */}
      <section className="w-full max-w-4xl mx-auto">
        <SectionHeader icon={MessageCircle} title="Contact" />

        <div className="relative">
          {/* Zigzag pattern border - hidden on mobile for cleaner look */}
          <div className="relative">
            {/* Top zigzag */}
            <div className="absolute -top-2 left-0 right-0 h-4 overflow-hidden hidden sm:block">
              <div
                className="w-full h-4 bg-primary opacity-20"
                style={{
                  clipPath:
                    "polygon(0 100%, 8px 0, 16px 100%, 24px 0, 32px 100%, 40px 0, 48px 100%, 56px 0, 64px 100%, 72px 0, 80px 100%, 88px 0, 96px 100%, 104px 0, 112px 100%, 120px 0, 128px 100%, 136px 0, 144px 100%, 152px 0, 160px 100%, 168px 0, 176px 100%, 184px 0, 192px 100%, 200px 0, 100% 100%)",
                }}
              ></div>
            </div>

            {/* Bottom zigzag */}
            <div className="absolute -bottom-2 left-0 right-0 h-4 overflow-hidden hidden sm:block">
              <div
                className="w-full h-4 bg-primary opacity-20"
                style={{
                  clipPath:
                    "polygon(0 0, 8px 100%, 16px 0, 24px 100%, 32px 0, 40px 100%, 48px 0, 56px 100%, 64px 0, 72px 100%, 80px 0, 88px 100%, 96px 0, 104px 100%, 112px 0, 120px 100%, 128px 0, 136px 100%, 144px 0, 152px 100%, 160px 0, 168px 100%, 176px 0, 184px 100%, 192px 0, 200px 100%, 100% 0)",
                }}
              ></div>
            </div>

            <Card className="relative border-2 border-primary bg-background rounded-none">
              {/* Terminal-like header */}
              <div className="flex items-center justify-between p-3 bg-muted border-b-2 border-primary">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-primary" />
                  <span className="text-xs sm:text-sm font-mono font-semibold truncate">
                    jacob@portfolio:~$
                  </span>
                </div>
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded-none"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-none"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-none"></div>
                </div>
              </div>

              {/* Terminal content */}
              <div className="p-3 sm:p-4 space-y-3 font-mono text-xs sm:text-sm">
                <div className="space-y-1">
                  <div className="text-primary">
                    <span className="text-muted-foreground">$</span> cat
                    contact.txt
                  </div>
                  <div className="pl-2 border-l-2 border-primary/30 space-y-1 text-xs">
                    <div>
                      STATUS: <span className="text-green-500">AVAILABLE</span>
                    </div>
                    <div>LOCATION: Linköping, Sweden</div>
                    <div className="hidden sm:block">
                      INTERESTS: React, TypeScript, Coffee ☕
                    </div>
                    <div className="sm:hidden">
                      INTERESTS: React, TS, Coffee ☕
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-primary">
                    <span className="text-muted-foreground">$</span> ls -la
                    ./contact/
                  </div>
                  <div className="pl-2 space-y-1 text-xs">
                    <div className="hidden sm:block">
                      drwxr-xr-x 3 jacob jacob 4096{" "}
                      {new Date().toLocaleDateString()} .
                    </div>
                    <div>
                      -rw-r--r-- 1 jacob jacob 256{" "}
                      <span className="hidden sm:inline">
                        {new Date().toLocaleDateString()}
                      </span>
                      <span className="sm:hidden">today</span> email.link
                    </div>
                    <div>
                      -rw-r--r-- 1 jacob jacob 128{" "}
                      <span className="hidden sm:inline">
                        {new Date().toLocaleDateString()}
                      </span>
                      <span className="sm:hidden">today</span> github.link
                    </div>
                    <div>
                      -rw-r--r-- 1 jacob jacob 192{" "}
                      <span className="hidden sm:inline">
                        {new Date().toLocaleDateString()}
                      </span>
                      <span className="sm:hidden">today</span> linkedin.link
                    </div>
                  </div>
                </div>

                {/* Command buttons */}
                <div className="space-y-2">
                  <div className="text-primary">
                    <span className="text-muted-foreground">$</span>{" "}
                    ./connect.sh
                  </div>
                  {/* Mobile: Stack buttons vertically */}
                  <div className="flex flex-col sm:grid sm:grid-cols-3 gap-2 pl-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 text-xs font-mono rounded-none border-primary hover:bg-primary hover:text-primary-foreground justify-start sm:justify-center"
                      onClick={() =>
                        window.open("mailto:jacobslunga21@yahoo.se")
                      }
                    >
                      <Mail className="w-3 h-3 mr-1" />
                      ./email
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 text-xs font-mono rounded-none border-primary hover:bg-primary hover:text-primary-foreground justify-start sm:justify-center"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/jacob-slunga-9121131a2/",
                          "_blank"
                        )
                      }
                    >
                      <LinkedInLogoIcon className="w-3 h-3 mr-1" />
                      ./linkedin
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 text-xs font-mono rounded-none border-primary hover:bg-primary hover:text-primary-foreground justify-start sm:justify-center"
                      onClick={() =>
                        window.open("https://github.com/jacobslunga", "_blank")
                      }
                    >
                      <GitHubLogoIcon className="w-3 h-3 mr-1" />
                      ./github
                    </Button>
                  </div>
                </div>

                {/* Cursor */}
                <div className="flex items-center">
                  <span className="text-muted-foreground">$</span>
                  <div className="w-2 h-4 bg-primary ml-1 animate-pulse"></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
