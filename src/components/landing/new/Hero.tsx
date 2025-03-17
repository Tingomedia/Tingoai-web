import React, { useEffect, useState } from "react";
import herobg from "../../../assets/images/new_tingo/Soft light.png";
import heroimage from "../../../assets/images/old_tingo/heroimage.svg";
import { Link } from "react-router-dom";

const rotatingMessages: string[] = [
  "TingoGPT",
  "Tingo AI Radio",
  "Tingo AI Radio",
  "Tingo AI TV",
  "Tingo Blockchain",
  "Tingo Express",
  "Tingo Community",
  "Future of Technology",
];

const Hero: React.FC = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState<number>(0);
  const [secondMessageIndex, setSecondMessageIndex] = useState<number>(1);
  const [isSliding, setIsSliding] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % rotatingMessages.length);
        setSecondMessageIndex((prevIndex) => (prevIndex + 1) % rotatingMessages.length);
        setIsSliding(false);
      }, 500);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full">
      <div
        className="w-full mx-auto px-4 md:px-[5%] lg:px-[8%] 2xl:px-[5%] bg-[rgb(18, 24, 38)] relative flex flex-col justify-center items-center py-8 lg:p-0 min-h-[700px] md:min-h-[900px] lg:min-h-[900px] bg-cover md:bg-no-repeat"
        style={{
          backgroundImage: `url(${herobg})`,
        }}
      >
        {/* Background Radial Gradient */}
        <div className="absolute top-0 w-full h-full bg-[radial-gradient(circle,_rgba(18,24,38,0)_20%,_rgba(18,24,38,0.9)_40%)]"></div>

        <div className="w-full max-w-[640px] lg:max-w-[90%] 2xl:max-w-[80%] grid gap-6 md:gap-10 text-center lg:text-left px-4 pt-16 animate-fadeInDrop1 place-items-center">
          <div className="relative w-full h-full 2xl:h-[500px] text-fade-white flex flex-col justify-center md:justify-between items-center">
            {/* Fluorescent Radial Glow */}
            <div className="absolute w-full h-full bg-[radial-gradient(circle,_rgba(255,165,0,0.1)_0%,_rgba(255,165,0,0)_50%,_rgba(255,165,0,0)_50%)]"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(circle,_rgba(200,162,255,0.1)_0%,_rgba(200,162,255,0.1)_20%,_rgba(200,162,255,0.1)_20%,_rgba(200,162,255,0)_70%)] 2xl:bg-[radial-gradient(circle,_rgba(200,162,255,0.1)_0%,_rgba(200,162,255,0.1)_20%,_rgba(200,162,255,0.1)_20%,_rgba(200,162,255,0)_50%)]"></div>

            {/* Hero Content */}
            <div className="w-full flex flex-col justify-center items-center pt-32 md:pt-64">
              <div className="border border-fade-gray p-1 rounded-full flex justify-center items-center gap-4 md:gap-8 max-w-[320px] mx-auto md:mx-0">
                <button className="text-fade-gray text-lg md:text-2xl border border-fade-gray p-2 px-4 flex gap-2 items-center rounded-full">
                  <div className="w-6 h-6 bg-primary-200/30 rounded-full justify-center flex items-center animate-pulse">
                    <div className="w-2 h-2 bg-primary-200 rounded-full"></div>
                  </div>
                  Welcome to
                </button>
                <p className="font-Manrope text-primary-200 text-[16px] mr-2">
                  Tingo AI
                </p>
              </div>
              <h1 className="font-poppins text-fade-white text-center text-[3.5rem] lg:text-[5.6rem] leading-tight lg:leading-[79.5px] font-bold">
                Welcome to {" "}
                <span className=" text-secondary text-[3.5rem] lg:text-[5.6rem] 2xl:text-[5.6rem]">
                Tingo AI
                </span>,
                where cutting-edge artificial intelligence meets real-world innovation.
              </h1>
              
              <p className="text-[1.8rem] text-center font-poppins leading-relaxed md:leading-[29px] text-[#b8b8b8] animate-fadeInDrop1 py-6">
              We are a forward-thinking technology company dedicated to harnessing AI to drive digital transformation, enhance business efficiency, and create intelligent solutions for the modern world.
              </p>
              <div className="flex justify-center animate-fadeInDrop1 pb-8 lg:pb-0">
                <Link to="/radio" className="mr-3">
                  <button className="px-16 py-6 text-center text-lg bg-primary-200 text-white md:text-2xl font-poppins border border-fade-gray rounded-full  hover:bg-fade-gray/40 hover:shadow-inner-custom">
                    Tingo AI Radio
                  </button>
                </Link>
                <Link to="/tingogpt">
                  <button className="px-16 py-6 lg:w-[185px] text-center text-lg md:text-2xl font-poppins border border-fade-gray rounded-full bg-fade-gray/40 hover:bg-primary-200 text-white shadow-inner-custom">
                    TingoGPT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image with Message Pills */}
        <div className="w-full flex justify-center animate-fadeInDrop1 pt-16 md:pt-24 lg:pt-32 lg:pb-16">
          <div className="w-[474px] h-[559px] relative">
            {/* Left Message Pill */}
            <div className="min-w-[140px] h-10 text-xl hidden md:flex justify-center items-center text-primary-200 text-center bg-primary-200/10 rounded-full border border-primary-200/40 absolute -left-8 top-16">
              <span className={`${isSliding ? "opacity-0" : "opacity-100"}`}>
                {rotatingMessages[currentMessageIndex]}
              </span>
            </div>

            {/* Right Message Pill (Always Different from Left) */}
            <div className="min-w-[140px] h-10 text-xl hidden md:flex justify-center items-center text-primary-200 text-center bg-primary-200/10 rounded-full border border-primary-200/40 absolute right-0 top-16">
              <span className={`${isSliding ? "opacity-0" : "opacity-100"}`}>
                {rotatingMessages[secondMessageIndex]}
              </span>
            </div>

            <img src={heroimage} alt="heroimage" className="w-full h-full" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
