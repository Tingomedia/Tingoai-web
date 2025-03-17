import React from "react";
import guinessImage from "../../../assets/images/new_tingo/guinessImage.png";
import black from "../../../assets/images/new_tingo/black2.png";
import shadow from "../../../assets/images/new_tingo/Ellipse 13.svg";
import { Link } from "react-router-dom";
import Title from "../../../utils/libs/Title";
// import TingoModal from "../../tingoai/TingoModal";
// import TingoModalButton from "../../../utils/libs/TingoModalButton";
// import SuccessCard from "../../cards/SuccessCard";

const Guiness: React.FC = () => {
  return (
    <div className="w-full bg-[#171d2d] p-[5%] relative">
      {/* Black Overlay Image Positioned to the Right */}
      <img
        src={black}
        alt="Black overlay"
        className="absolute right-0 top-0 h-full w-[20%] object-cover"
      />
      <img
        src={shadow}
        alt="Black overlay"
        className="absolute left-0 top-0 h-full  object-cover"
      />

      {/* Main Content */}
      <div className="w-full container mx-auto bg-transparent min-h-[422px] flex flex-col-reverse gap-10 md:gap-32 pb-10 lg:pb-0 lg:flex-row justify-between relative z-30">
        <img src={guinessImage} alt="Robot image" className="relative z-30" />
        <div className="flex flex-col justify-center bg-transparent items-center lg:items-start px-4 sm:px-8 lg:px-0 gap-4 xl:gap-10 text-white xl:pr-20 relative z-30">
          {/* <Title></Title> */}
          <h1 className="font-bold text-[24px] md:text-[39px] font-poppins">
            Our Vision
          </h1>
          <p className="text-[#b8b8b8] text-[16px] font-Manrope text-center lg:text-start lg:pr-16">To be a global leader in AI-driven transformation, pioneering intelligent solutions that reshape industries, improve lives, and foster sustainable growth for businesses and communities worldwide.</p>

          <h1 className="font-bold text-[24px] md:text-[39px] font-poppins mt-8 md:mt-0">
            Our Mission
          </h1>
          {/* <h3 className="font-semibold text-[16px] text-primary-200  md:text-[29px] font-poppins text-center">
            To Break Guiness World Record!
          </h3> */}
          <p className="text-[#b8b8b8] text-[16px] font-Manrope text-center lg:text-start lg:pr-16">
            Tingo AI is committed to revolutionizing industries through cutting-edge artificial intelligence, empowering businesses and individuals with intelligent, scalable, and efficient solutions. Our mission is to drive innovation, enhance productivity, and create a smarter, more connected world through ethical and responsible AI development.

          </p>
          {/* <p className="text-[#b8b8b8] text-[16px] font-Manrope text-center lg:text-start lg:pr-16">
            Proceeds will fund a state-of the-art animation studio in Lagos’
            Ijora Badia community.
          </p> */}
          
          {/* <Link to="/contact">
            <button className="w-[185px] h-[55px] hover:border-none bg-primary-200 rounded-full text-white font-Poppins font-medium  transition-all duration-300 ease-in-out">
              Join Us
            </button>
          </Link> */}
          {/* <TingoModalButton modalName="guiness" label="Let's Make History">
            {({ onClose }) => <SuccessCard onClose={onClose || (() => { })} />}
          </TingoModalButton> */}
        </div>
      </div>
    </div>
  );
};

export default Guiness;
