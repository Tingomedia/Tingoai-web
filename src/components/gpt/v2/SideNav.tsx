import { useConversations } from "../../../contexts/TingoGPTContext";
import BlinkingDot from "../components/BlinkingDot";

export default function SideNav({ hidden }: { hidden: boolean }) {
  const {
    fetchingConversations,
    conversations,
    currentConversationId,
    setCurrentConversation,
  } = useConversations();

  return (
    <div
      className={`w-full max-w-[320px] hidden lg:flex flex-col text-white/60 z-50 
        bg-[linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1)),linear-gradient(0deg,rgba(0,0,0,0.35),rgba(0,0,0,0.35))]
      bg-black
        ${!hidden ? "backdrop-blur-lg" : ""}`}
      style={
        !hidden
          ? { display: "flex", position: "fixed", left: 0, height: "100%" }
          : {}
      }
    >
      <div className="px-[40px] py-[12px] ">
        <span className="text-[32px] text-white">Conversations</span>
        <div
          className="relative w-full bg-gray-950/35 text-white/60 text-[15px] px-[12px] mt-4
                shadow-[inset_0px_-0.73px_0.73px_0px_#FFFFFF59,inset_1.46px_2.92px_2.92px_-0.73px_#00000040] 
                backdrop-blur-[143.12px] h-[32px] overflow-hidden"
        >
          <input
            type="text"
            placeholder="Search in Conversations"
            className="w-full h-full p-1 focus:outline-none bg-transparent"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto hide-scrollbar relative">
        {fetchingConversations && (
          <div className="absolute inset-0 bg-transparent text-white flex items-start justify-start pt-6 pl-10">
            <BlinkingDot />
          </div>
        )}
        {fetchingConversations || conversations.length > 0 ? (
          conversations.map((history) => (
            <button
              key={history.id}
              onClick={() => setCurrentConversation(history.id)}
              className={`flex flex-col w-full items-start justify-start max-w-[320px] mr-auto px-16 py-6 hover:bg-white/10 ${
                currentConversationId === history.id
                  ? "bg-white/10 pointer-events-none"
                  : ""
              }`}
            >
              <span className="text-white/60 truncate w-full overflow-hidden text-ellipsis whitespace-nowrap">
                {history.recent_message}
              </span>
              {/* <p className="text-sm text-gray-400">{`ID: ${history.id}`}</p> */}
            </button>
          ))
        ) : (
          <p className="text-gray-500 text-center py-2 self-center my-auto">
            No recent searches
          </p>
        )}
      </div>
      <div className="flex h-[120px] items-center bg-white/0">
        <button className="px-[32px] py-[8px]">
          Unlock more features with pro
        </button>
      </div>
    </div>
  );
}
