import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

interface Project {
  id: number;
  name: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
  status: string;
  featured: boolean;
  stars: number;
  forks: number;
  language: string;
  logo?: string;
}

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "Completed":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <motion.div
      ref={ref}
      className="group cursor-default flex-shrink-0 w-80"
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="h-full border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden bg-gradient-to-br from-card to-card/50 relative">
        <div className="p-4 space-y-3 h-full flex flex-col">
          {/* Compact Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              {project.logo && (
                <motion.div
                  className="w-8 h-8 rounded-md bg-muted border border-border/50 flex items-center justify-center p-1 flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={project.logo}
                    alt={`${project.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              )}
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-serif font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                  {project.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    {project.language}
                  </span>
                  {project.stars > 0 && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="w-3 h-3" />
                      {project.stars}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <motion.div
              className={`px-2 py-1 rounded-full text-xs font-medium border flex-shrink-0 ${getStatusColor(
                project.status
              )}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {project.status}
            </motion.div>
          </div>

          {/* Compact Description */}
          <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
            {project.description}
          </p>

          {/* Compact Technologies */}
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 4).map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                className="px-2 py-0.5 bg-muted text-xs rounded-xl border border-border/50 hover:bg-primary/10 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  duration: 0.3,
                  delay: index * 0.1 + 0.3 + techIndex * 0.05,
                }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 bg-muted/50 text-xs rounded border border-border/30 text-muted-foreground">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Compact Action Buttons */}
          <div className="flex gap-2 pt-2 border-t border-border/30">
            {project.githubUrl && project.githubUrl !== "#" && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 group/btn h-8 text-xs"
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                <GitHubLogoIcon className="w-3 h-3 mr-1" />
                Code
                <ExternalLink className="w-2.5 h-2.5 ml-auto opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </Button>
            )}

            {project.liveUrl && (
              <Button
                size="sm"
                className="flex-1 group/btn h-8 text-xs"
                onClick={() => window.open(project.liveUrl, "_blank")}
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                Demo
                <ArrowUpRight className="w-2.5 h-2.5 ml-auto opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
