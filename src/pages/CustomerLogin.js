import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function CustomerLogin() {
  const navigate = useNavigate();
const [mobile, setMobile] = useState("");
const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

 const handleLogin = async (e) => {

  e.preventDefault();

  try {

    const res = await axios.post(
      "http://localhost:5000/api/customer/login",
      {
        mobile,
        password,
      }
    );

    localStorage.setItem(
      "customerProfile",
      JSON.stringify(
        res.data.customer
      )
    );

    alert("✅ Login Successful");

    navigate("/customer-dashboard");

  } catch (error) {

    alert(
      error.response?.data?.message ||
      "Login Failed"
    );

  }

};

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          👤 Customer Login
        </h2>
<input
  type="text"
  placeholder="Enter Mobile Number"
  className="w-full p-3 rounded border"
  value={mobile}
  onChange={(e) =>
    setMobile(e.target.value)
  }
/>
<textarea
  placeholder="Enter Address"
  className="w-full p-3 rounded border"
  value={address}
  onChange={(e) =>
    setAddress(e.target.value)
  }
/>
    
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border p-2 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-500 text-white p-2 rounded">
          Login
        </button>
        <div className="text-center mt-4">
  <p>
    New Customer?
    <Link
      to="/customer-register"
      className="text-blue-500 ml-2 font-bold"
    >
      Register Here
    </Link>
  </p>
</div>
      </form>

    </div>
  );
}

export default CustomerLogin;