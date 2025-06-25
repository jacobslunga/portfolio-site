import { FaLinkedin, FaBriefcase, FaFileAlt } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full px-6" data-section="Hi, I'm Jacob">
      <div className="max-w-2xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-semibold text-foreground mb-4">
            Hi, I'm Jacob
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            A Computer Science student and Software Engineer
          </p>
          <p className="text-base text-muted-foreground">
            from{" "}
            <a
              href="https://maps.google.com/?q=Falsterbo,Sweden"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary underline decoration-dotted underline-offset-2 hover:decoration-solid transition-all duration-200"
            >
              Falsterbo, Sweden
            </a>
          </p>
        </div>

        {/* Currently Working */}
        <div className="mb-16 p-6 border border-border/50 rounded-2xl bg-secondary backdrop-blur-sm shadow-lg">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-2 bg-muted/50 rounded-lg">
              <FaBriefcase className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                Currently
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Working as a Software Engineer at{" "}
                <span className="font-medium text-foreground">
                  Axis Communications
                </span>{" "}
                while pursuing a Master's in{" "}
                <span className="font-medium text-foreground">
                  Large-Scale Software Development
                </span>
                . Focused on creating scalable software architectures and great
                user experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border border-border/50 rounded-2xl bg-slate-500 hover:scale-105 transition-all duration-300 group shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <FaFileAlt className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Resume</h3>
                <p className="text-sm text-white/80">Download CV</p>
              </div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/jacob-slunga-9121131a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border border-border/50 rounded-2xl bg-[#0f64c1] hover:scale-105 transition-all duration-300 group shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <FaLinkedin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">LinkedIn</h3>
                <p className="text-sm text-white/80">Let's connect</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
