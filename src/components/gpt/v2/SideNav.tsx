import { useConversations } from "../../../contexts/TingoGPTContext";

export default function SideNav({ hidden }: { hidden: boolean }) {
  const {
    fetchingConversations,
    conversations,
    currentConversationId,
    setCurrentConversation,
  } = useConversations();

  return (
    <div
      className="w-full max-w-[320px] hidden lg:flex flex-col justify-between py-[32px] bg-[linear-gradient(0deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05)),linear-gradient(0deg,rgba(0,0,0,0.05),rgba(0,0,0,0.05))]"
      style={!hidden ? { display: "flex" } : {}}
    >
      <div className="px-[24px] ">
        <span className="text-[24px] font-[800] text-white/90">
          Conversations
        </span>
        <div
          className="relative w-full bg-gray-950/35 text-white/60 text-[15px] px-[12px] mt-4
                shadow-[inset_0px_-0.73px_0.73px_0px_#FFFFFF59,inset_1.46px_2.92px_2.92px_-0.73px_#00000040] 
                backdrop-blur-[143.12px] h-[32px] rounded-[10px] overflow-hidden"
        >
          <input
            type="text"
            placeholder="Search in History"
            className="w-full h-full p-1 focus:outline-none bg-transparent"
          />
        </div>
      </div>
      <div className="h-1/2 flex flex-col gap-8 overflow-y-auto hide-scrollbar relative">
        {conversations.length > 0 ? (
          conversations.map((history) => (
            <button
              key={history.id}
              onClick={() => setCurrentConversation(history.id)}
              className={`flex flex-col items-start justify-start max-w-[320px] px-8 py-2 ${
                currentConversationId === history.id ? "bg-white/10" : ""
              }`}
            >
              <span className="text-white font-medium truncate w-full overflow-hidden text-ellipsis whitespace-nowrap">
                {history.recent_message}
              </span>
              <p className="text-sm text-gray-400">{`ID: ${history.id}`}</p>
            </button>
          ))
        ) : (
          <p className="text-gray-500 text-center py-2">No recent searches</p>
        )}
        {fetchingConversations && (
          <div className="absolute inset-0 bg-white/15 text-white flex text-center items-center justify-center">
            getting Conversations..
          </div>
        )}
      </div>
      <div className="h-[100px] bg-white/0"></div>
    </div>
  );
}
