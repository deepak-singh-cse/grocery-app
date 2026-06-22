import React from "react";
import { Link } from "react-router-dom";

import {
  FaStore,
  FaUser,
  FaGoogle,
  FaPhone,
  FaEnvelope,
  FaBolt,
  FaShieldAlt,
  FaHeadset,
  FaMousePointer,
} from "react-icons/fa";

function Home() {
  return (
    
    <div className="min-h-screen relative overflow-hidden bg-black text-white">
      {/* Premium Background Glow */}

<div
  className="absolute left-0 top-0
  w-[600px] h-[600px]
  bg-cyan-500 rounded-full
  blur-[250px] opacity-20"
></div>

<div
  className="absolute right-0 top-0
  w-[600px] h-[600px]
  bg-fuchsia-500 rounded-full
  blur-[250px] opacity-20"
></div>

<div
  className="absolute bottom-0 left-1/3
  w-[500px] h-[500px]
  bg-purple-500 rounded-full
  blur-[250px] opacity-20"
></div>

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[220px] opacity-20"></div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[220px] opacity-20"></div>

      {/* Floating Circles */}
      <div className="absolute top-20 left-20 w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute top-60 right-20 w-6 h-6 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 left-40 w-4 h-4 bg-pink-400 rounded-full animate-bounce"></div>

      {/* Welcome Badge */}
      <div className="flex justify-center pt-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-lg">
          ✨ Welcome to the Future of Shopping
        </div>
      </div>

      {/* Title */}
      <div className="text-center mt-10 relative z-10">

        <h1 className="text-5xl md:text-7xl font-extrabold">

          <span className="text-cyan-400">
            Smart
          </span>

          <span className="text-purple-500">
            {" "}Shop
          </span>

        </h1>

        <p className="text-xl md:text-2xl mt-4 text-gray-300">
          Fast • Secure • Reliable
        </p>

      </div>

      {/* Side Images */}
{/* ================= LEFT SIDE ================= */}

<img
  src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
  alt="cart"
  className="hidden lg:block absolute left-0 top-1/4 w-[420px]
  animate-pulse drop-shadow-[0_0_50px_#00bfff]"
/>

<div
  className="hidden lg:block absolute left-24 top-32
  text-6xl animate-bounce"
>
  🛒
</div>

<div
  className="hidden lg:block absolute left-52 top-48
  text-4xl animate-pulse"
>
  💎
</div>

<div
  className="hidden lg:block absolute left-16 top-72
  text-5xl animate-bounce"
>
  🎁
</div>

<div
  className="hidden lg:block absolute left-72 top-24
  text-4xl animate-pulse"
>
  ✨
</div>

<div
  className="hidden lg:block absolute left-80 top-80
  text-5xl animate-bounce"
>
  🚀
</div>

{/* ================= RIGHT SIDE PREMIUM ================= */}

<div
  className="hidden lg:flex absolute right-10 top-52
  flex-col items-center justify-center
  w-80 h-96
  bg-white/10 backdrop-blur-xl
  border border-white/20
  rounded-3xl
  shadow-[0_0_60px_rgba(168,85,247,0.6)]"
>

  <div className="text-9xl animate-pulse">
    🛍️
  </div>

  <div className="text-7xl -mt-6 animate-bounce">
    🛡️
  </div>

  <h2 className="mt-4 text-3xl font-bold text-purple-300">
    Smart Shopping
  </h2>
  

  <p className="text-gray-300 mt-2">
    Safe • Fast • Trusted
  </p>

</div>

<div className="hidden lg:block absolute right-8 top-20 text-6xl animate-bounce">
  💰
</div>

<div className="hidden lg:block absolute right-24 top-96 text-5xl animate-pulse">
  🎁
</div>

<div className="hidden lg:block absolute right-72 top-32 text-4xl animate-bounce">
  ⭐
</div>

<div className="hidden lg:block absolute right-60 top-72 text-5xl animate-pulse">
  🏷️
</div>

<div className="hidden lg:block absolute right-36 top-44 text-4xl animate-bounce">
  🎉
</div>


      {/* Main Card */}
      <div className="max-w-md mx-auto mt-10 relative z-10">

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-[0_0_50px_rgba(139,92,246,0.5)]">

          <div className="text-center">

            <div className="text-6xl mb-4">
              🛍️
            </div>

            <h2 className="text-4xl font-bold">
              Smart Shop
            </h2>

            <p className="text-gray-300">
              Grocery Management System
            </p>

          </div>

          {/* Buttons */}

          <Link
            to="/shop-login"
            className="mt-8 block bg-gradient-to-r from-indigo-500 to-purple-500 p-4 rounded-xl text-center text-xl font-bold hover:scale-105 transition duration-300"
          >
            <FaStore className="inline mr-2" />
            Shopkeeper Login
          </Link>

          <Link
            to="/customer-login"
            className="mt-4 block bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-xl text-center text-xl font-bold hover:scale-105 transition duration-300"
          >
            <FaUser className="inline mr-2" />
            Customer Login
          </Link>

          {/* Register Buttons */}

          <Link
            to="/shopkeeper-register"
            className="mt-4 block bg-gradient-to-r from-pink-500 to-red-500 p-3 rounded-xl text-center font-semibold hover:scale-105 transition"
          >
            🏪 New Shopkeeper? Register Here
          </Link>

          <Link
            to="/customer-register"
            className="mt-4 block bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-xl text-center font-semibold hover:scale-105 transition"
          >
            👤 New Customer? Register Here
          </Link>

          {/* Social Icons */}

          <div className="flex justify-center gap-5 mt-8">

            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer">
              <FaGoogle size={20} />
            </div>

            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer">
              <FaPhone size={20} />
            </div>

            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer">
              <FaEnvelope size={20} />
            </div>

          </div>

          <div className="text-center mt-6 text-green-400 font-semibold">
            🛡 Your Trust. Our Priority.
          </div>

        </div>

      </div>

      {/* Features */}

      <div className="grid md:grid-cols-4 gap-4 mt-16 px-6 relative z-10">

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">

          <FaBolt className="text-3xl mb-3 text-cyan-400" />

          <h3 className="font-bold text-lg">
            Lightning Fast
          </h3>

          <p className="text-gray-300">
            Super fast grocery ordering
          </p>

        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">

          <FaShieldAlt className="text-3xl mb-3 text-green-400" />

          <h3 className="font-bold text-lg">
            100% Secure
          </h3>

          <p className="text-gray-300">
            Safe login & payments
          </p>

        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">

          <FaMousePointer className="text-3xl mb-3 text-purple-400" />

          <h3 className="font-bold text-lg">
            Easy To Use
          </h3>

          <p className="text-gray-300">
            Simple shopping experience
          </p>

        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">

          <FaHeadset className="text-3xl mb-3 text-pink-400" />

          <h3 className="font-bold text-lg">
            24/7 Support
          </h3>

          <p className="text-gray-300">
            Always ready to help
          </p>

        </div>

      </div>

      {/* Footer */}

      <div className="text-center text-gray-400 mt-16 pb-6 relative z-10">
        © 2026 Smart Shop App | Developed by DKS.K
      </div>

    </div>
  );
}

export default Home;