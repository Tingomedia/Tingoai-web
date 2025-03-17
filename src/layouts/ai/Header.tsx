import React, { useState } from "react";
import logo from "../../assets/icons/tingo_ai_logo.png";
import { MenuIcon, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="px-[3%] lg:px-[10%] fixed w-full top-4 z-50">
      <div className="w-full container mx-auto h-[70px] md:h-[88px] flex items-center justify-between px-[3%] rounded-full border border-white/20 backdrop-blur-lg bg-opacity-90 shadow-xl">
        <Link to="/" className=" text-white items-baseline relative">
          <img
            src={logo}
            alt="Tingo logo"
            className="md:w-[150px] h-[40px] md:h-[64px]"
          />
        </Link>
        <ul className="hidden w-1/2 lg:flex justify-between p-3 gap-4 font-Poppins text-fade-gray border border-fade-gray/50 rounded-full">
          <Link
            to="/"
            className="rounded-full py-2 px-4 hover:bg-primary-200 hover:text-white cursor-pointer  transition-all duration-300 ease-in-out"
          >
            About
          </Link>
          <Link
            to="/tingoai-products"
            className="rounded-full py-2 px-4 hover:bg-primary-200 hover:text-white cursor-pointer  transition-all duration-300 ease-in-out"
          >
            Products
          </Link>
          <Link
            to="/"
            className="rounded-full py-2 px-4 hover:bg-primary-200 hover:text-white cursor-pointer  transition-all duration-300 ease-in-out"
          >
            Community
          </Link>
          <Link
            to="/contact"
            className="rounded-full py-2 px-4 hover:bg-primary-200 hover:text-white cursor-pointer  transition-all duration-300 ease-in-out"
          >
            Contact
          </Link>
        </ul>

        <div className="flex items-center gap-5">
          <Link to="/tingogpt" className="hover:text-white">
            <button className="hidden lg:flex gap-2 justify-center items-center md:w-[185px] md:h-[55px] hover:border-none bg-primary-200 hover:bg-fade-gray/40 rounded-full text-white font-Poppins hover:shadow-inner-custom font-medium  transition-all duration-300 ease-in-out">
              TingoGPT
            </button>
          </Link>
        </div>

        <button onClick={toggleMenu} className="lg:hidden text-white">
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-[80px] left-0 w-full bg-[#1D2739] shadow-xl rounded-lg">
            <nav className="flex flex-col items-center px-4 py-6 space-y-4 text-fade-gray font-Poppins">
              <Link
                to="/"
                className="rounded-full py-2 px-4 hover:bg-primary-200 hover:text-white cursor-pointer  transition-all duration-300 ease-in-out"
              >
                About
              </Link>
              <Link
                to="/tingoai-products"
                className="rounded-full py-2 px-4 hover:bg-primary-200 hover:text-white cursor-pointer  transition-all duration-300 ease-in-out"
              >
                Products
              </Link>
              <Link
                to="/"
                className="rounded-full py-2 px-4 hover:bg-primary-200 hover:text-white cursor-pointer  transition-all duration-300 ease-in-out"
              >
                Community
              </Link>
              <Link
                to="/contact"
                className="rounded-full py-2 px-4 hover:bg-primary-200 hover:text-white cursor-pointer  transition-all duration-300 ease-in-out"
              >
                Contact
              </Link>
              <Link to="/tingogpt/home" className="hover:text-white">
                <button className="flex gap-2 items-center px-8 py-3 rounded-full border hover:bg-primary-200 hover:text-white hover:border-none text-fade-gray font-medium  transition-all duration-300 ease-in-out">
                  TingoGPT
                </button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
