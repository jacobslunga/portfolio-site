import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            404
          </h1>
          <p className="text-lg text-muted-foreground mb-2">Page not found</p>
          <p className="text-base text-muted-foreground">
            The page you're looking for doesn't exist
          </p>
          <Button onClick={() => navigate("/")} className="rounded-lg mt-4">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
