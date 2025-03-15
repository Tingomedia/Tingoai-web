import React from "react";
import ProductCard from "../cards/ProductCard";
import { tingoProductsDb, Products } from "../../db/index";
import shadow from "../../assets/images/new_tingo/shadow2.svg";
import TingoModal from "./TingoModal";
import TingoModalButton from "../../utils/libs/TingoModalButton";

const TingoaiProducts: React.FC = () => {
  return (
    <div className="w-full flex">

      <div className="flex-1">
        <div className="2xl:container mx-auto min-h-[753px] w-full px-[5%] bg-[#1D2739] flex flex-col items-center justify-center gap-12 py-16">
          <div className="w-[100%]">
            <h3 className="text-[24px] md:text-[28px] text-white font-Manrope font-semibold">
              Do more with Tingo AI
            </h3>
            <p className="text-[20px] md:text-[14px] font-Inter text-white">
              Tingo AI is your all-in-one digital powerhouse, offering AI tools, entertainment, logistics, and crypto solutions.
            </p>
          </div>

          <div className="xl:w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 overflow-auto relative">
            <div className="absolute w-full h-full bg-[radial-gradient(circle,_rgba(255,165,0,0.1)_20%,_rgba(255,165,0,0)_50%,_rgba(255,165,0,0)_50%)]"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(circle,_rgba(200,162,255,0.1)_40%,_rgba(200,162,255,0.1)_20%,_rgba(200,162,255,0.1)_20%,_rgba(200,162,255,0)_70%)] 2xl:bg-[radial-gradient(circle,_rgba(200,162,255,0.1)_0%,_rgba(200,162,255,0.1)_20%,_rgba(200,162,255,0.1)_20%,_rgba(200,162,255,0)_50%)]"></div>

            <img src={shadow} alt="Black overlay" className="absolute right-2 h-full object-cover" />

            {tingoProductsDb.length > 0 &&
              tingoProductsDb.map((product: Products) => (
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
          <TingoModalButton modalName="hero" label="Tell us more about you">
            {({ onClose }) => <TingoModal onClose={onClose || (() => {})}  />}
          </TingoModalButton>
        </div>
      </div>
    </div>
  );
};

export default TingoaiProducts;
