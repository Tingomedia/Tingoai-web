import {FC} from "react"

interface LoaderProp {
  label?: string
}
const BlinkingDot:FC< LoaderProp> = ({label=""}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1 animate-blink delay-800 items-center">
        <img src="/icons/Bird.svg" width={40} height={40} />
        <span className="bg-[linear-gradient(90.86deg,#F8872B_0.74%,#0037FC_105.83%)] bg-clip-text text-transparent ">Loading {label ? label : "..."}</span>
      </div>
    </div>
  );
};

export default BlinkingDot;
