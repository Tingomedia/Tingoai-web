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
import AnimGraphic from "../../auth/v2/AnimGraphic";

const RadioHome: React.FC = () => {
  const { isPlaying, loading, handlePlayPause, error } = useRadio();

  return (
    <div className="w-full h-screen min-h-screen relative overflow-hidden font-Cera">
      <AnimGraphic orangeGraphic />
      {/* Main Content */}
      <div className="relative flex flex-col justify-center items-center w-full h-full text-white md:gap-6 text-center z-10">
        <h1 className="text-[36px] lg:text-[76px] font-semibold md:leading-[77px] text-center">
          Tingo <span className="text-primary-200">AI</span> Radio{" "}
          <span className="text-[24px] md:text-[48px] font-normal opacity-35 py-8 hidden xs:inline">
            |
          </span>{" "}
          102.5 FM
        </h1>
        <div className="relative font-Muro">
          <img src="/graphics/Radio.svg" width={500} height={500} />
          {/* Play/Pause Button with Loading State */}
          <button
            onClick={handlePlayPause}
            className={`absolute left-[50%] -translate-x-[50%] w-[48px] font-normal rounded-full text-white flex justify-center items-center gap-4`}
            style={{ bottom: `${isPlaying ? 29 : 26}%` }}
            disabled={loading}
          >
            {loading ? (
              <div className="flex flex-col justify-center items-center">
                <div className="animate-spin w-5 h-5 border-2 border-radioprimary border-t-transparent rounded-full"></div>
                <span className="text-[11px] sm:text-[14px]">
                  Connecting...
                </span>
              </div>
            ) : isPlaying ? (
              <>
                {/* <FaPause /> */}
                Pause
              </>
            ) : (
              <span className="text-[14px] sm:text-[16px]">
                {/* <FaPlay /> */}
                Start Listening
              </span>
            )}
          </button>
        </div>
        {/* <p className="text-[12px] sm:text-[14px] md:text-[16px] text-center px-4 py-2 bg-[#121826] rounded-full border border-fade-blue">
          {isPlaying ? "Powered by AI" : "Tingo AI Radio 102.5 FM"}
        </p> */}

        {/* Error Message */}
        {loading && error && (
          <p className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md text-sm">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default RadioHome;
