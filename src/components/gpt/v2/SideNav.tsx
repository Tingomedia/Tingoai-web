import { PanelRightOpen } from "lucide-react";
import { useConversations } from "../../../contexts/TingoGPTContext";
import BlinkingDot from "../../common/BlinkingBird";
import UpgradeButton from "../components/UpgradeButton";

interface SideNavProps {
  isMobile: boolean;
  isSideNavOpen: boolean;
  hideSideNav: (value: boolean) => void;
}

const SideNav = ({ isMobile, isSideNavOpen, hideSideNav }: SideNavProps) => {
  const {
    fetchingConversations,
    conversations,
    currentConversationId,
    setCurrentConversation,
  } = useConversations();

  const ConversationList = () => {
    const categories: any = {
      today: "Today",
      yesterday: "Yesterday",
      past7Days: "Past 7 Days",
      past30Days: "Past 30 Days",
      older: "Older",
    };

    return (
      <div className="flex flex-col py-[24px] space-y-[24px]">
        {Object.entries(conversations).map(
          ([key, conversations]) =>
            conversations.length > 0 && (
              <div key={key}>
                <h3 className="text-gray-400 text-sm font-semibold uppercase mb-2 px-10">
                  {categories[key]}
                </h3>
                <div className="flex flex-col">
                  {conversations
                    .slice()
                    .reverse()
                    .map((history) => (
                      <button
                        key={history.id}
                        onClick={() => setCurrentConversation(history.id)}
                        className={`flex flex-col w-full items-start justify-start max-w-[300px] p-10 py-3 hover:bg-white/10 ${
                          currentConversationId === history.id
                            ? "bg-white/10 pointer-events-none"
                            : ""
                        }`}
                      >
                        <span className="text-left truncate w-full overflow-hidden text-ellipsis whitespace-nowrap">
                          {history.title || "Untitled Conversation"}
                        </span>
                      </button>
                    ))}
                </div>
              </div>
            )
        )}
      </div>
    );
  };

  return (
    <div
      className={`w-full max-w-[300px] h-full hidden md:flex flex-col z-50 
        font-OpenSans tracking-normal text-[14px] text-white/90
        bg-black
        ${
          isMobile
            ? `backdrop-blur-lg transition-transform duration-300 z-20 ${
                isSideNavOpen ? "translate-x-0" : "-translate-x-full"
              }`
            : ""
        }`}
      style={
        isMobile
          ? { display: "flex", position: "fixed", left: 0, height: "100%" }
          : {}
      }
    >
      <div className="w-full px-2 py-[12px] text-center">
        {/* <span className="text-[2.5rem] lg:text-[3rem] text-white/60">
          Conversation History
        </span> */}
        <div className="flex justify-between p-1 gap-6 mt-3 mb-12">
          <button
            className="opacity-60 hover:opacity-80 hover:bg-white/15 p-2 rounded-md"
            onClick={() => hideSideNav(false)}
          >
            <PanelRightOpen />
          </button>
          <button
            className="opacity-60 hover:opacity-80 hover:bg-white/15 p-2 rounded-md"
            onClick={() => setCurrentConversation(null)}
          >
            <img src="/icons/comment-alt-plus.svg" />
          </button>
        </div>
        <div
          className="relative w-auto mx-3 bg-gray-700/35 font-light text-[14px] px-[10px] mt-4
                backdrop-blur-[143.12px] h-[32px] overflow-hidden rounded-full"
        >
          <input
            type="text"
            placeholder="Search for History"
            className="w-full h-full p-1 focus:outline-none bg-transparent"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto hide-scrollbar relative font-thin text-[12px] tracking-wider">
        {fetchingConversations && (
          <div className="absolute inset-0 bg-transparent text-white flex items-start justify-start pt-6 pl-10">
            <BlinkingDot label="histories..." />
          </div>
        )}
        {currentConversationId && (
          <button
            key="new"
            onClick={() => setCurrentConversation(null)}
            className={`flex flex-col w-full items-start justify-start max-w-[300px] mr-auto p-4 pb-0 hover:bg-white/10`}
          >
            New Chat
          </button>
        )}
        <ConversationList />
      </div>
      <div className="w-full flex h-[120px] items-center bg-white/0 ">
        <UpgradeButton />
      </div>
    </div>
  );
};

export default function SideNavComp({
  isMobile,
  isSideNavOpen,
  hideSideNav,
}: SideNavProps) {
  if (isMobile) {
    return (
      <>
        {isSideNavOpen && (
          <div
            className="fixed inset-0 bg-black/5 lg:hidden z-10"
            onClick={() => hideSideNav(false)}
          ></div>
        )}
        <SideNav
          isMobile={isMobile}
          isSideNavOpen={isSideNavOpen}
          hideSideNav={hideSideNav}
        />
      </>
    );
  } else {
    return (
      <div
        className={`transition-all duration-300 ${
          isSideNavOpen ? "w-[300px]" : "w-0"
        } overflow-hidden`}
      >
        <SideNav
          isMobile={isMobile}
          isSideNavOpen={isSideNavOpen}
          hideSideNav={hideSideNav}
        />
      </div>
    );
  }
}
