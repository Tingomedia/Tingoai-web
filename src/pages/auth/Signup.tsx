import { FC, useEffect, useMemo } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import usePasswordToggle from "../../hooks/usePasswordToggle";
import SpinnerMini from "../../utils/libs/SpinnerMini";
import user from "../../assets/icons/user.png";
import message from "../../assets/icons/message.png";
import { useFirebaseAuth } from "../../contexts/FirebaseAuthContext";

const Signup: FC = (): JSX.Element => {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const { firebaseUser, signUpWithEmail } = useFirebaseAuth();
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

  return (
    <>
      {/* <div className="relative w-full flex items-center justify-center py-6 min-h-screen bg-[#121826]">
        <div
          className="absolute bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        ></div> */}
      {/* <div className="lg:w-[514px] w-[90%] md:w-[60%] h-[884px] flex flex-col gap-[25px] overflow-hidden">
        <div className="flex justify-center">
          <Link to="/">
            <img src={tingoai} alt="" className="w-[154px] h-[59px]" />
          </Link>
        </div> */}
      <div className="text-gray-700 flex flex-col items-center justify-center gap-[20px]">
        <div className="w-[450px] h-[54px] flex flex-col justify-center items-center gap-[5px]">
          <h2 className="lg:text-[24px] font-semibold">
            Sign up with your credentials
          </h2>
          <p className="lg:text-[14px] text-[10px] text-gray-400 font-Poppins">
            Enter your credentials to create a Tingo account
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
          className="h-[500px] lg:w-[450px] w-[90%] flex flex-col gap-[24px]"
        >
          {/* Full Name */}
          <div className="flex flex-col h-[80px] relative">
            <label className="text-[14px]">Full Name</label>
            <input
              type="text"
              name="fullname"
              placeholder="Enter your full name"
              value={formik.values.fullname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="lg:w-[450px] w-full h-[56px] px-4 py-3 text-2xl rounded-lg bg-gray-50 focus:outline-none"
            />
            {formik.touched.fullname && formik.errors.fullname && (
              <span className="text-red-500 text-sm">
                {formik.errors.fullname}
              </span>
            )}
            <img src={user} alt="" className="absolute right-6 bottom-9" />
          </div>

          {/* Email */}
          <div className="flex flex-col h-[80px] relative">
            <label className="text-[14px]">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="lg:w-[450px] w-full h-[56px] px-4 py-3 text-2xl rounded-lg bg-gray-50 focus:outline-none"
            />
            {formik.touched.email && formik.errors.email && (
              <span className="text-red-500 text-sm">
                {formik.errors.email}
              </span>
            )}
            <img src={message} alt="" className="absolute right-6 bottom-9" />
          </div>

          {/* Password */}
          <div className="flex flex-col h-[80px] relative">
            <label className="text-[14px]">Password</label>
            <input
              type={PasswordInputType}
              name="password"
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="lg:w-[450px] w-full h-[56px] px-4 py-3 text-2xl rounded-lg bg-gray-50 focus:outline-none"
            />
            <span className="absolute right-6 bottom-9">{ToggleIcon}</span>
            {formik.touched.password && formik.errors.password && (
              <span className="text-red-500 text-sm">
                {formik.errors.password}
              </span>
            )}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col h-[80px] relative">
            <label className="text-[14px]">Confirm Password</label>
            <input
              type={PasswordInputType}
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="lg:w-[450px] w-full h-[56px] px-4 py-3 text-2xl rounded-lg bg-gray-50 focus:outline-none"
            />
            <span className="absolute right-6 bottom-9">{ToggleIcon}</span>
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <span className="text-red-500 text-sm">
                  {formik.errors.confirmPassword}
                </span>
              )}
          </div>
          <div className="flex lg:gap-4 gap-2">
            <input type="checkbox" name="" id="" className="text-sky-600" />
            <span className="lg:w-[372px] lg:text-[12px] text-[10px]">
              By signing up, you agree to Tingo AI{" "}
              <button className="text-[#4f48c1]">Terms & Condition,</button>{" "}
              <button className="text-[#4f48c1]">Privacy</button> and{" "}
              <button className="text-[#4f48c1]">Policy</button>
            </span>
          </div>
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="h-[55px] lg:w-[450px] w-[100%] rounded-lg text-white font-semibold py-4 bg-[#4f48c1] hover:bg-[#413ca7] transition duration-300"
          >
            {formik.isSubmitting ? <SpinnerMini /> : "Sign Up"}
          </button>
        </form>
      </div>
      {/* <div className="flex justify-center">
          <span className="text-[#A1A6B4] w-[268px] cursor-pointer h-[60px] bg-gradient-to-b from-[#797979CC] to-[#232A3E1A] bg-transparent border border-gradient-to-r from-[#797979CC] to-[#232A3E1A] hover:bg-gradient-to-r from-[#797979CC] to-[#232A3E1A] flex justify-center items-center gap-2 rounded-full text-[14px]">
            Have an account?
            <Link
              to={`/signin${returnUrl ? "?returnUrl=" + returnUrl : ""}`}
              className="text-[#4f48c1]"
            >
              Sign in
            </Link>
          </span>
        </div>
      </div> */}
      {/* </div> */}
    </>
  );
};

export default Signup;
