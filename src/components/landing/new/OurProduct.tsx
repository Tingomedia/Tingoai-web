import React from "react";
import Title from "../../../utils/libs/Title";
import ProductCard from "../../cards/ProductCard";
import { productsDb, Product } from "../../../db";
import shadow from "../../../assets/images/new_tingo/shadow2.svg";


const OurProduct: React.FC = () => {
  return (
    <div className="mx-auto min-h-[753px] 2xl:h-auto w-full px-[5%] bg-[#121826] flex flex-col items-center justify-center gap-12 py-16">
      <Title>Our Product</Title>
     <div className="">
     <h3 className="text-[24px] md:text-[40px] text-white font-Manrope font-semibold text-center">
        All Tingo AI's Products
      </h3>
      <p className="text-[20px] lg:w-[768px] font-Inter text-center text-[#b8b8b8]">
        Smart, AI-powered solutions designed to help you attract, engage, and retain users effortlessly. Trusted by many, we make growth simple and scalable.
      </p>
     </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 relative">
        {/* Fluorescent Radial Glow */}
        <div className="absolute w-full h-full 2xl:hidden bg-[radial-gradient(circle,_rgba(255,165,0,0.1)_20%,_rgba(255,165,0,0)_50%,_rgba(255,165,0,0)_50%)]"></div>
        <div className="absolute w-full h-full 2xl:hidden bg-[radial-gradient(circle,_rgba(200,162,255,0.1)_40%,_rgba(200,162,255,0.1)_20%,_rgba(200,162,255,0.1)_20%,_rgba(200,162,255,0)_70%)] 2xl:bg-[radial-gradient(circle,_rgba(200,162,255,0.1)_0%,_rgba(200,162,255,0.1)_20%,_rgba(200,162,255,0.1)_20%,_rgba(200,162,255,0)_50%)]"></div>

        <img
        src={shadow}
        alt="Black overlay"
        className="absolute right-2 h-full 2xl:hidden  object-cover"
      />

        {productsDb.length > 0 &&
          productsDb.map((product: Product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              imageSrc={product.imageSrc}
              tryItLink={product.tryItLink}
              demoLink={product.demoLink}
              tag={product?.tag}
              lightIcon={product?.lightIcon}
            />
          ))}
      </div>
      <div className="flex gap-4">
        <button className="bg-primary-200 w-[10px] h-[10px] rounded-full border border-[#A1A6B4]"></button>
        <button className="w-[10px] h-[10px] rounded-full border border-[#A1A6B4] bg-fade-gray-label hover:bg-primary-200"></button>
        <button className="w-[10px] h-[10px] rounded-full border border-[#A1A6B4] bg-fade-gray-label hover:bg-primary-200"></button>
      </div>
    </div>
  );
};

export default OurProduct;
