import Link from "next/link";
import products from "../../components/data/product.json";

export default function ProductsPage() {
  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {products.map((p) => (
          <div key={p.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-gray-600">{p.description}</p>
            <p className="text-blue-600 font-bold">${p.price}</p>
            <Link href={`/products/${p.id}`} className="text-sm text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
