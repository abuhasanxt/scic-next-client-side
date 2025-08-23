import highLightProduct from '../components/data/highlight-product.json'
export default function ProductHighlights() {
  return (
    <section className="py-12 px-6 text-center">
      <h2 className="text-2xl font-semibold mb-4">Product Highlights</h2>
    <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {highLightProduct.map((product) => (
  <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <img src={product.photo} alt={product.title} className="w-full h-48 object-cover mb-2" />
    <h2 className="text-lg font-semibold">{product.title}</h2>
    <p className="text-gray-600">{product.description}</p>
    <p className="text-blue-600 font-bold mt-2">${product.price}</p>
    <p className="text-sm text-gray-500">{product.category}</p>
  </div>
))}

    </div>
    </section>
  );
}
