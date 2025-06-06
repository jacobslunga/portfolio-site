import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrambleText } from "@/components/ScrambleText";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

interface Project {
  id: number;
  name: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
  status: string;
  featured: boolean;
  language: string;
  logo?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="border-2 border-primary/20 rounded-none hover:border-primary transition-colors bg-background">
      <CardContent className="p-4 space-y-3">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            {/* Optional logo */}
            {project.logo && (
              <img
                src={project.logo}
                alt={`${project.name} logo`}
                className="w-8 h-8 rounded-none object-contain flex-shrink-0"
              />
            )}
            <div className="space-y-1">
              <h3 className="font-mono font-semibold text-foreground">
                <ScrambleText text={project.name} delay={100} />
              </h3>
              <div className="text-xs font-mono text-muted-foreground">
                <ScrambleText text={project.language} delay={200} />
              </div>
            </div>
          </div>
          <div className="px-2 py-1 bg-primary/10 rounded-none">
            <span className="text-xs font-mono text-primary">
              <ScrambleText text={project.status} delay={150} />
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm font-mono text-muted-foreground leading-relaxed">
          <ScrambleText text={project.description} delay={300} />
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-muted text-xs font-mono rounded-none"
            >
              <ScrambleText text={tech} delay={400 + idx * 50} />
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-1">
          {project.githubUrl !== "#" && (
            <Button
              variant="outline"
              size="sm"
              className="h-7 text-xs font-mono rounded-none border-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open(project.githubUrl, "_blank")}
            >
              <GitHubLogoIcon className="w-3 h-3 mr-1" />
              ./code
            </Button>
          )}
          {project.liveUrl && (
            <Button
              size="sm"
              className="h-7 text-xs font-mono rounded-none"
              onClick={() => window.open(project.liveUrl, "_blank")}
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              ./live
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
