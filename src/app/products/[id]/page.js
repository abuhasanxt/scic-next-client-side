import React from "react";

export default async function ProductPage({ params }) {
  const { id } = await params;

  const res = await fetch("http://localhost:3000/api/add-product", {
    cache: "no-store",
  });
  const json = await res.json();

  const product = json.data.find((p) => p._id === id);

  if (!product) {
    return <p className="p-6 text-red-500">❌ Product not found!</p>;
  }

  return (
    <div className="p-6 min-h-screen max-w-3xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <img
            src={product.photo}
            alt={product.title}
            className="w-full h-64 object-cover rounded-lg shadow-sm"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-extrabold text-green-600 mb-4">
              Price: ${product.price}
            </p>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-extrabold text-blue-600 mb-4">
              Category: {product.category}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
