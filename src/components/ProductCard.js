import React from "react";

function ProductList() {
  const products = [
    { name: "Milk", price: 50 },
    { name: "Bread", price: 30 },
  ];

  return (
    <div>
      <h3>Products</h3>

      <ul>
        {products.map((p, index) => (
          <li key={index}>
            {p.name} - ₹{p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;