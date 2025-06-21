export interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  slug: string;
  excerpt: string;
  readTime: string;
  customComponent?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "AI Is Here — and So Is Your Future",
    slug: "ai-is-here-and-so-is-your-future",
    date: "2025-06-21",
    excerpt:
      "AI isn't coming. It's here — and it's not going away. Almost every developer I know has already used it to test, design, or even write entire applications.",
    readTime: "5 min read",
    content: "",
    customComponent: "AIBlogPost",
  },
];

export const getBlogPost = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getAllBlogPosts = (): BlogPost[] => {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};
