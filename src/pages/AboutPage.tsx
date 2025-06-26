import ProgressiveImage from "@/components/ProgressiveImage";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full px-6" data-section="About">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-semibold text-foreground mb-4">
            About me
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
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#5581EB] to-[#DA6570] opacity-70 hover:opacity-100 transition-all duration-200"
            >
              Falsterbo, Sweden
            </a>
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16">
          <div className="relative group">
            <div className="w-52 h-52 mx-auto rounded-full overflow-hidden border-2 border-border group-hover:border-border transition-colors duration-300">
              <ProgressiveImage
                src="/jacob.jpeg"
                alt="Jacob Slunga"
                className="w-full h-full object-cover rounded-full"
                style={{ width: "13rem", height: "13rem" }}
              />
            </div>
          </div>
        </div>

        {/* About Content */}
        <div className="mb-16 space-y-4">
          <p className="text-base text-muted-foreground leading-relaxed">
            I started programming in my second year of high school during the
            pandemic. Had some extra time on my hands and decided to try making
            iOS apps with Swift.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Eventually found my way to web development and got really into
            making things look good. But after a while, I realized that pretty
            interfaces don't mean much if they're confusing to use.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            That's when I became interested in UX design and the psychology
            behind how people interact with interfaces. Now I try to balance
            both the visual and functional sides of development.
          </p>
        </div>

        {/* Currently */}
        <div className="mb-16 p-6 border border-border/50 rounded-2xl dark:bg-secondary bg-background backdrop-blur-sm shadow-sm">
          <h3 className="text-base font-semibold text-foreground mb-3">
            Currently
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              Currently studying Computer Science at{" "}
              <span className="font-medium text-foreground">
                Linköping University
              </span>{" "}
              while working as a Software Engineer at{" "}
              <span className="font-medium text-foreground">
                Axis Communications
              </span>
              .
            </p>
            <p>
              Pursuing a Master's in Large-Scale Software Development, focusing
              on scalable architectures and distributed systems. Still learning
              something new every day.
            </p>
          </div>
        </div>

        {/* What I Do */}
        <div className="mb-16 p-6 border border-border/50 rounded-2xl dark:bg-secondary bg-background backdrop-blur-sm shadow-sm">
          <h3 className="text-base font-semibold text-foreground mb-3">
            What I Do
          </h3>
          <div className="space-y-2">
            {[
              "User Experience Design",
              "Frontend Development",
              "Design Psychology",
              "Mobile Applications",
              "Data Science",
            ].map((skill) => (
              <div key={skill} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-foreground rounded-full"></div>
                <span className="text-sm text-muted-foreground">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Places I've called home */}
        <div className="mb-16">
          <h3 className="text-base font-semibold text-foreground mb-4 text-center">
            Places I've called home
          </h3>

          <div className="space-y-6">
            {/* Johannesburg full width */}
            <div className="group relative overflow-hidden rounded-2xl max-h-96 cursor-pointer">
              <ProgressiveImage
                src="/joburg.jpg"
                alt="Johannesburg, South Africa"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                style={{ maxHeight: "24rem", willChange: "transform" }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 group-hover:backdrop-blur-sm transition-all duration-300 ease-out"></div>
              <div className="absolute inset-0 flex items-end p-6">
                <div className="bg-gradient-to-tr from-background to-secondary backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                  <p className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#5581EB] to-[#DA6570]">
                    Johannesburg, South Africa
                  </p>
                </div>
              </div>
            </div>

            {/* Second row - Falsterbo and Chennai */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="https://maps.google.com/?q=Falsterbo,Sweden"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              >
                <ProgressiveImage
                  src="/falsterbo.jpg"
                  alt="Falsterbo, Sweden"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                  aspect
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 group-hover:backdrop-blur-sm transition-all duration-300 ease-out"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="bg-gradient-to-tr from-background to-secondary backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <p className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#5581EB] to-[#DA6570]">
                      Falsterbo, Sweden
                    </p>
                  </div>
                </div>
              </a>

              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer">
                <ProgressiveImage
                  src="/chennai.jpg"
                  alt="Chennai, India"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                  aspect
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 group-hover:backdrop-blur-sm transition-all duration-300 ease-out"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="bg-gradient-to-tr from-background to-secondary backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <p className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#5581EB] to-[#DA6570]">
                      Chennai, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Third row - Düsseldorf full width */}
            <div className="group relative overflow-hidden rounded-2xl max-h-96 cursor-pointer">
              <ProgressiveImage
                src="/dusseldorf.jpg"
                alt="Düsseldorf, Germany"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                style={{ maxHeight: "24rem", willChange: "transform" }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 group-hover:backdrop-blur-sm transition-all duration-300 ease-out"></div>
              <div className="absolute inset-0 flex items-end p-6">
                <div className="bg-gradient-to-tr from-background to-secondary backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                  <p className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#5581EB] to-[#DA6570]">
                    Düsseldorf, Germany
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Note */}
        <div className="p-6 border border-border/50 rounded-2xl dark:bg-secondary bg-background backdrop-blur-sm shadow-sm">
          <h3 className="text-base font-semibold text-foreground mb-3">
            Personal
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I've always been curious about how things work and how to make them
            better. Living in different countries has taught me that good design
            is universal, but the way people use technology can be very
            different. This perspective helps me create interfaces that work for
            everyone.
          </p>
        </div>
      </div>
    </div>
  );
}
