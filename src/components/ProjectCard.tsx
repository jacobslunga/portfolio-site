import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
      className="group cursor-default"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="h-full border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden bg-gradient-to-br from-card to-card/50 relative">
        <div className="p-6 space-y-4 h-full flex flex-col">
          {/* Header with Logo and Status */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              {project.logo && (
                <motion.div
                  className="w-12 h-12 rounded-lg bg-muted border border-border/50 flex items-center justify-center p-2"
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
              <div>
                <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
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
              className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                project.status
              )}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {project.status}
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                className="px-2 py-1 bg-muted text-xs rounded-md border border-border/50 hover:bg-primary/10 transition-colors"
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
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-border/30">
            {project.githubUrl && project.githubUrl !== "#" && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 group/btn"
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                Code
                <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </Button>
            )}

            {project.liveUrl && (
              <Button
                size="sm"
                className="flex-1 group/btn"
                onClick={() => window.open(project.liveUrl, "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
                <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
