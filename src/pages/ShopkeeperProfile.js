import React from "react";

function ShopkeeperProfile() {

  const profile = JSON.parse(
    localStorage.getItem("shopkeeperProfile")
  );
  <img
  src={profile?.shopLogo}
  alt=""
  className="w-32 h-32 rounded-full mx-auto mb-4 border"
/>

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">

        <h1 className="text-3xl font-bold mb-6">
          🏪 My Profile
        </h1>

        <div className="space-y-4">

          <p>
            <strong>Name:</strong>{" "}
            {profile?.name}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {profile?.email}
          </p>
<img
  src={profile?.shopLogo}
  alt=""
  className="w-32 h-32 rounded-full mx-auto mb-4"
/>

<p>
  <strong>Shop Name:</strong>
  {profile?.shopName}
</p>

<p>
  <strong>Mobile:</strong>
  {profile?.mobile}
</p>

<p>
  <strong>Address:</strong>
  {profile?.address}
</p>

<p>
  <strong>Timing:</strong>
  {profile?.shopTiming}
</p>

<p>
  <strong>Rating:</strong>
  ⭐ {profile?.rating}
</p>
          <p>
            <strong>Mobile:</strong>{" "}
            {profile?.mobile}
          </p>

          <p>
            <strong>Address:</strong>{" "}
            {profile?.address}
          </p>

        </div>

      </div>

    </div>
  );
}

export default ShopkeeperProfile;