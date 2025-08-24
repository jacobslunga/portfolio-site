import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function HomePage() {
  useScrollToTop();
  return (
    <div className="flex h-full w-screen flex-col items-start justify-center px-5 gap-12 sm:gap-16 md:gap-20 py-12 sm:py-16 md:py-20">
      <div className="flex flex-col items-start">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground/50 leading-tight">
          Hi, I'm Jacob. A{" "}
          <strong className="text-foreground">Software Engineer</strong>{" "}
          currently studying a Master's degree in Computer Science with a focus
          on{" "}
          <strong className="text-foreground">
            Architecture and Distributed Systems.
          </strong>
        </h1>
        <p className="text-sm sm:text-md md:text-lg text-foreground/70 mt-2 sm:mt-3">
          📍 Based in Linköping, Sweden
        </p>
      </div>

      <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground/50 leading-relaxed">
        Most recently, I was at{" "}
        <Link
          to="https://www.axis.com/"
          target="_blank"
          className="inline-flex group items-center gap-1 underline decoration-dashed text-[#FFCC33]"
        >
          Axis Communications{" "}
          <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200" />
        </Link>
        , working primarily with <span className="text-[#EC6327]">Swift</span>.
        Alongside that, I'm developing{" "}
        <Link
          to="https://liutentor.se"
          target="_blank"
          className="inline-flex items-center gap-1 underline decoration-dashed text-green-600 group"
        >
          LiU Tentor{" "}
          <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200" />
        </Link>
        , an exam search engine built for Linköping University.
      </h2>
    </div>
  );
}
