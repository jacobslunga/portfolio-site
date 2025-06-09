import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Code2,
  Briefcase,
  User,
  MessageCircle,
  Wrench,
  ArrowUpRight,
} from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
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
import Timeline from "@/components/TimeLine";
import { motion } from "framer-motion";

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
    status: "Completed",
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
  <div className="relative mb-8">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 bg-primary/10 rounded-lg">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h2 className="text-2xl font-serif font-semibold text-foreground">
        <ScrambleText text={title} delay={200} />
      </h2>
    </div>
    <div className="ml-12 w-20 h-px bg-gradient-to-r from-primary to-primary/30" />
  </div>
);

export default function HomePage() {
  return (
    <div className="w-full flex flex-col space-y-12 sm:space-y-16 px-4 sm:px-6 lg:px-0">
      {/* About Section */}
      <section className="w-full max-w-4xl mx-auto">
        <SectionHeader icon={User} title="About" />

        <div className="space-y-4 text-base leading-relaxed">
          <p>
            <ScrambleText
              text="Hi! I'm Jacob Slunga, a passionate developer and computer science student at Linköping University. I specialize in modern web development with a focus on user experience and solving real-world problems through technology."
              delay={200}
            />
          </p>
          <p className="text-muted-foreground">
            <ScrambleText
              text="Currently based in Linköping, Sweden. My expertise spans frontend development with React and TypeScript, mobile development with React Native, and full-stack solutions. I've built applications used by thousands of students and worked on enterprise-level requirement management systems."
              delay={400}
            />
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <Button
              variant="outline"
              className="group"
              onClick={() =>
                window.open("https://github.com/jacobslunga", "_blank")
              }
            >
              <GitHubLogoIcon className="w-4 h-4 mr-2" />
              GitHub
              <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button
              onClick={() => window.open("mailto:jacobslunga21@yahoo.se")}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full max-w-4xl mx-auto">
        <SectionHeader icon={Wrench} title="Skills" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, techs]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-serif font-medium text-primary border-b border-primary/20 pb-2">
                {category}
              </h3>
              <div className="space-y-3">
                {techs.map(({ name, icon: Icon, color }) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 p-3 bg-card rounded-lg hover:bg-muted/50 transition-colors cursor-default border border-border/50"
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" style={{ color }} />
                    <span className="text-sm">
                      <ScrambleText text={name} delay={200} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section className="w-full max-w-6xl mx-auto">
        <SectionHeader icon={Code2} title="Featured Projects" />

        {/* Projects Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Building solutions that matter
            </span>
          </div>
        </motion.div>

        {/* Horizontal Scrolling Projects */}
        <div className="w-full overflow-x-auto">
          <div className="flex gap-4 pb-4 px-4">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* View All Projects Link */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            variant="outline"
            className="group"
            onClick={() =>
              window.open("https://github.com/jacobslunga", "_blank")
            }
          >
            <GitHubLogoIcon className="w-4 h-4 mr-2" />
            View All Projects
            <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full max-w-4xl mx-auto">
        <SectionHeader icon={Briefcase} title="Experience" />
        <Timeline experiences={experiences} />
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-4xl mx-auto">
        <SectionHeader icon={MessageCircle} title="Let's Connect" />

        <div className="relative">
          <Card className="p-8 bg-gradient-to-br from-card to-muted/30 border border-border/50">
            <div className="text-center space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-medium">
                  Ready to collaborate?
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  I'm always interested in discussing new opportunities,
                  innovative projects, or just having a chat about technology.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="group min-w-[160px]"
                  onClick={() => window.open("mailto:jacobslunga21@yahoo.se")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/jacob-slunga-9121131a2/",
                        "_blank"
                      )
                    }
                  >
                    <LinkedInLogoIcon className="w-4 h-4 mr-2" />
                    LinkedIn
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="group"
                    onClick={() =>
                      window.open("https://github.com/jacobslunga", "_blank")
                    }
                  >
                    <GitHubLogoIcon className="w-4 h-4 mr-2" />
                    GitHub
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </div>
              </div>

              <div className="pt-6 border-t border-border/30">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Available for opportunities</span>
                  </div>
                  <div className="hidden sm:block w-px h-4 bg-border"></div>
                  <span>Based in Linköping, Sweden</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
