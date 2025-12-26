import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center px-6 bg-neutral-50 dark:bg-neutral-900 fade-in">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-medium tracking-tighter text-neutral-800 dark:text-neutral-100">
          404
        </h1>

        <p className="mt-4 text-neutral-600 dark:text-neutral-400">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
