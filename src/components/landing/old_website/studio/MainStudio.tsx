import React from "react";
import headset from "../../../assets/images/old_tingo/headset-with-hand.svg";
import { FaMicrophone } from "react-icons/fa";
import CustomAudioControl from "./CustomAudioControl";
import { Loader } from "lucide-react";
import { SliceText } from "../../../../utils/helpers";

interface MainStudioProps {
  generateMusic: any;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  suggestions: string[];
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  trackLength: number;
  setTrackLength: React.Dispatch<React.SetStateAction<number>>;
  audioUrl: string | null;
}

const MainStudio: React.FC<MainStudioProps> = ({
  generateMusic,
  isLoading,
  suggestions,
  prompt,
  trackLength,
  setPrompt,
  setTrackLength,
  audioUrl,
}) => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center bg-[#f0efea] relative h-full sm:pt-[50px] pt-28 lg:pt-[50px] lg:mt-0">
      <div className="container mx-auto max-w-[640px] flex justify-center items-center h-full">
        <div className="flex-1 flex flex-col p-6 justify-center gap-5 space-y-8">
          <div className="bg-gradient-to-r from-[#0019FF] to-[#FF7900] rounded-xl p-6 lg:px-8 text-white h-[150px] relative">
            <div className="py-6">
              <h1 className="text-3xl md:text-[24px] font-bold mb-2">
                Tingo AI Studio
              </h1>
              <p className="text-[16px] font-Manrope text-[#b8b8b8] max-w-[150px] md:max-w-[286px]">
                Generate cool instrumentals with just texts.
              </p>
            </div>
            <img
              src={headset}
              alt="music image"
              className="absolute h-[185px] bottom-0 right-2"
            />
          </div>
          <div className="grid gap-3">
            <h3 className="text-[16px] font-Manrope font-medium">
              Prompt Suggestions
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  onClick={() => setPrompt(suggestion)}
                  className="p-4 border shadow-lg rounded-xl text-[14px] font-Manrope bg-[#f3f3f3] hover:bg-[#f0efea] cursor-pointer"
                >
                  {SliceText(suggestion, 100)}
                </div>
              ))}
            </div>
          </div>
          <textarea
            className="w-full h-[120px] bg-[#f3f3f3] p-4 border border-fade-gray-label rounded-xl resize-none"
            placeholder="Tell us what you want to hear"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <div className="hidden">
            <h3 className="text-[14px] font-Manrope font-medium mb-3">
              Set Track Length
            </h3>
            <div className="flex gap-4">
              <input
                type="range"
                min="0"
                max="180"
                value={trackLength}
                onChange={(e) => setTrackLength(Number(e.target.value))}
                className="w-full accent-gray-500"
              />
              <span className="text-fade-black">
                {Math.floor(trackLength / 60)}:
                {(trackLength % 60).toString().padStart(2, "0")}
              </span>
            </div>
            <div className="flex justify-between text-[14px] font-Manrope text-gray-500">
              <span>Max length 3 minutes</span>
            </div>
          </div>

          <button
            onClick={generateMusic}
            className={`w-full text-white py-5 rounded-lg border transition-colors mt-5 font-medium flex items-center justify-center gap-5 ${
              isLoading
                ? "bg-secondary opacity-50 cursor-not-allowed"
                : "bg-secondary hover:bg-fade-white hover:border-secondary hover:text-secondary"
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader className="animate-pulse" />
            ) : (
              <FaMicrophone />
            )}
            {isLoading ? "Generating..." : "Generate"}
          </button>

          {audioUrl && (
            <CustomAudioControl audioUrl={audioUrl} filename={prompt} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainStudio;
