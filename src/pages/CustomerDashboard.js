import axios from "axios";
import { useEffect } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

function CustomerDashboard() {

 const {
  addToCart,
} = useProducts();

const [products, setProducts] = useState([]);
const [orders, setOrders] = useState([]);
const [shopkeepers, setShopkeepers] = useState([]);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const suggestedProducts =
  products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(message.toLowerCase())
  );
  const [addedId, setAddedId] = useState(null);
useEffect(() => {
  fetchProducts();
  fetchOrders();
    fetchShopkeepers();

  const interval = setInterval(() => {
    fetchOrders();
  }, 5000);

  return () => clearInterval(interval);

}, []);

const fetchProducts = async () => {
  try {

    const res = await axios.get(
      "https://grocery-backend-wot4.onrender.com/api/products"
    );

    setProducts(res.data);

  } catch (error) {

    console.log(error);

  }
};
const fetchOrders = async () => {

  try {

    const customerProfile =
      JSON.parse(
        localStorage.getItem(
          "customerProfile"
        )
      );

    const res = await axios.get(
      "https://grocery-backend-wot4.onrender.com/api/orders"
    );

    console.log("Orders:", res.data);
    console.log(
      "Customer:",
      customerProfile
    );

  setOrders(res.data);

  } catch (error) {

    console.log(error);

  }

};
const fetchShopkeepers =
async () => {

  try {

    const res = await axios.get(
      "https://grocery-backend-wot4.onrender.com/api/shopkeeper"
    );

    setShopkeepers(res.data);

  } catch (error) {

    console.log(error);

  }

};
  const startVoiceSearch = () => {

  const recognition =
    new window.webkitSpeechRecognition();

  recognition.lang = "en-IN";

  recognition.onresult = (event) => {

    const transcript =
      event.results[0][0].transcript;

    setSearch(transcript);

    // AI Auto Add To Cart
    const foundProduct = products.find(
      (product) =>
        transcript
          .toLowerCase()
          .includes(
            product.name.toLowerCase()
          )
    );

    if (foundProduct) {

      addToCart(foundProduct);

      alert(
        `${foundProduct.name} added to cart`
      );

    }

  };

  recognition.start();

};
const handleAIChat = () => {

  const foundProduct = products.find(
    (product) =>
      message
        .toLowerCase()
        .includes(
          product.name.toLowerCase()
        )
  );

  if (foundProduct) {

    addToCart(foundProduct);

    alert(
      `${foundProduct.name} added to cart`
    );

    setMessage("");

  } else {

    alert("Product Not Found");

  }

};

return (
  <div
    className={`min-h-screen p-6 ${
      darkMode
        ? "bg-black text-white"
        : "bg-gray-100 text-black"
    }`}
  >

    <div className="absolute top-6 right-6">

      <button
        onClick={() =>
          setDarkMode(!darkMode)
        }
        className="
          bg-gradient-to-r
          from-indigo-600
          to-purple-600
          text-white
          px-5
          py-3
          rounded-full
          shadow-xl
          hover:scale-105
          transition
        "
      >
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>

    </div>

<div className="flex justify-end mb-4">

<div className="
bg-gradient-to-r
from-purple-600
via-blue-600
to-indigo-700
text-white
rounded-3xl
p-10
mb-8
shadow-2xl
text-center
max-w-5xl
mx-auto
">

  <h1 className="text-6xl font-extrabold mb-4">
    🛍️ Smart Shopping Store
  </h1>

  <p className="text-lg opacity-90">
    AI Powered Shopping Experience
  </p>

  <div className="mt-5 flex justify-center gap-4 flex-wrap">

    <div className="bg-white/20 px-5 py-2 rounded-full">
      🚚 Fast Delivery
    </div>

    <div className="bg-white/20 px-5 py-2 rounded-full">
      💳 Secure Payment
    </div>

    <div className="bg-white/20 px-5 py-2 rounded-full">
      🤖 AI Assistant
    </div>

  </div>

</div>
</div>
      <h1 className="text-3xl font-bold text-center mb-6">
        🛒 Customer Dashboard
      </h1>
      <div className="mb-6">

  <select
    className="w-full border p-3 rounded-xl"
    onChange={(e) =>
      localStorage.setItem(
        "selectedShopkeeper",
        e.target.value
      )
    }
  >

    <option value="">
      Select Shopkeeper
    </option>

    {shopkeepers.map((shop) => (

      <option
        key={shop._id}
        value={JSON.stringify(shop)}
      >
        {shop.name}
      </option>

    ))}

  </select>

</div>
      <div className="flex justify-end gap-3 mb-6">

  <Link
    to="/saved-lists"
    className="bg-blue-500 text-white p-3 rounded-full shadow-lg"
    title="Saved Lists"
  >
    📋
  </Link>

  <Link
    to="/cart"
    className="bg-green-500 text-white p-3 rounded-full shadow-lg"
    title="Cart"
  >
    🛒
  </Link>

  <Link
    to="/profile"
    className="bg-purple-500 text-white p-3 rounded-full shadow-lg"
    title="Profile"
  >
    👤
  </Link>

</div>

      {/* Cart Button */}
      <div className="flex justify-center mb-6">

        <Link
          to="/cart"
          className="bg-black text-white px-6 py-2 rounded"
        >
          Go To Cart
        </Link>

      </div>
     <div
  className={`p-4 rounded-2xl shadow-xl mb-6 ${
    darkMode
      ? "bg-gray-900/80 backdrop-blur-lg border border-gray-700"
      : "bg-white"
  }`}
>

  <h2 className="text-2xl font-bold mb-4">
    🤖 AI Shopping Assistant
  </h2>

  <div className="flex gap-2">

    <input
      type="text"
      placeholder="Type product name..."
      className="w-full p-3 border rounded-xl"
      value={message}
      onChange={(e) =>
        setMessage(e.target.value)
      }
    />

    <button
      onClick={handleAIChat}
      className="bg-purple-500 text-white px-6 rounded-xl"
    >
      Send
    </button>

  </div>
  {message && suggestedProducts.length > 0 && (

  <div className="mt-4 bg-gray-100 rounded-xl p-3">

    {suggestedProducts.map((product) => (

      <div
        key={product._id}
        onClick={() => {

          addToCart(product);

          setMessage("");

          alert(
            `${product.name} added to cart`
          );

        }}
        className="p-2 hover:bg-gray-200 rounded cursor-pointer flex justify-between"
      >

        <span>
          {product.name}
        </span>

        <span className="text-green-600">
          ₹ {product.price}
        </span>

      </div>

    ))}

  </div>

)}

</div>

      {/* Products */}
    <div className="mb-6 flex gap-2">

  <input
    type="text"
    placeholder="🔍 Search Products..."
    className={`w-full p-3 rounded-xl border ${
  darkMode
    ? "bg-gray-900 border-gray-700 text-white"
    : "bg-white"
}`}
  />

  <button
    onClick={startVoiceSearch}
    className="bg-blue-500 text-white px-4 rounded-xl"
  >
    🎤
  </button>

</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">

  <div
  className={`rounded-2xl shadow-lg p-5 text-center ${
    darkMode
      ? "bg-gray-900 border border-gray-700 text-white"
      : "bg-white text-black"
  }`}
>
    <h2 className="text-3xl font-bold text-blue-600">
      {products.length}
    </h2>
    <p>Total Products</p>
  </div>

 <div
  className={`rounded-2xl shadow-lg p-5 text-center ${
    darkMode
      ? "bg-gray-900 border border-gray-700 text-white"
      : "bg-white text-black"
  }`}
>
    <h2 className="text-3xl font-bold text-green-600">
      {orders.length}
    </h2>
    <p>Total Orders</p>
  </div>

  <div
  className={`rounded-2xl shadow-lg p-5 text-center ${
    darkMode
      ? "bg-gray-900 border border-gray-700 text-white"
      : "bg-white text-black"
  }`}
>
    <h2 className="text-3xl font-bold text-purple-600">
      AI
    </h2>
    <p>Shopping Assistant</p>
  </div>

  <div
  className={`rounded-2xl shadow-lg p-5 text-center ${
    darkMode
      ? "bg-gray-900 border border-gray-700 text-white"
      : "bg-white text-black"
  }`}
>
    <h2 className="text-3xl font-bold text-red-600">
      🎤
    </h2>
    <p>Voice Search</p>
  </div>

</div>

      {products.length === 0 ? (

        <p className="text-center">
          No Products Available
        </p>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {products
  .filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  )
  .map((product) => (

           <div
  key={product._id}
 className={`group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${
 darkMode
  ? "bg-gray-900/80 backdrop-blur-lg border border-gray-700 text-white"
  : "bg-white"
}`}
>
<img
  src={product.image}
  alt={product.name}
 className="w-full h-52 object-cover rounded-t-3xl group-hover:scale-110 transition duration-500"
/>
              <h2 className="text-xl font-bold">
                {product.name}
              </h2>

             <p className="text-3xl font-extrabold text-green-500">
                ₹ {product.price}
              </p>

              <p className="text-gray-600">
                {product.desc}
              </p>

              <button
  onClick={() => {

    addToCart(product);

    setAddedId(product._id);

    setTimeout(() => {
      setAddedId(null);
    }, 1500);

  }}
 className={`mt-4 w-full py-3 rounded-xl text-white font-bold transition-all duration-300 ${
  addedId === product._id
    ? "bg-green-500"
    : "bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105"
}`}
>

  {addedId === product._id
    ? "✅ Added"
    : "Add To Cart"}

</button>

            </div>

          ))}

        </div>

      )}

      {/* Orders Section */}
      <div className="mt-10">

        <h2 className="text-3xl font-bold mb-4">
          📦 My Orders
        </h2>
        {orders.some(
  (order) =>
    order.status === "Ready For Pickup"
) && (

 <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-3xl shadow-2xl mb-6 text-center">

  <h2 className="text-3xl font-bold">
    🎉 Order Ready For Pickup
  </h2>

  <p className="mt-2">
    Your order is prepared and waiting for you.
  </p>

</div>

)}

        {orders.length === 0 ? (

          <p>No Orders Yet</p>

        ) : (

          <div className="space-y-4">

            {orders.map((order) => (

              <div
                key={order._id}
                className={`p-4 rounded-2xl shadow-xl ${
  darkMode
    ? "bg-gray-900 border border-gray-700"
    : "bg-white"
}`}
              >
<div className="mt-4 space-y-2">

  {order.items.map((item, index) => (

    <div
      key={index}
      className="border-b pb-2"
    >

      <h4 className="font-bold">
        {item.name}
      </h4>

      <p>
        Quantity: {item.quantity}
      </p>

      <p>
        ₹ {item.price}
      </p>

    </div>

  ))}

</div>
<div className="mt-4 text-right font-bold text-lg">

  Total: ₹ {
    order.items.reduce(
      (total, item) =>
        total +
        item.price * item.quantity,
      0
    )
  }

</div>
                <div className="flex justify-between items-center">

                  <h3 className="font-bold">
                    Order #{order._id}
                  </h3>

                  <span
                    className={`px-4 py-1 rounded text-white ${
  order.status === "Completed"
    ? "bg-blue-500"
    : order.status === "Ready For Pickup"
    ? "bg-green-500"
    : "bg-yellow-500"
}`}
                  >
                    {order.status}
                  </span>

                </div>

              </div>

            ))}

          </div>

        )}

           </div>

      {/* Floating Cart Button */}
      <Link
        to="/cart"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white p-5 rounded-full shadow-2xl hover:scale-110 transition z-50"
      >
        🛒
      </Link>

    </div>
  );
}

export default CustomerDashboard;