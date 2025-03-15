import { IoDownloadOutline } from "react-icons/io5";

const DownloadIcon = ({ handleDownload }: { handleDownload: any }) => {
  return (
    <IoDownloadOutline onClick={handleDownload} className="cursor-pointer" />
  );
};

export default DownloadIcon;
