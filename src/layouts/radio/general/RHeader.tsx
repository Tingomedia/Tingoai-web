import React, { useState } from "react";
import logo from '../../../assets/icons/tingo_ai_logo.png';
import search from '../../../assets/icons/search-outline.svg';
import { FaUser } from "react-icons/fa";
import { MenuIcon, X } from 'lucide-react';
import { Link } from "react-router-dom";

const RHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="px-[2%] fixed w-full top-4 lg:top-10 z-30">
      <div className="w-full container mx-auto h-[70px] md:h-[88px] flex items-center justify-between px-[3%] border border-fade-gray/30 bg-transparent rounded-full shadow-customG">
        
        <Link to="/" className=" text-white items-baseline relative">
        <img src={logo} alt="Tingo logo" className="md:w-[150px] h-[40px] md:h-[64px]" />
        </Link>
        <ul className="hidden md:flex gap-4 font-Poppins text-fade-gray border border-fade-gray rounded-full p-2">
          <Link to='/radio' className="rounded-full py-2 px-4 hover:bg-dark-blue cursor-pointer  transition-all duration-300 ease-in-out">Playlists</Link>
          <Link to='/radio' className="rounded-full py-2 px-4 hover:bg-dark-blue cursor-pointer  transition-all duration-300 ease-in-out">News & Weather</Link>
          <Link to='/radio' className="rounded-full py-2 px-4 hover:bg-dark-blue cursor-pointer  transition-all duration-300 ease-in-out">Reach Out</Link>
        </ul>

        <div className="flex items-center gap-5">
          <img src={search} alt="search" className="w-[32px] h-[32px] hidden lg:block" />
          <button className="hidden md:flex gap-2 items-center px-8 py-4 bg-white border hover:border-white hover:bg-dark-blue rounded-full text-radioprimary hover:text-white font-Poppins font-medium  transition-all duration-300 ease-in-out">
            <FaUser /> Login
          </button>
          <div className="w-[32px] h-[32px] lg:hidden p-2 bg-inherit border border-white rounded-full flex justify-center items-center">
          <FaUser className="text-white"/>
          </div>

        </div>

        <button onClick={toggleMenu} className="hidden text-white">
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-[80px] left-0 w-full bg-radiosecondary rounded-lg shadow-lg hidden">
            <nav className="flex flex-col items-center px-4 py-6 space-y-4 text-fade-gray font-Poppins">
              <Link to="/radio/playlists" className="hover:text-white">Playlists</Link>
              <Link to="/radio/news" className="hover:text-white">News & Weather</Link>
              <Link to="/radio/reachus" className="hover:text-white">Reach Out</Link>
              <Link to="/radio/login" className="w-full flex justify-center">
                <button className="flex gap-2 items-center px-8 py-4 bg-white rounded-full text-radioprimary font-medium  transition-all duration-300 ease-in-out">
                  <FaUser /> Login
                </button>
              </Link>
            </nav>
          </div>
        )}
      </div>
      <ul className="w-11/12 md:w-2/3 mx-auto px-2 py-2 text-[1.2rem] flex justify-between gap-4 mt-10 font-Poppins text-fade-gray border border-fade-gray rounded-full lg:hidden">
          <Link to='/radio/playlists' className="rounded-full py-2 px-4 hover:bg-dark-blue cursor-pointer  transition-all duration-300 ease-in-out">Playlists</Link>
          <Link to='/radio/news' className="rounded-full py-2 px-4 hover:bg-dark-blue cursor-pointer  transition-all duration-300 ease-in-out">News & Weather</Link>
          <Link to='/radio/reachus' className="rounded-full py-2 px-4 hover:bg-dark-blue cursor-pointer  transition-all duration-300 ease-in-out">Reach Out</Link>
        </ul>
    </div>
  );
};

export default RHeader;
