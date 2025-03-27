import { useState } from "react";
// import AnimatedBirds from "./AnimatedBirds";
import AnimatedBirdsCSS from "./AnimatedBirdsCSS";
import Signin from "./Signin";
import Signup from "./Signup";
import BlinkingBird from "../../components/common/BlinkingBird";
import { useFirebaseAuth } from "../../contexts/FirebaseAuthContext";

export default function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const { isAuthenticating } = useFirebaseAuth();

  const Greet = () => {
    return (
      <div className="h-full flex flex-col justify-center items-center text-white">
        <div className="text-center">
          <h1 className="text-[36px] font-bold mb-4">
            {showLogin ? "Welcome Back!" : "Join Our Community"}
          </h1>
          <p className="opacity-80">
            {showLogin
              ? "Sign in to continue your journey with us."
              : "Create an account and experience amazing features."}
          </p>
        </div>

        <button
          disabled={isAuthenticating}
          onClick={() => setShowLogin(!showLogin)}
          className="mt-12 px-6 py-1 border border-white rounded-md opacity-90 font-400 transition-transform duration-300 hover:scale-105"
        >
          {showLogin ? "SIGN UP" : "SIGN IN"}
        </button>
      </div>
    );
  };
  return (
    <>
      <div className="hidden lg:flex">
        {showLogin && (
          <>
            <div className="relative w-[50%] h-screen">
              <AnimatedBirdsCSS speed={20} bgColor="#F8872B" />
              <Greet />
            </div>
            <div className="relative w-[50%] h-screen flex justify-center items-center">
              <Signin />
              {isAuthenticating && (
                <div className="absolute inset-0 bg-black/35 flex justify-center items-center">
                  <BlinkingBird />
                </div>
              )}
            </div>
          </>
        )}
        {!showLogin && (
          <>
            <div className="relative w-[50%] h-screen  flex justify-center items-center">
              <Signup />
              {isAuthenticating && (
                <div className="absolute inset-0 bg-black/35 flex justify-center items-center">
                  <BlinkingBird />
                </div>
              )}
            </div>
            <div className="relative w-[50%] h-screen">
              <AnimatedBirdsCSS speed={20} flip />
              <Greet />
            </div>
          </>
        )}
      </div>

      <div className="hidden sm:flex lg:hidden h-screen bg-gray-200">
        {showLogin && (
          <>
            <div className="relative w-[66%] ml-auto my-auto flex flex-col justify-center items-center bg-white z-20 p-8 gap-8">
              <Signin />
              <div className="text-[14px] text-gray-700">
                Don't have an account?{" "}
                <button
                  className="text-[#F8872B] underline font-bold self-end"
                  onClick={() => setShowLogin(false)}
                >
                  Sign Up
                </button>
              </div>
              {isAuthenticating && (
                <div className="absolute inset-0 bg-black/35 flex justify-center items-center">
                  <BlinkingBird />
                </div>
              )}
            </div>
            <div className="absolute left-0 top-0 w-[66%] h-screen z-10">
              <AnimatedBirdsCSS speed={20} bgColor="#F8872B" />
              {/* <Greet /> */}
            </div>
          </>
        )}
        {!showLogin && (
          <>
            <div className="relative w-[66%] my-auto flex flex-col justify-center items-center bg-white z-20 p-8 gap-8">
              <Signup />
              <span className="text-[14px] text-gray-700">
                Already have an account?{" "}
                <button
                  className="text-[#4f48c1] underline font-bold self-end"
                  onClick={() => setShowLogin(true)}
                >
                  Sign In
                </button>
              </span>
              {isAuthenticating && (
                <div className="absolute inset-0 bg-black/35 flex justify-center items-center">
                  <BlinkingBird />
                </div>
              )}
            </div>
            <div className="absolute right-0 top-0 w-[66%] h-screen z-10">
              <AnimatedBirdsCSS speed={20} flip />
              {/* <Greet /> */}
            </div>
          </>
        )}
      </div>
    </>
  );
}
