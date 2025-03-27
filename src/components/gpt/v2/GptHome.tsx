import { useEffect, useState } from "react";
import Header from "./Header";
import PromptInput from "./PromptInput";
import SideNav from "./SideNav";
import { ConversationProvider } from "../../../contexts/TingoGPTContext";
import Messages from "./Messages";

function GptHome() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const toggleSideNav = () => setIsSideNavOpen(!isSideNavOpen);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 960);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[url('/images/chat_bg.jpg')] bg-cover bg-center w-full h-screen font-sfPro tracking-wider">
      <div className="w-full h-full shadow-[inset_-1px_1px_1px_-2px_#FFFFFF59,0px_24px_30px_0px_#0000000D] backdrop-blur-[196px]">
        <div className="w-full h-full flex bg-white/5 text-white/60">
          {isSideNavOpen && isMobile && (
            <div
              className="fixed inset-0 bg-black/5 lg:hidden z-10"
              onClick={() => setIsSideNavOpen(false)}
            ></div>
          )}

          <SideNav
            isMobile={isMobile}
            isSideNavOpen={isSideNavOpen}
            hideSideNav={setIsSideNavOpen}
          />

          <div className="flex flex-col flex-1 w-full h-full justify-center bg-white/5 relative">
            <Header
              isSideNavOpen={isSideNavOpen}
              toggleSideNav={toggleSideNav}
            />
            <Messages />
            <PromptInput />
          </div>
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
