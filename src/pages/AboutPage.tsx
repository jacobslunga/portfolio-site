import GradientText from "@/components/GradientText";
import LazyImage from "@/components/LazyImage";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Personal Introduction */}
        <div className="flex flex-col md:flex-row gap-12 mb-20">
          <div className="md:w-1/3">
            <div className="w-48 h-48 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-border/20">
              <LazyImage
                src="/jacob.jpeg"
                alt="Jacob Slunga"
                className="w-full h-full"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="text-left">
              <GradientText className="text-5xl md:text-6xl lg:text-7xl mb-4">
                I'm Jacob
              </GradientText>
            </div>
            <p className="text-xl text-muted-foreground mb-6">
              A Computer Science student and Software Engineer from Falsterbo,
              Sweden
            </p>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I started programming in my second year of high school during
                the pandemic. Had some extra time on my hands and decided to try
                making iOS apps with Swift.
              </p>
              <p>
                Eventually found my way to web development and got really into
                making things look good. But after a while, I realized that
                pretty interfaces don't mean much if they're confusing to use.
              </p>
              <p>
                That's when I became interested in UX design and the psychology
                behind how people interact with interfaces. Now I try to balance
                both the visual and functional sides of development.
              </p>
            </div>
          </div>
        </div>

        {/* Background */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Background
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Education & Work
              </h3>
              <div className="space-y-4 text-base text-muted-foreground">
                <p>
                  Currently studying Computer Science at{" "}
                  <strong className="text-foreground">
                    Linköping University
                  </strong>{" "}
                  while working as a Software Engineer at{" "}
                  <strong className="text-foreground">
                    Axis Communications
                  </strong>
                  .
                </p>
                <p>
                  Pursuing a Master's in Large-Scale Software Development,
                  focusing on scalable architectures and distributed systems.
                  Still learning something new every day.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                What I Do
              </h3>
              <div className="space-y-3">
                {[
                  "User Experience Design",
                  "Frontend Development",
                  "Design Psychology",
                  "Mobile Applications",
                  "Data Science",
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full"></div>
                    <span className="text-base text-muted-foreground">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Places I've Lived */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Places I've Lived In
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            I've been fortunate to live in different places around the world,
            each shaping my perspective on design, culture, and how people
            interact with technology.
          </p>

          <div className="space-y-6">
            {/* First row - Johannesburg full width */}
            <div className="group relative overflow-hidden rounded-2xl max-h-96 cursor-pointer">
              <LazyImage
                src="/joburg.jpg"
                alt="Johannesburg, South Africa"
                className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                style={{ maxHeight: "24rem", objectFit: "cover" }}
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAFAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Aky0fY5Yb2AoU8gOT8f/Z"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-end p-6">
                <div className="bg-gradient-to-r from-purple-400/30 to-pink-400/30 backdrop-blur-md rounded-full px-4 py-3 border border-purple-200/30 dark:border-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium text-white">
                    Johannesburg, South Africa
                  </p>
                </div>
              </div>
            </div>

            {/* Second row - Düsseldorf and Chennai */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Düsseldorf */}
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer">
                <LazyImage
                  src="/falsterbo.jpg"
                  alt="Falsterbo, Sweden"
                  className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAFAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQQCAwEAAAAAAAAAAAABAgMABAURBiExcYGR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAYEQACAwAAAAAAAAAAAAAAAAAAEQECYf/aAAwDAQACEQMRAD8AlqUpSlKUpSuI//Z"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="bg-gradient-to-r from-purple-400/30 to-pink-400/30 backdrop-blur-md rounded-full px-4 py-3 border border-purple-200/30 dark:border-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium text-white">
                      Falsterbo, Sweden
                    </p>
                  </div>
                </div>
              </div>

              {/* Chennai */}
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer">
                <LazyImage
                  src="/chennai.jpg"
                  alt="Chennai, India"
                  className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAFAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAcEAACAQUBAAAAAAAAAAAAAAECAwAEBQYSITH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AirG2ikPKIjVhYr0AH//Z"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="bg-gradient-to-r from-purple-400/30 to-pink-400/30 backdrop-blur-md rounded-full px-4 py-3 border border-purple-200/30 dark:border-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium text-white">
                      Chennai, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Third row - Falsterbo full width */}
            <div className="group relative overflow-hidden rounded-2xl max-h-96 cursor-pointer">
              <LazyImage
                src="/dusseldorf.jpg"
                alt="Düsseldorf, Germany"
                className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                style={{ maxHeight: "24rem", objectFit: "cover" }}
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAFAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Aky0fY5Yb2AoU8gOT8f/Z"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-end p-6">
                <div className="bg-gradient-to-r from-purple-400/30 to-pink-400/30 backdrop-blur-md rounded-full px-4 py-3 border border-purple-200/30 dark:border-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium text-white">
                    Düsseldorf, Germany
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal */}
        <div className="bg-muted/20 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Personal</h2>
          <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>
              I've always been curious about how things work and how to make
              them better. Living in different countries has taught me that good
              design is universal, but the way people use technology can be very
              different.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new places, trying
              different foods, watching F1 and thinking about how small design
              decisions can make big differences in people's lives.
            </p>
            <p>
              PS. I'm also a big typography enthusiast — my favorite font right
              now is Söhne.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
