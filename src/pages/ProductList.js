import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
  fetchProducts();
}, []);
const fetchProducts = async () => {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/products"
    );

    setProducts(res.data);

  } catch (error) {
    console.log(error);
  }
};
const deleteProduct = async (id) => {

  try {

    await axios.delete(
      `http://localhost:5000/api/products/${id}`
    );

    fetchProducts();

  } catch (error) {

    console.log(error);

  }

};

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Products</h2>

      {products.length === 0 && <p>No products added</p>}

      {products.map((p) => (
        <div
         key={p._id}
          className="border p-4 mb-2 rounded flex justify-between"
        >
          <div>
            <h3 className="font-bold">{p.name}</h3>
            <p>₹ {p.price}</p>
            <p className="text-sm text-gray-600">{p.desc}</p>
          </div>

          <button
           onClick={() => deleteProduct(p._id)}
            className="bg-red-500 text-white px-3 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;