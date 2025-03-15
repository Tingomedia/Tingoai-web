import { FC } from "react";
// import SearchInput from "../utils/SearchInput";
import UserAvatar from "../../utils/libs/UserAvatar";
import { CgMenuGridO } from "react-icons/cg";
import CustomDropDown from "../../utils/libs/CustomSelect";



/**
 * Header component that displays the top navigation bar with a hamburger menu for mobile view,
 * a search input field, and a user avatar.
 * The hamburger menu toggles the sidebar visibility.
 *
 * @component
 * @example
 * const toggleSidebar = () => { console.log('Sidebar toggled'); };
 * return <Header toggleSidebar={toggleSidebar} />;
 *
 * @param {Object} props - The props for the component.
 * @param {Function} props.toggleSidebar - Function to toggle the sidebar visibility.
 *
 * @returns {JSX.Element} The rendered header component.
 */

interface HeaderProps {
  toggleSidebar: () => void;
  title?: string;
}

const GptHeader: FC<HeaderProps> = ({ toggleSidebar, title="GPT" }) => {

  const selectItems = [
    { label: "TingoGPT", path: "/tingogpt"},
    { label: "TingoGPT Plus", path: "/tingogpt/plus"},
  ];

const handleSelection = (value: string) => {
  console.log("Selected:", value);
};
  return (
    <div className="px-16 py-6 bg-[#1D2739] border-b flex justify-between">
      {/* Hamburger menu icon for mobile */}
      <div className="flex lg:hidden gap-4 items-center justify-center">
        <h1 className="font-bold text-3xl text-tremor-brand-muted">Tingo<span className="text-primary-200">{title}</span></h1>
        <CgMenuGridO
          className="text-tremor-brand-muted text-4xl cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>
      <div className="hidden lg:flex items-center">
      <div className="flex items-center text-fade-white  bg-[#121826] p-2 px-3 rounded-full">
      
      {/* <SelectDropDown items={selectItems} onChange={handleSelectChange}/> */}
      <CustomDropDown items={selectItems} onSelect={handleSelection} label="TingoGPT" />
      </div>
        </div>
      <UserAvatar />
    </div>
  );
};

export default GptHeader;
