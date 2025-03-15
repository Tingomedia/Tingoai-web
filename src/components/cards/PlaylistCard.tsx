import React from 'react';

interface Track {
  artist: string;
  status: "Active" | "Upcoming" | "Ended";
  airingTime: string;
  coverImage: string;
}

const PlaylistCard: React.FC<Track> = ({artist, status, airingTime, coverImage }) => {
  return (
    <div className="h-[117px] w-[330px] max-w-[375px] lg:w-[340px] flex items-end">
      <div className="h-full w-[30%] min-w-[117px] rounded-xl rounded-br-none ">
        <img className="h-[100%] w-[100%] object-cover rounded-xl rounded-br-none" src={coverImage} alt="Radio cover" />
      </div>
      <div className="text-left p-2 space-y-2 border-y border-r rounded-r-xl border-fade-blue bg-radiosecondary w-full">
        <h3 className="font-Poppins text-[16px] font-medium text-fade-white">{status}</h3>
        <p className="font-Poppins text-[14px] text-fade-gray">{artist}</p>
        <p className="font-Poppins text-[12px] text-fade-white">Airing Time: {airingTime}</p>
      </div>
    </div>
  );
};

export default PlaylistCard;
