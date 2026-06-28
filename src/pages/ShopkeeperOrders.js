import React, { useEffect, useState } from "react";
import axios from "axios";

function ShopkeeperOrders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {

      const res = await axios.get(
        "https://grocery-backend-wot4.onrender.com/api/orders"
      );

      setOrders(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (id) => {

    try {

      await axios.put(
        `https://grocery-backend-wot4.onrender.com/api/orders/${id}`,
        {
          status: "Ready For Pickup",
        }
      );

      fetchOrders();

    } catch (error) {

      console.log(error);

    }

  };

  return (
  <div className="p-6">
    <h1 className="text-3xl font-bold">
      Customer Orders
    </h1>

    <h2 className="mb-4">
      Total Orders: {orders.length}
    </h2>

    {orders.map((order) => (
      <div
        key={order._id}
        className="border p-3 mb-3 rounded"
      >
        <p>
          Order ID: {order._id}
        </p>

        <p>
          Status: {order.status}
        </p>
        {order.status === "Pending" && (
  <button
    onClick={() =>
      updateStatus(order._id)
    }
    className="bg-green-500 text-white px-4 py-2 rounded mt-3"
  >
    Ready For Pickup
  </button>
)}
        {order.customer && (
  <div className="mt-2">
    <p>
      Name: {order.customer.name}
    </p>

    <p>
      Mobile: {order.customer.mobile}
    </p>

    <p>
      Address: {order.customer.address}
    </p>
  </div>
)}
<div className="mt-3">
  <h3 className="font-bold">
    Items
  </h3>

  {order.items.map((item, index) => (
    <div
      key={index}
      className="border-b py-1"
    >
      <p>
        {item.name}
      </p>

      <p>
        Qty: {item.quantity}
      </p>

      <p>
        ₹ {item.price}
      </p>
    </div>
  ))}
  <div className="mt-3 font-bold text-green-600">
  Total: ₹ {
    order.items.reduce(
      (total, item) =>
        total +
        item.price * item.quantity,
      0
    )
  }
</div>
</div>
      </div>
    ))}
  </div>
  
);
}

export default ShopkeeperOrders;