import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function NotFoundPage() {
  useScrollToTop();

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-foreground/20">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
            Page Not Found
          </h2>
          <p className="text-foreground/70 text-lg">
            Sorry, the page you're looking for doesn't exist.
          </p>
        </div>

        <Link to="/">
          <Button className="inline-flex items-center gap-2">Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
