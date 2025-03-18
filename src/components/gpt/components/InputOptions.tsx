import imageIcon from "../../../assets/icons/image-add-01.svg";
import fileIcon from "../../../assets/icons/attachment.svg";
import driveIcon from "../../../assets/icons/google-drive.svg";

export type FileSource = "Image" | "File" | "Drive";
const InputOptions = ({
  onSelect,
}: {
  onSelect: (type: FileSource) => void;
}) => {
  const Button = ({
    name,
    imgSrc,
    onClick,
  }: {
    name: string;
    imgSrc: string;
    onClick: () => void;
  }) => (
    <button className="flex gap-4 p-2" onClick={onClick}>
      <img src={imgSrc} alt="Plus Icon" className="w-8 h-8" />
      <span className="text-[#E5E7EB]">{name}</span>
    </button>
  );
  return (
    <div className="flex flex-col relative w-[142px] gap-4 bg-[#121826] rounded-[16px] p-4">
      <div
        className="absolute -inset-[1px] rounded-[16px] pointer-events-none z-[-1]"
        style={{
          padding: "0.5px", // Fake border thickness
          background:
            "linear-gradient(150deg, rgba(201, 201, 201, 0.8) 0%, rgba(196, 196, 196, 0.1) 100%)",
          WebkitMask:
            "linear-gradient(white 0 0) content-box, linear-gradient(white 0 0)",
          WebkitMaskComposite: "xor",
        }}
      ></div>
      <Button
        name="Image"
        imgSrc={imageIcon}
        onClick={() => onSelect("Image")}
      />
      <Button name="Files" imgSrc={fileIcon} onClick={() => onSelect("File")} />
      <Button
        name="Drive"
        imgSrc={driveIcon}
        onClick={() => onSelect("Drive")}
      />
    </div>
  );
};

export default InputOptions;
