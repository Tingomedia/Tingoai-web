import { Link } from "react-router-dom";
import logo from "/tingo_ai_logo2.png";
import micro from "../../../../assets/icons/microphone-icon.svg";

const StudioHeader = () => {
  return (
    <div className="top-0 w-full h-[80px] bg-fade-white border-b border-fade-gray-label z-50 justify-between items-end p-4  hidden lg:fixed lg:flex">
      <Link to="/">
        <img
          src={logo}
          alt="Tingo logo"
          className="w-[125px] h-[40px] md:h-[48px]"
        />
      </Link>
      <div className="flex gap-4">
        <button className="flex gap-3 items-center justify-center p-1 pr-2 border border-secondary rounded-full">
          <img
            src={micro}
            className="p-4 text-[26px] bg-secondary text-white rounded-full"
          />
          50
        </button>
        <button className="p-4 px-5 rounded-full bg-secondary hover:border-secondary hover:border hover:bg-transparent  text-white hover:text-secondary">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default StudioHeader;
