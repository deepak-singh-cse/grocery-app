import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

function OrdersPage() {
  useEffect(() => {
  fetchOrders();
}, []);

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

const updateOrderStatus = async (
  id,
  status
) => {

  try {

    await axios.put(
      `https://grocery-backend-wot4.onrender.com/api/orders/${id}`,
      { status }
    );

    fetchOrders();

  } catch (error) {

    console.log(error);

  }

};

const [orders, setOrders] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-center mb-6">
        📦 Customer Orders
      </h1>

      {orders.length === 0 ? (

        <p className="text-center">
          No Orders Yet
        </p>

      ) : (

        <div className="space-y-6">

          {orders.map((order) => (

            <div
             key={order._id}
              className="bg-white p-6 rounded-xl shadow-md"
            >

              <div className="flex justify-between items-center mb-4">
                <div className="mt-4 bg-gray-100 p-4 rounded">

  <h3 className="font-bold text-lg mb-2">
    👤 Customer Details
  </h3>

  <p>
    Name: {order.customer?.name}
  </p>

  <p>
    Mobile: {order.customer?.mobile}
  </p>

  <p>
    Address: {order.customer?.address}
  </p>

</div>

                <h2 className="text-xl font-bold">
               Order ID: {order._id}
                </h2>

                <span className="bg-yellow-200 px-4 py-1 rounded">
                  {order.status}
                </span>
<button
  onClick={() =>
   updateOrderStatus(
  order._id,
  "Ready For Pickup"
)
  }
  className="bg-green-500 text-white px-4 py-2 rounded"
>
  Ready
</button>
<button
  onClick={() =>
    updateOrderStatus(
  order._id,
  "Completed"
)
  }
  className="bg-blue-500 text-white px-4 py-2 rounded"
>
  Complete
</button>
              </div>

              {order.items.map((item, index) => (

                <div
                  key={index}
                  className="border-b py-2"
                >

                  <h3 className="font-bold">
                    {item.name}
                  </h3>

                  <p>
                    Quantity: {item.quantity}
                  </p>

                  <p>
                    ₹ {item.price}
                  </p>

                </div>

              ))}

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default OrdersPage;