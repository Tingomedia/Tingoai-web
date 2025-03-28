import { useState, useRef, useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";

import { useConversations } from "../../../contexts/TingoGPTContext";
import InputOptions, { FileSource } from "../components/InputOptions";
import UploadFile from "../components/UploadFile";

export default function PromptInput() {
  const [userPrompt, setUserPrompt] = useState("");
  const [showInputs, setShowInputs] = useState(false);
  const [showUploadOption, setShowUploadOption] = useState(false);
  const { gettingResponse, sendMessage } = useConversations();
  const textInputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (gettingResponse) {
      textInputRef.current?.blur();
    } else {
      textInputRef.current?.focus();
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

  const handleMessageSubmission = async () => {
    setUserPrompt("");
    await sendMessage(userPrompt);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevents adding a new line
      handleMessageSubmission();
    }
  };
  return (
    <>
      <div
        className={`w-[90%] max-w-[960px] mx-auto mb-4 z-10 relative bg-[#1D1B1C] ${
          gettingResponse ? "pointer-events-none" : ""
        }`}
      >
        <div className="w-full h-auto relative flex items-center justify-center rounded-[80px] p-[16px] xs:p-[24px] lg:gap-[10px] bg-[#292929] shadow-[0px_8px_6px_0px_#0000000D,inset_0px_1px_1px_0px_#FFFFFF40,inset_0px_-1px_1px_0px_#FFFFFF40,inset_2px_3px_3px_-3px_#FFFFFF99]">
          <button
            className="rounded-full relative bg-[#838E99]"
            onClick={() => setShowInputs(!showInputs)}
          >
            <img src="/icons/add_butt.svg" width={44} height={44} />
            {showInputs && (
              <div className="absolute -top-72">
                <InputOptions onSelect={showFileSelect} />
              </div>
            )}
          </button>
          <div className="w-full max-w-[480px] h-[32px] xs:h-[48px] flex items-center my-auto mx-4 text-white text-lg bg-[#3C3C3C] shadow-inner shadow-black/30 rounded-full px-4 relative">
            <TextareaAutosize
              ref={textInputRef}
              disabled={gettingResponse}
              value={userPrompt}
              placeholder=" What do you have in mind?"
              className="w-full h-full px-2 text-[14px] text-[#B8B8B8] bg-transparent border-none outline-none resize-none hide-scrollbar"
              minRows={1}
              maxRows={window.innerWidth < 480 ? 1 : 2}
              onChange={(e) => setUserPrompt(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>

          <button
            className="rounded-full"
            onClick={() => handleMessageSubmission()}
          >
            <img src="/icons/send_butt.svg" width={40} height={40} />
          </button>
        </div>
        <div className="text-[11px] font-light font-Manrope text-center mt-2">
          TingoGPT can make mistakes. Check important info.
        </div>

        {showUploadOption && <UploadFile onClose={setShowUploadOption} />}
      </div>
    </>
  );
}
