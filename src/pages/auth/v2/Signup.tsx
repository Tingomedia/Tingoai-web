import { FC, useEffect, useMemo } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import usePasswordToggle from "../../../hooks/usePasswordToggle";
import google from "../../../assets/icons/google.png";
import { useFirebaseAuth } from "../../../contexts/FirebaseAuthContext";

interface SignupProps {
  setShowLogin: (value: boolean) => void;
}

const Signup: FC<SignupProps> = ({ setShowLogin }): JSX.Element => {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const { firebaseUser, signInWithGoogle, signUpWithEmail } = useFirebaseAuth();
  const [searchParams] = useSearchParams();
  const returnUrl = useMemo(() => searchParams.get("returnUrl"), []);

  // ✅ Corrected Validation Schema
  const validationSchema = Yup.object({
    fullname: Yup.string()
      .matches(/^[a-zA-Z ]+$/, "Full Name can only contain letters and spaces")
      .min(3, "Full Name must be at least 3 characters")
      .required("Full Name is required"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  // ✅ Formik Setup
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      if (Object.keys(formik.errors).length > 0) {
        toast.error("All fields are required");
        return;
      }
      try {
        console.log("Form submitted", values);
        await signUpWithEmail(
          values.fullname,
          values.email,
          values.confirmPassword
        );
        toast.success("Signup successful!");
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("An error occurred. Please try again.");
        }
      } finally {
        setSubmitting(false);
      }
    },
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
      <div className="text-[#8f8f8f] flex flex-col items-center justify-center px-[48px] py-[32px] gap-[16px]">
        <div className="flex flex-col justify-center items-center gap-[16px]">
          <h2 className="text-[40px] text-[#2a3795] font-bold">
            Create Account
          </h2>
          <button
            onClick={signInWithGoogle}
            className={`w-[300px] h-[36px] px-6 py-2 rounded-full flex justify-evenly items-center border-2 border-[#8f8f8f] font-medium`}
          >
            <img src={google} alt="" />
            Continue with Google
          </button>
          <p className="lg:text-[14px] text-[10px] font-light mt-[16px]">
            or use your email for registration
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.setTouched({
              fullname: true,
              email: true,
              password: true,
              confirmPassword: true,
            });
            formik.handleSubmit();
          }}
          className="flex flex-col justify-center items-center font-light gap-[24px]"
        >
          {/* Full Name */}
          <div className="flex flex-col relative">
            <input
              type="text"
              name="fullname"
              placeholder="Enter full name"
              value={formik.values.fullname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={inputStyle}
            />
            {formik.touched.fullname && formik.errors.fullname && (
              <span className={errorStyle}>{formik.errors.fullname}</span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col relative">
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={inputStyle}
            />
            {formik.touched.email && formik.errors.email && (
              <span className={errorStyle}>{formik.errors.email}</span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col relative">
            <input
              type={PasswordInputType}
              name="password"
              placeholder="Enter password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={inputStyle}
            />
            <span className="absolute right-6 bottom-4">{ToggleIcon}</span>
            {formik.touched.password && formik.errors.password && (
              <span className={errorStyle}>{formik.errors.password}</span>
            )}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col relative">
            <input
              type={PasswordInputType}
              name="confirmPassword"
              placeholder="Confirm password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={inputStyle}
            />
            <span className="absolute right-6 bottom-4">{ToggleIcon}</span>
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <span className={errorStyle}>
                  {formik.errors.confirmPassword}
                </span>
              )}
          </div>
          <div className="flex w-full justify-center mt-[16px]">
            <div className="flex justify-center items-center w-[240px] lg:gap-4 gap-2">
              <input
                type="checkbox"
                className="w-[24px] h-[16px] appearance-none border-2 border-gray-400 rounded-md checked:bg-[#F8872B] checked:border-[#F8872B] transition duration-300 cursor-pointer"
              />

              <span className="lg:text-[12px] text-[12px]">
                By signing up, you agree to{" "}
                <span className="text-[#F8872B] font-bold">Tingo AI</span>{" "}
                <button className="">Terms & Condition,</button>{" "}
                <button className="">Privacy</button> and{" "}
                <button className="">Policy</button>
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="rounded-full text-white px-20 py-2 bg-[#2a3795] hover:bg-[#413ca7] transition duration-300"
          >
            SIGN UP
          </button>
        </form>
        <div className="md:hidden text-[14px] text-gray-700">
          Already have an account?{" "}
          <button
            className="text-[#2a3795] underline font-bold self-end"
            onClick={() => setShowLogin(true)}
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
