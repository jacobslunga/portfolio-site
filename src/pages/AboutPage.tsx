import { Link } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function AboutPage() {
  useScrollToTop();
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-start">
      <section className="flex flex-col px-4 sm:px-6 md:px-8 gap-8 sm:gap-10 min-h-[calc(100vh-3.5rem)] items-center w-screen justify-start py-12 sm:py-16 md:py-20">
        <div className="flex flex-col items-center justify-center gap-1">
          <img
            src="jacob.jpeg"
            alt="Jacob Slunga"
            className="w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 rounded-full"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-foreground text-center">
            I'm Jacob.
          </h1>
          <p className="text-foreground/70 text-center">
            From Falsterbo, Sweden
          </p>
        </div>
        <p
          className="text-lg sm:text-xl md:text-2xl underline cursor-pointer text-center"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        >
          tl;dr
        </p>
      </section>

      <section className="flex flex-col px-4 sm:px-6 md:px-8 gap-8 sm:gap-10 min-h-[calc(100vh-3.5rem)] items-start w-screen justify-center">
        <div className="flex flex-col items-start justify-center gap-5">
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            TL;DR of whoami
          </p>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-foreground/50 text-left leading-relaxed">
            I originally come from{" "}
            <Link
              className="text-foreground font-bold decoration-dashed underline decoration-blue-500"
              target="_blank"
              to="https://www.google.com/maps/place/Falsterbo/@55.3960343,12.8201652,14z/data=!3m1!4b1!4m6!3m5!1s0x46530e5966e71b75:0x6c616eac77154661!8m2!3d55.397121!4d12.8415278!16zL20vMDd2Xzh3?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
            >
              Falsterbo, Sweden.
            </Link>{" "}
            Growing up all I did was play{" "}
            <strong className="text-foreground font-bold">football</strong>,
            until I discovered programming during the pandemic in 2020. I
            started studying{" "}
            <strong className="text-foreground font-bold">
              Computer Science at Linköping University{" "}
            </strong>{" "}
            in 2022. Ever since then I've been building new projects and
            learning new tech. Other than programming and building stuff, my 2
            biggest interests are{" "}
            <strong className="font-serif text-orange-500 italic underline decoration-dotted">
              DESIGN
            </strong>{" "}
            and <strong className="font-mono text-green-600">MATH</strong>.
          </h1>
        </div>
      </section>

      <section className="flex flex-col min-h-screen items-center sm:items-end max-w-prose justify-center gap-3 px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground text-center sm:text-right">
          Some *fun* facts about me
        </h1>
        <ul className="space-y-4 text-foreground/80 text-base sm:text-lg leading-relaxed">
          <li className="text-xl sm:text-2xl md:text-3xl">I'm left-handed</li>
          <li className="text-xl sm:text-2xl md:text-3xl">
            I finished 3rd in the internal dart competition at the Computer
            Science faculty at Linköping University
          </li>
          <li className="text-xl sm:text-2xl md:text-3xl">
            My biggest passion in desgin is typography
          </li>
        </ul>
      </section>

      <section className="flex flex-col min-h-screen items-center w-screen justify-start px-4 sm:px-6 md:px-8 gap-12 sm:gap-16 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col items-center justify-start text-center max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-4 sm:mb-6">
            Places I've called home
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
            I've had the privilege to live in many different countries, each
            impacting how I think about design and interfaces.
          </p>
        </div>

        <div className="relative w-full max-w-6xl mx-auto">
          {/* 2x2 Grid layout for all places */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Falsterbo */}
            <div className="relative">
              <div className="h-80 rounded-xl shadow-xl overflow-hidden">
                <img
                  src="/places/falsterbo.jpg"
                  alt="Falsterbo coastline"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">Falsterbo, Sweden</h3>
                  <p className="text-lg opacity-90">
                    Born here in 2002 • Lived here sporadically throughout my
                    life
                  </p>
                  <p className="text-sm opacity-70 mt-2">
                    Where my story begins
                  </p>
                </div>
              </div>
            </div>

            {/* Düsseldorf */}
            <div className="relative">
              <div className="h-80 rounded-xl shadow-xl overflow-hidden">
                <img
                  src="/places/dusseldorf.jpg"
                  alt="Düsseldorf architecture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">
                    Düsseldorf, Germany
                  </h3>
                  <p className="text-lg">2004 - 2006</p>
                  <p className="text-sm opacity-80 mt-1">
                    Early childhood memories
                  </p>
                </div>
              </div>
            </div>

            {/* Chennai */}
            <div className="relative">
              <div className="h-80 rounded-xl shadow-xl overflow-hidden">
                <img
                  src="/places/chennai.jpg"
                  alt="Chennai cityscape"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">Chennai, India</h3>
                  <p className="text-lg">2006 - 2009</p>
                  <p className="text-sm opacity-80 mt-1">Cultural immersion</p>
                </div>
              </div>
            </div>

            {/* Johannesburg */}
            <div className="relative">
              <div className="h-80 rounded-xl shadow-xl overflow-hidden">
                <img
                  src="/places/joburg.jpg"
                  alt="Johannesburg skyline"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">
                    Johannesburg, South Africa
                  </h3>
                  <p className="text-lg">2010 - 2012</p>
                  <p className="text-sm opacity-80 mt-1">
                    Formative teenage years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
