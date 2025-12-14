import { Link } from "react-router-dom";
import { posts } from "../posts";

export default function Thoughts() {
  return (
    <div className="w-full pt-12 px-6 pb-6 md:p-12 lg:p-20">
      <div className="max-w-3xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-neutral-800 text-4xl font-medium">Thoughts</h1>
          <p className="text-neutral-600 font-light">
            Notes on engineering, AI, and building software.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/thoughts/${post.slug}`}
              className="group flex flex-col gap-2 cursor-pointer"
            >
              <h2 className="text-neutral-800 text-xl font-medium group-hover:underline decoration-neutral-300 underline-offset-4 decoration-1">
                {post.title}
              </h2>
              <div className="text-neutral-400 text-sm font-light">
                {post.date}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
