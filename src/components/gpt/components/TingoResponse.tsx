// import CodeBlock from "./replies/CodeBlock";
import TextBlock from "./replies/TextBlock";

import copyIcon from "../../../assets/icons/copy-01.svg";
import likeIcon from "../../../assets/icons/thumbs-up.svg";
import volumeIcon from "../../../assets/icons/volume-high.svg";
import editIcon from "../../../assets/icons/pencil-edit-01.svg";
import { Message } from "../../../contexts/TingoGPTContext";
import CodeBlock from "./replies/CodeBlock";

// export type Response = {
//   type: "text" | "code" | "etc"; // add expected types
//   msg: string;
//   code?: string;
//   name?: string;
//   lang?: string;
// };

const Actions = ({ content }: { content: string }) => {
  return (
    <div className="flex gap-[20px] z-10">
      <button
        onClick={async () => {
          await navigator.clipboard.writeText(content);
        }}
      >
        <img src={copyIcon} width={18} height={18} />
      </button>
      <button>
        <img src={likeIcon} width={18} height={18} />
      </button>
      <button>
        <img src={volumeIcon} width={18} height={18} />
      </button>
      <button>
        <img src={editIcon} width={18} height={18} />
      </button>
    </div>
  );
};

function extractCodeAndLanguage(response: any) {
  if (response.content_type !== "image") {
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)\n```/;
    const match: string = response.content.match(codeBlockRegex);

    if (match) {
      const language = match[1].toLowerCase() || "unknown";
      const code = match[2];
      return {
        language,
        code,
        descriptions: response.content
          .split(/```[\s\S]*?```/)
          .map((part: string) => part.trim()),
      };
    }
  }
  return { language: null, code: null };
}

export default function TingoResponse({ response }: { response: Message }) {
  if (!response.content) return null;
  const { language, code, descriptions } = extractCodeAndLanguage(response);

  const Response = () => {
    if (response.content_type === "image") {
      return (
        <img
          // @ts-ignore
          src={response.content.image_url}
          className="w-[320px] h-auto"
        />
      );
    }

    if (language) {
      return (
        <CodeBlock msg={descriptions} code={code} lang={language} name={""} />
      );
    }

    return <TextBlock text={response.content} bg />;
  };
  return (
    <div className="flex flex-col gap-[15px]">
      <Response />
      <Actions
        content={
          descriptions?.length
            ? descriptions[descriptions.length - 1]
            : response.content
        }
      />
    </div>
  );
}
