import { FC } from "react";
import MainNavGpt from "./MainNavGpt";
import { Link } from "react-router-dom";

type SidebarProps = {
  historyData: SearchHistory[];
  className: string;
  title?: string;
};

const SidebarGpt: FC<SidebarProps> = ({
  historyData,
  className,
  title = "GPT",
}) => {
  return (
    <div
      className={`bg-[#121826] py-8 flex flex-col gap-12 row-span-full ${className}`}
    >
      <div className="flex items-center justify-center">
        <Link to="/" className="hover:text-white">
          <h1 className="hidden lg:block text-white font-bold text-4xl">
            Tingo<span className="text-primary-200">{title}</span>
          </h1>
        </Link>
      </div>
      <MainNavGpt historyData={historyData} />
    </div>
  );
};

export default SidebarGpt;
