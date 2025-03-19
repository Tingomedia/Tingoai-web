import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import PromptInput from "./PromptInput";
import SideNav from "./SideNav";
import {
  ConversationProvider,
  useConversations,
} from "../../../contexts/TingoGPTContext";
import UserPrompt from "../components/UserPrompt";
import TingoResponse from "../components/TingoResponse";

function GptHome() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(true);
  const toggleSideNav = () => setIsSideNavOpen(!isSideNavOpen);
  const { fetchingMessages, messages } = useConversations();
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // console.log("messages: \n", messages);
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="bg-[url('/images/chat_bg.jpg')] bg-cover bg-center w-full h-screen">
      <div className="w-full h-full shadow-[inset_-1px_1px_1px_-2px_#FFFFFF59,0px_24px_30px_0px_#0000000D] backdrop-blur-[196px]">
        <div className="w-full h-full flex bg-white/5">
          {isSideNavOpen && (
            <div
              className="fixed inset-0 z-10 bg-black/15 lg:hidden"
              onClick={() => setIsSideNavOpen(false)}
            ></div>
          )}

          <SideNav hidden={!isSideNavOpen} />

          <div className="flex flex-col flex-1 h-full justify-center overflow-y-auto hide-scrollbar bg-white/5 relative">
            <Header toggleSideNav={toggleSideNav} />
            {/* <div className="flex flex-col w-full h-full max-w-[640px] gap-24 pt-24 pb-96"> */}
            {messages.map((reply, i) => {
              if (reply.role === "user")
                return <UserPrompt key={i} prompt={reply} />;
              else return <TingoResponse key={i} response={reply} />;
            })}
            <div ref={bottomRef} />
            {/* </div> */}
            {fetchingMessages && (
              <div className="absolute inset-0 bg-white/15 text-white flex text-center items-center justify-center">
                getting Messages..
              </div>
            )}
          </div>

          <PromptInput />
        </div>
      </div>
    </div>
  );
}

export default function TingoGPT() {
  return (
    <ConversationProvider>
      <GptHome />
    </ConversationProvider>
  );
}
