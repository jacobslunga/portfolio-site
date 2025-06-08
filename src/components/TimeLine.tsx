import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

const TimelineItem = ({
  experience,
  index,
  isLast,
}: {
  experience: Experience;
  index: number;
  isLast: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isAxis = experience.company === "Axis Communications";

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-8 pb-12"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
      }
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Timeline Line */}
      {!isLast && (
        <motion.div
          className="absolute left-6 top-16 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent h-full"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
          style={{ transformOrigin: "top" }}
        />
      )}

      {/* Timeline Node */}
      <motion.div
        className="relative z-10 flex-shrink-0"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
      >
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg ring-4 ring-background">
          <motion.div
            className="w-4 h-4 bg-background rounded-full"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
          />
        </div>

        {/* Pulse Animation */}
        <motion.div
          className="absolute inset-0 w-12 h-12 bg-primary rounded-full opacity-20"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.1 + 0.5,
          }}
        />
      </motion.div>

      {/* Content Card */}
      <motion.div
        className="flex-1 min-w-0"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
      >
        <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
          <CardContent className="p-6 space-y-4">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                {/* Company Logo */}
                {experience.logo && (
                  <motion.div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 border border-border/50 ${
                      isAxis ? "bg-white dark:bg-white p-2" : "bg-muted"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                )}

                <div className="space-y-2">
                  <h3 className="text-lg font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                    {experience.title}
                  </h3>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building className="w-4 h-4" />
                      <span className="font-medium">{experience.company}</span>
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

              {/* Type Badge */}
              <motion.div
                className="px-3 py-1 bg-primary/10 rounded-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xs font-medium text-primary">
                  {experience.type}
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              {experience.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  className="px-3 py-1 bg-muted text-xs rounded-full border border-border/50 hover:bg-primary/10 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1 + 0.5 + techIndex * 0.05,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default function Timeline({
  experiences,
}: {
  experiences: Experience[];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative">
      {/* Timeline Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-full">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm font-medium text-primary">
            Career Journey
          </span>
        </div>
      </motion.div>

      {/* Timeline Items */}
      <div className="space-y-0">
        {experiences.map((experience, index) => (
          <TimelineItem
            key={experience.id}
            experience={experience}
            index={index}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>

      {/* Timeline End */}
      <motion.div
        className="flex justify-center pt-8"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, delay: experiences.length * 0.1 + 0.5 }}
      >
        <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center shadow-lg">
          <div className="w-3 h-3 bg-background rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}
