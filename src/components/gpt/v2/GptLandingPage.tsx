import AnimGraphic from "../../../pages/auth/v2/AnimGraphic";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlay,
  faAppStoreIos,
} from "@fortawesome/free-brands-svg-icons";

const GptLandingPage = () => {
  return (
    <div className="w-full h-svh font-Cera tracking-wider relative flex flex-col items-center justify-center text-white bg-purple/50">
      {/* Birds in the background */}
      <AnimGraphic orangeGraphic />

      {/* Hero Text & CTA Button */}
      <div className="absolute flex flex-col gap-8 justify-center items-center text-center top-[20%]">
        <div className="w-full flex justify-center items-center">
          <img src="/icons/gpt-logo.svg" alt="" className="h-64" />
        </div>

        <div className="w-full flex justify-center gap-8 mt-6">
          <Link
            to="/tingogpt"
            className="px-6 py-3 border-2 bg-transparent text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
          >
            TingoGPT
          </Link>
          <Link
            to="/gpt-teen-waitlist"
            className="px-6 py-3 border-2 bg-transparent text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
          >
            TeenGPT
          </Link>
        </div>
        <Link
          to="/gpt-mobile-waitlist"
          className="flex gap-8 items-center px-6 py-3 bg-transparent text-white text-[24px] rounded-full hover:scale-105 transition"
        >
          Get the mobile app
          <FontAwesomeIcon icon={faAppStoreIos} style={{ fontSize: "1.2em" }} />
          <FontAwesomeIcon icon={faGooglePlay} style={{ fontSize: "1.0em" }} />
        </Link>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-8 text-center  opacity-70">
        <div className="">
          <Link to="/" className="w-full flex justify-center items-center">
            <img src="/icons/logo-footer.svg" alt="" className=" w-32" />
          </Link>
          <div className="font-Cera text-white">
            Terms of use | Privacy policy
          </div>
        </div>
      </footer>
    </div>
  );
};


export default GptLandingPage;
