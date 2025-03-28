import { forwardRef } from "react";
import { Message } from "../../../contexts/TingoGPTContext";
import TextBlock from "./replies/TextBlock";

// export type Prompt = {
//   type: "text" | "etc"; // add expected types
//   prompt: string;
//   file?: File;
// };

const UserPrompt = forwardRef<HTMLDivElement, { prompt: Message }>(
  ({ prompt }, ref) => {
    const Prompt = () => {
      switch (prompt.content_type) {
        default:
          return (
            <TextBlock
              text={prompt.content}
              file={
                prompt.file &&
                new File(["dummy content"], "example.txt", {
                  type: "text/plain",
                }) // replace with file
              }
              bg
            />
          );
      }
    };
    return (
      <div className="flex self-end max-w-[70%] pt-16" ref={ref}>
        <Prompt />
      </div>
    );
  }
);

export default UserPrompt;
