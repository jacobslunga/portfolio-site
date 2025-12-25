import { useParams, Navigate, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { posts } from "../posts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/thoughts" replace />;
  }

  return (
    <div className="w-full pt-12 px-6 pb-20 md:p-12 lg:p-20 bg-neutral-50 dark:bg-neutral-900 fade-in min-h-screen">
      <article className="max-w-2xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/thoughts"
            className="group inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Back to thoughts
          </Link>
        </div>

        <header className="mb-10 flex flex-col gap-4">
          <h1 className="text-neutral-900 dark:text-neutral-100 text-3xl md:text-4xl font-medium leading-tight tracking-tighter">
            {post.title}
          </h1>
          <time className="text-neutral-400 dark:text-neutral-500 text-sm font-mono">
            {post.date}
          </time>
        </header>

        <div className="prose prose-neutral tracking-tight dark:prose-invert prose-lg prose-headings:font-medium prose-p:font-light prose-p:leading-8 max-w-none">
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <a
                  {...props}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 dark:text-neutral-100 tracking-tighter font-medium underline decoration-neutral-300 dark:decoration-neutral-600 hover:decoration-neutral-900 dark:hover:decoration-neutral-100 underline-offset-4 transition-all"
                />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Footer */}
        <hr className="my-12 border-neutral-200 dark:border-neutral-800" />
        <div className="flex justify-between items-center">
          <Link
            to="/thoughts"
            className="text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            View all thoughts
          </Link>
        </div>
      </article>
    </div>
  );
}
