import { useState } from "react";
import star from "../../assets/icons/pricingstar.svg";

const plans = [
  {
    name: "Free",
    price: 110,
    features: [
      "3 certificates",
      "2 courses / groups",
      "Whole course module",
      "Chat Support",
      "1000 users",
      "Download in PDF",
    ],
    buttonText: "Current Plan",
    highlight: false,
  },
  {
    name: "Plus",
    price: 1000,
    features: [
      "Advanced Segmentation",
      "Multiverse Testing",
      "Comparative Reporting",
      "Chat Support",
      "1000 users",
      "Template Library",
    ],
    buttonText: "Start Trial →",
    highlight: true,
  },
  {
    name: "Pro",
    price: 110,
    features: [
      "5 certificates",
      "5 certificates",
      "Whole course module",
      "Chat Support",
      "1000 users",
      "Download in all format",
    ],
    buttonText: "Start Trial →",
    highlight: false,
  },
];

const GptPlusHome = () => {
  const [activePlan, setActivePlan] = useState("Personal");

  return (
    <div className=" text-[#E5E7EB] py-12 px-4 grid gap-[32px] justify-items-center">
      <h2 className="text-center text-[28px] font-poppins font-medium">
        Upgrade your plan
      </h2>
      <div className="border p-2 rounded-full border-[#FFFFFF66] flex gap-[4px] bg-[#121826]">
        <button
          onClick={() => setActivePlan("Personal")}
          className={`px-[16px] py-[10px] rounded-full font-poppins font-medium ${
            activePlan === "Personal" ? "bg-primary-200" : ""
          }`}
        >
          Personal
        </button>
        <button
          onClick={() => setActivePlan("Business")}
          className={`px-[16px] py-[10px] rounded-full font-poppins font-medium ${
            activePlan === "Business" ? "bg-primary-200" : ""
          }`}
        >
          Business
        </button>
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-[24px] lg:gap-[10px]">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`py-[35px] px-[40px]  md:w-[372px] rounded-[12px] border border-gray-700 flex flex-col gap-[24px] md:justify-between ${
              plan.highlight ? "bg-[#101928] border-[#04802E] " : ""
            } ${plan.name === "Plus" ? "md:h-[593px]" : "md:h-[555px]"}`}
          >
            <div className="grid gap-5">
              <img src={star} alt="star" />
              <h3 className="font-medium text-[18px] font-poppins">
                {plan.name}
              </h3>
              <p
                className={`text-[#A1A6B4] text-[14px] font-poppins font-medium ${
                  plan.highlight ? "text-[#C9C9C9]" : ""
                }`}
              >
                Display stars in Google organic search results and showcase
                reviews on your website
              </p>
            </div>
            <ul
              className={`text-left space-y-2 mb-4 text-[12px] font-medium font-Inter text-[#A1A6B4] ${
                plan.highlight ? "text-[#F0F2F5]" : ""
              }`}
            >
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-[12px]">
                  <span className="text-green-400 mr-2">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className=" flex flex-col gap-5">
              <p className="text-[40px] font-Inter font-bold text-[#E5E7EB]">
                ${plan.price}{" "}
                <span className="text-[12px] block font-medium text-[#A1A6B4]">
                  per month
                </span>
              </p>
              <button
                className={`w-full py-[15px] rounded-[5px] ${
                  plan.highlight ? "bg-primary-200" : "bg-secondary"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    // <></>
  );
};

export default GptPlusHome;
