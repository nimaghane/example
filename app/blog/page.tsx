import { blogs } from "../data/blogs";
import BlogCard from "../components/BlogCard";

export default function BlogPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">بلاگ</h1>

      <div className="grid gap-4">
        {blogs.map(blog => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            slug={blog.slug}
          />
        ))}
      </div>
    </main>
  );
}
