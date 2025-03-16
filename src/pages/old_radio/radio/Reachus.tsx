import React from "react";
import mapImage from "../../../assets/images/old_tingo/reachus.jpeg";
import RHeader from "../../../layouts/radio/general/RHeader";
import RFotter from "../../../layouts/radio/general/RFotter";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Reachus: React.FC = () => {
  return (
    <div className="">
      <>
        <div
          className="w-full min-h-screen bg-radioprimary relative"
          //   style={{
          //     backgroundImage: `url(${tunnel})`,
          //     backgroundSize: "cover",
          //     backgroundPosition: "center",
          //   }}
        >
          <RHeader />

          <div className="w-full h-full text-white text-center pt-[180px]">
            <h1 className="font-Poppins text-[40px] md:text-[56px] font-semibold md:leading-[67px] text-center mb-[150px]">
              Reach Us
            </h1>
            <div
              className="w-full flex h-[70vh] mt-[10vh] relative"
              style={{
                backgroundImage: `url(${mapImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
                {/* Blur background */}
            <div className="bg-radioprimary/70 backdrop-blur-sm w-full h-full absolute top-0"></div>
            <div className="relative text-white container mx-auto w-full h-full flex justify-center items-center flex-col gap-12">
            <div className="flex flex-col justify-center items-start gap-12 px-4">
              <div className="flex justify-center items-center gap-4">
                <FaMapMarkerAlt className="text-[56px] bg-radioprimary p-4 rounded-full border border-fade-blue" />
                <h2 className="text-white font-medium text-left text-[14px] sm:text-[16px]">1 Itirin Ct St, Local, off Bishop Aboyade <br/> Cole Street, Victoria Island, Lagos</h2>
              </div>
              <div className="flex justify-center items-center gap-4 ">
                <FaMapMarkerAlt className="text-[56px] bg-radioprimary p-4 rounded-full border border-fade-blue" />
                <h2 className="text-white font-medium text-left text-[14px] sm:text-[16px]">1 Itirin Ct St, Local, off Bishop Aboyade <br/> Cole Street, Victoria Island, Lagos</h2>
              </div>
              <div className="flex justify-center items-center gap-4 text-[14px] sm:text-[16px]">
                <IoMail className="text-[56px] bg-radioprimary p-4 rounded-full border border-fade-blue" />
                <h2 className="text-white font-medium text-left">Team@Tingomedia.ai</h2>
              </div>
            </div>


            </div>
            </div>
          </div>
        </div>
        <RFotter />
      </>
    </div>
  );
};

export default Reachus;
