import GradientText from "@/components/GradientText";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const contactItems = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    href: "mailto:jacobslunga21@yahoo.se",
    tooltip: "jacobslunga21@yahoo.se",
    bgColor: "#ea4335",
    hoverScale: "hover:scale-110",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    href: "https://github.com/jacobslunga",
    tooltip: "@jacobslunga",
    bgColor: "#24292e",
    hoverScale: "hover:scale-110",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jacob-slunga-9121131a2/",
    tooltip: "@jacob-slunga-9121131a2",
    bgColor: "#0b66c2",
    hoverScale: "hover:scale-110",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center py-32 px-4">
      <div className="max-w-4xl w-full text-center">
        <GradientText className="text-5xl md:text-7xl lg:text-8xl mb-8">
          Let's Connect
        </GradientText>

        <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
          Feel free to reach out through any of these channels. I'm always open
          to discussing new opportunities and collaborations.
        </p>

        <TooltipProvider delayDuration={0}>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            {contactItems.map((item, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      group relative flex flex-col items-center justify-center
                      w-24 h-24 rounded-2xl transition-all duration-300 ease-out
                      shadow-lg hover:shadow-xl ${item.hoverScale}
                      ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                    `}
                    style={{ backgroundColor: item.bgColor }}
                  >
                    <div className="text-white text-3xl transition-transform duration-300 group-hover:rotate-6">
                      {item.icon}
                    </div>

                    {/* Subtle glow effect on hover */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{
                        backgroundColor: item.bgColor,
                        filter: "blur(8px)",
                        transform: "scale(1.1)",
                      }}
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-medium">{item.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>

        <div className="mt-16 text-sm text-muted-foreground">
          Hover over the icons to see contact details
        </div>
      </div>
    </div>
  );
}
