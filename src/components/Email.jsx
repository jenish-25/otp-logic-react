import { IoDesktopOutline } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Email=()=>{
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // React Router hook for navigation
  
    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      };
    const handleVerify = () => {
        if (!validateEmail(email)) {
            setError("Please enter a valid email address");
            setEmail("");
            return;
          }
          else{
            setEmail(email);
            alert('success')
            navigate('/otp',{state:{email}});
            setError("");  
          }
          return email;
    };
    return <div className="flex items-center justify-center h-screen bg-[#0A2A52]">
    <div className="text-center text-white">
      {/* Logo */}
      <h1 className="text-2xl font-bold flex items-center justify-center">
        <span className="mr-2">📹</span> 
        <span className="text-teal-400">Webinar.gg</span>
      </h1>

      {/* Heading */}
      <h2 className="text-3xl font-semibold mt-6">Verify Your Email</h2>
      <p className="text-gray-300 mt-2">
        Please confirm your Email. This data will not be stored.
      </p>

      {/* Input Field */}
      <div className="mt-6">
        <input
          type="text"
          placeholder="abc25@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-64 px-4 py-2 text-gray-900 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 mt-2">{error}</p>}

      {/* Continue Button */}
      <button
        onClick={handleVerify}
        className="w-64 mt-6 px-4 py-2 text-lg bg-gray-500 rounded-md hover:bg-gray-400 transition-all"
      >
        Continue
      </button>
    </div>
  </div>
}