import React from "react";
import { IoNotifications } from "react-icons/io5";

interface NewsCardProps {
  title: string;
  artist: string;
  airingTime: string;
  coverImage: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, artist, airingTime, coverImage }) => {
  return (
    <div className="h-[117px] w-[330px] max-w-[375px] lg:w-[340px] flex items-end">
      <div className="h-full w-[30%] min-w-[117px] rounded-xl rounded-br-none">
        <img
          className="h-[100%] w-[100%] object-cover rounded-xl rounded-br-none"
          src={coverImage}
          alt="Radio cover"
        />
      </div>
      <div className="text-left p-2 space-y-2 border-y border-r rounded-r-xl border-fade-blue bg-radiosecondary w-full flex items-center justify-between">
        <div>
          <h3 className="font-Poppins text-[16px] font-medium text-fade-white">{title}</h3>
          <p className="font-Poppins text-[14px] text-slate-300">{artist}</p>
          <p className="font-Poppins text-base text-fade-gray">Airing Time: {airingTime}</p>
        </div>
        <IoNotifications className="text-fade-white text-[20px]" />
      </div>
    </div>
  );
};

export default NewsCard;
