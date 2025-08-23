export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-gray-50">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Shop</h1>
        <p className="text-lg text-gray-700">Discover amazing products at the best prices.</p>
      </div>
      <div className="md:w-1/2">
        <img src="../components/img" alt="Shop Hero" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </section>
  );
}
