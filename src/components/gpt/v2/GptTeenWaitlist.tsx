import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import BlinkingBird from "../../../components/common/BlinkingBird";
import AnimGraphic from "../../../pages/auth/v2/AnimGraphic";

export default function GptTeenWaitlist({ App = false }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    accepted: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setIsSubmitting(true);

    try {
      const baseUrl = import.meta.env.VITE_REACT_APP_TingoGPT_API;
      const response = await axios.post(`${baseUrl}/teengpt-waitlist`, {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
      });

      if (response.status === 200) {
        setShowConfirmation(true);
      } else {
        setErrorMsg("Service currently unavailable, please try again later.");
      }
    } catch (error) {
      console.error("Waitlist submission error:", error);
      setErrorMsg("Service currently unavailable, please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Background animation */}
      <AnimGraphic orangeGraphic />

      {/* Page container */}
      <div className="w-screen h-svh flex flex-col gap-[32px] justify-center items-center font-Cera relative">
        {/* Logo at the top */}
        <img
          src="/icons/TingoGPT-01.svg"
          width={300}
          height={92}
          alt="TingoGPT Logo"
          className="mt-8"
        />

        {/* Main form container with reduced width on md screens */}
        <div className="flex rounded-[16px] overflow-hidden w-full max-w-[360px] md:w-[400px] md:max-w-max bg-white p-8 relative">
          {showConfirmation ? (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <h2 className="text-[25px] text-[#2a3795] font-bold mb-4">
                {App
                  ? "You are now in the waitlist of Mobile app"
                  : "You are now in the waitlist of TeenGPT"}
              </h2>
              <button
                onClick={() => navigate("/gpt-home")}
                className="py-2 px-4 bg-[#F8872B] text-white font-semibold rounded-full transition-transform duration-300 hover:scale-105"
              >
                Go Back
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <h1 className="text-[25px] text-[#2a3795] font-bold">
                {App
                  ? "Join the waitlist of Mobile app"
                  : "Join the waitlist of TeenGPT"}
              </h1>

              {/* Full Name Field */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                className="w-full bg-gray-100 rounded-full border-none px-4 py-3 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Email Field */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full bg-gray-100 rounded-full border-none px-4 py-3 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Mobile Field */}
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter mobile number"
                className="w-full bg-gray-100 rounded-full border-none px-4 py-3 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Terms Checkbox */}
              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  id="accepted"
                  name="accepted"
                  checked={formData.accepted}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span className="lg:text-[12px] text-[12px]">
                  By clicking this, you agree to{" "}
                  <span className="text-[#F8872B] font-bold">Tingo AI</span>{" "}
                  <button className="">Terms &amp; Condition,</button>{" "}
                  <button className="">Privacy</button> and{" "}
                  <button className="">Policy</button>
                </span>
              </div>

              {/* Error message */}
              {errorMsg && (
                <div className="text-red-500 text-center font-medium">
                  {errorMsg}
                </div>
              )}

              {/* Submit Button - Centered */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-[100px] py-3 bg-[#F8872B] text-white font-semibold rounded-full transition-transform duration-300 hover:scale-105"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
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
