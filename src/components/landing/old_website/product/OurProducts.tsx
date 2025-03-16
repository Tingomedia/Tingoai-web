import React from "react";
import { ourProductsDb } from "../../../db";

const OurProducts: React.FC = () => {
  return (
    <div className="container mx-auto py-10 px-4 lg:px-[5%] 2xl:px-[10%]">
      <h1 className="text-center text-[36px] font-bold py-8 lg:mb-8">
        About Our Products
      </h1>
      <div className="grid gap-8 space-y-16">
        {ourProductsDb.map((product) => (
          <div
            key={product.id}
            className={`w-full md:h-[500px] lg:h-[300px] flex flex-col ${
              product.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center bg-white shadow-lg  rounded-xl overflow-hidden border`}
          >
            {/* Image Section */}
            <img
              src={product.coverImage}
              alt={product.title}
              className="w-full md:w-1/2 object-cover h-full"
            />
            {/* Text Section */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
              <h2 className="text-[24px] font-semibold mb-4">
                {product.title}
              </h2>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
