import React, { useState } from "react";

function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    const product = { name, price };
    console.log(product);
  };

  return (
    <div>
      <h3>Add Product</h3>

      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Product Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ProductForm;