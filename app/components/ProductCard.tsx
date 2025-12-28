type Props = {
  title: string;
  price: number;
  slug: string;
};

export default function ProductCard({ title, price, slug }: Props) {
  return (
    <a
      href={`/products/${slug}`}
      className="border p-4 rounded hover:shadow transition"
    >
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600 mt-2">${price}</p>
    </a>
  );
}
