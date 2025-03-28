import { useState } from "react";
// Import axios (or use your custom hook if you prefer)
import axios from "axios";

import BlinkingBird from "../../../components/common/BlinkingBird";
import AnimGraphic from "../../../pages/auth/v2/AnimGraphic";

export default function GptTeenWaitlist() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    accepted: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get the API base URL from environment variables
      const baseUrl = import.meta.env.VITE_REACT_APP_TingoGPT_API;
      // Make POST request to `${baseUrl}/teengpt-waitlist`
      const response = await axios.post(`${baseUrl}/teengpt-waitlist`, {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
      });

      if (response.status === 200) {
        setShowConfirmation(true);
      } else {
        alert("There was an error submitting your waitlist request.");
      }
    } catch (error) {
      console.error("Waitlist submission error:", error);
      alert("An error occurred while submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Background animation (same as Login.tsx) */}
      <AnimGraphic />

      {/* Page container */}
      <div className="w-screen h-svh flex flex-col gap-[32px] justify-center items-center font-Cera relative">
        {/* TeenGPT / TingoGPT logo at the top */}
        <img
          src="/icons/TingoGPT-01.svg"
          width={300}
          height={92}
          alt="TingoGPT Logo"
          className="mt-8"
        />

        {/* Main form container */}
        <div className="flex rounded-[16px] overflow-hidden w-full max-w-[360px] md:w-[868px] md:max-w-max bg-white p-8 relative">
          {showConfirmation ? (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <h2 className="text-[25px] text-[#2a3795] font-bold mb-4">
                You are now in the waitlist of TeenGPT
              </h2>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full">
              <h1 className="text-[25px] text-[#2a3795] font-bold">
                Join the waitlist of TeenGPT
              </h1>
              {/* Name Field */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Email Field */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Mobile Field */}
              <div className="mb-4">
                <label htmlFor="mobile" className="block text-gray-700 mb-2">
                  Mobile
                </label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Terms Checkbox */}
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="accepted"
                  name="accepted"
                  checked={formData.accepted}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="accepted" className="text-gray-700">
                  I accept the terms and conditions
                </label>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 bg-[#F8872B] text-white font-semibold rounded-full transition-transform duration-300 hover:scale-105"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          )}

          {/* Bird animation overlay while submitting */}
          {isSubmitting && (
            <div className="absolute inset-0 bg-black/30 flex justify-center items-center">
              <BlinkingBird />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
