import React, { useState } from "react";
// import logo from '../../../assets/icons/tingo_ai_logo.png';
import logo from '../../../assets/radio/Tingo 102.5 FM-01 3.svg'
import search from '../../../assets/icons/search-outline.svg';
import { FaUser } from "react-icons/fa";
import { MenuIcon, X } from 'lucide-react';
import { Link } from "react-router-dom";
import { useFirebaseAuth } from "../../../contexts/FirebaseAuthContext";

const RHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { firebaseUser } = useFirebaseAuth();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="sm:px-[2%] px-[5%] md:pt-0 pt-[2%] w-fullz-30 flex flex-col gap-[5%] items-center justify-between">
      <div className="w-full flex justify-between items-center gap-[5%]">
        <Link to="/" className="text-white relative">
          <img
            src={logo}
            alt="Tingo logo"
            className="md:w-[150px] h-[40px] md:h-[64px]"
          />
        </Link>

        {/* Centered Nav Bar */}
        <div className="flex sm:flex-1 px-[8px] py-[4px] items-center justify-between sm:border border-fade-gray  bg-transparent rounded-full sm:shadow-customG">
          <ul className="hidden sm:flex flex-1 mx-[10%] justify-evenly gap-4 font-Cera text-white/80">
            <Link
              to="/radio"
              className="rounded-full py-2 px-4 hover:bg-primary-200 hover:text-white cursor-pointer transition-all duration-300 ease-in-out"
            >
              Playlists
            </Link>
            <Link
              to="/radio"
              className="rounded-full py-2 px-4 hover:bg-primary-200 hover:text-white cursor-pointer transition-all duration-300 ease-in-out"
            >
              News & Weather
            </Link>
            <Link
              to="/radio"
              className="rounded-full py-2 px-4 hover:bg-primary-200 hover:text-white cursor-pointer transition-all duration-300 ease-in-out"
            >
              Reach Out
            </Link>
          </ul>
          {/* Right Side Controls */}
          <div className="flex items-center gap-5">
            <img
              src={search}
              alt="search"
              className="w-[24px] h-[24px] hidden lg:block"
            />
            {firebaseUser?.photoURL ? (
              <img
                src={firebaseUser?.photoURL}
                width={32}
                height={32}
                className="rounded-full overflow-hidden"
              />
            ) : (
              <>
                <Link
                  to={`/login?returnUrl=${encodeURIComponent(
                    window.location.href
                  )}`}
                  className="hidden lg:inline gap-2 items-center px-8 bg-[#ed8733] hover:bg-[#f06c0e] rounded-full text-white hover:text-white font-Poppins font-normal transition-all duration-300 ease-in-out"
                >
                  Login
                </Link>
                <Link
                  to={`/login?returnUrl=${encodeURIComponent(
                    window.location.href
                  )}`}
                  className="w-[32px] h-[32px] lg:hidden p-2 bg-inherit border border-white rounded-full flex justify-center items-center"
                >
                  <FaUser className="text-white" />
                </Link>
              </>
            )}
          </div>
        </div>

        {/* just to mimic some space as per design */}
        <Link to="/" className="text-white relative opacity-0 hidden xl:inline">
          <img
            src={logo}
            alt="Tingo logo"
            className="md:w-[150px] h-[40px] md:h-[64px]"
          />
        </Link>

        {/* Mobile Menu */}
        <button onClick={toggleMenu} className="hidden text-white">
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-radiosecondary rounded-lg shadow-lg hidden">
          <nav className="flex flex-col items-center px-4 py-6 space-y-4 text-white/80 font-Cera">
            <Link to="/radio/playlists" className="hover:text-white">
              Playlists
            </Link>
            <Link to="/radio/news" className="hover:text-white">
              News & Weather
            </Link>
            <Link to="/radio/reachus" className="hover:text-white">
              Reach Out
            </Link>
            <Link to="/radio/login" className="w-full flex justify-center">
              <button className="flex gap-2 items-center px-8 py-4 bg-white rounded-full text-radioprimary font-medium transition-all duration-300 ease-in-out">
                <FaUser /> Login
              </button>
            </Link>
          </nav>
        </div>
      )}

      {/* Mobile Bottom Menu */}
      {/* <ul className="w-11/12 md:w-2/3 mx-auto px-2 py-2 text-[1.2rem] flex justify-between gap-4 mt-10 text-white/80 font-Cera border border-fade-gray rounded-full sm:hidden">
        <Link
          to="/radio/playlists"
          className="rounded-full py-2 px-4 hover:bg-dark-blue cursor-pointer transition-all duration-300 ease-in-out"
        >
          Playlists
        </Link>
        <Link
          to="/radio/news"
          className="rounded-full py-2 px-4 hover:bg-dark-blue cursor-pointer transition-all duration-300 ease-in-out"
        >
          News & Weather
        </Link>
        <Link
          to="/radio/reachus"
          className="rounded-full py-2 px-4 hover:bg-dark-blue cursor-pointer transition-all duration-300 ease-in-out"
        >
          Reach Out
        </Link>
      </ul> */}
    </div>
  );
};

export default RHeader;
