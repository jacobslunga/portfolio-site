import { Link } from "react-router-dom";
import { getAllBlogPosts } from "@/data/blog";
import GradientText from "@/components/GradientText";
import { HiCalendar, HiClock } from "react-icons/hi2";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen w-full py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <GradientText className="text-5xl md:text-6xl lg:text-7xl mb-6">
            Blog
          </GradientText>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My thoughts on technology, development, and the future of software
            engineering.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`}>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <HiCalendar className="w-4 h-4" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-1">
                      <HiClock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              No blog posts yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
