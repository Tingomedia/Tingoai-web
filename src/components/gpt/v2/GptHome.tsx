import { useEffect, useState } from "react";
import Header from "./Header";
import PromptInput from "./PromptInput";
import SideNav from "./SideNav";
import {
  ConversationProvider,
  useConversations,
} from "../../../contexts/TingoGPTContext";
import Messages from "./Messages";
import { useFirebaseAuth } from "../../../contexts/FirebaseAuthContext";

function GptHome() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const toggleSideNav = () => setIsSideNavOpen(!isSideNavOpen);
  const { gettingResponse, currentConversationId } = useConversations();
  const { firebaseUser } = useFirebaseAuth();
  // const windowHeight = useWindowHeight();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 960);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`flex bg-[#1D1B1C] bg-cover bg-center w-full h-dvh font-cera tracking-wider`}
      // style={{ height: `${windowHeight}px` }}
    >
      <SideNav
        isMobile={isMobile}
        isSideNavOpen={isSideNavOpen}
        hideSideNav={setIsSideNavOpen}
      />
      <div className="w-full h-full flex flex-col bg-[#1D1B1C] text-white/60 relative shadow-[inset_-1px_1px_1px_-2px_#FFFFFF59,0px_24px_30px_0px_#0000000D] backdrop-blur-[196px]">
        <Header isSideNavOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
        {currentConversationId === null && !gettingResponse && (
          <div className="w-full h-full bg-[#1D1B1C] text-white/60 flex text-center items-center justify-center">
            <div
              className="self-center text-center bg-[linear-gradient(90.86deg,#F8872B_0.74%,#0037FC_105.83%)] 
                          bg-clip-text text-transparent font-cera font-light text-[32px] leading-[145%] tracking-[0%] px-8"
            >
              <span className="text-white">Hello, </span>
              <span className="text-orange-400">
                {firebaseUser?.displayName || "Guest"}
              </span>
            </div>
          </div>
        )}
        {(currentConversationId || gettingResponse) && <Messages />}
        <PromptInput />
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
