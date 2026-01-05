import { useState, useEffect } from "react";

function HomePage() {
  const [activeSection, setActiveSection] = useState("about");

  const places = [
    { name: "Chennai, India", image: "/places/chennai.webp" },
    { name: "Düsseldorf, Germany", image: "/places/dusseldorf.webp" },
    { name: "Falsterbo, Sweden", image: "/places/falsterbo.webp" },
    { name: "Johannesburg, South Africa", image: "/places/joburg.webp" },
  ];

  const sections = [
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "interests", label: "Interests" },
    { id: "places", label: "Places" },
  ];

  const linkClass =
    "underline underline-offset-2 text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 transition-colors cursor-pointer";

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((s) => ({
        id: s.id,
        el: document.getElementById(s.id),
      }));

      for (const section of sectionElements.reverse()) {
        if (section.el) {
          const rect = section.el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#faf9f7] dark:bg-stone-900 fade-in">
      {/* Section indicators */}
      <nav className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center justify-end"
          >
            <span className="absolute right-5 px-2 py-1 rounded bg-stone-800 dark:bg-stone-200 text-stone-100 dark:text-stone-800 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {section.label}
            </span>
            <span
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-stone-700 dark:bg-stone-300 scale-125"
                  : "bg-stone-300 dark:bg-stone-600 group-hover:bg-stone-500 dark:group-hover:bg-stone-400"
              }`}
            />
          </button>
        ))}
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* About Section */}
        <section id="about" className="mb-16 md:mb-24">
          <h1 className="text-stone-800 dark:text-stone-100 text-3xl md:text-4xl font-medium tracking-tight mb-6">
            Jacob Slunga
          </h1>

          <div className="space-y-4 text-stone-600 dark:text-stone-400 text-base leading-relaxed">
            <p>
              hey! i'm currently doing my master's in computer science, focusing
              on distributed large-scale systems. most of my time goes into
              frontend development and fine-tuning LLMs.
            </p>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="mb-16 md:mb-24">
          <h2 className="text-stone-800 dark:text-stone-100 text-xl font-medium mb-4">
            what i'm building
          </h2>

          <div className="space-y-4 text-stone-600 dark:text-stone-400 text-base leading-relaxed">
            <p>
              right now i'm working on{" "}
              <a
                href="https://liutentor.se"
                target="_blank"
                rel="noreferrer"
                className={linkClass}
              >
                LiU Tentor
              </a>
              . the idea came from being frustrated with how messy it was to
              study with old exams — constantly switching between the exam, the
              solutions, and some LLM to help explain things. so i built
              something that keeps everything in one place and actually lets you
              focus.
            </p>

            <p>
              before this, i worked at Axis Communications on some large-scale
              stuff, been a teaching assistant, and coached kids in programming.
              i genuinely love building software and showing others how fun
              coding can be.
            </p>
          </div>
        </section>

        {/* Interests Section */}
        <section id="interests" className="mb-16 md:mb-24">
          <h2 className="text-stone-800 dark:text-stone-100 text-xl font-medium mb-4">
            what i care about
          </h2>

          <div className="space-y-4 text-stone-600 dark:text-stone-400 text-base leading-relaxed">
            <p>
              i'm really into making products that actually help people — not
              just building for the sake of it. science in general fascinates
              me. i'm not chasing a phd or anything, but i love reading research
              papers, especially on macroeconomics and AI discoveries. there's
              something satisfying about understanding how things work at a
              deeper level.
            </p>

            <p>
              feel free to reach out on{" "}
              <a
                href="https://github.com/jacobslunga"
                target="_blank"
                rel="noreferrer"
                className={linkClass}
              >
                GitHub
              </a>
              ,{" "}
              <a
                href="https://www.linkedin.com/in/jacob-slunga-9121131a2/"
                target="_blank"
                rel="noreferrer"
                className={linkClass}
              >
                LinkedIn
              </a>
              , or just{" "}
              <a href="mailto:jacobslunga21@yahoo.se" className={linkClass}>
                email me
              </a>
              .
            </p>
          </div>
        </section>

        {/* Places Section */}
        <section id="places">
          <h2 className="text-stone-800 dark:text-stone-100 text-xl font-medium mb-6">
            places i've lived
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {places.map((place) => (
              <div
                key={place.name}
                className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 pointer-events-none">
                  <span className="text-white font-medium text-sm">
                    {place.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* Footer */}
      <footer className="mt-20 mb-10 text-center text-xs text-stone-400 dark:text-stone-600 select-none">
        © {new Date().getFullYear()} Jacob Slunga
      </footer>
    </div>
  );
}

export default HomePage;
