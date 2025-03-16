import { FC } from "react";
import { Outlet } from "react-router-dom";
import RHeader from "./general/RHeader";
import BottomPlayerBar from "../../pages/old_radio/radio/BottomPlayerBar";
import { RadioProvider, useRadio } from "../../contexts/RadioContext";
import RFotter from "./general/RFotter";

const RadioLayout: FC = (): JSX.Element => {
  return (
    <RadioProvider>
      <div className="w-full 2xl-contaner mx-auto h-screen bg-[#121826]">
        <div className="fixed top-0 left-0 w-full mx-auto z-50 bg-[#1D2739]">
          <RHeader />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-hidden hide-scrollbar">
          <Outlet />
        </div>

        {/* Conditional Player */}
        <BottomPlayer />
      </div>
    </RadioProvider>
  );
};

const BottomPlayer = () => {
  const { isPlaying, handlePlayPause, isMuted, toggleMute, volume, handleVolumeChange } = useRadio();


  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
      {/* Show Footer if not playing, else show Player */}
      {isPlaying  ? (
        <div className="fixed bottom-0 left-0 w-full z-50">
          <BottomPlayerBar
            isPlaying={isPlaying}
            handlePlayPause={handlePlayPause}
            isMuted={isMuted}
            toggleMute={toggleMute}
            volume={volume}
            handleVolumeChange={handleVolumeChange}
          />
        </div>
      ) : (
        <RFotter />
      )}
    </div>
  );
};

export default RadioLayout;
