import { FaLinkedin, FaBriefcase, FaGithub } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full px-6" data-section="Hi, I'm Jacob">
      <div className="max-w-3xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-[#FE2C55] to-red-400 font-semibold mb-4">
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

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* GitHub Card */}
          <a
            href="https://github.com/jacobslunga"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col group bg-[#24292F] text-white dark:bg-white dark:text-black justify-between rounded-[2rem] p-8 h-64 hover:scale-[1.02] transition-transform shadow-sm"
          >
            <div className="text-sm tracking-wide uppercase mb-2">
              PROJECTS • Jacob Slunga
            </div>
            <div className="text-4xl font-bold mb-2">GitHub</div>
            <FaGithub className="text-[4rem] group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12 transition-transform duration-300 font-black leading-none tracking-tight" />
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/jacob-slunga-9121131a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col group justify-between rounded-[2rem] bg-[#0f64c1] text-white p-8 h-64 hover:scale-[1.02] transition-transform shadow-sm"
          >
            <div className="text-sm tracking-wide uppercase mb-2">
              Profile • Jacob Slunga
            </div>
            <div className="text-4xl font-bold mb-2">LinkedIn</div>
            <FaLinkedin className="text-[4rem] group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12 transition-transform duration-300 font-black leading-none tracking-tight" />
          </a>
        </div>

        {/* Currently Working */}
        <div className="mt-16 p-6 rounded-2xl bg-secondary">
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
      </div>
    </div>
  );
}
