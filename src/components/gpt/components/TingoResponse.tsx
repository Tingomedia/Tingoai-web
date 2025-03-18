import CodeBlock from "./replies/CodeBlock";
import TextBlock from "./replies/TextBlock";

import copyIcon from "../../../assets/icons/copy-01.svg";
import likeIcon from "../../../assets/icons/thumbs-up.svg";
import volumeIcon from "../../../assets/icons/volume-high.svg";
import editIcon from "../../../assets/icons/pencil-edit-01.svg";

export type Response = {
  type: "text" | "code" | "etc"; // add expected types
  msg: string;
  code?: string;
  name?: string;
  lang?: string;
};

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

export default function TingoResponse({ response }: { response: Response }) {
  const Response = () => {
    switch (response.type) {
      case "text":
        return <TextBlock text={response.msg} bg />;
      case "code":
        return (
          <CodeBlock
            msg={response.msg}
            code={response.code!}
            lang={response.lang!}
            name={response.name!}
          />
        );
    }
  };
  return (
    <div className="flex flex-col gap-[15px]">
      <Response />
      <Actions />
    </div>
  );
}
