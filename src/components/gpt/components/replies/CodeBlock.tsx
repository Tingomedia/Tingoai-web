import { useCallback, useState } from "react";

import CodeMirror from "@uiw/react-codemirror";
import { EditorView } from "@codemirror/view";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

import { getCodeMirrorLang } from "../utils";
import copyIcon from "../../../../assets/icons/copy-01.svg";
import editIcon from "../../../../assets/icons/edit-01.svg";

const customEditorTheme = EditorView.theme({
  "&": {
    backgroundColor: "#232a3e !important",
    fontFamily: "Cascadia Code, monospace",
    fontWeight: "350",
    fontSize: "14px",
    lineHeight: "145%",
    letterSpacing: "0%",
    padding: "12px",
    overflow: "auto",
  },
  // Gutter (Line Number Area) Background & Styling
  ".cm-gutters": {
    backgroundColor: "#232a3e !important", // Custom background for line numbers
    color: "#A8B2D1", // Line number text color
    border: "none", // Remove border if any
    // padding: "0 10px", // Adjust spacing
  },
  // Actual Line Numbers Styling
  ".cm-lineNumbers": {
    color: "#8892B0", // Softer color for line numbers
    fontSize: "13px",
  },
  ".cm-scroller": {
    scrollbarWidth: "none", // Firefox
    msOverflowStyle: "none", // IE/Edge
  },
  ".cm-scroller::-webkit-scrollbar": {
    display: "none", // Hide scrollbar in Chrome & Safari
  },
});

const CodeBlock = (props: {
  msg: string;
  name: string;
  code: string;
  lang: string;
}) => {
  const [code, setCode] = useState(props.code);
  const [isEditable, setIsEditable] = useState(false);
  const [copied, setCopied] = useState(false);

  const onChange = useCallback((val: any) => {
    setCode(val);
    setCopied(false);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <span>{props.msg}</span>

      <div className="bg-[#232a3e] relative border border-[#B8B8B8] rounded-[20px]">
        <div className="flex justify-between p-[20px] pb-0">
          <span>{props.name}</span>
          <div className="flex gap-[10px] text-[10px] text-[#98A2B3]">
            {!copied && (
              <button
                onClick={async () => {
                  await navigator.clipboard.writeText(code);
                  setCopied(true);
                }}
                className="flex px-[10px] py-[5px] gap-[5px] border border-[#98A2B3]/80 rounded-[30px]"
              >
                <img src={copyIcon} width={14} height={14} />
                Copy
              </button>
            )}

            <button
              onClick={() => setIsEditable(!isEditable)}
              className={`flex px-[10px] py-[5px] gap-[5px] border rounded-[30px] ${
                !isEditable ? "border-[#98A2B3]/80" : "border-[#F8872B]/80"
              }`}
            >
              <img src={editIcon} width={14} height={14} />
              Edit
            </button>
          </div>
        </div>
        <CodeMirror
          value={code}
          extensions={[getCodeMirrorLang(props.lang)]}
          onChange={onChange}
          theme={[vscodeDark, customEditorTheme]}
          editable={isEditable}
        />
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

export default CodeBlock;
