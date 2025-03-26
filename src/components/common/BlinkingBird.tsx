import { FC } from "react";

interface LoaderProp {
  label?: string;
}
const BlinkingBird: FC<LoaderProp> = ({}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1 animate-blink delay-800 items-center">
        <img src="/icons/Bird.svg" width={40} height={40} />
      </div>
    </div>
  );
};

export default BlinkingBird;
