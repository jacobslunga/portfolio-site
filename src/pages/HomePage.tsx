import GradientText from "@/components/GradientText";
import InfoCard from "@/components/InfoCard";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FaLinkedin, FaFileAlt, FaBriefcase } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-6xl w-full mx-auto">
          <div className="text-center">
            <GradientText className="text-6xl md:text-8xl lg:text-9xl">
              Hi, I'm Jacob
            </GradientText>
            <h2 className="mt-8 text-xl md:text-2xl text-muted-foreground font-normal tracking-wide">
              A Computer Science student and Software Engineer
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating innovative solutions and building
              amazing user experiences
            </p>
          </div>

          {/* Info Cards */}
          <div className="mt-20 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <InfoCard
                label="RESUME • Jacob"
                title="Download CV"
                bgColor="#8fbc8f"
                darkBgColor="#6b8e6b"
                icon={<FaFileAlt />}
                href="/cv.pdf"
              />
              <InfoCard
                label="CONNECT • LinkedIn"
                title="Let's Connect"
                bgColor="#0B66C2"
                darkBgColor="#0B66C2"
                textColor="white"
                icon={<FaLinkedin />}
                href="https://www.linkedin.com/in/jacob-slunga-9121131a2/"
              />
            </div>
          </div>

          {/* Currently - Clean Alert */}
          <div className="mt-16 w-full max-w-2xl mx-auto">
            <Alert>
              <div className="flex items-center gap-2 mb-2">
                <FaBriefcase className="h-4 w-4" />
                <span className="font-medium">Currently</span>
              </div>
              <AlertDescription>
                Working as a Software Engineer at{" "}
                <strong>Axis Communications</strong> while pursuing a Master's
                in <strong>Large-Scale Software Development</strong>. Focused on
                creating scalable software architectures and great user
                experiences.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Additional content sections can go here */}
    </div>
  );
}
