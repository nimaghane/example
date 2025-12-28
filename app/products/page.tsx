import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">محصولات</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            slug={product.slug}
          />
        ))}
      </div>
    </main>
  );
}
