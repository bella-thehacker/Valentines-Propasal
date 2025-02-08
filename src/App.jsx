import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CheckOut from "./components/CheckOut";
import { Projects } from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(12 * 60 * 60); // 12 hours in seconds
  const [formData, setFormData] = useState({
    yourName: "",
    recipientName: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (submitted) {
      const interval = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [submitted]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true); // Show loading animation
    setSubmitted(true);

    setTimeout(() => {
      setLoading(false); // Hide loading animation after 2 seconds
      navigate("/checkout", { state: formData });
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Routes */}
      <Routes>
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/"
          element={
            <div className="flex flex-col items-center justify-center min-h-screen px-4">
              <img src="/heart-spin.gif" alt="Placeholder" className="rounded-full w-24 md:w-32 h-24 md:h-32 object-cover mb-6 md:mb-10" />
              
              <h1 className="text-4xl md:text-6xl font-bold text-center">Valentine's Proposal</h1>
              
              <p className="text-lg md:text-2xl font-medium text-center mt-6 md:mt-10 max-w-xl">
                Looking for a fun and adorable way to ask someone to be your Valentine? 🎮✨
              </p>

              <div className="mt-6 md:mt-10 text-center max-w-md">
                <h3 className="text-lg md:text-xl font-bold">💌 How It Works:</h3>
                <ul className="text-base md:text-lg">
                  <li className="mb-2">💕 Type in your special someone's name.</li>
                  <li className="mb-2">🎀 We will design a charming pixel-art Valentine’s proposal for you.</li>
                  <li className="mb-2">😆 The <span className="font-bold">"No"</span> button playfully dodges clicks—because saying <span className="font-bold">"Yes" is the only option!</span></li>
                  <li className="mb-2">🕒 Your custom proposal will be delivered in **12 hours**.</li>
                </ul>
              </div>

              <h3 className="mt-6 md:mt-10 font-light text-base md:text-lg">
                Ready to pop the question? Let’s make this Valentine’s Day unforgettable! 💘
              </h3>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-xs md:max-w-sm mt-6">
                  <input type="text" name="yourName" placeholder="Your Name" required className="mb-4 p-2 border border-pink-400 rounded w-full" onChange={handleChange} />
                  <input type="text" name="recipientName" placeholder="Recipient's Name" required className="mb-4 p-2 border border-pink-400 rounded w-full" onChange={handleChange} />
                  <input type="email" name="email" placeholder="Your Email" required className="mb-4 p-2 border border-pink-400 rounded w-full" onChange={handleChange} />
                  <input type="text" name="phone" placeholder="Your Phone Number (Optional)" className="mb-4 p-2 border border-pink-400 rounded w-full" onChange={handleChange} />
                  <button type="submit" className="bg-pink-500 text-white px-6 py-2 rounded mt-4 hover:bg-pink-700 transition w-full">
                    Create Proposal
                  </button>
                </form>
              ) : loading ? (
                // Show loading animation when submitted
                <img src="/giphy.webp" alt="Loading..." className="w-20 h-20 mt-6" />
              ) : (
                // Show estimated delivery time after loading
                <p className="mt-6 text-lg font-bold">
                  Your proposal has been submitted! Estimated delivery: {Math.floor(timer / 3600)}h {Math.floor((timer % 3600) / 60)}m
                </p>
              )}
            </div>
          }
        />
      </Routes>

      {/* Projects Section */}
      <div className="mt-10 mb-10 px-4 w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Some Of Our Work:</h2>
        <Projects />
      </div>

      {/* Footer */}
      <footer className="border-t border-pink-500/30 w-full">
        <div className="container mx-auto px-4 py-4 text-center">
          <p className="text-sm text-black-400 terminal-text">
            &gt; © {new Date().getFullYear()} CTRL_CODE SOLUTIONS. ALL_RIGHTS_RESERVED_
          </p>
          <p className="text-sm mt-2">
            Need more information? Talk to one of our developers on WhatsApp{" "}
            <a href="https://wa.me/254712063152" className="text-pink-400">
              +254712063152
            </a>{" "}
            or email us at{" "}
            <a href="mailto:ctrlcodesolutions@gmail.com" className="text-pink-400">
              ctrlcodesolutions@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
