import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

 await axios.post(
  "https://grocery-backend-wot4.onrender.com/api/products",
  {
    name,
    price,
    desc,
    image,
  }
);

    navigate("/products"); // list page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Add Product</h2>

        <input
          type="text"
          placeholder="Product Name"
          className="w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full p-2 border rounded"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="w-full p-2 border rounded"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
  type="file"
  className="w-full p-2 border rounded"
  onChange={(e) => {

    const file =
      e.target.files[0];

    const reader =
      new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }

  }}
/>

        <button className="w-full bg-blue-500 text-white p-2 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;