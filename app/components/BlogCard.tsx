type Props = {
  title: string;
  slug: string;
};

export default function BlogCard({ title, slug }: Props) {
  return (
    <a
      href={`/blog/${slug}`}
      className="border p-4 rounded hover:shadow transition"
    >
      <h2 className="text-lg font-semibold">{title}</h2>
    </a>
  );
}
