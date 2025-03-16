import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({
  msg,
  name,
  code,
}: {
  msg: string;
  name: string;
  code: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <span>{msg}</span>

      <div className="bg-[#232a3e] relative border border-[#B8B8B8] rounded-2xl hide">
        <div className="flex justify-between p-6 pb-0">
          <span>{name}</span>
          <div className="flex gap-2">
            <button>Copy</button>
            <button>Edit</button>
          </div>
        </div>
        <SyntaxHighlighter
          language="html"
          showLineNumbers
          style={vscDarkPlus}
          customStyle={{
            background: "#232a3e",
            fontFamily: "Cascadia Code, monospace",
            fontWeight: 350,
            fontSize: "14px",
            lineHeight: "145%",
            letterSpacing: "0%",
            padding: "12px",
            overflow: "auto",
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE/Edge
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
