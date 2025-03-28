import useWindowWidth from "../../../hooks/useWindowWidth";
import AnimatedBirdsCSS from "./AnimatedBirdsCSS";

export default function AnimGraphic() {
  const { width } = useWindowWidth();
  return (
    <div className="absolute w-svw h-svh overflow-clip bg-gray-400 -z-10">
      <AnimatedBirdsCSS speed={20} />
      <img
        src="/graphics/TingoStripes-01.svg"
        className="absolute -bottom-[64px] -left-[84px] max-w-full h-auto"
        width={width * 0.442}
        height={((width * 0.442) / 1.476).toFixed()}
      />
      {/* <div className="absolute inset-0 bg-[#2a3795] opacity-65"></div> */}
    </div>
  );
}
