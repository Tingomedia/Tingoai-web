import Marquee from "react-fast-marquee";
import { useRadio } from "../../../contexts/RadioContext";
import BottomPlayer from "../../../layouts/radio/general/BottomPlayer";
import RHeader from "../../../layouts/radio/general/RHeader";
import AnimGraphic from "../../auth/v2/AnimGraphic";
import { GiOldMicrophone } from "react-icons/gi";

const RadioHome: React.FC = () => {
  const { isPlaying, loading, handlePlayPause, error } = useRadio();

  return (
    <div className="flex flex-col justify-center h-svh py-8 relative font-Cera">
      <AnimGraphic orangeGraphic />
      <RHeader />
      {/* Main Content */}
      <div className="relative flex flex-1 flex-col justify-evenly items-center text-white my-4 gap-2 text-center">
        <div className="flex flex-col">
          <span className="text-[clamp(32px,5vw,72px)] font-semibold text-center">
            Tingo <span className="text-primary-200">AI</span> Radio
          </span>
          <span className="text-[clamp(32px,5vw,72px)] font-semibold text-center leading-none">
            102.5 FM
          </span>

          {/* SVG positioned underneath the 102.5 FM text for mobile only */}
          {/* <img
            src="/images/radio_on_air_label.svg"
            alt="Radio On Air"
            className="mx-auto block md:hidden w-[350px]"
          /> */}

          {isPlaying && <div className="w-full flex justify-center items-center">
            <GiOldMicrophone className="bg-blue-200 text-blue-600 text-6xl border rounded-full p-2 animate-pulse" />
            <div className="w-2/3 px-2 text-blue-200 border border-white border-l-0 rounded-r-xl">
              <Marquee>
                The Traffic Radio show with Ife Mi
              </Marquee>
            </div>

          </div>}

        </div>
        <div className="relative flex w-full h-auto justify-center items-center font-Muro">
          <img
            src="/graphics/Radio.svg"
            className="w-full max-w-[480px] h-auto"
            alt="Radio"
          />

          {/* Play/Pause Button with Loading State */}
          <button
            onClick={handlePlayPause}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 font-normal text-white flex justify-center items-center gap-4"
            style={{
              width:
                "clamp(64px, calc(64px + (20 * ((100vw - 380px) / 100))), 84px)",
              height:
                "clamp(30px, calc(30px + (10 * ((100vw - 320px) / 100))), 46px)",
              bottom: `9%`,
            }}
            disabled={loading}
          >
            {loading ? (
              <div className="flex flex-col justify-center items-center">
                <div className="animate-spin w-5 h-5 border-2 border-radioprimary border-t-transparent rounded-full"></div>
                <span className="text-[11px] sm:text-[13px]">
                  Connecting...
                </span>
              </div>
            ) : isPlaying ? (
              <>Pause</>
            ) : (
              <span className="text-[12px] xs:text-[15px]">
                Start Listening
              </span>
            )}
          </button>
        </div>
        {/* Error Message */}
        {loading && error && (
          <p className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md text-sm">
            {error}
          </p>
        )}
        {/* Conditional Player */}
      </div>
      <BottomPlayer />
    </div>
  );
};

export default RadioHome;


