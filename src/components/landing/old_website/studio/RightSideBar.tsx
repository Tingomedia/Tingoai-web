import React from "react";
import { X } from "lucide-react";
import { IoDownloadOutline } from "react-icons/io5";
import { FaPlay, FaCrown } from "react-icons/fa";
import micro from "../../../assets/icons/microphone-icon.svg";


interface AudioControlProps {
    isRightMenuOpen: boolean;
    setIsRightMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
const RightSideBar: React.FC<AudioControlProps> = ({isRightMenuOpen, setIsRightMenuOpen}) => {
    const library = [
        { id: "1", date: "Today", title: "UsersName-Prompt", time: "0:17" },
        { id: "2", date: "Wednesday", title: "UsersName-Prompt", time: "0:15" },
      ];
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-[#f3f3f3] transform ${
          isRightMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:translate-x-0 lg:relative lg:w-[25%] xl:w-[20%] p-4 flex flex-col gap-10 py-14`}
      >
        <button
          className="w-full flex lg:hidden justify-end px-8"
          onClick={() => setIsRightMenuOpen(false)}
        >
          <X className="h-10 w-10 z-50 " />
        </button>
        <div className="flex justify-end gap-10 items-center">
          <button className="flex gap-3 items-center justify-center p-1 pr-2 border border-secondary rounded-full">
            <img
              src={micro}
              className="p-2 text-[26px] bg-secondary text-white rounded-full"
            />
            50
          </button>
          <button className="bg-secondary text-white p-2 px-4 hover:bg-fade-white border hover:border-secondary hover:text-secondary transition-all duration-300 rounded-full">
            Sign in
          </button>
        </div>

        <div className="border shadow-md rounded-xl p-5 h-[200px] lg:flex flex-col justify-between items-start hidden">
          <div className="space-y-2 font-Manrope">
            <FaCrown className="text-[24px]" />
            <h2 className="font-bold text-[16px]">Upgrade</h2>
          </div>
          <p className="text-[14px] font-Manrope text-fade-gray-label">
            Upgrade to our premium plans and enjoy unlimited generations
          </p>
          <button className="p-4 bg-secondary text-white rounded-full hover:bg-fade-white border hover:border-secondary hover:text-secondary transition-colors text-[16px] font-medium font-Manrope">
            View Plans
          </button>
        </div>

        <div className="px-2">
          <h2 className="font-medium mb-4">My Library</h2>
          <div className="space-y-3">
            {library.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div>
                  <div className="text-[14px] font-semibold font-Manrope text-fade-gray-label">
                    {item.date}
                  </div>
                  <div className="text-[16px] font-Manrope">{item.title}</div>
                  <div className="text-[14px] font-Manrope text-fade-gray-label">
                    {item.time}
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <IoDownloadOutline className="h-7 w-7" />
                  <FaPlay className="p-2 text-[20px] bg-secondary rounded-full text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSideBar;
