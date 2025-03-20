import { useEffect, useRef } from "react";
import { useConversations } from "../../contexts/TingoGPTContext";
import AskTingoGPT from "./components/AskTingoGPT";
import TingoResponse from "./components/TingoResponse";
import UserPrompt from "./components/UserPrompt";

const GptHome = () => {
  const { fetchingMessages, messages } = useConversations();
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // console.log("messages: \n", messages);
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="bg-[#121826] text-[#E5E7EB] flex flex-col justify-center items-center relative w-full h-full">
      <div className="w-full h-full px-[16px] flex justify-center overflow-y-auto hide-scrollbar">
        <div className="flex flex-col w-full max-w-[640px] gap-24 pt-24 pb-96">
          {messages.map((reply, i) => {
            if (reply.role === "user")
              return <UserPrompt key={i} prompt={reply} />;
            else return <TingoResponse key={i} response={reply} />;
          })}
          <div ref={bottomRef} />
          <br />
        </div>
        {fetchingMessages && (
          <div className="absolute inset-0 bg-white/15 text-white flex text-center items-center justify-center">
            getting Messages..
          </div>
        )}
      </div>
      <div className="w-full sticky bottom-12 left-0 flex justify-center z-10">
        <AskTingoGPT />
      </div>
    </div>
  );
};

export default GptHome;
