import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] =
  useState(false);
const handleLogin = async (e) => {

  e.preventDefault();

  try {

    const res = await axios.post(
      "http://localhost:5000/api/shopkeeper/login",
      {
        email,
        password,
      }
    );

    localStorage.setItem(
      "isLoggedIn",
      "true"
    );

    localStorage.setItem(
      "shopkeeperProfile",
      JSON.stringify(
        res.data.shopkeeper
      )
    );

    navigate("/dashboard");

  } catch (error) {

    alert("Invalid Credentials");

  }

};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">

      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-96 border border-white/30 
      hover:scale-105 transition duration-500">

        <h2 className="text-3xl font-bold text-center text-white mb-6 tracking-wide">
          🏪 Shopkeeper Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">

          <input
            type="email"
            placeholder="Enter Email"
            className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-white 
            outline-none focus:ring-2 focus:ring-white focus:scale-105 transition duration-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
<div className="relative">

  <input
    type={
      showPassword
        ? "text"
        : "password"
    }
    placeholder="Enter Password"
    className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-white outline-none focus:ring-2 focus:ring-white"
    value={password}
    onChange={(e) =>
      setPassword(e.target.value)
    }
  />

  <button
    type="button"
    onClick={() =>
      setShowPassword(
        !showPassword
      )
    }
    className="absolute right-3 top-4 text-white"
  >
    {showPassword ? (
      <FaEyeSlash />
    ) : (
      <FaEye />
    )}
  </button>

</div>

          <button
            type="submit"
            className="w-full bg-white text-indigo-600 font-semibold p-3 rounded-lg 
            hover:bg-gray-200 hover:scale-105 active:scale-95 transition duration-300 shadow-lg"
          >
            Login
          </button>
<p className="text-center text-white mt-4">

  New Shopkeeper?

  <span
    onClick={() =>
      navigate("/shopkeeper-register")
    }
    className="cursor-pointer font-bold ml-2"
  >
    Register Here
  </span>

</p>
        </form>

      </div>

    </div>
  );
}

export default Login;