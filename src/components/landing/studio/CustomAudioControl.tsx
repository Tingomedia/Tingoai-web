import React, { useState, useRef } from "react";
import { IoMusicalNotes } from "react-icons/io5";
import { FaPlay, FaPause } from "react-icons/fa";
import { FiRotateCw } from "react-icons/fi";
import { SliceText } from "../../../utils/helpers";
import DownloadIcon from "./DownloadIcon";

const CustomAudioControl: React.FC<{ audioUrl: string; filename: string }> = ({
  audioUrl,
  filename,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0.30);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(event.target.value);
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(audioUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };
  const handleRewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // console.log(duration);
  
  return (
    <div className="border-t border-fade-gray-label p-4 w-full mt-8 lg:hidden ">
      <div className="flex items-center gap-4">
        <span className="w-[48px] h-[48px] flex items-center justify-center rounded-full border-[0.5px] border-fade-gray-label">
          <IoMusicalNotes className="text-[30px] text-secondary" />
        </span>
        <div>
          <h1 className="text-[14px] font-Manrope font-medium">
            {SliceText(filename, 12)}
          </h1>
          <div className="text-[14px] font-Manrope text-gray-500">
            19th of Nov 2023
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="flex items-center gap-10 mb-2">
            <FiRotateCw  onClick={handleRewind} className="cursor-pointer" />
            <span
              onClick={togglePlayPause}
              className="cursor-pointer"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </span>

            <DownloadIcon handleDownload={handleDownload} />

            {/* Time range */}
          </div>
          <div className="w-full lg:w-8/12 flex items-center">
            <span className="hidden lg:inline-block text-[14px] font-Manrope text-gray-500">
              {formatTime(currentTime)}
            </span>
            <input
              type="range"
              min="0"
              max={duration}
              step="0.01"
              value={currentTime}
              onChange={handleSliderChange}
              className="w-full mx-2 accent-gray-500"
            />
            <span className="text-[14px] font-Manrope text-gray-500">
            {formatTime(currentTime)}
            </span>
          </div>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={audioUrl}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        hidden
      />
    </div>
  );
};

export default CustomAudioControl;
