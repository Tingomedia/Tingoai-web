import { useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

import InputOptions, { FileSource } from "./InputOptions";
import UploadFile from "./UploadFile";

import PlusIcon from "../../../assets/icons/add-circle-half-dot.svg";
import MicIcon from "../../../assets/icons/mic-01.svg";
import sendIcon from "../../../assets/icons/search-outline.svg";

import GradientBorder from "../../common/GradientBorder";
import { useConversations } from "../../../contexts/TingoGPTContext";

export default function AskTingoGPT() {
  const [userPrompt, setUserPrompt] = useState("");
  const [showInputs, setShowInputs] = useState(false);
  const [showUploadOption, setShowUploadOption] = useState(false);
  const { gettingResponse, sendMessage } = useConversations();
  const textInputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (gettingResponse) {
      textInputRef.current?.blur();
    } else {
    }
  }, [gettingResponse]);

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

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevents adding a new line
      sendMessage(userPrompt);
    }
  };

  return (
    <div
      className="max-w-[640px] relative flex items-center justify-between w-full h-[64px] px-[28px] py-[10px] gap-[10px] rounded-[30px] backdrop-blur-[50px] mx-8 md:mx-2"
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
          <img src={PlusIcon} alt="Plus Icon" className="w-[24px] h-[24px]" />
        </button>
        <TextareaAutosize
          ref={textInputRef}
          disabled={gettingResponse}
          value={userPrompt}
          placeholder="Ask TingoGPT"
          className="w-full text-[14px] text-[#B8B8B8] bg-transparent border-none outline-none resize-none hide-scrollbar"
          minRows={1}
          maxRows={2}
          onChange={(e) => setUserPrompt(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
      <div className="flex items-center">
        {userPrompt && (
          <button onClick={() => sendMessage(userPrompt)}>
            <img src={sendIcon} alt="submit" className="w-[24px] h-[24px]" />
          </button>
        )}
        {!userPrompt && (
          <button>
            <img src={MicIcon} alt="Mic Icon" className="w-[24px] h-[24px]" />
          </button>
        )}
      </div>

      {showInputs && (
        <div className="absolute -top-64">
          <InputOptions onSelect={showFileSelect} />
        </div>
      )}
      {showUploadOption && <UploadFile onClose={setShowUploadOption} />}
    </div>
  );
}
