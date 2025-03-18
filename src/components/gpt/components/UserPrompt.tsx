import TextBlock from "./replies/TextBlock";

export type Prompt = {
  type: "text" | "etc"; // add expected types
  prompt: string;
  file?: File;
};

export default function UserPrompt({ prompt }: { prompt: Prompt }) {
  const { type, prompt: query, file } = prompt;

  const Prompt = () => {
    switch (type) {
      case "text":
        return (
          <TextBlock
            text={query}
            file={
              file &&
              new File(["dummy content"], "example.txt", { type: "text/plain" }) // replace with file
            }
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
