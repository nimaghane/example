import { blogs } from "../../data/blogs";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return <h1>بلاگ پیدا نشد</h1>;
  }

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="mt-4">{blog.content}</p>
    </main>
  );
}
