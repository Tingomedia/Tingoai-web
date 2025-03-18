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

const Actions = () => {
  return (
    <div className="flex gap-[20px] z-10">
      <button>
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

function extractCodeAndLanguage(content: any) {
  const codeBlockRegex = /```(\w+)?\n([\s\S]*?)\n```/;
  const match = content.match(codeBlockRegex);

  if (match) {
    const language = match[1] || "unknown";
    const code = match[2];
    return {
      language,
      code,
      description: content.replace(/```[\s\S]*?```/, "").trim(),
    };
  }

  return { language: null, code: null };
}

export default function TingoResponse({ response }: { response: Message }) {
  if (!response.content) return null;

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
    const { language, code, description } = extractCodeAndLanguage(
      response.content
    );
    if (language) {
      return (
        <CodeBlock msg={description} code={code} lang={language} name={""} />
      );
    }

    return <TextBlock text={response.content} bg />;
  };
  return (
    <div className="flex flex-col gap-[15px]">
      <Response />
      <Actions />
    </div>
  );
}
