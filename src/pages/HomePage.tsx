import { useState } from "react";
import AboutMe from "../components/AboutMe";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  const [showAboutMe, setShowAboutMe] = useState(false);

  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center px-4 sm:px-8">
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-5 max-w-4xl mx-auto text-center animate-[fadeInUp_1s_ease-out_0.2s_both]">
          <div className="relative">
            <h1 className="text-[#171716] dark:text-white text-3xl sm:text-4xl lg:text-5xl text-center logo">
              Jacob Slunga
            </h1>
            <button
              onClick={() => setShowAboutMe(true)}
              className="absolute -right-6 sm:-right-8 -top-4 sm:-top-5 bg-[#e5e3dd] dark:bg-[#282622] cursor-pointer rounded-full px-2 py-1 sm:px-3 sm:py-1 text-[#171716] dark:text-white hover:scale-125 transition-all duration-300 font-medium text-xs sm:text-sm animate-[fadeInUp_1s_ease-out_0.8s_both]"
            >
              👋 who dis?
            </button>
          </div>
          <p className="text-[#171716]/40 dark:text-white/40 font-normal text-sm text-center mb-1 sm:mb-2">
            📍 currently based in Linköping, Sweden
          </p>
          <p className="text-[#171716]/60 dark:text-white/60 font-normal text-xl sm:text-2xl lg:text-3xl text-center max-w-3xl leading-relaxed">
            Software Engineer with a focus on{" "}
            <span className="relative inline-block group cursor-pointer">
              <span className="relative z-10 text-[#171716] dark:text-white font-medium px-2 py-1">
                UX
              </span>
              <span className="absolute inset-0 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-md opacity-20"></span>
              <span className="absolute -bottom-0.5 left-1 right-1 h-0.5 bg-green-500 rounded-full opacity-40"></span>
            </span>{" "}
            and{" "}
            <span className="relative inline-block group cursor-pointer">
              <span className="relative z-10 text-[#171716] dark:text-white font-medium px-2 py-1">
                behavioral design
              </span>
              <span className="absolute inset-0 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-md opacity-20"></span>
              <span className="absolute -bottom-0.5 left-1 right-1 h-0.5 bg-amber-500 rounded-full opacity-40"></span>
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-2 sm:mt-0 animate-[fadeInUp_1s_ease-out_1s_both]">
            <a
              href="https://github.com/jacobslunga"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e5e3dd] dark:bg-[#282622] cursor-pointer rounded-full p-3 text-[#171716] dark:text-white hover:opacity-80 transition-all duration-500 font-medium flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              <span>Github</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="https://www.linkedin.com/in/jacob-slunga-9121131a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e5e3dd] dark:bg-[#282622] cursor-pointer rounded-full p-3 text-[#171716] dark:text-white hover:opacity-80 transition-all duration-500 font-medium flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>

      {/* About Me Component with fade animation */}
      <AboutMe isOpen={showAboutMe} onClose={() => setShowAboutMe(false)} />
    </>
  );
}
