import { FC, useEffect, useMemo } from "react";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Link, useSearchParams } from "react-router-dom";
// import { toast } from "react-hot-toast";
import google from "../../../assets/icons/google.png";
import usePasswordToggle from "../../../hooks/usePasswordToggle";
import { useFirebaseAuth } from "../../../contexts/FirebaseAuthContext";

interface FormValues {
  email: string;
  password: string;
}

//   const loginUrl = "/auth/login";
//   function formatRoute(str: string) {
//     return str.toLowerCase().replace(/ /g, "-");
//   }

interface SigninProps {
  setShowLogin: (value: boolean) => void;
}

const Signin: FC<SigninProps> = ({ setShowLogin }): JSX.Element => {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const { firebaseUser, signInWithGoogle, signInWithEmail } = useFirebaseAuth();
  const [searchParams] = useSearchParams();
  const returnUrl = useMemo(() => searchParams.get("returnUrl"), []);

  // Validation for input data
  const validate = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  const handleFormSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    try {
      console.log("Form submitted", values);
      await signInWithEmail(values.email, values.password);
      actions.setSubmitting(false);
    } catch (error) {
      console.error("Submission error", error);
      actions.setSubmitting(false);
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik<{ email: string; password: string }>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validate,
    onSubmit: handleFormSubmit,
  });

  useEffect(() => {
    if (firebaseUser) {
      window.location.href = returnUrl || "/";
    }
  }, [firebaseUser]);

  const inputStyle = `w-[300px] h-[36px] px-6 py-2 text-2xl rounded-full bg-[#e4e4e4] focus:outline-none placeholder-[#8f8f8f]`;
  const errorStyle = `absolute -bottom-[14px] text-red-500 text-sm ps-6`;

  return (
    <>
      <div className="text-[#8f8f8f] flex flex-col h-full items-center justify-around px-[48px] py-[32px] gap-[16px]">
        <h2 className="text-[40px] text-[#2a3795] font-bold">Sign in</h2>
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-col justify-center items-center gap-[16px]">
            <button
              onClick={signInWithGoogle}
              className={`w-[300px] h-[36px] px-6 py-2 rounded-full flex justify-evenly items-center border-2 border-[#8f8f8f] font-medium`}
            >
              <img src={google} alt="" />
              Continue with Google
            </button>
            <p className="md:text-[14px] text-[12px] font-light mt-[16px]">
              or use your account
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center font-light gap-[24px]"
          >
            <div className="flex flex-col relative">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputStyle}
              />
              {errors.email && touched.email && (
                <span className={errorStyle}>{errors.email}</span>
              )}
            </div>
            <div className="flex flex-col relative">
              <input
                id="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                type={PasswordInputType}
                value={values.password}
                className={inputStyle}
              />
              <span className="absolute right-6 bottom-4">{ToggleIcon}</span>
              {errors.password && touched.password && (
                <span className={errorStyle}>{errors.password}</span>
              )}
            </div>
            {/* <div className="flex justify-between">
            <div className="flex items-center lg:gap-4 gap-2">
              <input type="checkbox" name="" id="" className="text-sky-600" />
              <p className="lg:text-[14px] text-[10px] font-">
                Remember me for 30 days
              </p>
            </div> */}
            <Link to="">
              <div className="md:text-[14px] text-[12px] hover:underline">
                Forgot your Password?
              </div>
            </Link>
            {/* </div> */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full text-white px-20 py-2 bg-[#F8872B] hover:bg-[#db7520] transition duration-300"
            >
              SIGN IN
            </button>
          </form>
        </div>
        <div className="md:hidden text-[14px] text-gray-700">
          Don't have an account?{" "}
          <button
            className="text-[#2a3795] underline font-bold mt-auto"
            onClick={() => setShowLogin(false)}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Signin;
