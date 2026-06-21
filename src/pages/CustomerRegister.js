import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CustomerRegister() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/customer/register",
        {
          name,
          mobile,
          password,
        }
      );

      alert("✅ Customer Registered");

      navigate("/customer-login");

    } catch (error) {

      console.log(error);

      alert("Registration Failed");

    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h2 className="text-3xl font-bold text-center mb-6">
          👤 Customer Register
        </h2>

        <form
          onSubmit={handleRegister}
          className="space-y-4"
        >

          <input
            type="text"
            placeholder="Name"
            className="w-full border p-3 rounded"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Mobile"
            className="w-full border p-3 rounded"
            value={mobile}
            onChange={(e) =>
              setMobile(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded"
          >
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default CustomerRegister;