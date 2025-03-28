import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import closeIcon from "../../../../assets/icons/multiply.svg";
import pdfIcon from "../../../../assets/icons/pdf-file-type.svg";
import "./styles.css";

const TextBlock = ({
  text,
  file,
  bg,
  animate = false, // New prop to control animation
}: {
  text: string;
  file?: File;
  bg?: boolean;
  animate?: boolean;
}) => {
  const [displayedText, setDisplayedText] = useState(animate ? "" : text);
  const textRef = useRef<HTMLDivElement | null>(null);
  // const [birdPosition, setBirdPosition] = useState({ left: 0, top: 0 });
  const speed = 16; // Typing speed in ms per character
  const lastCharRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!animate) {
      setDisplayedText(text); // If no animation, show full text
      return;
    }

    setDisplayedText(""); // Reset text before animation

    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        if (prev.length < text.length) {
          return prev + text[prev.length]; // Use prev.length instead of i
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, speed);

    return () => clearInterval(interval);
  }, [text, animate]);

  useEffect(() => {
    if (lastCharRef.current) {
      // const rect = lastCharRef.current.getBoundingClientRect();
      // setBirdPosition({ left: rect.left, top: rect.top });
    }
  }, [displayedText]);

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
        bg ? "bg-white/5 p-[8px] px-[16px] rounded" : "flex flex-col gap-[16px]"
      }
    >
      <div
        ref={textRef}
        className={`flex flex-col text-[14px] ${bg ? "" : "tingoResponse"}`}
      >
        <ReactMarkdown>{text}</ReactMarkdown>
        {/* {animate && (
            <span
              className={`flex gap-1 animate-blink-fast delay-800 items-center`}
            >
              <img src="/icons/Bird.svg" width={40} height={40} />
            </span>
          )} */}
      </div>

      {file && <File file={file} />}
    </div>
  );
};

export default TextBlock;
