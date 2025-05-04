import React from "react";

const Overview: React.FC = () => {
  return (
    <div className="px-4 sm:px-[5%] 2xl:px-[8%] flex flex-col  items-center gap-10 py-8">
      <div className="flex flex-col gap-5 lg:flex-row justify-between items-center">
        <div className="space-y-8 text-center lg:text-left lg:w-[50%]">
          <h2 className="font-Manrope text-[40px] font-medium">Overview</h2>
          <p className="text-fade-gray-label">
            At Tingo AI and Media, we pioneer the future by merging innovation
            with responsibility. As Africa's rst AI-powered data center and
            AI-driven radio station, we are at the forefront of revolutionizing
            communication, technology, and entertainment. Our solutions span
            cutting-edge AI customer care services for businesses and an
            AI-powered radio experience that redefines engagement. With
            responsibility at our core, we ensure ethical, transparent, and
            impactful AI development tailored for African realities
          </p>
        </div>
        <div className="lg:w-[45%] rounded-xl">
          <img
            src="/images/aboutImg.jpg"
            alt="illustration img"
            className="w-full rounded-xl"
          />
        </div>
      </div>
      <div className="w-full my-8">
        <div className="grid md:grid-cols-2 place-items-center gap-8 mx-4">
          <div className="space-y-6 text-center h-[180px] md:h-auto border p-2 lg:p-3 shadow-lg rounded-xl">
            <h2 className="font-Manrope text-[40px] font-medium">
              Our Mission
            </h2>
            <p className="text-fade-gray-label">
              To bridge innovation and accountability, providing AI-powered
              solutions that transform how businesses and individuals connect,
              communicate, and consume content.
            </p>
          </div>
          <div className="space-y-6 text-center h-[180px] md:h-auto border p-2 lg:p-3 shadow-lg rounded-xl">
            <h2 className="font-Manrope text-[40px] font-medium">Our Vision</h2>
            <p className="text-fade-gray-label">
              To be Africa's leading AI innovator, redefining technology’s role
              in communication, media, and business—anchored in cultural
              sensitivity, ethical AI, and global excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
