import { FC } from "react";
import bg from "../../assets/images/gpt/authbg.png";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import tingoai from "../../assets/icons/tingo_ai_logo.png";
import { Link } from "react-router-dom";
import usePasswordToggle from "../../../hooks/usePasswordToggle";

const ResetPassword: FC = (): JSX.Element => {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();

  interface FormValues {
    password: string;
    confirmPassword: string;
  }

  // Validation for input data
  const validate = Yup.object({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .min(6, "Password must be the same")
      .required("Required"),
  });

  const handleFormSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    try {
      console.log("Form submitted", values);
      await new Promise((resolve) => setTimeout(resolve, 1000));
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
  } = useFormik<{ password: string; confirmPassword: string }>({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: validate,
    onSubmit: handleFormSubmit,
  });
  return (
    <>
      <div className="relative w-full flex items-center justify-center py-6  min-h-screen bg-[#121826]">
        <div
          className="absolute bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        ></div>
        <div className="lg:w-[514px] md:w-[60%] w-[90%] lg:h-[560px] flex flex-col gap-[25px] overflow-hidden">
          <div className="flex justify-center">
            <Link to="/">
              <img src={tingoai} alt="" className="w-[154px] h-[59px]" />
            </Link>
          </div>
          <div className="lg:w-[514px] lg:h-[420px] h-[400px] md:h-[420px] border border-gray-700 bg-gradient-to-b from-[#797979CC] to-[#232A3E1A] bg-transparent rounded-3xl flex flex-col items-center py-10 gap-[20px]">
            <div className="lg:w-[450px] w-[90%] text-center h-[54px] flex flex-col justify-center items-center gap-[5px]">
              <h2 className="text-[24px] text-[#E5E7EB] font-semibold">
                Reset your password
              </h2>
              <p className="lg:text-[14px] text-[12px] text-[#A1A6B4] font-Poppins">
                Enter your new password to access your Tingo account
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="h-[228px] lg:w-[450px] w-[90%] flex flex-col gap-[24px]"
            >
              <div className="flex flex-col h-[80px] relative">
                <label
                  htmlFor="password"
                  className="text-[#E5E7EB] text-[14px] font-poppins"
                >
                  New Password
                </label>
                <input
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type={PasswordInputType}
                  value={values.password}
                  className="lg:w-[450px] w-full h-[56px] px-4 py-3 text-2xl rounded-lg bg-gray-50 focus:outline-none"
                />
                <span className="absolute right-6 bottom-9">{ToggleIcon}</span>
                {errors.password && touched.password && (
                  <span className="text-red-500 text-sm">
                    {errors.password}
                  </span>
                )}
              </div>
              <div className="flex flex-col h-[80px] relative">
                <label
                  htmlFor="password"
                  className="text-[#E5E7EB] text-[14px] font-poppins"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type={PasswordInputType}
                  value={values.confirmPassword}
                  placeholder="Confirm your password"
                  className="lg:w-[450px] w-[100%] h-[56px] px-4 py-3 text-2xl rounded-lg bg-gray-50 focus:outline-none"
                />
                <span className="absolute right-6 bottom-9">{ToggleIcon}</span>
                {errors.confirmPassword && touched.confirmPassword && (
                  <span className="text-red-500 text-sm">
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
              <div className="flex justify-between">
                <div className="flex items-center lg:gap-4 gap-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="text-sky-600"
                  />
                  <p className="text-[#E5E7EB] lg:text-[14px] text-[10px] font-">
                    Remember me for 30 days
                  </p>
                </div>
                <Link to="">
                  <div className="lg:text-[14px] text-[10px] text-[#F8872B] hover:underline">
                    Forgot Password?
                  </div>
                </Link>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-[80px] p-4 lg:w-[450px] w-[100%] rounded-lg text-white font-semibold font-Inter bg-[#F8872B]"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
