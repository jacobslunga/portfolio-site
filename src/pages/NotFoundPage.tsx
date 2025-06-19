import { motion, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFoundPage() {
  const navigate = useNavigate();

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center px-6 py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-2xl mx-auto"
      >
        {/* Floating 404 */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-8"
        >
          <div className="text-8xl md:text-9xl font-bold opacity-10 select-none">
            404
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Page Not Found
            </h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed"
            >
              Oops! The page you're looking for seems to have wandered off into
              the digital void. Don't worry, it happens to the best of us.
            </motion.p>
          </div>

          <Button onClick={() => navigate("/")}>
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
