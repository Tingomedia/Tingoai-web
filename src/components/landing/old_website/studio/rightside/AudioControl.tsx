import React, { useRef, useState } from "react";
import { RotateCcw } from "lucide-react";
import { IoDownloadOutline } from "react-icons/io5";
import { FaPlay, FaPause } from "react-icons/fa";
import AudioImage from "../../../../assets/images/old_tingo/AudioImage.svg";

interface AudioControlProps {
  isRightMenuOpen: boolean;
  audioUrl: string | any;
  filename: string;
  setIsRightMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function AudioControlC({
  isRightMenuOpen,
  audioUrl,
  filename,
}: AudioControlProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [copyButtonText, setCopyButtonText] = React.useState("Copy Prompt");

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
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };
  const handleRewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(
        0,
        audioRef.current.currentTime - 10
      );
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // console.log(duration);

  const copyToClipboard = async () => {
    const textToCopy = filename;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopyButtonText("Copied!");
      setTimeout(() => setCopyButtonText("Copy Prompt"), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      setCopyButtonText("Failed to copy");
      setTimeout(() => setCopyButtonText("Copy Prompt"), 2000);
    }
  };

  // console.log(Math.floor(currentTime));
  

  return (
    <>
      {isRightMenuOpen ? (
        <div
          className={`w-full hidden lg:w-[25%] xl:w-[20%] max-w-[400px] max-h-[1000px] bg-[#f3f3f3] border-l-[0.4px] border-fade-gray-label p-4 flex-col gap-y-10 py-20 justify-between items-center  ${
            isRightMenuOpen ? "lg:flex" : "hidden"
          }`}
        >
          {/* Audio Icon */}
          <img src={AudioImage} alt="Audio" />

          {/* File Info */}
          <div className="flex flex-col items-start gap-2 w-full">
            <h3 className="text-[16px] font-medium font-Manrope">
              {`${filename.slice(0, 35)}...`}
            </h3>
            <p className="text-[14px] text-gray-500">19th of Nov 2024</p>
          </div>

          {/* Progress Bar */}
          <div className="w-full">
            <input
              type="range"
              min="0"
              max={duration}
              step={currentTime}
              value={currentTime}
              onChange={handleSliderChange}
              className="w-full mx-2 accent-gray-500"
            />
            <div className="flex w-full justify-between text-[14px] text-gray-500">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(currentTime)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between gap-8 w-full">
            <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
              <RotateCcw onClick={handleRewind} className="h-8 w-8" />
            </button>
            <button
              className="h-14 w-14 rounded-full bg-[#ff9147] hover:bg-[#ff9147]/90 flex items-center justify-center text-white transition-colors"
              onClick={togglePlayPause}
            >
              {isPlaying ? (
                <FaPause className="h-5 w-5" />
              ) : (
                <FaPlay className="h-5 w-5 ml-1" />
              )}
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
              <IoDownloadOutline onClick={handleDownload} className="h-8 w-8" />
            </button>
          </div>
          <audio
            ref={audioRef}
            src={audioUrl}
            onLoadedMetadata={handleLoadedMetadata}
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            hidden
          />

          {/* Copy Button */}
          <button
            onClick={copyToClipboard}
            className="w-full bg-[#ff9147] hover:bg-[#ff9147]/90 text-white rounded-lg h-20 transition-colors"
          >
            {copyButtonText}
          </button>
        </div>
      ) : (
        <div className="bg-[#f0efea] lg:w-[10%]"></div>
      )}
    </>
  );
}

export default AudioControlC;
