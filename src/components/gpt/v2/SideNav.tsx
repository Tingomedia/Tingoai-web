import { ListPlus, PanelRightOpen } from "lucide-react";
import { useConversations } from "../../../contexts/TingoGPTContext";
import { useFirebaseAuth } from "../../../contexts/FirebaseAuthContext";
import BlinkingDot from "../../common/BlinkingBird";

export default function SideNav({
  isMobile,
  isSideNavOpen,
  hideSideNav,
}: {
  isMobile: boolean;
  isSideNavOpen: boolean;
  hideSideNav: (value: boolean) => void;
}) {
  const {
    fetchingConversations,
    conversations,
    currentConversationId,
    setCurrentConversation,
  } = useConversations();
  const { firebaseUser } = useFirebaseAuth();

  return (
    <div
      className={`w-full max-w-[240px] hidden md:flex flex-col text-white/60 z-50 
        bg-[linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1)),linear-gradient(0deg,rgba(0,0,0,0.35),rgba(0,0,0,0.35))]
      bg-black transition-all duration-300 ${
        isSideNavOpen ? "translate-x-0 w-[240px]" : "-translate-x-full w-0"
      } overflow-hidden
        ${isMobile ? "backdrop-blur-lg" : ""}`}
      style={
        isMobile
          ? { display: "flex", position: "fixed", left: 0, height: "100%" }
          : {}
      }
    >
      <div className="w-full px-[16px] py-[12px] text-center">
        {/* <span className="text-[2.5rem] lg:text-[3rem] text-white/60">
          Conversation History
        </span> */}
        <div className="flex p-2 gap-6 mt-3 mb-12">
          {/* <button onClick={() => setCurrentConversation(null)}>
            <ListPlus />
          </button> */}
          <button onClick={() => hideSideNav(false)}>
            <PanelRightOpen />
          </button>
        </div>
        <div
          className="relative w-full bg-gray-950/35 text-white/60 text-[15px] px-[12px] mt-4
                shadow-[inset_0px_-0.73px_0.73px_0px_#FFFFFF59,inset_1.46px_2.92px_2.92px_-0.73px_#00000040] 
                backdrop-blur-[143.12px] h-[32px] overflow-hidden rounded-full"
        >
          <input
            type="text"
            placeholder="Search for Conversations"
            className="w-full h-full p-1 focus:outline-none rounded-full bg-transparent"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto hide-scrollbar relative">
        {fetchingConversations && (
          <div className="absolute inset-0 bg-transparent text-white flex items-start justify-start pt-6 pl-10">
            <BlinkingDot label="histories..." />
          </div>
        )}
        {currentConversationId && (
          <button
            key="new"
            onClick={() => setCurrentConversation(null)}
            className={`flex flex-col w-full items-start justify-start max-w-[240px] mr-auto p-6 py-0 hover:bg-white/10`}
          >
            New Chat
          </button>
        )}
        {fetchingConversations || conversations.length > 0
          ? conversations
              .slice()
              .reverse()
              .map(
                (
                  history // Reversing the array
                ) => (
                  <button
                    key={history.id}
                    onClick={() => setCurrentConversation(history.id)}
                    className={`flex flex-col w-full items-start justify-start max-w-[240px] mr-auto p-6 py-2 hover:bg-white/10 ${
                      currentConversationId === history.id
                        ? "bg-white/10 pointer-events-none"
                        : ""
                    }`}
                  >
                    <span className="text-white/60 text-left truncate w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      {history.recent_message}
                    </span>
                  </button>
                )
              )
          : firebaseUser && (
              <p className="text-gray-500 text-center py-2 self-center my-auto">
                No Conversation{" "}
                <span className="text-primary-200/60">History...</span>
              </p>
            )}
      </div>
    </div>
  );
}
