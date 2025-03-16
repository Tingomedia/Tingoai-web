  import { FC } from "react";
  import { FaPause, FaPlay } from "react-icons/fa";
  import { HiMiniSpeakerWave } from "react-icons/hi2";
  import { IoMdShare, IoIosNotifications } from "react-icons/io";
  import { BiSolidVolumeMute } from "react-icons/bi";
  import { CiMenuKebab } from "react-icons/ci";
  import { SliceText } from "../../../utils/helpers";
  import radioimg from "../../../assets/images/old_tingo/ai-radio-presenter.jpg";


  interface SongProps {
    coverImage: string;
    title: string;
    artist: string;
  }

  interface BottomPlayerBarProps {
    currentSong?: SongProps;
    isPlaying?: boolean;
    liveIndicator?: boolean;
    defaultCoverImage?: string;
    isMuted: boolean;
    toggleMute: () => void;
    handlePlayPause?: () => void;
    volume: number;
    handleVolumeChange: (volume: number) => void;
  }

  const BottomPlayerBar: FC<BottomPlayerBarProps> = ({
    currentSong,
    isPlaying,
    handlePlayPause,
    liveIndicator = true,
    toggleMute,
    isMuted,
    volume,
    handleVolumeChange,
  }) => {
    return (
      <div className="py-4 md:h-[100px] w-full fixed bottom-0 z-30 bg-transparent flex gap-4 md:gap-0 justify-between items-center md:py-[1%] px-[2%] backdrop-blur-md">
        {/* Song Info Section */}
        <div className="w-1/3 flex md:justify-center items-center gap-2 md:gap-4">
          <img
            src={currentSong?.coverImage || radioimg}
            alt="radio cover"
            className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] rounded-xl"
          />
          <div>
            <h3 className="text-fade-white text-base md:text-[2rem] lg:text-[24px] font-Poppins font-medium">
              {SliceText(currentSong?.title, 10) || "AI Radio"}
            </h3>
            <p className="text-fade-gray text-[16px] md:font-[20px] hidden md:block pt-2">
              {SliceText(currentSong?.artist, 15) || "The Future Radio"}
            </p>
            <p className="text-fade-gray text-[.7rem] md:text-[16px] md:font-[20px] md:hidden pt-2">
              {SliceText(currentSong?.artist, 15) || "The Future Radio"}
            </p>
          </div>
        </div>

        {/* Controls Section */}
        <div className="w-1/3 flex justify-center items-center gap-4 md:gap-8">
          {liveIndicator && (
            <span className="text-lg md:text-2xl border hidden border-fade-blue p-2 px-4 lg:flex gap-2 items-center rounded-full text-white font-Poppins">
              <div className="w-6 h-6 bg-lime-600/60 rounded-full justify-center flex items-center animate-pulse">
                <div className="w-2 h-2 bg-lime-600 rounded-full"></div>
              </div>
              Live
            </span>
          )}
          {liveIndicator && (
            <div className="w-6 h-6 bg-lime-600/60 rounded-full justify-center flex lg:hidden items-center animate-pulse">
              <div className="w-2 h-2 bg-lime-600 rounded-full"></div>
            </div>
          )}
          <button
            onClick={handlePlayPause}
            className="h-[32px] w-[32px] md:h-[40px] md:w-[40px] rounded-full border border-fade-blue flex justify-center items-center cursor-pointer"
          >
            {isPlaying ? <FaPause className="text-white" /> : <FaPlay className="text-white" />}
          </button>
          <div className="hidden md:flex items-center">
            <IoMdShare className="text-fade-white text-[24px] mr-4 cursor-pointer" />
            <IoIosNotifications className="text-fade-white text-[24px] cursor-pointer" />
          </div>
        </div>

        {/* Volume Controls */}
        <div className="w-1/3 flex justify-center items-center gap-4">
          <div className="hidden lg:block">
            {isMuted ? (
              <BiSolidVolumeMute
                onClick={toggleMute}
                className="bg-[#161869] p-2 text-[30px] rounded-full border border-fade-blue text-fade-white cursor-pointer"
              />
            ) : (
              <HiMiniSpeakerWave
                onClick={toggleMute}
                className="bg-[#121826] p-2 text-[30px] rounded-full border border-fade-blue text-fade-white cursor-pointer"
              />
            )}
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
            className="w-[70px] md:w-[150px] lg:w-[200px] cursor-pointer bg-[#0A0C47] rounded-full accent-fade-blue"
          />
          <div className="">
            <CiMenuKebab className="text-[20px] md:hidden text-fade-white cursor-pointer" />
          </div>
        </div>
      </div>
    );
  };

  export default BottomPlayerBar;
