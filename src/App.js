import ShopkeeperOrders from "./pages/ShopkeeperOrders";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import ProductList from "./pages/ProductList";
import CustomerLogin from "./pages/CustomerLogin";
import CustomerDashboard from "./pages/CustomerDashboard";
import CartPage from "./pages/CartPage";
import OrdersPage from "./pages/OrdersPage";
import SavedListsPage from "./pages/SavedListsPage";
import ProfilePage from "./pages/ProfilePage";
import FavoriteListsPage from "./pages/FavoriteListsPage";
import ShopkeeperRegister from "./pages/ShopkeeperRegister";
import CustomerRegister from "./pages/CustomerRegister";
import ShopkeeperProfile from "./pages/ShopkeeperProfile";

// Components
import ProtectedRoute from "./components/ProtectedRoute";

// Context
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <ProductProvider>
      <Router>
        <Routes>

          {/* Public Route */}
          <Route path="/" element={<Home />} />
          <Route path="/shop-login" element={<Login />} />
          <Route path="/customer-login" element={<CustomerLogin />} />
          <Route
          
  path="/customer-register"
  element={<CustomerRegister />}
/>
   <Route
  path="/customer-dashboard"
  element={
    <ProtectedRoute>
      <CustomerDashboard />
    </ProtectedRoute>
  }
/>
<Route
  path="/saved-lists"
  element={<SavedListsPage />}
/>
<Route
  path="/favorites"
  element={<FavoriteListsPage />}
/>
<Route
  path="/profile"
  element={<ProfilePage />}
/>
<Route
  path="/shopkeeper-profile"
  element={<ShopkeeperProfile />}
/>
<Route
  path="/shopkeeper-register"
  element={<ShopkeeperRegister />}
/>
<Route
  path="/cart"
  element={
    <ProtectedRoute>
      <CartPage />
    </ProtectedRoute>
  }
/>
<Route
  path="/orders"
  element={<OrdersPage />}
/>
          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/add-product"
            element={
              <ProtectedRoute>
                <AddProduct />
              </ProtectedRoute>
            }
          />
          <Route
  path="/shopkeeper-register"
  element={<ShopkeeperRegister />}
/>

          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <ProductList />
              </ProtectedRoute>
            }
          />
          <Route
  path="/shopkeeper-orders"
  element={
    <ProtectedRoute>
      <ShopkeeperOrders />
    </ProtectedRoute>
  }
/>


        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;