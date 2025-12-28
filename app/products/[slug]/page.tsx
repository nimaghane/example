import { products } from "../../data/products";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = products.find(p => p.slug === slug);

  if (!product) {
    return <h1>محصول پیدا نشد</h1>;
  }

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p className="mt-4">قیمت: ${product.price}</p>
      <p className="mt-2 text-gray-600">
        دسته‌بندی: {product.category}
      </p>
    </main>
  );
}
