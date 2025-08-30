"use client";
import { backendURL } from "@/config";
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

  console.log(backendURL);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Product Data:", formData);

    try {
      console.log(backendURL + "/add-product");
      const res = await fetch(backendURL + "/add-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Server Response:", data);

      if (res.ok) {
        alert("✅ Product added successfully!");
        setFormData({
          title: "",
          description: "",
          price: "",
          photo: "",
          category: "",
        }); // ফর্ম reset
      } else {
        alert("❌ Failed to add product!");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
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
