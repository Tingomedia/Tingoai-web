import { useFirebaseAuth } from "../../../contexts/FirebaseAuthContext";
import { PanelRightClose } from "lucide-react";

export default function Header({
  toggleSideNav,
  isSideNavOpen,
}: {
  toggleSideNav: () => void;
  isSideNavOpen: boolean;
}) {
  // const { setCurrentConversation } = useConversations();
  const { firebaseUser } = useFirebaseAuth();
  return (
    <div
      className="sticky top-0 w-full h-[72px] p-4 flex items-center justify-between 
                bg-[linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1)),linear-gradient(0deg,rgba(0,0,0,0.65),rgba(0,0,0,0.65))]
                  backdrop-blur-lg
                  shadow-[0px_24px_30px_0px_#0000000D] z-20"
    >
      <div className="flex items-center gap-8 px-4">
        {!isSideNavOpen && (
          <div className="flex gap-6">
            <button onClick={toggleSideNav}>
              <PanelRightClose className="" />
            </button>
            {/* <button onClick={() => setCurrentConversation(null)}>
              <ListPlus />
            </button> */}
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
        <div className="flex gap-4 items-center">
          {firebaseUser && (
            <div className="flex flex-col text-[14px] text-white/60 leading-tight">
              {/* <span className="text-[16px] text-[#F8872B]">
                {firebaseUser?.displayName?.toUpperCase() || ""}
              </span> */}
              {/* <span>Upgrade to TingoPro</span> */}
            </div>
          )}
          <button onClick={() => {}}>
            <img
              src={firebaseUser?.photoURL || "/images/Avatar.png"}
              alt="avatar"
              className="w-16 object-cover object-center rounded-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
