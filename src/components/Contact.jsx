import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const emailParams = {
      from_name: formData.name,  // Match the template variable
      from_email: formData.email,
      message: formData.message,
      to_name: "Ivy"  // If you have a "to_name" variable in your template
    };
  
    emailjs.send(
      "service_nc4zwxk", // Replace with your EmailJS Service ID
      "template_4do7q8b", // Replace with your EmailJS Template ID
      emailParams,        // Pass the emailParams object
      "tB5xAgPRFk-2nUO_G" // Replace with your EmailJS Public Key
    )
    .then(() => {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch(() => setStatus("Failed to send message. Try again."));
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white font-mono p-4">
      <div className="w-full max-w-lg bg-white text-black p-8 border-4 border-blue-500 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-blue-500 mb-6">Contact a Developer</h2>
        
        {status && <p className="text-lg text-green-500">{status}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            className="w-full p-3 border border-blue-500 rounded text-lg"
          />
          <input 
            type="emai" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="w-full p-3 border border-blue-500 rounded text-lg"
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            className="w-full p-3 border border-blue-500 rounded text-lg h-32"
          />
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-3 rounded text-lg font-bold hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        <button 
          className="w-full mt-4 bg-gray-700 text-white py-3 rounded text-lg font-bold hover:bg-gray-900 transition duration-300"
          onClick={() => navigate("/")}
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default Contact;
