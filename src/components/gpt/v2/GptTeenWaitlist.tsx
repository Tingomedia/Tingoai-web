import { useState } from "react";
// Adjust these paths according to your project structure:
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

    // TODO: Replace with your waitlist submission logic (e.g., API call).
    console.log("Waitlist form data:", formData);

    // Simulate async call:
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Form submitted!");
    }, 1500);
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
          <form onSubmit={handleSubmit} className="w-full">
            <h1 className="text-[24px] font-bold mb-6 text-center">
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
