import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useProducts } from "../context/ProductContext";

function SavedListsPage() {

  const {
  savedList,
  setSavedList,
  addToCart,
   favoriteLists,
  setFavoriteLists,
} = useProducts();

const [editName, setEditName] =
  useState("");
  const deleteList = (id) => {

  setSavedList(
    savedList.filter(
      (list) => list.id !== id
    )
  );

};

const addToFavorite = (list) => {

  list.items.forEach((item) => {

    setFavoriteLists((prev) => [
      ...prev,
      item,
    ]);

  });

};

const editList = (id) => {

  const updatedLists =
    savedList.map((list) =>
      list.id === id
        ? {
            ...list,
            name: editName,
          }
        : list
    );

  setSavedList(updatedLists);

  setEditName("");

};

  return (
  <div className="p-6">

    <div className="flex justify-between items-center mb-6">

      <h1 className="text-3xl font-bold">
        📋 Saved Lists
      </h1>

      <Link
        to="/favorites"
        className="bg-yellow-500 text-white px-4 py-2 rounded"
      >
        ⭐ Favorites
      </Link>

    </div>
      <p>
  Favorites: {favoriteLists.length}
</p>

      {savedList.length === 0 ? (

        <p>No Saved Lists</p>

      ) : (

        savedList.map((list) => (

          <div
            key={list.id}
            className="bg-white p-4 rounded-xl shadow mb-4"
          >

           <h3 className="font-bold text-xl">
  📅 {list.name || "Monthly Grocery"}
</h3>
<input
  type="text"
  placeholder="New List Name"
  value={editName}
  onChange={(e) =>
    setEditName(e.target.value)
  }
  className="border p-2 rounded mt-2 w-full"
/>

<button
  onClick={() =>
    editList(list.id)
  }
  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
>
  ✏ Edit
</button>

            <p>
              Total Items: {list.items.length}
            </p>

            {list.items.map((item, index) => (

              <div
                key={index}
                className="border-b py-2"
              >
                {item.name} × {item.quantity}
              </div>

            ))}

            <button
              onClick={() =>
                list.items.forEach((item) =>
                  addToCart(item)
                )
              }
              className="mt-3 bg-green-500 text-white px-4 py-2 rounded"
            >
              🛒 Add All To Cart
            </button>
            <button
  onClick={() =>
    addToFavorite(list)
  }
  className="mt-2 ml-2 bg-yellow-500 text-white px-4 py-2 rounded"
>
  ⭐ Favorite
</button>

<button
  onClick={() =>
    deleteList(list.id)
  }
  className="mt-2 ml-2 bg-red-500 text-white px-4 py-2 rounded"
>
  🗑 Delete
</button>

          </div>

        ))

      )}

    </div>
  );
}

export default SavedListsPage;