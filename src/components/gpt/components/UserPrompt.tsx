import TextBlock from "./replies/TextBlock";

export default function UserPrompt({ prompt }: { prompt: any }) {
  const Prompt = () => {
    switch (prompt.type) {
      case "text":
        return <TextBlock text={prompt.prompt} />;
    }
  };
  return (
    <div className="flex self-end">
      <Prompt />
    </div>
  );
}
