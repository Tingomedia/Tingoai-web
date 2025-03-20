import { useRef, useEffect, useState } from "react";
import { useConversations } from "../../../contexts/TingoGPTContext";
import TingoResponse from "../components/TingoResponse";
import UserPrompt from "../components/UserPrompt";
import BlinkingDot from "../components/BlinkingDot";
import useFirebaseAuth from "../../../hooks/useFirebaseAuth";

export default function Messages() {
  const { fetchingMessages, messages, gettingResponse } = useConversations();
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const lastUserMsgRef = useRef<HTMLDivElement | null>(null);
  const lastAssistantMsgRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(false);
  const { firebaseUser } = useFirebaseAuth();

  // Scroll when messages change
  useEffect(() => {
    // console.log("lastUserMsgRef: \n", lastUserMsgRef);
    if (lastUserMsgRef.current) {
      lastUserMsgRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [messages]);

  // Prevent scrolling beyond the lastUserMsgRef
  const handleScroll = () => {
    if (!chatContainerRef.current || !lastUserMsgRef.current) return;
    // if (lastAssistantMsgRef.current) return;

    const container = chatContainerRef.current;
    const lastUserEl = lastUserMsgRef.current;

    // Get positions
    const containerTop = container.getBoundingClientRect().top;
    const lastUserTop = lastUserEl.getBoundingClientRect().top;

    // Prevent scrolling beyond the last user message by keeping it at the top
    if (lastUserTop < containerTop) {
      container.scrollTop += lastUserTop - containerTop;
    }

    // Detect if user is at the top
    if (container.scrollTop === 0 && !loading) {
      setLoading(true);
      // await fetchOlderMessages();
      console.log("TODO: fetch Older Messages");
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  useEffect(() => {
    // if (
    //   messages[messages.length - 1] &&
    //   messages[messages.length - 1]?.role == "user"
    // )
    //   lastAssistantMsgRef.current = null;

    const container = chatContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [messages]);

  return (
    <div
      ref={chatContainerRef}
      className="w-full h-full px-[16px] flex justify-center overflow-y-auto hide-scrollbar pt-24 relative"
    >
      <div className="flex flex-col w-full max-w-[640px] min-h-full gap-8">
        {firebaseUser && messages.length === 0 && !fetchingMessages && (
          <div className="absolute inset-0 bg-transparent text-white/60 flex text-center items-center justify-center">
            <div
              className="self-center text-center bg-[linear-gradient(90.86deg,#F8872B_0.74%,#0037FC_105.83%)] 
  bg-clip-text text-transparent 
  font-sfPro font-medium text-[32px] leading-[145%] tracking-[0%]"
            >
              Hello, {firebaseUser?.displayName}
            </div>
          </div>
        )}
        {loading && (
          <div className="self-center pb-16">
            <BlinkingDot />
          </div>
        )}

        {messages.map((reply, i) => {
          if (reply.role === "user")
            return (
              <UserPrompt
                key={i}
                prompt={reply}
                ref={i >= messages.length - 2 ? lastUserMsgRef : null}
              />
            );
          else
            return (
              <TingoResponse
                key={i}
                response={reply}
                ref={i == messages.length - 1 ? lastAssistantMsgRef : null}
              />
            );
        })}
        {gettingResponse && <BlinkingDot />}
        <div ref={bottomRef} className="min-h-screen" />
      </div>
      {!firebaseUser ||
        (fetchingMessages && (
          <div className="absolute inset-0 bg-transparent text-white/60 flex text-center items-center justify-center">
            <BlinkingDot />
          </div>
        ))}
    </div>
  );
}
