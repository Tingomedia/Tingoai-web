import React from "react";
import { IoDownloadOutline } from "react-icons/io5";
import { RxCopy } from "react-icons/rx";
import { FaPlay, FaPause } from "react-icons/fa";

const PlayButton = ({ title }: { title: string }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  return (
    <div className="w-full flex items-center justify-between px-3  cursor-default">
      <button
        className="h-14 w-14 rounded-full bg-[#ff9147] hover:bg-[#ff9147]/90 flex items-center justify-center text-white transition-colors"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? (
          <FaPause className="h-5 w-5" />
        ) : (
          <FaPlay className="h-5 w-5 ml-1" />
        )}
      </button>
      <div className="text-[14px] font-Manrope w-[50%]">
        <h4 className="text-2xl font-medium">{title}</h4>
        <p className="text-gray-400">0:14</p>
      </div>
      <div className="flex items-center gap-2">
        <RxCopy className="text-3xl cursor-pointer text-gray-500 hover:text-black transition-colors" />
        {/* download related to user */}
        <IoDownloadOutline className="cursor-pointer text-3xl text-gray-500 hover:text-black transition-colors" />
      </div>
    </div>
  );
};

export default PlayButton;
