import line from "../../assets/images/gpt/Vector 3.png"
import avatar from "../../assets/images/gpt/Avatars.png"
import shareIcon from "../../assets/images/gpt/share-01.png"
import crown from "../../assets/images/gpt/crown-02.png"
import menuSq from "../../assets/images/gpt/menu-square.png"
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
  // const { username, role } = useAppContext();

  return (
    <div className="flex gap-4 justify-between items-center bg-transparent p-3 rounded-full">
     
     <div className="md:flex flex-col items-center">
       <div className="font-medium text-fade-gray">
        Blard Omu
      </div>
      
     </div>
      <img
        src={avatar}
        alt="avatar"
        className="w-16 object-cover object-center rounded-full border"
      />      
    </div>
  );
}

export default UserAvatar;
