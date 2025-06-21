import { useParams, Link, Navigate } from "react-router-dom";
import { getBlogPost } from "@/data/blog";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import AIBlogPost from "@/components/blog/AIBlogPost";
import { HiCalendar, HiClock, HiArrowLeft } from "react-icons/hi2";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getBlogPost(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen w-full py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8"
        >
          <HiArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>

        {/* Article header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta info */}
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <HiCalendar className="w-5 h-5" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <HiClock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Article content */}
        <article className="prose prose-lg max-w-none">
          {post.customComponent === "AIBlogPost" ? (
            <AIBlogPost />
          ) : (
            <MarkdownRenderer content={post.content} />
          )}
        </article>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border/50">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/60 hover:bg-secondary/80 text-foreground font-medium transition-all duration-200 hover:scale-105"
          >
            <HiArrowLeft className="w-4 h-4" />
            <span>Back to all posts</span>
          </Link>
        </footer>
      </div>
    </div>
  );
}
