import { IoDesktopOutline } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Birthday=()=>{
    const [birthYear, setBirthYear] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // React Router hook for navigation
  
    const handleVerify = () => {
      const currentYear = new Date().getFullYear();
      const age = currentYear - parseInt(birthYear);
  
      if (isNaN(age) || birthYear.length !== 4) {
        setError("Please enter a valid year");
        return;
      }
  
      if (age < 18) {
        setError("You must be at least 18 years old.");
      } else {
        setError("");
        navigate("/dashboard"); // Navigate to the second page
      }
    };
    return <div className="flex items-center justify-center h-screen bg-[#0A2A52]">
    <div className="text-center text-white">
      {/* Logo */}
      <h1 className="text-2xl font-bold flex items-center justify-center">
        <span className="mr-2">📹</span> 
        <span className="text-teal-400">Webinar.gg</span>
      </h1>

      {/* Heading */}
      <h2 className="text-3xl font-semibold mt-6">Verify Your Age</h2>
      <p className="text-gray-300 mt-2">
        Please confirm your birth year. This data will not be stored.
      </p>

      {/* Input Field */}
      <div className="mt-6">
        <input
          type="text"
          placeholder="Your Birth Year"
          value={birthYear}
          onChange={(e) => setBirthYear(e.target.value)}
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