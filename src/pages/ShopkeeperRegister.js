import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ShopkeeperRegister() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");
const [shopName, setShopName] =
  useState("");

const [shopLogo, setShopLogo] =
  useState("");

const [shopTiming, setShopTiming] =
  useState("");
  
  const [image, setImage] =
  useState("");
  const uploadImage = async (file) => {

  const data = new FormData();

  data.append("file", file);

  data.append(
    "upload_preset",
    "shopkeeper_upload"
  );

  data.append(
    "cloud_name",
    "YOUR_CLOUD_NAME"
  );

  try {

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
      data
    );

    setImage(res.data.secure_url);

  } catch (error) {

    console.log(error);

  }

};
const handleRegister = async (e) => {

  e.preventDefault();

  try {

    await axios.post(
      "https://grocery-backend-wot4.onrender.com/api/shopkeeper/register",
     {
  name,
  email,
  password,
  mobile,
  address,
  shopName,
  shopTiming,
  shopLogo: image,
}
    );

    alert(
      "✅ Registration Successful"
    );

    navigate("/shop-login");

  } catch (error) {

    console.log(error);

    alert("Registration Failed");

  }

};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">

        <h2 className="text-3xl font-bold text-center mb-6">
          🏪 Shopkeeper Register
        </h2>

        <form
          onSubmit={handleRegister}
          className="space-y-4"
        >
<input
  type="text"
  placeholder="Shop Name"
  className="w-full border p-3 rounded"
  value={shopName}
  onChange={(e) =>
    setShopName(e.target.value)
  }
/>
<input
  type="text"
  placeholder="Shop Address"
  className="w-full border p-3 rounded"
  value={address}
  onChange={(e) =>
    setAddress(e.target.value)
  }
/>
          <input
            type="text"
            placeholder="Shopkeeper Name"
            className="w-full border p-3 rounded-lg"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />
          <input
  type="text"
  placeholder="Mobile Number"
  className="w-full border p-3 rounded"
  value={mobile}
  onChange={(e) =>
    setMobile(e.target.value)
  }
  required
/>
<input
  type="text"
  placeholder="Address"
  className="w-full border p-3 rounded"
  value={address}
  onChange={(e) =>
    setAddress(e.target.value)
  }
/>
<input
  type="text"
  placeholder="Shop Timing"
  className="w-full border p-3 rounded"
  value={shopTiming}
  onChange={(e) =>
    setShopTiming(e.target.value)
  }
/>

<input
  type="text"
  placeholder="Shop Logo URL"
  className="w-full border p-3 rounded"
  value={shopLogo}
  onChange={(e) =>
    setShopLogo(e.target.value)
  }
/>
<input
  type="file"
  className="w-full border p-3 rounded"
  onChange={(e) =>
    uploadImage(e.target.files[0])
  }
/>

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600"
          >
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default ShopkeeperRegister;