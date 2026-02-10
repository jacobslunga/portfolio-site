"use client";

import { X, ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  liveLink?: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "LiU Tentor",
    description: "Exam archive for students at Linköping University",
    liveLink: "https://liutentor.se",
    githubLink: "https://github.com/jacobslunga/liu-tentor-radix",
  },
  {
    id: 2,
    title: "Cami",
    description: "A CLI tool where AI writes your commits.",
    githubLink: "https://github.com/jacobslunga/cami-cli",
  },
];

export default function ProjectsDialog({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (o: boolean) => void;
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start pt-10 justify-center bg-white/80 backdrop-blur-md dark:bg-black/80"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-sm p-8 mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-baseline mb-12">
          <h2 className="text-sm font-medium tracking-widest uppercase opacity-50">
            Projects
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:opacity-50 cursor-pointer transition-opacity"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </header>

        <ul className="space-y-10">
          {projects.map((project) => (
            <li key={project.id} className="group">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-semibold tracking-tight">
                  {project.title}
                </h3>
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-500"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-500"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                {project.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
