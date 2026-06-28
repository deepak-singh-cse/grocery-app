import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import axios from "axios";

const ProductContext = createContext();

export function ProductProvider({ children }) {

  const [products, setProducts] = useState([]);

  // Cart State
  const [cart, setCart] = useState([]);
 const [orders, setOrders] = useState([]);

const [savedList, setSavedList] = useState(() => {

  const data =
    localStorage.getItem("savedList");

  return data
    ? JSON.parse(data)
    : [];

});

const [favoriteLists, setFavoriteLists] =
  useState(() => {

    const data =
      localStorage.getItem("favoriteLists");

    return data
      ? JSON.parse(data)
      : [];

  });

  // Add Product
  const addProduct = (product) => {
    setProducts([
      ...products,
      {
        id: Date.now(),
        ...product,
      },
    ]);
  };

  // Delete Product
  const deleteProduct = (id) => {
    setProducts(
      products.filter((p) => p.id !== id)
    );
  };

  // Add To Cart
  const addToCart = (product) => {

    const existingItem = cart.find(
      (item) => item._id === product._id
    );

    if (existingItem) {

      setCart((prev) =>
        prev.map((item) =>
          item._id === product._id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );

    } else {

      setCart((prev) => [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ]);

    }
  };

  // Remove From Cart
  const removeFromCart = (index) => {
    setCart((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  // Increase Quantity
  const increaseQuantity = (id) => {

    setCart((prev) =>
      prev.map((item) =>
      item._id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );

  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {

    setCart((prev) =>
      prev
        .map((item) =>
          item._id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

  };

  // Place Order
  const placeOrder = async () => {
const customerProfile = JSON.parse(
  localStorage.getItem("customerProfile")
);
if (!customerProfile) {
  alert("Please Login First");
  return;
}
  const selectedShopkeeper =
JSON.parse(
  localStorage.getItem(
    "selectedShopkeeper"
  )
);

const newOrder = {
  userId: customerProfile.id,

  shopkeeperId:
    selectedShopkeeper?._id,

  id: Date.now(),

  items: [...cart],

  status: "Pending",

  customer: customerProfile,
};

   try {

  const res = await axios.post(
    "https://grocery-backend-wot4.onrender.com/api/orders",
    newOrder
  );

  setOrders((prev) => [
    ...prev,
    res.data,
  ]);

  setCart([]);

  alert("✅ Order Placed Successfully");

} catch (error) {

  console.log(error);

  alert("Order Failed");

}

  };
  const updateOrderStatus = (id, status) => {

  setOrders((prev) =>
    prev.map((order) =>
      order.id === id
        ? {
            ...order,
            status,
          }
        : order
    )
  );

};
useEffect(() => {

  localStorage.setItem(
    "savedList",
    JSON.stringify(savedList)
  );

}, [savedList]);
useEffect(() => {

  localStorage.setItem(
    "favoriteLists",
    JSON.stringify(favoriteLists)
  );

}, [favoriteLists]);
  return (
    <ProductContext.Provider
     value={{
  products,
  addProduct,
  deleteProduct,
  cart,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  orders,
  placeOrder,
  updateOrderStatus,

  savedList,
  setSavedList,

  favoriteLists,
  setFavoriteLists,
}}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () =>
  useContext(ProductContext);