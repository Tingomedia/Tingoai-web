import { FC } from "react";
import bg from "../../assets/images/gpt/authbg.png";
import { useFormik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import tingoai from "../../assets/icons/tingo_ai_logo.png";
import message from "../../assets/icons/message.png";
import SpinnerMini from "../../../utils/libs/SpinnerMini";

const OtpMail: FC = (): JSX.Element => {
  interface FormValues {
    email: string;
  }
  // Validation for input data
  const validate = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email")
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
  } = useFormik<{ email: string }>({
    initialValues: {
      email: "",
    },
    validationSchema: validate,
    onSubmit: handleFormSubmit,
  });

  return (
    <>
      <div className="relative w-full flex items-center justify-center py-6 min-h-screen bg-[#121826]">
        <div
          className="absolute bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        ></div>
        <div className="lg:w-[514px] w-[90%] md:w-[60%] h-[455px] flex flex-col gap-[25px] overflow-hidden">
          <div className="flex justify-center">
            <Link to="/">
              <img src={tingoai} alt="" className="w-[154px] h-[59px]" />
            </Link>
          </div>
          <div className="lg:w-[514px] h-[371px] border border-gray-700 bg-gradient-to-b from-[#797979CC] to-[#232A3E1A] bg-transparent rounded-3xl flex flex-col items-center justify-center gap-[20px]">
            <div className="w-[450px] h-[54px] flex flex-col justify-center items-center gap-[5px]">
              <h2 className="lg:text-[24px] text-[#E5E7EB] font-semibold">
                Enter email to get an OTP
              </h2>
              <p className="lg:text-[14px] text-[10px] text-[#A1A6B4] font-Poppins">
                Use your email to get an OTP for your password recovery
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="h-[150px] lg:w-[450px] w-[90%] flex flex-col gap-[24px]"
            >
              <div className="flex flex-col h-[80px] relative">
                <label
                  htmlFor=""
                  className="text-[#E5E7EB] text-[14px] font-poppins"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="lg:w-[450px] w-full h-[56px] px-4 py-3 text-2xl rounded-lg bg-gray-50 focus:outline-none"
                />
                <img
                  src={message}
                  alt=""
                  className="absolute right-6 bottom-9"
                />
                {errors.email && touched.email && (
                  <span className="text-red-500 text-sm">{errors.email}</span>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                } className='h-[55px] lg:w-[450px] w-[100%] rounded-lg text-white font-semibold py-4 font-Inter bg-[#F8872B] hover:bg-[#f58e39] transition duration-300`}
              >
                {isSubmitting ? <SpinnerMini /> : "Send Code"}
              </button>
            </form>
            <span className="flex justify-start lg:w-[450px] text-[10px] lg:text-[16px] md:text-[14px] w-[90%] text-[#E5E7EB] font-Inter gap-2">
              Click reset and check your E-mail for an{" "}
              <p className="text-[#F8872B]"> OTP</p>
            </span>
          </div>
          <div className="flex justify-center"></div>
        </div>
      </div>
    </>
  );
};

export default OtpMail;
