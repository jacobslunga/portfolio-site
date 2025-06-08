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
  logo?: string;
}

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  const isAxis = experience.company === "Axis Communications";

  return (
    <Card className="border border-border hover:border-primary/50 transition-colors bg-card">
      <CardContent className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            {/* Optional logo with special handling for Axis */}
            {experience.logo && (
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 border border-border/50 ${
                  isAxis ? "bg-white dark:bg-white p-2" : "bg-muted"
                }`}
              >
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div className="space-y-2">
              <h3 className="text-lg font-serif font-semibold text-foreground">
                {experience.title}
              </h3>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Building className="w-4 h-4" />
                  {experience.company}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {experience.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {experience.period}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-3 py-1 bg-primary/10 rounded-full">
            <span className="text-xs font-medium text-primary">
              {experience.type}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {experience.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-muted text-xs rounded-full border border-border/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
