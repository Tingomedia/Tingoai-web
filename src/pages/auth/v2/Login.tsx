import { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import BlinkingBird from "../../../components/common/BlinkingBird";
import { useFirebaseAuth } from "../../../contexts/FirebaseAuthContext";
import AnimGraphic from "./AnimGraphic";

export default function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const { isAuthenticating } = useFirebaseAuth();

  const Greet = () => {
    return (
      <div className="h-full flex flex-col justify-center items-center p-[32px] text-white">
        <div className="text-center">
          <h1 className="text-[40px] font-bold mb-4">
            {!showLogin ? "Welcome Back!" : "Hello, Friend!"}
          </h1>
          <p className="px-[24px] font-light">
            {!showLogin
              ? "To keep connected with us, please login with your personal info"
              : "Enter your personal details and start your journey with us"}
          </p>
        </div>

        <button
          disabled={isAuthenticating}
          onClick={() => setShowLogin(!showLogin)}
          className="mt-12 px-20 py-2 border-2 border-white rounded-full transition-transform duration-300 hover:scale-105"
        >
          {showLogin ? "SIGN UP" : "SIGN IN"}
        </button>
      </div>
    );
  };
  return (
    <>
      <AnimGraphic />
      <div className="w-screen h-svh flex flex-col gap-[32px] justify-center items-center font-Cera">
        <img src="/icons/TingoGPT-01.svg" width={300} height={92} />
        {showLogin && (
          <div className="flex rounded-[16px] overflow-hidden w-full max-w-[360px] md:w-[768px] md:max-w-max h-[600px]">
            <div className="flex justify-center items-center bg-white w-full max-w-[360px] md:w-[50%] md:max-w-max">
              <Signin setShowLogin={setShowLogin} />
              {isAuthenticating && (
                <div className="absolute inset-0 bg-black/35 flex justify-center items-center">
                  <BlinkingBird />
                </div>
              )}
            </div>
            <div className="hidden md:flex bg-[#F8872B] w-[50%]">
              <Greet />
            </div>
          </div>
        )}
        {!showLogin && (
          <div className="flex rounded-[16px] overflow-hidden w-full max-w-[360px] md:w-[768px] md:max-w-max h-[600px]">
            <div className="hidden md:flex bg-[#F8872B] w-[50%]">
              <Greet />
            </div>
            <div className="flex justify-center items-center bg-white w-full max-w-[360px] md:w-[50%] md:max-w-max">
              <Signup setShowLogin={setShowLogin} />

              {isAuthenticating && (
                <div className="absolute inset-0 bg-black/35 flex justify-center items-center">
                  <BlinkingBird />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
