import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface AboutMeProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutMe({ isOpen, onClose }: AboutMeProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  // Refs for scroll tracking
  const aboutRef = useRef<HTMLDivElement>(null);
  const placesRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const personalRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: "about", label: "About", ref: aboutRef },
    { id: "places", label: "Places", ref: placesRef },
    { id: "experience", label: "Experience", ref: experienceRef },
    { id: "projects", label: "Projects", ref: projectsRef },
    { id: "personal", label: "Personal", ref: personalRef },
    { id: "contact", label: "Contact", ref: contactRef },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = sections.find((s) => s.id === sectionId);
    if (section?.ref.current) {
      section.ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Scroll tracking effect
  useEffect(() => {
    if (!isOpen) return;

    const handleScroll = (e: Event) => {
      const container = e.target as HTMLElement;
      const scrollPosition = container.scrollTop + container.clientHeight / 2;

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const relativeTop =
            rect.top - containerRect.top + container.scrollTop;
          const relativeBottom = relativeTop + rect.height;

          if (
            scrollPosition >= relativeTop &&
            scrollPosition < relativeBottom
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    const checkInitialPosition = () => {
      const aboutMeContainer = document.querySelector(
        ".aboutme-container"
      ) as HTMLElement;
      if (aboutMeContainer) {
        const scrollPosition =
          aboutMeContainer.scrollTop + aboutMeContainer.clientHeight / 2;

        for (const section of sections) {
          if (section.ref.current) {
            const rect = section.ref.current.getBoundingClientRect();
            const containerRect = aboutMeContainer.getBoundingClientRect();
            const relativeTop =
              rect.top - containerRect.top + aboutMeContainer.scrollTop;
            const relativeBottom = relativeTop + rect.height;

            if (
              scrollPosition >= relativeTop &&
              scrollPosition < relativeBottom
            ) {
              setActiveSection(section.id);
              break;
            }
          }
        }
      }
    };

    // Find the AboutMe container and add scroll listener
    const aboutMeContainer = document.querySelector(".aboutme-container");
    if (aboutMeContainer) {
      aboutMeContainer.addEventListener("scroll", handleScroll);

      // Initial check after a small delay to ensure elements are rendered
      setTimeout(checkInitialPosition, 100);

      return () => aboutMeContainer.removeEventListener("scroll", handleScroll);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    // Delay the actual close to allow content to fade out first
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 200); // Match this with the content exit animation duration
  };

  useEffect(() => {
    if (!isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: isClosing ? 0.2 : 0 }}
          className="fixed inset-0 z-50 bg-[#f8f7f4] dark:bg-[#171716]"
        >
          <div className="h-full overflow-y-auto aboutme-container">
            {/* Back button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isClosing ? 0 : 1, x: isClosing ? -20 : 0 }}
              transition={{ delay: isClosing ? 0 : 0.2, duration: 0.3 }}
              onClick={handleClose}
              className="fixed top-6 left-6 sm:top-8 sm:left-8 z-10 bg-[#e5e3dd] dark:bg-[#282622] hover:bg-[#d1cfc6] dark:hover:bg-[#3a3530] cursor-pointer rounded-full p-3 text-[#171716] dark:text-white transition-all duration-300 hover:scale-110"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Table of Contents */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isClosing ? 0 : 1, x: isClosing ? 20 : 0 }}
              transition={{ delay: isClosing ? 0 : 0.3, duration: 0.3 }}
              className="fixed top-1/2 -translate-y-1/2 right-6 z-10 bg-[#e5e3dd]/80 dark:bg-[#282622]/80 backdrop-blur-sm rounded-2xl p-3 w-40 hidden lg:block"
            >
              <h3 className="text-[#171716] dark:text-white text-sm font-semibold mb-3">
                Contents
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left text-sm transition-all duration-200 hover:text-[#171716] dark:hover:text-white ${
                      activeSection === section.id
                        ? "text-[#171716] dark:text-white font-medium"
                        : "text-[#171716]/60 dark:text-white/60"
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
            </motion.div>

            {/* Content Container */}
            <div className="max-w-4xl mx-auto px-6 sm:px-8 py-20 sm:py-24 lg:pr-52">
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={{
                  y: isClosing ? 60 : 0,
                  opacity: isClosing ? 0 : 1,
                }}
                transition={{
                  delay: isClosing ? 0 : 0.4,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="space-y-12 sm:space-y-16"
              >
                {/* Header */}
                <div className="text-left">
                  <h1 className="text-[#171716] dark:text-white text-4xl sm:text-5xl font-bold mb-4 logo">
                    About Jacob
                  </h1>
                </div>

                {/* About */}
                <motion.div
                  ref={aboutRef}
                  id="about"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{
                    y: isClosing ? 40 : 0,
                    opacity: isClosing ? 0 : 1,
                  }}
                  transition={{
                    delay: isClosing ? 0.05 : 0.6,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="space-y-6"
                >
                  <h2 className="text-[#171716] dark:text-white text-2xl font-semibold">
                    Who I Am
                  </h2>
                  <div className="space-y-4 text-[#171716]/80 dark:text-white/80 text-lg leading-relaxed">
                    <p>
                      I started programming in my second year of high school
                      during the pandemic. Had some extra time on my hands and
                      decided to try making iOS apps with Swift.
                    </p>
                    <p>
                      Eventually found my way to web development and got really
                      into making things look good. But after a while, I
                      realized that pretty interfaces don't mean much if they're
                      confusing to use.
                    </p>
                    <p>
                      That's when I became interested in UX design and the
                      psychology behind how people interact with interfaces. Now
                      I try to balance both the visual and functional sides of
                      development.
                    </p>
                  </div>
                </motion.div>

                {/* Places I've called home */}
                <motion.div
                  ref={placesRef}
                  id="places"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{
                    y: isClosing ? 40 : 0,
                    opacity: isClosing ? 0 : 1,
                  }}
                  transition={{
                    delay: isClosing ? 0.1 : 0.8,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="space-y-6"
                >
                  <h2 className="text-[#171716] dark:text-white text-2xl font-semibold">
                    Places I've called home
                  </h2>

                  <div className="space-y-6">
                    {/* Johannesburg full width */}
                    <div className="group relative overflow-hidden rounded-2xl h-64 cursor-pointer">
                      <img
                        src="/joburg.jpg"
                        alt="Johannesburg, South Africa"
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out will-change-transform"
                      />
                      <div className="absolute inset-0 bg-[#171716]/20 dark:bg-black/40 transition-all duration-300 ease-out"></div>
                      <div className="absolute inset-0 flex items-end p-6">
                        <a
                          href="https://maps.google.com/?q=Johannesburg,South+Africa"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/90 dark:bg-[#171716]/90 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out hover:bg-white dark:hover:bg-[#171716]"
                        >
                          <p className="text-sm font-medium text-[#171716] dark:text-white">
                            Johannesburg, South Africa
                          </p>
                        </a>
                      </div>
                    </div>

                    {/* Second row - Falsterbo and Chennai */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer">
                        <img
                          src="/falsterbo.jpg"
                          alt="Falsterbo, Sweden"
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out will-change-transform"
                        />
                        <div className="absolute inset-0 bg-[#171716]/20 dark:bg-black/40 transition-all duration-300 ease-out"></div>
                        <div className="absolute inset-0 flex items-end p-6">
                          <a
                            href="https://maps.google.com/?q=Falsterbo,Sweden"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/90 dark:bg-[#171716]/90 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out hover:bg-white dark:hover:bg-[#171716]"
                          >
                            <p className="text-sm font-medium text-[#171716] dark:text-white">
                              Falsterbo, Sweden
                            </p>
                          </a>
                        </div>
                      </div>

                      <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer">
                        <img
                          src="/chennai.jpg"
                          alt="Chennai, India"
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out will-change-transform"
                        />
                        <div className="absolute inset-0 bg-[#171716]/20 dark:bg-black/40 transition-all duration-300 ease-out"></div>
                        <div className="absolute inset-0 flex items-end p-6">
                          <a
                            href="https://maps.google.com/?q=Chennai,Tamil+Nadu,India"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/90 dark:bg-[#171716]/90 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out hover:bg-white dark:hover:bg-[#171716]"
                          >
                            <p className="text-sm font-medium text-[#171716] dark:text-white">
                              Chennai, India
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Third row - Düsseldorf full width */}
                    <div className="group relative overflow-hidden rounded-2xl h-64 cursor-pointer">
                      <img
                        src="/dusseldorf.jpg"
                        alt="Düsseldorf, Germany"
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out will-change-transform"
                      />
                      <div className="absolute inset-0 bg-[#171716]/20 dark:bg-black/40 transition-all duration-300 ease-out"></div>
                      <div className="absolute inset-0 flex items-end p-6">
                        <a
                          href="https://maps.google.com/?q=Düsseldorf,Germany"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/90 dark:bg-[#171716]/90 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out hover:bg-white dark:hover:bg-[#171716]"
                        >
                          <p className="text-sm font-medium text-[#171716] dark:text-white">
                            Düsseldorf, Germany
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Experience */}
                <motion.div
                  ref={experienceRef}
                  id="experience"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{
                    y: isClosing ? 40 : 0,
                    opacity: isClosing ? 0 : 1,
                  }}
                  transition={{
                    delay: isClosing ? 0.15 : 1.0,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="space-y-6"
                >
                  <h2 className="text-[#171716] dark:text-white text-2xl font-semibold">
                    Experience
                  </h2>
                  <div className="space-y-6 text-[#171716]/80 dark:text-white/80">
                    <div>
                      <h3 className="text-[#171716] dark:text-white text-xl font-medium mb-1">
                        Software Developer Intern
                      </h3>
                      <p className="text-[#171716]/60 dark:text-white/60 mb-2">
                        <a
                          href="https://axis.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          Axis Communications
                        </a>
                        {" • Summer 2025 • Linköping, Sweden"}
                      </p>
                      <p className="leading-relaxed mb-3">
                        Upcoming summer internship developing a web application
                        for an internal testing platform.
                      </p>
                      <p className="text-sm text-[#171716]/50 dark:text-white/50">
                        Technologies: TBD
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#171716] dark:text-white text-xl font-medium mb-1">
                        Teaching Assistant (Amanuens)
                      </h3>
                      <p className="text-[#171716]/60 dark:text-white/60 mb-2">
                        <a
                          href="https://liu.se"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          Linköping University
                        </a>
                        {" • Aug 2024 - Jan 2025 • Linköping, Sweden"}
                      </p>
                      <p className="leading-relaxed mb-3">
                        Assisted students in TDDE18 Programming (C++) by guiding
                        them through concepts and lab assignments.
                      </p>
                      <p className="text-sm text-[#171716]/50 dark:text-white/50">
                        Technologies: C++, Teaching, Debugging
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#171716] dark:text-white text-xl font-medium mb-1">
                        Web Developer
                      </h3>
                      <p className="text-[#171716]/60 dark:text-white/60 mb-2">
                        <a
                          href="https://dynorobotics.se"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          Dyno Robotics
                        </a>
                        {" • Jun 2024 - Sep 2024 • Linköping, Sweden"}
                      </p>
                      <p className="leading-relaxed mb-3">
                        Developed a web-based platform using React, TypeScript,
                        and Supabase for farmers to manage self-driving
                        tractors.
                      </p>
                      <p className="text-sm text-[#171716]/50 dark:text-white/50">
                        Technologies: React, TypeScript, Supabase
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#171716] dark:text-white text-xl font-medium mb-1">
                        Programming Coach
                      </h3>
                      <p className="text-[#171716]/60 dark:text-white/60 mb-2">
                        <a
                          href="https://skill.se"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          Skill
                        </a>
                        {" • Summer 2023 & 2024 • Linköping, Sweden"}
                      </p>
                      <p className="leading-relaxed mb-3">
                        Taught programming to children during 3-week summer
                        camps, introducing them to coding concepts and inspiring
                        a love for technology.
                      </p>
                      <p className="text-sm text-[#171716]/50 dark:text-white/50">
                        Technologies: Python, JavaScript, Scratch
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Projects */}
                <motion.div
                  ref={projectsRef}
                  id="projects"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{
                    y: isClosing ? 40 : 0,
                    opacity: isClosing ? 0 : 1,
                  }}
                  transition={{
                    delay: isClosing ? 0.2 : 1.2,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="space-y-6"
                >
                  <h2 className="text-[#171716] dark:text-white text-2xl font-semibold">
                    Featured Projects
                  </h2>
                  <div className="space-y-6 text-[#171716]/80 dark:text-white/80">
                    <div>
                      <h3 className="text-[#171716] dark:text-white text-xl font-medium mb-1">
                        LiU Tentor
                      </h3>
                      <p className="text-[#171716]/60 dark:text-white/60 mb-2">
                        2025 •
                        <a
                          href="https://liutentor.se"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline ml-1"
                        >
                          liutentor.se
                        </a>
                        {" • "}
                        <a
                          href="https://github.com/jacobslunga/liu-tentor-radix"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          GitHub
                        </a>
                      </p>
                      <p className="leading-relaxed mb-3">
                        An exam archive for Linköping University focusing on
                        better UX. Over 4,300 students use it every exam period
                        to access past exams and study materials.
                      </p>
                      <p className="text-sm text-[#171716]/50 dark:text-white/50 mb-2">
                        Technologies: React, Vite, Supabase, PDF.js
                      </p>
                      <p className="text-sm text-[#171716]/50 dark:text-white/50">
                        Highlights: Most popular exam archive at LiU • Built
                        responsive PDF viewer • 4,300+ active users
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#171716] dark:text-white text-xl font-medium mb-1">
                        MEJRA
                      </h3>
                      <p className="text-[#171716]/60 dark:text-white/60 mb-2">
                        2025 • Bachelor Thesis Project for SAAB
                      </p>
                      <p className="leading-relaxed mb-3">
                        Bachelor thesis project for SAAB developing an advanced
                        requirement management system. Focuses on visualization
                        of complex system interactions and dependencies.
                      </p>
                      <p className="text-sm text-[#171716]/50 dark:text-white/50 mb-2">
                        Technologies: React, Flask, SQLite, Reagraph, OSCAL
                      </p>
                      <p className="text-sm text-[#171716]/50 dark:text-white/50">
                        Highlights: Complex data visualization • Government
                        security standards • Enterprise-level system
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#171716] dark:text-white text-xl font-medium mb-1">
                        GotStyle
                      </h3>
                      <p className="text-[#171716]/60 dark:text-white/60 mb-2">
                        2023 •
                        <a
                          href="https://github.com/jacobslunga/GotStyle"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline ml-1"
                        >
                          GitHub
                        </a>
                      </p>
                      <p className="leading-relaxed mb-3">
                        A React Native app for sharing daily outfit inspiration.
                        Users upload their OOTD (Outfit of the Day) once daily
                        to showcase style and discover fashion inspiration.
                      </p>
                      <p className="text-sm text-[#171716]/50 dark:text-white/50 mb-2">
                        Technologies: React Native, Flask, AWS S3, CloudFront
                        CDN
                      </p>
                      <p className="text-sm text-[#171716]/50 dark:text-white/50">
                        Highlights: Daily posting limitation system • AWS cloud
                        infrastructure • Cross-platform mobile app
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Personal */}
                <motion.div
                  ref={personalRef}
                  id="personal"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{
                    y: isClosing ? 40 : 0,
                    opacity: isClosing ? 0 : 1,
                  }}
                  transition={{
                    delay: isClosing ? 0.25 : 1.4,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="space-y-6"
                >
                  <h2 className="text-[#171716] dark:text-white text-2xl font-semibold">
                    Personal
                  </h2>
                  <div className="space-y-4 text-[#171716]/80 dark:text-white/80 text-lg leading-relaxed">
                    <p>
                      Living in different countries has taught me that good
                      design is universal, but the way people use technology can
                      be very different. This perspective helps me create
                      interfaces that work for everyone.
                    </p>
                    <p>
                      When I'm not coding, you'll find me watching Formula 1
                      races (big fan of the technical side of the sport),
                      playing football, or throwing darts. I've always been
                      curious about how things work and how to make them better.
                    </p>
                  </div>
                </motion.div>

                {/* Contact */}
                <motion.div
                  ref={contactRef}
                  id="contact"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{
                    y: isClosing ? 40 : 0,
                    opacity: isClosing ? 0 : 1,
                  }}
                  transition={{
                    delay: isClosing ? 0.3 : 1.6,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="space-y-6 pb-16"
                >
                  <h2 className="text-[#171716] dark:text-white text-2xl font-semibold">
                    Let's Work Together
                  </h2>
                  <div className="space-y-4 text-[#171716]/80 dark:text-white/80 text-lg leading-relaxed">
                    <p>
                      I'm always open to discussing new opportunities,
                      interesting projects, or just having a chat about
                      technology and design. Whether you're looking to build
                      something new or improve an existing experience, I'd love
                      to hear from you.
                    </p>
                    <div className="pt-4">
                      <a
                        href="mailto:jacobslunga21@yahoo.se"
                        className="text-[#171716] dark:text-white hover:opacity-70 transition-opacity duration-200 underline underline-offset-4 text-lg"
                      >
                        jacobslunga21@yahoo.se
                      </a>
                    </div>
                  </div>

                  {/* Copyright */}
                  <div className="mt-16 pt-8 border-t border-[#171716]/20 dark:border-white/20">
                    <p className="text-sm text-[#171716]/50 dark:text-white/50">
                      © {new Date().getFullYear()} Jacob Slunga
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
