import React from "react";
import WaitListForm from "../forms/WaitListForm";

import { Link } from "react-router-dom";
import WaitListModalButton from "../../utils/libs/WaitListModalButton";

type ProductCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  lightIcon?: string;
  tryItLink: string;
  demoLink: string;
  tag?: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  imageSrc,
  lightIcon,
  tryItLink,
  demoLink,
  tag,
}) => {
  return (
    <div className="relative min-h-[258px] lg:h-[258px] w-11/12   mx-auto md:w-[350px] lg:w-[290px] xl:w-[300px] 2xl:w-[380px] bg-gradient-to-b from-[#797979CC] to-[#232A3E1A] bg-transparent p-6 rounded-xl flex flex-col justify-between border-[0.5px] border-fade-gray-label border border-gray-500">
      {/* Badge */}
      {tag ?
        <span className="absolute top-8 right-8 bg-[#E7F6EC] text-[#099137] font-Manrope text-[12px] w-[67px] flex flex-row-reverse gap-2 items-center font-medium px-3 py-1 rounded-full">
          Active
          <img src={lightIcon} alt="" className="w-[12px] h-[12px]" />
        </span> : <span className="absolute top-8 right-8 bg-red-50 text-red-400 font-Manrope text-[12px] flex flex-row-reverse gap-2 items-center font-medium px-3 py-1 rounded-full">
          Coming soon
        </span>
      }
      <div className="space-y-4">
        <img src={imageSrc} alt={title} className="w-[40px] h-[40px]" />
        <h4 className="font-Poppins text-[20px] font-semibold text-white">
          {title}
        </h4>
        <p className="text-[1.6rem] font-Poppins text-[#A1A6B4] lg:w-[251px] text-wrap">
          {description}
        </p>
      </div>
      <div className="flex gap-5">

        {tag ? <Link to={tryItLink} className="w-full"><button className="w-full border border-gradient-to-r from-[#797979CC] to-[#232A3E1A] hover:bg-gradient-to-r from-[#797979CC] to-[#232A3E1A] text-white font-Manrope h-[56px] rounded-lg">
          Launch App
        </button></Link> : <WaitListModalButton modalName={demoLink}>
          {({ onClose }) => <WaitListForm onClose={onClose} />}
        </WaitListModalButton>}




      </div>
    </div>
  );
};

export default ProductCard;
