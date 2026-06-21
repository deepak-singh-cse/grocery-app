import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">

      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center w-96">

        <h1 className="text-4xl font-bold mb-8">
          🛍 Smart Shop App - DKS..K
        </h1>

        <div className="space-y-4">

          <Link
            to="/shop-login"
            className="block bg-indigo-600 text-white py-3 rounded-lg"
          >
            Shopkeeper Login
          </Link>

          <Link
            to="/customer-login"
            className="block bg-green-500 text-white py-3 rounded-lg"
          >
            Customer Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Home;