export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">
        فروشگاه و بلاگ
      </h1>

      <div className="flex gap-4">
        <a href="/products" className="px-5 py-2 bg-blue-600 text-white rounded">
          محصولات
        </a>
        <a href="/blog" className="px-5 py-2 bg-green-600 text-white rounded">
          بلاگ
        </a>
        <a href="/admin/blog" className="px-5 py-2 bg-gray-800 text-white rounded">
          مدیریت بلاگ
        </a>
      </div>
    </main>
  );
}
