"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://scic-next-server.vercel.app/addProduct")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 bg-white"
          >
            <div>
              <img
                src={product.photo}
                alt={product.title}
                className="w-full  h-64 object-cover rounded-lg shadow-sm"
              />
            </div>

            <h2 className="text-lg font-semibold">Title: {product.title}</h2>

            <p className="text-green-600 font-bold mt-2">
              Price ${product.price}
            </p>

            {/* Details page link */}
            <Link
              href={`/products/${product._id}`}
              className="text-sm text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
