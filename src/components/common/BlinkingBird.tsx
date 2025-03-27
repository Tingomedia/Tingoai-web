import { FC } from "react";

interface LoaderProp {
  label?: string;
  flip?: boolean;
  blinkFast?: boolean;
}

const BlinkingBird: FC<LoaderProp> = ({ flip, blinkFast }) => {
  return (
    <div
      className="flex items-center gap-2"
      style={{
        transform: flip ? "scaleX(-1)" : "none",
      }}
    >
      <div
        className={`flex gap-1 ${
          blinkFast ? "animate-blink-fast" : "animate-blink"
        } delay-800 items-center`}
      >
        <img src="/icons/Bird.svg" width={40} height={40} />
      </div>
    </div>
  );
};

export default BlinkingBird;
