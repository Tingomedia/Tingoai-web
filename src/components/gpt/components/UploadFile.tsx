import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";

import fileUpload from "../../../assets/icons/file-upload.svg";
import fileUploadSuccess from "../../../assets/icons/file-upload-success.svg";
import fileUploadError from "../../../assets/icons/file-upload-err.svg";
import cancelIcon from "../../../assets/icons/ic_baseline-cancel.svg";
import clearBin from "../../../assets/icons/clear-bin.svg";
import retryIcon from "../../../assets/icons/retry.svg";
import pdfFileType from "../../../assets/icons/pdf-file-type.svg";

type UploadState = "idle" | "uploading" | "success" | "error";
const UploadFile = ({ onClose }: { onClose: (value: boolean) => void }) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(65);
  const [uploadError, setUploadError] = useState("");
  const [status, setStatus] = useState<UploadState>("idle");
  const [isInDrag, setDragState] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const reset = () => {
    setFile(null);
    setStatus("idle");
    setUploadProgress(0);
    setUploadError("");
    onClose(false);
  };

  const uploadFile = (file: any) => {
    setStatus("uploading");
    setUploadProgress(0);

    if(file){
      console.log(file);
    }

    // Simulating upload progress
    // Replace with backend logic
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatus(Math.random() > 0.5 ? "success" : "error"); // Simulate random failure
          return 100;
        }
        return prev + 20;
      });
    }, 500);
  };

  const handleDrop: React.DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    if (status !== "idle") return;

    setDragState(false);
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      uploadFile(droppedFile);
    }
  };

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (!event.target.files) return;

    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      uploadFile(selectedFile);
    }
  };

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-[#121826]/65 z-50 p-[24px]">
      <div className="w-full max-w-[570px] h-[458px] bg-[#1D2739] flex flex-col items-center p-[24px] rounded-[20px] relative">
        <div className="w-full flex justify-between">
          <span className="text-[15px] text-[#E5E7EB] font-medium">
            Upload Image
          </span>
          <button onClick={reset}>
            <img src={cancelIcon} width={20} height={20} />
          </button>
        </div>
        <div
          className={`border-2 rounded-2xl flex flex-col w-full max-w-[400px] h-[264px] my-auto px-[24px] py-[28px] gap-[16px] items-center justify-center text-center text-[14px] font-medium ${
            status === "error"
              ? "border-dashed border-[#E26E6A]"
              : status === "success"
              ? "border-dashed border-[#5FC381]"
              : status === "uploading"
              ? "border-dashed border-[#FA9874]"
              : isInDrag
              ? "border-dashed border-[#FA9874]"
              : "border-dashed border-[#F8872B]/30"
          }`}
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            setDragState(true);
          }}
          onDragLeave={() => {
            setDragState(false);
          }}
        >
          {status === "idle" && (
            <>
              <img src={fileUpload} width={56} height={56} />
              <div className="flex flex-col gap-[2px]">
                <input
                  type="file"
                  className="hidden"
                  ref={fileInputRef}
                  accept=".png,.jpg,.jpeg,.gif,.svg,.pdf"
                  id="fileInput"
                  onChange={handleFileChange}
                />
                <span className="text-[#E5E7EB]">
                  <label
                    htmlFor="fileInput"
                    className="cursor-pointer text-[#F8872B]"
                  >
                    Click to upload
                  </label>{" "}
                  or drag and drop
                </span>
                <span className="text-[#A1A6B4] text-[12px] font-normal">
                  SVG, PNG, JPG, or GIF (max. 2MB)
                </span>
              </div>

              <div className="relative flex items-center justify-center w-full max-w-[337px]">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-full max-w-[337px] h-[1px] bg-[#98A2B3]/40"></div>
                <span className="bg-white text-[#98A2B3] px-[8px] my-[8px] z-10">
                  OR
                </span>
              </div>

              <button
                className="bg-[#F8872B] text-white px-4 py-2 rounded-md"
                onClick={() => fileInputRef.current?.click()}
              >
                Browse Files
              </button>
            </>
          )}

          {status === "uploading" && (
            <div className="flex flex-col items-center justify-center gap-[20px] py-[28px] text-[#E5E7EB]">
              <img src={pdfFileType} width={45} height={45} />
              <div className="flex flex-col gap-[8px] mx-[16px]">
                <span className="text-[16px]">${uploadProgress}%</span>
                <div className="relative w-[313px] h-2 rounded-[16px] overflow-hidden">
                  {/* Background with pseudo-elements */}
                  <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[#FCD2C2] before:rounded-[16px]"></div>

                  {/* Progress bar */}
                  <div
                    className="relative bg-[#F56630] h-[6px] rounded-[16px] transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex flex-col gap-[4px]">
                <p className="text-[14px]">Uploading Document...</p>
                <p className="text-[#98A2B3] text-[12px]">
                  {file?.name || "{Name of document}"}
                </p>
              </div>
            </div>
          )}

          {status === "success" && (
            <div className="flex flex-col items-center justify-center gap-[24px] py-[28px] text-[#E5E7EB]">
              <div className="flex flex-col items-center justify-center gap-[16px]">
                <img src={fileUploadSuccess} width={45} height={45} />
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[14px]">Uploading Document...</p>
                  <p className="text-[#98A2B3] text-[12px]">
                    {file?.name || "{Name of document}"}
                  </p>
                </div>
              </div>
              <button
                className="flex gap-[10px] px-[12px] py-[6px] rounded-[6px] text-[#98A2B3] hover:bg-[#E7F6EC]/5"
                onClick={() => setStatus("idle")}
              >
                <img src={clearBin} width={20} height={20} />
                <span className="text-[14px] font-semibold">Clear Upload</span>
              </button>
            </div>
          )}

          {status === "error" && (
            <div className="flex flex-col items-center justify-center gap-[24px] py-[28px] text-[#E5E7EB]">
              <div className="flex flex-col items-center justify-center gap-[16px]">
                <img src={fileUploadError} width={45} height={45} />
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[14px]">Failed to Upload</p>
                  <p className="text-[#98A2B3] text-[12px]">
                    {uploadError || "{Error message}"}
                  </p>
                </div>
              </div>
              <button
                className="flex gap-[10px] px-[12px] py-[6px] rounded-[6px] text-[#F56630] hover:bg-[#E7F6EC]/5"
                onClick={() => setStatus("idle")}
              >
                <img src={retryIcon} width={20} height={20} />
                <span className="text-[14px] font-semibold">Try Again</span>
              </button>
            </div>
          )}
        </div>
        <div
          className="absolute -inset-[1px] rounded-[20px] pointer-events-none z-[-1]"
          style={{
            padding: "1px", // Fake border thickness
            background:
              "linear-gradient(150deg, rgba(201, 201, 201, 0.8) 0%, rgba(196, 196, 196, 0.1) 100%)",
            WebkitMask:
              "linear-gradient(white 0 0) content-box, linear-gradient(white 0 0)",
            WebkitMaskComposite: "xor",
          }}
        ></div>
      </div>
    </div>,
    document.body
  );
};

export default UploadFile;
