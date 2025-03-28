// import line from "../../assets/images/gpt/Vector 3.png"
import avatar from "../../assets/images/gpt/Avatars.png"
// import shareIcon from "../../assets/images/gpt/share-01.png"
// import crown from "../../assets/images/gpt/crown-02.png"
// import menuSq from "../../assets/images/gpt/menu-square.png"
import { useFirebaseAuth } from "../../contexts/FirebaseAuthContext";
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
  const { firebaseUser} = useFirebaseAuth();
  // const { username, role } = useAppContext();
 
  return (
    <div className="flex items-center">
      <p className="hidden md:block text-fade-white text-[14px] font-Manrope font-medium">
        {firebaseUser?.displayName || "User"}
      </p>
      
      <button onClick={() => {}}>
        <img
          src={firebaseUser?.photoURL || avatar}
          alt="avatar"
          className="w-16 object-cover object-center rounded-full border ml-3"
        />
      </button>
    </div>
  );
}

export default UserAvatar;
