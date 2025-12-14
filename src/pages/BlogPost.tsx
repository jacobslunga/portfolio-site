// src/pages/BlogPost.tsx
import { useParams, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { posts } from "../posts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/thoughts" replace />;
  }

  return (
    <div className="w-full pt-12 px-6 pb-20 md:p-12 lg:p-20">
      <article className="max-w-2xl mx-auto">
        <header className="mb-10 flex flex-col gap-4">
          <h1 className="text-neutral-800 text-3xl md:text-4xl font-medium leading-tight">
            {post.title}
          </h1>
          <time className="text-neutral-400 text-sm font-light">
            {post.date}
          </time>
        </header>

        {/* Removed 'prose-a' classes from here to handle them in the component below */}
        <div className="prose prose-neutral prose-lg prose-headings:font-medium prose-p:font-light prose-p:text-neutral-600">
          <ReactMarkdown
            components={{
              // Override the default link renderer
              a: ({ node, ...props }) => (
                <a
                  {...props}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-800 transition-colors underline decoration-teal-600/30 hover:decoration-teal-800/50 underline-offset-4"
                />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
