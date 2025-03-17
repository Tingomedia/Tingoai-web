import React from "react";
import ProductCard from "../../cards/ProductCard";
import { productsDb, Product } from "../../../db";
import shadow from "../../../assets/images/new_tingo/shadow2.svg";
import { Link } from "react-router-dom";
import Button from "../../../utils/libs/Button";


const OurProduct: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#121826] flex flex-col items-center justify-center gap-12 py-16">
      {/* <Title>Our Product</Title> */}
      <h3 className="text-[24px] md:text-[40px] text-primary-200 font-Manrope font-semibold text-center">
        All Tingo AI's Products
      </h3>
      <p className="text-[20px] w-11/12 px-2 lg:w-[768px] font-Inter text-center text-white">
      Smart, AI-powered solutions designed to help you attract, engage, and retain users effortlessly. Trusted by many, we make growth simple and scalable.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 overflow-hidden relative">
        {/* Fluorescent Radial Glow */}
        <div className="absolute hidden lg:block w-full h-full bg-[radial-gradient(circle,_rgba(255,165,0,0.1)_20%,_rgba(255,165,0,0)_50%,_rgba(255,165,0,0)_50%)]"></div>
        <div className="absolute hidden lg:block w-full h-full bg-[radial-gradient(circle,_rgba(200,162,255,0.1)_40%,_rgba(200,162,255,0.1)_20%,_rgba(200,162,255,0.1)_20%,_rgba(200,162,255,0)_70%)] 2xl:bg-[radial-gradient(circle,_rgba(200,162,255,0.1)_0%,_rgba(200,162,255,0.1)_20%,_rgba(200,162,255,0.1)_20%,_rgba(200,162,255,0)_50%)]"></div>

        <img
          src={shadow}
          alt="Black overlay"
          className="absolute  right-2 h-full  object-cover"
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
      <Link to="/">
        <Button>Back Home</Button>
      </Link>
    </div>
  );
};

export default OurProduct;
