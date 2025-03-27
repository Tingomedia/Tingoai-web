import { useState } from "react";
import { useFirebaseAuth } from "../../../contexts/FirebaseAuthContext";
import { PanelRightClose } from "lucide-react";
import { useConversations } from "../../../contexts/TingoGPTContext";

export default function Header({
  toggleSideNav,
  isSideNavOpen,
}: {
  toggleSideNav: () => void;
  isSideNavOpen: boolean;
}) {
  const { setCurrentConversation } = useConversations();
  const { firebaseUser, signOutUser } = useFirebaseAuth();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className="sticky top-0 w-full h-[72px] p-4 flex items-center justify-between 
                bg-[linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1)),linear-gradient(0deg,rgba(0,0,0,0.65),rgba(0,0,0,0.65))]
                  backdrop-blur-lg
                  shadow-[0px_24px_30px_0px_#0000000D] z-20"
    >
      <div className="flex items-center gap-8 px-0">
        {!isSideNavOpen && (
          <div className="flex -m-1 gap-4">
            <button
              className="opacity-60 hover:opacity-100 hover:bg-white/15 p-2 rounded-md"
              onClick={toggleSideNav}
            >
              <PanelRightClose className="" />
            </button>
            <button
              onClick={() => setCurrentConversation(null)}
              className="opacity-40 hover:opacity-80 hover:bg-white/15 p-2 rounded-md"
            >
              <img src="/icons/comment-alt-plus.svg" />
            </button>
          </div>
        )}
        {/* <Link to="/"> */}
        <img
          src="/images/logo.svg"
          alt="Logo"
          className="h-[50px] max-h-full max-w-full object-contain pt-2 hidden md:flex"
        />
        {/* </Link> */}
      </div>

      <div className="flex pr-4">
        <div className="flex gap-4 items-center relative">
          {firebaseUser && (
            <div className="flex flex-col text-[14px] text-white/60 leading-tight">
              {/* <span className="text-[16px] text-[#F8872B]">
                {firebaseUser?.displayName?.toUpperCase() || ""}
              </span> */}
              {/* <span>Upgrade to TingoPro</span> */}
            </div>
          )}
          <button onClick={() => setShowMenu(!showMenu)}>
            <img
              src={firebaseUser?.photoURL || "/images/Avatar.png"}
              alt="avatar"
              className="w-16 object-cover object-center rounded-full"
            />
          </button>

          {showMenu && (
            <div className="absolute -bottom-10 right-20 bg-black text-white/60">
              <button
                onClick={() => signOutUser()}
                className="px-6 py-2 bg-gray-400/65 rounded-md"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
