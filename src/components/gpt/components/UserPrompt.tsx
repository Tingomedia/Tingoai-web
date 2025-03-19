import { Message } from "../../../contexts/TingoGPTContext";
import TextBlock from "./replies/TextBlock";

// export type Prompt = {
//   type: "text" | "etc"; // add expected types
//   prompt: string;
//   file?: File;
// };

export default function UserPrompt({ prompt }: { prompt: Message }) {
  const Prompt = () => {
    switch (prompt.content_type) {
      default:
        return (
          <TextBlock
            text={prompt.content}
            file={
              prompt.file &&
              new File(["dummy content"], "example.txt", { type: "text/plain" }) // replace with file
            }
            bg
          />
        );
    }
  };
  return (
    <div className="flex self-end">
      <Prompt />
    </div>
  );
}
