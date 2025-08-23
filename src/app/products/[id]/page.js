import products from "../../../components/data/product.json";

export default function ProductDetails({ params }) {
  const product = products.find((p) => p.id == params.id);

  if (!product) return <h2 className="text-center text-red-500 mt-10">Product not found</h2>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <h3 className="text-xl font-semibold text-blue-600">Price: ${product.price}</h3>
    </div>
  );
}
