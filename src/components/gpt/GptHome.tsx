import AskTingoGPT from "./components/AskTingoGPT";
import TingoResponse from "./components/TingoResponse";
import UserPrompt from "./components/UserPrompt";

import repliesSample from "./components/replies/repliesSample.json";

const GptHome = () => {
  return (
    <div className="w-full h-full bg-[#121826] text-tremor-background-muted flex justify-center items-center">
      <div className="w-[640px] relative h-full">
        <div className="flex flex-col gap-24 h-full overflow-y-auto hide-scrollbar pt-24 pb-48">
          {repliesSample.map((reply) => {
            if (reply.prompt) return <UserPrompt prompt={reply} />;
            else return <TingoResponse response={reply} />;
          })}
        </div>

        <div className="w-full sticky bottom-12 left-0 flex justify-center z-10 m-1">
          <AskTingoGPT />
        </div>
        <div
          className="absolute -inset-1 rounded-2xl pointer-events-none"
          style={{
            background:
              "linear-gradient(150deg, rgba(18, 24, 38, 0) 0%, rgba(18, 24, 38, 0.9) 100%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default GptHome;
