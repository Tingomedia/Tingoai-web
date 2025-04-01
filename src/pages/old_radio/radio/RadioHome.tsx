// import { FaPlay, FaPause } from "react-icons/fa6";
// import { useRadio } from "../../contexts/RadioContext";
// import tunnel from "/tunnel.svg";
// import radial from "/radicalgradient.svg";
// import bgvideo from "../../assets/images/old_tingo/headset-animate.mp4";

// const RadioHome: React.FC = () => {
//   const { isPlaying, handlePlayPause } = useRadio();

//   return (
//     <div
//       className="w-full h-screen relative overflow-hidden"
//       style={{
//         backgroundImage: `url(${tunnel})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Background Video Overlay */}
//       <video className="absolute top-0 left-0 w-full h-full object-cover opacity-20" src={bgvideo} autoPlay loop muted playsInline></video>

//       {/* Radial Gradient Overlay */}
//       <div className="absolute inset-0 bg-cover bg-center blur-[150px]" style={{ backgroundImage: `url(${radial})` }}></div>

//       {/* Main Content */}
//       <div className="relative container mx-auto flex flex-col justify-center items-center w-full h-full text-white md:gap-6 text-center z-10">
// <h1 className="text-[36px] md:text-[76px] font-semibold md:leading-[77px] text-center">Tingo <span className="text-[36px] md:text-[76px] font-semibold md:leading-[77px] text-center text-primary-200">AI</span> Radio</h1>
// <h2 className="text-[36px] md:text-[76px] font-semibold md:leading-[77px] text-center text-tremor-background-muted">102.5 FM</h2>
// <button
//           onClick={handlePlayPause}
//           className="bg-fade-white hover:bg-white font-medium rounded-full text-radioprimary px-4 py-2 my-4 md:my-0 md:px-8 md:py-6 flex justify-center items-center gap-4"
//         >
//           {isPlaying ? <FaPause /> : <FaPlay />}
//           {isPlaying ? "Stop Listening" : "Start Listening"}
//         </button>
//         <p className="text-[12px] sm:text-[14px] md:text-[16px] text-center px-4 py-2 bg-[#121826] rounded-full border border-fade-blue">
//             {isPlaying
//                 ? "Listening to TingoAI Radio" : "AI Radio 102.5 FM"}
//             </p>
//       </div>
//     </div>
//   );
// };

// export default RadioHome;

// import { FaPlay, FaPause } from "react-icons/fa6";
// import tunnel from "/tunnel.svg";
// import radial from "/radicalgradient.svg";
// import bgvideo from "../../../assets/images/old_tingo/headset-animate.mp4";
import { useRadio } from "../../../contexts/RadioContext";
import BottomPlayer from "../../../layouts/radio/general/BottomPlayer";
import RHeader from "../../../layouts/radio/general/RHeader";
import AnimGraphic from "../../auth/v2/AnimGraphic";

const RadioHome: React.FC = () => {
  const { isPlaying, loading, handlePlayPause, error } = useRadio();

  return (
    <div className="flex flex-col min-h-svh relative font-Cera">
      <AnimGraphic orangeGraphic />
      <RHeader />
      {/* Main Content */}
      <div className="relative flex flex-1 flex-col justify-evenly items-center text-white my-4 gap-2 text-center z-10">
        <div className="flex flex-col">
          <span className="text-[clamp(32px,5vw,72px)] font-semibold text-center">
            Tingo <span className="text-primary-200">AI</span> Radio
          </span>
          <span className="text-[clamp(32px,5vw,72px)] font-semibold text-center leading-none">
            102.5 FM
          </span>

          {/* SVG positioned underneath the 102.5 FM text for mobile only */}
          <img
            src="/images/radio_on_air_label.svg"
            alt="Radio On Air"
            className="mx-auto block md:hidden w-[350px]"
          />
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


