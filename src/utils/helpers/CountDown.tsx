import { FC } from "react";
import heroimage from "../../../assets/images/old_tingo/heroimage.svg";
import logo from "../../../assets/icons/tingo_ai_logo.png";
import rocket from "../../../assets/icons/noto_rocket.png";
import Counter from "./Counter";
import MusicPlayer from "./MusicPlayer";
import Clock from "./Clock";
import { Link } from "react-router-dom";

const CountDown: FC = () => {
  return (
    <div
      className="w-full bg-primary relative flex flex-col justify-center items-center h-screen max-h-screen px-6 md:px-2 overflow-hidden"
      style={{
        backgroundImage: `url(${heroimage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      {/* Background Overlay */}
      <div className="bg-primary/80 w-full h-full absolute top-0 left-0"></div>

      {/* Top-Centered Logo */}
      <div className="absolute top-40 z-30 flex justify-center w-full cursor-pointer">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Vertically Centered Heading */}
      <div className="relative top-16 z-20 flex flex-col justify-center items-center text-center text-fade-white h-full">
        <div className="flex ">
          <h1 className="text-4xl font-semibold font-Manrope mr-4">
            We are taking off in
          </h1>
          <img src={rocket} alt="rocket-image" className="animate-bounce" />
        </div>

        <div className="mt-16">
          <Counter />
        </div>

        <div className="mt-16">
          <Clock />
        </div>
        <MusicPlayer />
      </div>
    </div>
  );
};

export default CountDown;
