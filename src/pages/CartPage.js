import jsPDF from "jspdf";
import React from "react";
import { useProducts } from "../context/ProductContext";
import { Link } from "react-router-dom";

function CartPage() { 
const downloadBill = () => {
  const doc = new jsPDF();

  doc.setFontSize(20);

  doc.text(
    "Shopping Bill",
    20,
    20
  );

  let y = 40;

  cart.forEach((item, index) => {

    doc.text(
      `${index + 1}. ${item.name}`,
      20,
      y
    );

    doc.text(
      `Qty: ${item.quantity}`,
      100,
      y
    );

    doc.text(
      `₹ ${item.price}`,
      150,
      y
    );

    y += 10;

  });

  const total = cart.reduce(
    (sum, item) =>
      sum +
      item.price * item.quantity,
    0
  );

  doc.text(
    `Total: ₹ ${total}`,
    20,
    y + 20
  );

  doc.save("bill.pdf");

};

 const {
  cart,
  removeFromCart,
  increaseQuantity,
   addToCart,
  savedList,
  decreaseQuantity,
  placeOrder,
  setSavedList
} = useProducts();
const sendWhatsAppOrder = () => {

  const orderText = cart
    .map(
      (item) =>
        `${item.name} x ${item.quantity}`
    )
    .join("%0A");

  const total = cart.reduce(
    (sum, item) =>
      sum +
      item.price * item.quantity,
    0
  );

  const message =
    `🛒 New Order:%0A${orderText}%0ATotal: ₹ ${total}`;

  window.open(
    `https://wa.me/919999999999?text=${message}`,
    "_blank"
  );

};
const saveCurrentCart = () => {

  const newList = {
    id: Date.now(),
    items: [...cart],
  };

  setSavedList((prev) => [
    ...prev,
    newList,
  ]);

  alert("✅ List Saved");

};

 return (
  <div className="min-h-screen bg-gray-100 p-6">

    <div className="flex justify-between items-center mb-6">

      <h1 className="text-3xl font-bold">
        🛒 My Cart
      </h1>

      <Link
        to="/saved-lists"
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg"
      >
        📋
      </Link>

    </div>
     {cart?.length === 0 ? (
        <p className="text-center">Cart is Empty</p>
      ) : (
      <div className="grid md:grid-cols-3 gap-6">

  {/* Left Side Products */}
  <div className="md:col-span-2">

    {cart.map((item, index) => (

      <div
        key={index}
        className="bg-white p-4 rounded-xl shadow-md mb-3"
      >

        <div className="flex justify-between">

          <div>

            <h2 className="text-xl font-bold">
              {item.name}
            </h2>

            <p className="text-green-600 font-semibold">
              ₹ {item.price}
            </p>

            <p className="text-gray-600">
              {item.desc}
            </p>

          </div>

          <button
            onClick={() => removeFromCart(index)}
            className="bg-red-500 text-white px-4 py-2 rounded h-fit"
          >
            Remove
          </button>

        </div>

        <div className="flex items-center gap-3 mt-3">

          <button
            onClick={() =>
              decreaseQuantity(item._id)
            }
            className="bg-gray-300 px-3 rounded"
          >
            -
          </button>

          <span className="font-bold">
            {item.quantity}
          </span>

          <button
            onClick={() =>
              increaseQuantity(item._id)
            }
            className="bg-gray-300 px-3 rounded"
          >
            +
          </button>

        </div>

      </div>

    ))}

  </div>

  {/* Right Side Summary */}
  <div className="bg-white p-5 rounded-xl shadow h-fit sticky top-5">

    <h2 className="text-2xl font-bold mb-4">
      🛒 Order Summary
    </h2>

    <p className="mb-2">
      Items: {cart.length}
    </p>

    <h3 className="text-3xl font-bold text-green-600 mb-4">

      ₹ {
        cart.reduce(
          (total, item) =>
            total +
            item.price * item.quantity,
          0
        )
      }

    </h3>

    <button
      onClick={placeOrder}
      className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold mb-3"
    >
      🚀 Place Order
    </button>

    <button
      onClick={downloadBill}
      className="w-full bg-green-500 text-white py-3 rounded-xl mb-3"
    >
      📄 Download Bill
    </button>

    <button
      onClick={sendWhatsAppOrder}
      className="w-full bg-green-700 text-white py-3 rounded-xl"
    >
      📱 WhatsApp Order
    </button>
    <button
  onClick={saveCurrentCart}
  className="w-full mt-3 bg-blue-500 text-white py-2 rounded-xl"
>
  📋 Save List
</button>
</div>

   <div className="md:col-span-3 mt-6">

  <div className="bg-white p-6 rounded-2xl shadow-lg">

    <div className="flex justify-between items-center mb-4">

      <h2 className="text-2xl font-bold">
        📋 Saved Lists
      </h2>

      <Link
        to="/saved-lists"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        View All
      </Link>

    </div>

    {!savedList || savedList.length === 0 ? (

      <p>No Saved Lists</p>

    ) : (

      <div className="grid md:grid-cols-3 gap-4">

        {savedList.map((list) => (

          <div
            key={list.id}
            className="border rounded-xl p-4 hover:shadow-lg"
          >

            <h3 className="font-bold mb-2">
              Grocery List
            </h3>

            <p>
              Total Items: {list.items.length}
            </p>

            <button
              onClick={() => {
                list.items.forEach((item) =>
                  addToCart(item)
                );
              }}
              className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg"
            >
              🛒 Add All To Cart
            </button>

          </div>

        ))}

      </div>

    )}

  </div>

</div>
  </div>
)}

    </div>
  );
}

export default CartPage;