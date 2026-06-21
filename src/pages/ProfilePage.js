import React from "react";

function ProfilePage() {

  const user = JSON.parse(
    localStorage.getItem("customerProfile")
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold mb-6">
        👤 My Profile
      </h1>

      {user ? (

        <div className="bg-white p-5 rounded-xl shadow">

          <p className="mb-2">
            <strong>Name:</strong> {user.name}
          </p>

          <p className="mb-2">
            <strong>Mobile:</strong> {user.mobile}
          </p>

          <p className="mb-2">
            <strong>Address:</strong> {user.address}
          </p>

        </div>

      ) : (

        <div className="bg-white p-5 rounded-xl shadow">
          No Profile Found
        </div>

      )}

    </div>
  );
}

export default ProfilePage;