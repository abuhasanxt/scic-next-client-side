import React from "react";

export default async function ProductPage({ params }) {
  const id = params.id; // Next.js 15+ server component এ direct access কাজ করে

  const res = await fetch(
    `https://scic-next-server.vercel.app/addProduct/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) return <p className="p-6 text-red-500">Product not found!</p>;

  const product = await res.json();

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div>
          <img
            src={product.photo}
            alt={product.title}
            className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-sm"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Title: {product.title}
            </h1>
            <p className="text-gray-700 text-lg mb-4">
              Description:{product.description}
            </p>
          </div>

          <div className="mt-4">
            <p className="text-2xl font-extrabold text-green-600 mb-4">
              Price: ${product.price}
            </p>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-extrabold text-green-600 mb-4">
              Category: {product.category}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
