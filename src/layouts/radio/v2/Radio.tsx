import { useEffect, useState } from "react";
import { RadioProvider, useRadio } from "../../../contexts/RadioContext";
import AnimatedBirdsCSS from "../../../pages/auth/v2/AnimatedBirdsCSS";
import { Controls } from "../../../pages/old_radio/radio/BottomPlayerBar";

function Radio() {
  const { isPlaying, handlePlayPause } = useRadio();
  const [formattedTimeLocation, setFormattedTimeLocation] = useState("");
  const [formattedDate, setFormattedDate] = useState("");

  async function getDateTimeLocation() {
    // Get current date and time
    const now = new Date();

    // Format time as 06:09 AM
    const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: true };
    // @ts-ignore
    const formattedTime = now.toLocaleTimeString("en-US", timeOptions);

    // Format date as 28/03/2025
    const formattedDate = now.toLocaleDateString("en-GB").replace(/\//g, "/"); // Ensures day/month/year format

    try {
      // Get user's location using IP
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      const location = `${data.city}, ${data.country_name}`;

      setFormattedTimeLocation(`${formattedTime} ${location}`);
      setFormattedDate(formattedDate);
    } catch (error) {
      console.log("Unable to fetch location");
    }
  }

  useEffect(() => {
    getDateTimeLocation();
  }, []);

  return (
    <>
      <AnimatedBirdsCSS speed={20} />
      <div className="flex justify-center items-center min-h-screen w-full p-4">
        <div className="w-[90%] max-w-[768px] h-auto bg-[#f06c0e] rounded-[24px] flex flex-col items-center relative">
          <div className="absolute w-full top-2 flex justify-between px-[24px] text-white/65">
            <span>{formattedTimeLocation}</span>
            <span>{formattedDate}</span>
          </div>

          {/* Title Section */}
          <div className="flex flex-col text-center mb-6 text-tremor-background-muted font-Poppins text-[32px] font-bold">
            <span className="">Tingo AI Radio</span>
            <span className="">102.5 FM</span>
            <span className="text-[14px] md:text-[16px] block mt-2">
              Request a song now, Ife Mi, our AI OAP will play it
            </span>
          </div>

          {/* Audio Visualizer */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <img
              src="/graphics/AudioWheel.svg"
              className="w-[160px] md:w-[200px] h-auto animate-spin"
            />
            <img
              src="/graphics/AudioPlaying.gif"
              className="w-[240px] md:w-[300px] h-auto"
            />
            <img
              src="/graphics/AudioWheel.svg"
              className="w-[160px] md:w-[200px] h-auto animate-spin"
            />
          </div>

          {/* Controls Section */}
          <div className="w-full flex justify-center mb-[24px]">
            <Controls isPlaying={isPlaying} handlePlayPause={handlePlayPause} />
          </div>
        </div>
      </div>
    </>
  );
}

export default function RadioLayout() {
  return (
    <RadioProvider>
      <Radio />
    </RadioProvider>
  );
}
