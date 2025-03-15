import React from "react";
import PlayButton from "./leftside/PlayButton";
import { X } from "lucide-react";

interface LeftSideBarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LeftSideBar: React.FC<LeftSideBarProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {

  const historyItems = [
    { id: "1", date: "Today", title: "The prompt", time: "0:15" },
    {
      id: "2",
      date: "Wednesday",
      title: "Lo-fi hip-hop",
      time: "0:15",
    },
  ];
  return (
    <>
      {/* Left Sidebar */}
      <div
         className={`fixed inset-0 z-40 bg-[#f3f3f3] border-r-[0.4px] border-fade-gray-label transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-[-100%]"
        } transition-transform lg:translate-x-0 lg:relative lg:w-[25%] xl:w-[20%] max-w-[400px] p-4 flex flex-col gap-10 py-14`}
      >
        <button
          className="w-full flex justify-end px-4 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <X className="h-10 w-10 z-50 " />
        </button>
          <div className="space-y-4 overflow-y-auto p-4">
            {historyItems.map((item) => (
              <div key={item.id}>
                <div className="text-[14px] font-Manrope text-gray-500 mb-2">
                  {item.date}
                </div>
                <PlayButton title={item.title}  />
              </div>
            ))}
          </div>
        </div>
    </>
  );
};

export default LeftSideBar;
