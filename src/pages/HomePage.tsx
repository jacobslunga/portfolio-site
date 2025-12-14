function HomePage() {
  const places = [
    { name: "Chennai, India", image: "/places/chennai.webp" },
    { name: "Düsseldorf, Germany", image: "/places/dusseldorf.webp" },
    { name: "Falsterbo, Sweden", image: "/places/falsterbo.webp" },
    { name: "Johannesburg, South Africa", image: "/places/joburg.webp" },
  ];

  return (
    <div className="w-screen min-h-screen pt-12 px-6 pb-6 md:p-12 lg:p-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left side - Bio (Sticky) */}
        <div className="flex flex-col items-start justify-start gap-3 lg:sticky lg:top-20 lg:self-start">
          <h1 className="text-neutral-800 text-4xl font-medium">
            Jacob Slunga
          </h1>
          <div className="flex flex-col items-start justify-start gap-2 font-light">
            <h2 className="text-neutral-700 text-lg font-medium">
              I'm building{" "}
              <a
                href="https://liutentor.se"
                target="_blank"
                className="link-hover"
              >
                LiU Tentor
              </a>{" "}
              to help students study better.
            </h2>

            <p className="text-neutral-600 text-base font-normal leading-relaxed max-w-[90%]">
              In the past, I've worked at Axis Communications on large-scale
              projects, served as a teaching assistant, and coached children in
              programming. I love building software and helping others discover
              the joy of coding.
            </p>

            <p className="text-neutral-600 text-base font-normal">
              Connect with me on{" "}
              <a
                href="https://github.com/jacobslunga"
                target="_blank"
                className="link-hover"
              >
                GitHub
              </a>
              ,{" "}
              <a
                href="https://www.linkedin.com/in/jacob-slunga-9121131a2/"
                target="_blank"
                className="link-hover"
              >
                LinkedIn
              </a>
              , or at{" "}
              <a href="mailto:jacobslunga21@yahoo.se" className="link-hover">
                jacobslunga21@yahoo.se
              </a>
            </p>
          </div>
        </div>

        {/* Right side - Places */}
        <div className="flex flex-col gap-4">
          <h3 className="text-neutral-800 text-xl font-medium">
            Places I've lived in
          </h3>
          <div className="flex flex-col gap-4">
            {places.map((place) => (
              <div
                key={place.name}
                className="relative rounded-2xl aspect-square overflow-hidden group cursor-pointer"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full rounded-2xl object-cover transition-transform duration-300 ease-out will-change-transform group-hover:scale-105"
                />
                <div className="absolute rounded-2xl inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3 pointer-events-none">
                  <span className="text-white font-medium text-sm md:text-base">
                    {place.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
