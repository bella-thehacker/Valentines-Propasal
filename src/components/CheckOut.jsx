import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaPaypal } from "react-icons/fa";

const CheckOut = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { yourName, recipientName } = location.state || {}; // ✅ Receive data safely

  const [paymentMethod, setPaymentMethod] = useState(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white font-mono p-4">
      <div className="w-full max-w-2xl bg-white text-black p-10 border-4 border-[#ffb7dd] rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-pink-500 mb-6">
          Valentine's Proposal <FaHeart className="inline-block text-[#ffb7dd]" />
        </h1>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Your Love Package:</h2>
          <p className="bg-[#ffb7dd] p-4 rounded text-lg">
            💕 Proposal for <span className="font-bold">{recipientName || "your special one"}</span> from <span className="font-bold">{yourName || "you"}</span>
          </p>
          <p className="mt-4 text-xl font-bold">Price: Priceless (but we'll settle for just $3.00 or Ksh300)</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Choose Payment Method:</h2>
          <div className="flex justify-center gap-4">
            <button
              className={`flex items-center gap-2 px-6 py-3 rounded text-lg font-medium transition ${paymentMethod === "mpesa" ? "bg-[#ffb7dd] text-white" : "bg-white text-black border border-[#ffb7dd]"}`}
              onClick={() => setPaymentMethod("mpesa")}
            >
              <img src="/mpesa.png" alt="mpesa logo" className="w-10" />
              M-Pesa
            </button>
            <button
              className={`px-6 py-3 rounded text-lg font-medium transition flex items-center ${paymentMethod === "paypal" ? "bg-[#ffb7dd] text-white" : "bg-white text-black border border-[#ffb7dd]"}`}
              onClick={() => setPaymentMethod("paypal")}
            >
              <FaPaypal className="mr-2" /> PayPal
            </button>
          </div>
        </div>

        {paymentMethod && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Enter Details:</h2>
            <input
              type="text"
              placeholder={paymentMethod === "mpesa" ? "Enter M-Pesa Number" : "Enter PayPal Email"}
              className="w-full p-3 border border-[#ffb7dd] rounded mb-4 text-lg"
            />
            <input type="text" placeholder="Your Name" className="w-full p-3 border border-[#ffb7dd] rounded text-lg" />
          </div>
        )}

        <button className="w-full bg-pink-500 text-white py-3 rounded text-lg font-bold hover:bg-[#ffb7dd] transition duration-300">
          Complete Purchase
        </button>

        <button 
          className="w-full mt-4 bg-gray-700 text-white py-3 rounded text-lg font-bold hover:bg-gray-900 transition duration-300"
          onClick={() => navigate("/")}
        >
          Go Back to Home
        </button>

        <p className="mt-6 text-center text-lg">By completing this purchase, you agree to love forever and ever! ❤️</p>
      </div>
    </div>
  );
};

export default CheckOut;
