import { FC } from "react";
// import SearchInput from "../utils/SearchInput";
import UserAvatar from "../../utils/libs/UserAvatar";
import { CgMenuGridO } from "react-icons/cg";
import CustomDropDown from "../../utils/libs/CustomSelect";
import logo from "../../assets/icons/tingo_ai_logo.png";
import { Link } from "react-router-dom";


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

const GptHeader: FC<HeaderProps> = () => {

  // const selectItems = [
  //   { label: "TingoGPT", path: "/tingogpt"},
  //   { label: "TingoGPT Plus", path: "/tingogpt/plus"},
  // ];

// const handleSelection = (value: string) => {
//   console.log("Selected:", value);
// };
  return (
    <div className="w-full h-[140px] px-8 flex justify-between items-center border-b">
      <Link to="/" className=" text-white items-baseline relative">
          <img
            src={logo}
            alt="Tingo logo"
            className="md:w-[150px] h-[40px] md:h-[64px]"
          />
        </Link>
      <div className="w-[150px]">
      <UserAvatar />
      </div>
    </div>
  );
};

export default GptHeader;
