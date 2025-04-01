import { useRadio } from "../../../contexts/RadioContext";
import BottomPlayerBar from "../../../pages/old_radio/radio/BottomPlayerBar";
import RFotter from "./RFotter";

export default function BottomPlayer() {
  const {
    isPlaying,
    handlePlayPause,
    isMuted,
    toggleMute,
    volume,
    handleVolumeChange,
  } = useRadio();

  return (
    <div className="w-full z-50">
      {/* Show Footer if not playing, else show Player */}
      {isPlaying ? (
        <div className="w-full z-50">
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
}
