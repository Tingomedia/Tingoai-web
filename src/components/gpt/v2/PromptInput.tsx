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
        className={`w-[97%] max-w-[960px] h-[120px] mx-auto mb-4 z-10 shadow-xl relative ${
          gettingResponse ? "pointer-events-none" : ""
        }`}
      >
        <div className="w-full h-full relative flex items-center justify-center rounded-[80px] p-[10px] lg:gap-[10px] bg-white/5 backdrop-contrast-100 backdrop-filter backdrop-blur-lg shadow-[0px_8px_6px_0px_#0000000D,inset_0px_1px_1px_0px_#FFFFFF40,inset_0px_-1px_1px_0px_#FFFFFF40,inset_2px_3px_3px_-3px_#FFFFFF99]">
          <button
            className="rounded-full relative"
            onClick={() => setShowInputs(!showInputs)}
          >
            <img src="/icons/add_butt.svg" width={44} height={44} />
            {showInputs && (
              <div className="absolute -top-72">
                <InputOptions onSelect={showFileSelect} />
              </div>
            )}
          </button>
          <div className="w-[480px] h-full max-h-[48px] flex items-center my-auto mx-4 text-white text-lg bg-gray-950/35 backdrop-filter backdrop-blur-lg filter blur-[0px] shadow-inner shadow-black/30 rounded-full px-4 relative">
            <TextareaAutosize
              ref={textInputRef}
              disabled={gettingResponse}
              value={userPrompt}
              placeholder="What do you have in mind?"
              className="w-full h-full px-2 text-[14px] text-[#B8B8B8] bg-transparent border-none outline-none resize-none hide-scrollbar"
              minRows={1}
              maxRows={2}
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
        {/* {gettingResponse && (
          <div className="absolute bottom-50% left-50% bg-white/85 text-gray-500 rounded-full py-4 px-16 pointer-events-none">
            gettingResponse..
          </div>
        )} */}

        {showUploadOption && <UploadFile onClose={setShowUploadOption} />}
      </div>
    </>
  );
}
