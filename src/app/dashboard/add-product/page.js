// "use client"; // client component

// import { useSession } from "next-auth/react";
// import { useState } from "react";

// export default function AddProductPage() {
//   const { data: session, status } = useSession();
//   const [name, setName] = useState("");
//   const [desc, setDesc] = useState("");
//   const [price, setPrice] = useState("");

//   if (status === "loading") return <p>Loading session...</p>;
//   if (!session) return <p>You must be logged in to add a product.</p>;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch("/api/products", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name, desc, price }),
//     });

//     if (res.ok) {
//       alert("Product added successfully!");
//       setName(""); setDesc(""); setPrice("");
//     } else alert("Failed to add product.");
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-10 p-5 bg-white shadow rounded">
//       <h1>Add Product</h1>
//       <p>Logged in as: {session.user.email}</p>
//       <form onSubmit={handleSubmit}>
//         {/* inputs */}
//       </form>
//     </div>
//   );
// }
"use client";
import { useState } from "react";

export default function AddProductForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    photo: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data:", formData);

    // এখানে তুমি API call করতে পারো
    // await fetch("/api/products", { method: "POST", body: JSON.stringify(formData) });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 space-y-4"
    >
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>

      {/* Title */}
      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter product title"
          required
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter product description"
          required
        />
      </div>

      {/* Price */}
      <div>
        <label className="block text-sm font-medium mb-1">Price ($)</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter price"
          required
        />
      </div>

      {/* Photo URL */}
      <div>
        <label className="block text-sm font-medium mb-1">Photo URL</label>
        <input
          type="text"
          name="photo"
          value={formData.photo}
          onChange={handleChange}
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="https://example.com/image.jpg"
          required
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select category</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Home">Home</option>
          <option value="Fitness">Fitness</option>
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Add Product
      </button>
    </form>
  );
}
