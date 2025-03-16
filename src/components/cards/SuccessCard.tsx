import React from "react";
import { FaListCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";


interface WaitListFormProps {
    onClose?: () => void;
  }


const SuccessCard: React.FC<WaitListFormProps> = ({onClose}) => {
   
  return (
    <div className="relative min-h-[258px] lg:h-[258px] w-11/12 mx-auto md:w-[350px] xl:w-[300px] 2xl:w-[380px]  bg-gradient-to-b from-[#797979CC] to-[#232A3E1A] bg-transparent p-6 rounded-xl flex flex-col justify-between border-[0.5px] border-fade-gray-label border border-gray-500">
        <div className="w-full mx-auto text-center min:h-[420px] 2xl:px-16">
      <div className="py-16">
        <div className="flex justify-center">
        <div className="w-[60px] h-[60px] md:w-[150px] md:h-[150px] bg-lime-200 flex justify-center items-center rounded-full">
        <FaListCheck className="w-16 h-16 md:w-40 md:h-40 text-green p-2"/>
        </div>
        </div>
        <div className="py-4 w-full border-gray-300">
        <h2 className="text-[20px] md:text-[30px] font-bold text-block text-center text-primary-200 px-4">
        Successful Added To Tingo AI Waitlist!
        </h2>
      </div>
        <p className="text-[16px] md:text-[20px] text-[#E5E7EB] font-semibold px-8">
        You'll be among the First to Experience the Future with Tingo AI powered products.</p>
      </div>
     
      <p className="text-[12px] text-white mt-8">
        Do you want to know more about Tingo AI? {" "}
        <Link to="" className="text-primary-200"><b className="font-bold text-primary-200 underline">Explore...</b></Link>
      </p>
    </div>
    </div>
  );
};

export default SuccessCard;
