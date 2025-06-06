import { useState, useRef, useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";

import { useConversations } from "../../../contexts/TingoGPTContext";
// import InputOptions, { FileSource } from "../components/InputOptions";
import UploadFile from "../components/UploadFile";
import useWindowWidth from "../../../hooks/useWindowWidth";
import UpgradeButton from "../components/UpgradeButton";

export default function PromptInput({
  isMobile,
  isSideNavOpen,
}: {
  isMobile: boolean;
  isSideNavOpen: boolean;
}) {
  const [userPrompt, setUserPrompt] = useState("");
  const [showInputs, setShowInputs] = useState(false);
  const [showUploadOption, setShowUploadOption] = useState(false);
  const { gettingResponse, sendMessage } = useConversations();
  const textInputRef = useRef<HTMLTextAreaElement | null>(null);
  const { width } = useWindowWidth();

  useEffect(() => {
    if (gettingResponse) {
      textInputRef.current?.blur();
    } else {
      if (width > 480) textInputRef.current?.focus();
    }
  }, [gettingResponse]);

  // const showFileSelect = (type: FileSource) => {
  //   setShowInputs(false);
  //   switch (type) {
  //     case "Image":
  //       setShowUploadOption(true);
  //       break;
  //     case "File":
  //       setShowUploadOption(true);
  //       break;
  //     case "Drive":
  //       setShowUploadOption(true);
  //       break;
  //   }
  // };

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
        className={`fixed bottom-0 transition-all duration-300 ease-in-out ${
          isMobile
            ? "w-full"
            : isSideNavOpen
            ? "left-[300px] w-[calc(100%-300px)]"
            : "left-0 w-full"
        } z-10 bg-[#1D1B1C] text-white/60 ${
          gettingResponse ? "pointer-events-none" : ""
        }`}
      >
        <div className="w-[90%] max-w-[960px] mx-auto ">
          <div className="w-full h-auto relative flex items-center justify-center rounded-[80px] p-[16px] xs:p-[24px] lg:gap-[10px] bg-[#292929] shadow-[0px_8px_6px_0px_#0000000D,inset_0px_1px_1px_0px_#FFFFFF40,inset_0px_-1px_1px_0px_#FFFFFF40,inset_2px_3px_3px_-3px_#FFFFFF99]">
            <button
              className="rounded-full relative bg-[#838E99]"
              onClick={() => setShowInputs(!showInputs)}
            >
              <img src="/icons/add_butt.svg" width={44} height={44} />
              {showInputs && (
                <>
                  {/* <div className="absolute -top-72 z-20">
                  <InputOptions onSelect={showFileSelect} />
                </div> */}
                  <div className="absolute -top-[240%] z-20">
                    <UpgradeButton bg />
                  </div>
                </>
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
          <div className="text-[11px] font-light font-Manrope text-center my-2">
            I am a responsible AI.
          </div>
          {showInputs && (
            <div
              className="fixed inset-0"
              onClick={() => setShowInputs(false)}
            ></div>
          )}
          {showUploadOption && <UploadFile onClose={setShowUploadOption} />}
        </div>
      </div>
    </>
  );
}
