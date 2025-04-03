import { useRef, useEffect, useState } from "react";
import { useConversations } from "../../../contexts/TingoGPTContext";
import TingoResponse from "../components/TingoResponse";
import UserPrompt from "../components/UserPrompt";
import BlinkingDot from "../../common/BlinkingBird";
import { useFirebaseAuth } from "../../../contexts/FirebaseAuthContext";

export default function Messages() {
  const { fetchingMessages, messages, gettingResponse, animateResponse } =
    useConversations();
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const lastUserMsgRef = useRef<HTMLDivElement>(null);
  const lastAssistantMsgRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const { firebaseUser } = useFirebaseAuth();

  // Scroll when messages change
  useEffect(() => {
    const container = chatContainerRef.current;
    if (!container) return;
    if (container.scrollHeight < container.clientHeight) {
      requestAnimationFrame(() => {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: "instant",
        });
      });
      return;
    }

    const scrollToBottom = () => {
      requestAnimationFrame(() => {
        // First, try smooth scrolling
        container.scrollTo({
          top: container.scrollHeight,
          behavior: "smooth",
        });

        // After an estimated time (e.g., 500ms), force the instant scroll
        setTimeout(() => {
          // container.scrollIntoView()
          container.scrollTo({
            top: container.scrollHeight,
            behavior: "instant",
          });
        }, 300); // Adjust timeout based on your scroll duration
      });
    };

    // Delay to allow Markdown & CodeMirror to render
    setTimeout(scrollToBottom, 0); // Increase delay if needed
  }, [messages]);

  useEffect(() => {
    if (!animateResponse || !lastAssistantMsgRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      if (bottomRef.current)
        bottomRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    });
    resizeObserver.observe(lastAssistantMsgRef.current);
    return () => resizeObserver.disconnect(); // clean up
  }, [lastAssistantMsgRef.current, animateResponse]);

  // Prevent scrolling beyond the lastUserMsgRef
  const handleScroll = () => {
    if (!chatContainerRef.current || !lastUserMsgRef.current) return;
    const container = chatContainerRef.current;
    if (!container) return;
    const userMsgHeight = lastUserMsgRef.current?.clientHeight || 0;
    const assistantMsgHeight = lastAssistantMsgRef.current?.clientHeight || 0;
    const totalMsgHeight = userMsgHeight + assistantMsgHeight;

    const lastMsgEl =
      lastAssistantMsgRef.current && lastUserMsgRef.current
        ? totalMsgHeight <= container.clientHeight
          ? lastUserMsgRef.current
          : lastAssistantMsgRef.current
        : lastAssistantMsgRef.current || lastUserMsgRef.current;

    // Get positions
    const containerTop = container.getBoundingClientRect().top;
    const lastUserTop =
      totalMsgHeight <= container.clientHeight
        ? lastMsgEl.getBoundingClientRect().top
        : lastMsgEl.getBoundingClientRect().bottom;

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
    // const container = chatContainerRef.current;
    if (false) handleScroll();
    // if (container) {
    //   container.addEventListener("scroll", handleScroll);
    // }
    // return () => {
    //   if (container) {
    //     container.removeEventListener("scroll", handleScroll);
    //   }
    // };
  }, [messages]);

  return (
    <div
      ref={chatContainerRef}
      className="w-full h-full px-[16px] flex justify-center overflow-y-auto hide-scrollbar relative"
    >
      {/* <div
        className="absolute inset-0 bg-[url('/icons/Bird-outline.svg')] 
               bg-left bg-contain bg-no-repeat opacity-10 scale-x-[-1]"
      ></div> */}
      <div className="flex flex-col w-full max-w-[640px] min-h-full gap-8 py-16">
        {loading && (
          <div className="self-center pb-16">
            <BlinkingDot label="Conversations..." />
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
                animate={i == messages.length - 1}
              />
            );
        })}
        {gettingResponse && <BlinkingDot />}
        <div ref={bottomRef} className={`min-h-[160px]`}></div>
      </div>
      {!firebaseUser ||
        (fetchingMessages && (
          <div className="absolute inset-0 bg-transparent text-white/60 flex text-center items-center justify-center mb-[196px]">
            <BlinkingDot label="Conversations..." />
          </div>
        ))}
    </div>
  );
}
