import { useProducts } from "../context/ProductContext";
import React from "react";
import {
  useNavigate,
  Link,
} from "react-router-dom";

function Dashboard() {

  const shopkeeper = JSON.parse(
  localStorage.getItem("shopkeeper")
);
  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("isLoggedIn");

    navigate("/");

  };
  const {
  products,
  orders,
} = useProducts();

const totalProducts = products.length;

const totalOrders = orders.length;

const pendingOrders =
  orders.filter(
    (order) =>
      order.status === "Pending"
  ).length;

const readyOrders =
  orders.filter(
    (order) =>
      order.status ===
      "Ready For Pickup"
  ).length;

const totalRevenue =
  orders.reduce(
    (total, order) =>
      total +
      order.items.reduce(
        (sum, item) =>
          sum +
          item.price *
            item.quantity,
        0
      ),
    0
  );

  return (
    
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8">

      {/* Header */}
      <div className="text-center text-white mb-10">

        <h1 className="text-5xl font-bold mb-3">
          🏪 Shopkeeper Dashboard
        </h1>
        <h2>
 Welcome,
 {shopkeeper?.name}
</h2>

        <p className="text-xl">
          Manage Products, Orders & Customers
        </p>

      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {/* Add Product */}
        <Link
          to="/add-product"
          className="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition"
        >
          <div className="text-6xl mb-4">
            ➕
          </div>

          <h2 className="text-2xl font-bold">
            Add Product
          </h2>

          <p className="text-gray-600 mt-2">
            Add new items to store
          </p>

        </Link>

        {/* Products */}
        <Link
          to="/products"
          className="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition"
        >
          <div className="text-6xl mb-4">
            📦
          </div>

          <h2 className="text-2xl font-bold">
            View Products
          </h2>

          <p className="text-gray-600 mt-2">
            Manage all products
          </p>

        </Link>

        {/* Orders */}
        <Link
          to="/orders"
          className="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition"
        >
          <div className="text-6xl mb-4">
            🛒
          </div>

          <h2 className="text-2xl font-bold">
            Customer Orders
          </h2>

          <p className="text-gray-600 mt-2">
            Check & update orders
          </p>

        </Link>

      </div>

      {/* Stats Section */}
<div className="mt-12 grid md:grid-cols-5 gap-4 max-w-7xl mx-auto">

  <div className="bg-white p-6 rounded-2xl shadow text-center">
    <h2 className="text-3xl font-bold text-blue-500">
      {totalProducts}
    </h2>
    <p>Total Products</p>
  </div>

  <div className="bg-white p-6 rounded-2xl shadow text-center">
    <h2 className="text-3xl font-bold text-purple-500">
      {totalOrders}
    </h2>
    <p>Total Orders</p>
  </div>

  <div className="bg-white p-6 rounded-2xl shadow text-center">
    <h2 className="text-3xl font-bold text-yellow-500">
      {pendingOrders}
    </h2>
    <p>Pending Orders</p>
  </div>

  <div className="bg-white p-6 rounded-2xl shadow text-center">
    <h2 className="text-3xl font-bold text-green-500">
      {readyOrders}
    </h2>
    <p>Ready Orders</p>
  </div>

  <div className="bg-white p-6 rounded-2xl shadow text-center">
    <h2 className="text-3xl font-bold text-red-500">
      ₹ {totalRevenue}
    </h2>
    <p>Total Revenue</p>
  </div>

</div>

      {/* Logout */}
      <div className="flex justify-center mt-12">

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl text-lg font-bold"
        >
          🚪 Logout
        </button>
        <Link
  to="/shopkeeper-profile"
  className="bg-purple-500 text-white px-4 py-2 rounded"
>
  👤 My Profile
</Link>

      </div>

    </div>
  );
}

export default Dashboard;