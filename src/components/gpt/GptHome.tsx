import AskTingoGPT from "./components/AskTingoGPT";
import TingoResponse, { Response } from "./components/TingoResponse";
import UserPrompt, { Prompt } from "./components/UserPrompt";

import repliesSample from "./components/replies/repliesSample.json";

const GptHome = () => {
  return (
    <div className="bg-[#121826] text-[#E5E7EB] flex justify-center items-center h-full overflow-y-auto hide-scrollbar">
      <div className="w-full max-w-[640px] relative h-full px-[16px]">
        <div className="flex flex-col gap-24 pt-24 pb-32">
          {repliesSample.map((reply, i) => {
            if (reply.prompt)
              return <UserPrompt key={i} prompt={reply as Prompt} />;
            else return <TingoResponse key={i} response={reply as Response} />;
          })}
        </div>

        <div className="w-full sticky bottom-12 left-0 flex justify-center z-10 m-1">
          <AskTingoGPT />
        </div>
      </div>
    </div>
  );
};

export default GptHome;
