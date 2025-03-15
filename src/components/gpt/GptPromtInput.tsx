import React, { FC, useState } from "react";
import ask from "../../assets/icons/add-circle-half-dot.png";
import mic from "../../assets/icons/mic-01.png";
import copy from '../../assets/icons/copy-01.png'
import thumbs from '../../assets/icons/thumbs-up.png'
import volume from '../../assets/icons/volume-high.png'
import pencil from '../../assets/icons/pencil-edit-01.png'

const GptPromptInput: FC = () => {
  const [input, setInput] = useState<string>("");
  const [submittedPrompt, setSubmittedPrompt] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  const handlePrompt = () => {
    if (input.trim()) {
      setSubmittedPrompt(input);
      console.log("Submitting Prompt:", input);
      setInput("");
    }
  };

  return (
    <div className="py-10 flex flex-col min:h-[400px] items-center justify-center m-auto w-full lg:max-w-[70%]">
      <div className="flex flex-col items-center justify-between w-11/12  m-auto lg:max-w-[90%]">
        {/* Display Submitted Prompt */}
        {submittedPrompt && (
          <div className="w-full flex justify-end">
            <div className="mb-4 p-4 bg-[#121826] text-[#E5E7EB] rounded-tl-[20px] rounded-br-[20px]">
              {submittedPrompt}
            </div>
          </div>
        )}

        {/* Reasoning (Placeholder) */}
        {submittedPrompt && (
          <div className="w-full justify-start my-4">
            <div className="w-full justify-start my-4">
              <p className="w-full text-gray-400 bg-gradient-to-r from-gray-400 10% via-slate-900 80% to-slate-900 bg-clip-text text-transparent">Reasoning...</p>
            </div>
          </div>
        )}

        {/* Result */}
        {submittedPrompt && (
          <div className="w-full justify-start my-4">
            <div className="mb-4 p-4 bg-slate-700 text-[#E5E7EB] rounded-bl-[20px] rounded-tr-[20px] text-start">
              {submittedPrompt}
            </div>
            <div className='pt-4 flex gap-5 justify-start'>
            <img src={copy} alt='copy' className='w-[18px]'/>
            <img src={thumbs} alt='up' className='w-[18px]'/>
            <img src={volume} alt='high' className='w-[18px]'/>
            <img src={pencil} alt='edit' className='w-[18px]'/>
        </div>
          </div>
        )}
      </div>

      {/* Prompt Input */}
      <div className="rounded-full border w-11/12 md:w-[100%] mx-auto items-center py-4 border-[#C9C9C9CC] flex justify-between px-8 mt-8">
        <img src={ask} alt="Ask Icon" className="text-[#C9C9C9CC] w-[20px]" />
        <textarea
          value={input}
          onChange={handleChange}
          placeholder="Ask TingoGPT..."
          className="w-full bg-transparent text-[#A1A6B4] text-[1.6rem] outline-none border-none resize-none pl-4 placeholder-gray-400 hide-scrollbar"
          rows={2} // ✅ Multi-line support
          onKeyDown={(e) =>
            e.key === "Enter" &&
            !e.shiftKey &&
            (e.preventDefault(), handlePrompt())
          }
        />
        <div className="w-[20px] cursor-pointer" onClick={handlePrompt}>
          <img src={mic} alt="Mic Icon" />
        </div>
      </div>
    </div>
  );
};

export default GptPromptInput;
