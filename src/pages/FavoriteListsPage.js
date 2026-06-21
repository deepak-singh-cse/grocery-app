import React from "react";
import { useProducts } from "../context/ProductContext";

function FavoriteListsPage() {

  const {
  favoriteLists,
  setFavoriteLists,
  addToCart,
} = useProducts();
const removeFavorite = (index) => {

  setFavoriteLists(
    favoriteLists.filter(
      (_, i) => i !== index
    )
  );

};

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        ⭐ Favorite Products
      </h1>

      {favoriteLists.length === 0 ? (
        <p>No Favorite Products</p>
      ) : (
        favoriteLists.map((product, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow mb-3"
          >
            <div className="flex justify-between items-center">

  <h3 className="font-bold text-lg">
    {product.name}
  </h3>

  <div className="flex gap-2">

    <button
      onClick={() => addToCart(product)}
      className="bg-green-500 text-white px-3 py-1 rounded"
    >
      🛒 Add
    </button>

    <button
      onClick={() => removeFavorite(index)}
      className="bg-red-500 text-white px-3 py-1 rounded"
    >
      ❌ Remove
    </button>

  </div>

</div>
          </div>
        ))
      )}
    </div>
  );
}

export default FavoriteListsPage;