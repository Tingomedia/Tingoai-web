import React from "react";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

type ProductCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  lightIcon?: string;
  tryItLink: string;
  demoLink: string;
  tag?: string;
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
    <div className="relative min-h-[258px] lg:h-[258px] max-w-[348px] bg-gradient-to-b from-[#797979CC] to-[#232A3E1A] bg-transparent p-6 rounded-xl flex flex-col justify-between border-[0.5px] border-fade-gray-label">
      {/* Badge */}
      {tag && (
        <span className="absolute top-8 right-8 bg-[#E7F6EC] text-[#099137] font-Manrope text-[12px] w-[67px] flex flex-row-reverse gap-2 items-center font-medium px-3 py-1 rounded-full">
          {tag}
          <img src={lightIcon} alt="" className="w-[12px] h-[12px]" />
        </span>
      )}
      <div className="space-y-4">
        <img src={imageSrc} alt={title} className="w-[40px] h-[40px]" />
        <h4 className="font-Poppins text-[20px] font-semibold text-white">
          {title}
        </h4>
        <p className="text-[1.3rem] font-Poppins text-[#A1A6B4] w-[251px] text-wrap">
          {description}
        </p>
      </div>
      <div className="flex gap-5">
        <Link to={tryItLink} className="w-full">
          <button className="w-full border border-gradient-to-r from-[#797979CC] to-[#232A3E1A] hover:bg-gradient-to-r from-[#797979CC] to-[#232A3E1A] text-white font-Manrope h-[56px] rounded-lg">
            Launch App
          </button>
        </Link>
        <Link to={demoLink} className="hidden w-full">
          <button className="w-full border-fade-gray hover:bg-gray-50 font-Manrope h-[56px] flex items-center justify-center border rounded-lg">
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
