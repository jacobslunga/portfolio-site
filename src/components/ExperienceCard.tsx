import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Building } from "lucide-react";

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  type: string;
  logo?: string; // Optional logo
}

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  const isAxis = experience.company === "Axis Communications";

  return (
    <Card className="border-2 border-primary/20 rounded-none hover:border-primary transition-colors bg-background">
      <CardContent className="p-4 space-y-3">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            {/* Optional logo with special handling for Axis */}
            {experience.logo && (
              <div
                className={`w-8 h-8 rounded-none flex items-center justify-center flex-shrink-0 ${
                  isAxis ? "bg-white dark:bg-white p-1" : ""
                }`}
              >
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div className="space-y-1">
              <h3 className="font-mono font-semibold text-foreground">
                {experience.title}
              </h3>
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-xs font-mono text-muted-foreground">
                  <Building className="w-3 h-3" />
                  {experience.company}
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {experience.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {experience.period}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-1 bg-primary/10 rounded-none">
            <span className="text-xs font-mono text-primary">
              {experience.type}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm font-mono text-muted-foreground leading-relaxed">
          {experience.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1">
          {experience.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-xs font-mono rounded-none"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
