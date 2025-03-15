import { useState } from "react";
import PlusIcon from "../../../assets/icons/add-circle-half-dot.svg";
import MicIcon from "../../../assets/icons/mic-01.svg";
import UploadFile from "./UploadFile";

type FileSource = "Image" | "File" | "Drive";
const Inputs = ({ onSelect }: { onSelect: (type: FileSource) => void }) => {
  const Button = ({
    name,
    imgSrc,
    onClick,
  }: {
    name: string;
    imgSrc: string;
    onClick: () => void;
  }) => (
    <button className="flex gap-4 p-2" onClick={onClick}>
      <img src={imgSrc} alt="Plus Icon" className="w-8 h-8" />
      <span className="text-[#E5E7EB]">{name}</span>
    </button>
  );
  return (
    <div className="flex flex-col relative w-[142px] gap-4 bg-[#121826] rounded-[16px] p-4">
      <div
        className="absolute -inset-[1px] rounded-[16px] pointer-events-none z-[-1]"
        style={{
          padding: "0.5px", // Fake border thickness
          background:
            "linear-gradient(150deg, rgba(201, 201, 201, 0.8) 0%, rgba(196, 196, 196, 0.1) 100%)",
          WebkitMask:
            "linear-gradient(white 0 0) content-box, linear-gradient(white 0 0)",
          WebkitMaskComposite: "xor",
        }}
      ></div>
      <Button
        name="Image"
        imgSrc={PlusIcon}
        onClick={() => onSelect("Image")}
      />
      <Button name="Files" imgSrc={PlusIcon} onClick={() => onSelect("File")} />
      <Button
        name="Drive"
        imgSrc={PlusIcon}
        onClick={() => onSelect("Drive")}
      />
    </div>
  );
};

export default function AskTingoGPT() {
  const [showInputs, setShowInputs] = useState(false);
  const [showUploadOption, setShowUploadOption] = useState(false);

  const showFileSelect = (type: FileSource) => {
    setShowInputs(false);
    switch (type) {
      case "Image":
        setShowUploadOption(true);
        break;
      case "File":
        setShowUploadOption(true);
        break;
      case "Drive":
        setShowUploadOption(true);
        break;
    }
  };

  return (
    <div
      className="relative flex items-center justify-between w-full h-[64px] px-[28px] rounded-[30px] backdrop-blur-[50px] border border-transparent ml-1 mr-4"
      style={{
        position: "relative",
        background:
          "linear-gradient(90deg, rgba(201, 201, 201, 0.24) 0%, rgba(196, 196, 196, 0.03) 100%)",
      }}
    >
      {/* Fake Border with Gradient */}
      <div
        className="absolute -inset-[1px] rounded-[30px] pointer-events-none z-[-1]"
        style={{
          padding: "2px", // Fake border thickness
          background:
            "linear-gradient(90deg, rgba(201, 201, 201, 0.8) 0%, rgba(196, 196, 196, 0.1) 100%)",
          WebkitMask:
            "linear-gradient(white 0 0) content-box, linear-gradient(white 0 0)",
          WebkitMaskComposite: "xor",
        }}
      ></div>

      {/* Content */}
      <div className="flex gap-4 items-center justify-end h-full">
        <button onClick={() => setShowInputs(!showInputs)}>
          <img src={PlusIcon} alt="Plus Icon" className="w-8 h-8" />
        </button>
        <input
          type="text"
          className="text-[12px] text-[#B8B8B8] bg-transparent border-none outline-none"
          placeholder="Ask TingoGPT"
        />
      </div>
      <button>
        <img src={MicIcon} alt="Mic Icon" className="w-8 h-8" />
      </button>
      {showInputs && (
        <div className="absolute -top-64">
          <Inputs onSelect={showFileSelect} />
        </div>
      )}
      {showUploadOption && <UploadFile onClose={setShowUploadOption} />}
    </div>
  );
}
