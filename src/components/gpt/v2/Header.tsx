import { CgMenuGridO } from "react-icons/cg";
import useFirebaseAuth from "../../../hooks/useFirebaseAuth";

export default function Header({
  toggleSideNav,
}: {
  toggleSideNav: () => void;
}) {
  const { firebaseUser } = useFirebaseAuth();
  return (
    <div
      className="sticky top-0 w-full h-[72px] p-4 flex items-center justify-between bg-[linear-gradient(0deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05)),linear-gradient(0deg,rgba(0,0,0,0.05),rgba(0,0,0,0.05))]
                  backdrop-blur-[196px]
                  shadow-[0px_24px_30px_0px_#0000000D]"
    >
      <div className="flex items-center gap-4">
        <img
          src="/images/logo.svg"
          alt="Logo"
          className="h-[50px] max-h-full max-w-full object-contain pt-2"
        />
        <CgMenuGridO
          className="text-tremor-brand-muted text-4xl cursor-pointer"
          onClick={toggleSideNav}
        />
      </div>

      <div className="flex">
        <div className="flex gap-4 items-center">
          {firebaseUser && (
            <div className="flex flex-col text-[14px] text-white/60 leading-tight">
              <span>{firebaseUser?.displayName || ""}</span>
              <span>Upgrade to TingoPro</span>
            </div>
          )}
          <button onClick={() => {}}>
            <img
              src={firebaseUser?.photoURL || "/images/Avatar.png"}
              alt="avatar"
              className="w-16 object-cover object-center rounded-full border"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
