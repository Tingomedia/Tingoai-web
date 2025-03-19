import ReactMarkdown from "react-markdown";
import closeIcon from "../../../../assets/icons/multiply.svg";
import pdfIcon from "../../../../assets/icons/pdf-file-type.svg";

const TextBlock = ({
  text,
  file,
  bg,
}: {
  text: string;
  file?: File;
  bg?: boolean;
}) => {
  const paragraphs = text.split("\n").filter((p) => p.trim() !== "");
  const File = ({ file }: { file: File }) => {
    const formatFileSize = (bytes: number) => {
      if (bytes < 1024 * 1024) {
        return `${(bytes / 1024).toFixed(2)}KB`;
      } else {
        return `${(bytes / (1024 * 1024)).toFixed(2)}MB`;
      }
    };

    return (
      <div className="flex w-full p-[10px] gap-[40px] items-center justify-end">
        <div className="flex items-center gap-[16px]">
          <img src={pdfIcon} width={48} height={48} />
          <div className="flex flex-col">
            <span>{file.name}</span>
            <div className="flex items-center gap-[6px] text-[#98A2B3] text-[14px]">
              <span>{file.name.split(".").pop()?.toUpperCase()}</span>
              <span className="bg-[#98A2B3] w-[4px] h-[4px] rounded-full"></span>
              <span>{formatFileSize(file.size)}</span>
            </div>
          </div>
        </div>
        <button>
          <img src={closeIcon} width={28} height={28} />
        </button>
      </div>
    );
  };

  return (
    <div
      className={
        bg
          ? "bg-[#232a3e] p-[15px] rounded-tr-[20px] rounded-bl-[20px]"
          : "flex flex-col gap-[16px]"
      }
    >
      <div className="flex flex-col gap-4 text-[14px]">
        {paragraphs.map((para, index) => (
          <ReactMarkdown
            key={index}
            components={{
              p: ({ node, ...props }) => (
                <p className="prose prose-invert" {...props} />
              ),
            }}
          >
            {para}
          </ReactMarkdown>
        ))}
      </div>

      {file && <File file={file} />}
    </div>
  );
};

export default TextBlock;
