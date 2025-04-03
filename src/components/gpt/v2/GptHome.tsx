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
import BlinkingBird from "../../common/BlinkingBird";

function GptHome() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const toggleSideNav = () => setIsSideNavOpen(!isSideNavOpen);
  const { currentConversationId, gettingResponse } = useConversations();
  const { firebaseUser } = useFirebaseAuth();
  // const windowHeight = useWindowHeight();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header
        isMobile={isMobile}
        isSideNavOpen={isSideNavOpen}
        toggleSideNav={toggleSideNav}
      />
      <SideNav
        isMobile={isMobile}
        isSideNavOpen={isSideNavOpen}
        hideSideNav={setIsSideNavOpen}
      />
      <div
        className={`transition-all duration-300 ease-in-out ${
          isMobile
            ? "w-full"
            : isSideNavOpen
            ? "ml-[300px] w-[calc(100%-300px)]"
            : "ml-0 w-full"
        } h-dvh mt-[72px]`}
      >
        <div
          className={`flex bg-[#1D1B1C] text-white/60 bg-cover bg-center w-full h-full font-cera tracking-wider`}
        >
          {currentConversationId || gettingResponse ? (
            <Messages />
          ) : (
            <div className="w-full h-full bg-[#1D1B1C] text-white/60 flex text-center items-center justify-center pb-[164px] xs:pb-[192px]">
              {!firebaseUser ? (
                <BlinkingBird />
              ) : (
                <div
                  className="bg-[linear-gradient(90.86deg,#F8872B_0.74%,#0037FC_105.83%)] 
                          bg-clip-text text-transparent font-cera font-light text-[32px] leading-[145%] tracking-[0%] px-8"
                >
                  <span className="text-white">Hello, </span>
                  <span className="text-orange-400">
                    {firebaseUser?.displayName || "Guest"}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <PromptInput isMobile={isMobile} isSideNavOpen={isSideNavOpen} />
    </>
  );
}

export default function TingoGPT() {
  return (
    <ConversationProvider>
      <GptHome />
    </ConversationProvider>
  );
}
