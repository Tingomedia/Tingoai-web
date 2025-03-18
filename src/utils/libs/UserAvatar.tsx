import line from "../../assets/images/gpt/Vector 3.png"
import avatar from "../../assets/images/gpt/Avatars.png"
import shareIcon from "../../assets/images/gpt/share-01.png"
import crown from "../../assets/images/gpt/crown-02.png"
import menuSq from "../../assets/images/gpt/menu-square.png"
import useFirebaseAuth from "../../hooks/useFirebaseAuth";
// import { useAppContext } from "../../contexts/AppContext";

/**
 * UserAvatar component that displays a user's avatar image along with their name and role.
 * The avatar is a circular image, and the user information (name and role) is displayed next to it.
 *
 * @component
 * @example
 * <UserAvatar />
 *
 * @returns {JSX.Element} The rendered user avatar component with an image and text.
 */

function UserAvatar() {
  const { firebaseUser } = useFirebaseAuth();
  // const { username, role } = useAppContext();
  return (
    <div className="lg:w-1/3 flex gap-4 justify-between items-center bg-[#121826] p-3 rounded-full">
      <button className="hidden md:flex items-center justify-between text-fade-white p-2 px-3 border hover:border-primary-200 rounded-full">
        <img src={shareIcon} alt="avatar" className="mr-2" />
        Share
      </button>
      <button className="hidden md:flex items-center justify-between text-fade-white px-3 bg-primary-200 hover:bg-primary-200/80 p-2 rounded-md">
        <img src={crown} alt="avatar" className="mr-2" />
        Upgrade
      </button>
      <img
        src={menuSq}
        alt="avatar"
        className="hidden lg:flex hover:bg-primary-200"
      />
      <img src={line} alt="avatar" className="hidden lg:flex" />
      <button onClick={() => {}}>
        <img
          src={firebaseUser?.photoURL || avatar}
          alt="avatar"
          className="w-16 object-cover object-center rounded-full border"
        />
      </button>
    </div>
  );
}

export default UserAvatar;
