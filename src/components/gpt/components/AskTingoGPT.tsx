import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

import PlusIcon from "../../../assets/icons/add-circle-half-dot.svg";
import MicIcon from "../../../assets/icons/mic-01.svg";
import UploadFile from "./UploadFile";
import InputOptions, { FileSource } from "./InputOptions";
import GradientBorder from "../../common/GradientBorder";

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
      className="relative flex items-center justify-between w-full h-[64px] px-[28px] py-[10px] gap-[10px] rounded-[30px] backdrop-blur-[50px] ml-1 mr-4"
      style={{
        position: "relative",
        background:
          "linear-gradient(90deg, rgba(201, 201, 201, 0.24) 0%, rgba(196, 196, 196, 0.03) 100%)",
      }}
    >
      <GradientBorder />

      {/* Content */}
      <div className="flex flex-1 gap-[10px] items-center h-full">
        <button onClick={() => setShowInputs(!showInputs)}>
          <img src={PlusIcon} alt="Plus Icon" className="w-8 h-8" />
        </button>
        <TextareaAutosize
          placeholder="Ask TingoGPT"
          className="w-full text-[14px] text-[#B8B8B8] bg-transparent border-none outline-none resize-none hide-scrollbar"
          minRows={1}
          maxRows={2}
        />
      </div>
      <button>
        <img src={MicIcon} alt="Mic Icon" className="w-8 h-8" />
      </button>
      {showInputs && (
        <div className="absolute -top-64">
          <InputOptions onSelect={showFileSelect} />
        </div>
      )}
      {showUploadOption && <UploadFile onClose={setShowUploadOption} />}
    </div>
  );
}
