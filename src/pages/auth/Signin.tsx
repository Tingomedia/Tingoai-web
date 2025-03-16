import { FC } from 'react'
import { useFormik, FormikHelpers } from "formik";
import Yup from "yup";
import bg from "../../assets/images/gpt/authbg.png"
import tingoai from "../../assets/icons/tingo_ai_logo.png"
import dividers from "../../assets/icons/Dividers.png"
import { Link } from 'react-router-dom'
// import { toast } from "react-hot-toast";
import google from "../../assets/icons/google.png"
import message from "../../assets/icons/message.png"
import usePasswordToggle from "../../hooks/usePasswordToggle";
import SpinnerMini from "../../utils/libs/SpinnerMini";


interface FormValues {
    email: string;
    password: string;
}

//   const loginUrl = "/auth/login";
//   function formatRoute(str: string) {
//     return str.toLowerCase().replace(/ /g, "-");
//   }

const Signin: FC = (): JSX.Element => {
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();


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
    } = useFormik<{ email: string; password: string }>({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validate,
        onSubmit: handleFormSubmit,
    });


    return (
        <>
            <div className="relative w-full flex items-center justify-center py-6  min-h-screen bg-[#121826]">
                <div className="absolute bg-no-repeat bg-center"
                    style={{
                        backgroundImage: `url(${bg})`
                    }}
                ></div>
                <div className="lg:w-[514px] md:w-[60%] w-[90%] lg:h-[700px] flex flex-col gap-[25px] overflow-hidden">
                    <div className="flex justify-center">
                        <Link to='/'>
                        
                        <img src={tingoai} alt="" className='w-[154px] h-[59px]' />
                        </Link>
                    </div>
                    <div className="lg:w-[514px] lg:h-[596px] h-[500px] border border-gray-700 bg-gradient-to-b from-[#797979CC] to-[#232A3E1A] bg-transparent rounded-3xl flex flex-col items-center py-8 gap-[15px]">
                        <div className="lg:w-[450px] w-[90%] h-[54px] flex flex-col justify-center items-center gap-[5px]">
                            <h2 className='text-[24px] text-[#E5E7EB] font-semibold'>Sign in with your email</h2>
                            <p className='lg:text-[14px] text-[12px] text-[#A1A6B4] font-Poppins'>Use your email to sign in to your Tingo Media</p>
                        </div>
                        <button className='bg-white font-Poppins font-semibold lg:w-[450px] md:w-[90%] w-[90%] h-[55px] rounded-lg flex justify-center items-center gap-4'>
                            <img src={google} alt="" />
                            Continue with Google
                        </button>
                        <img src={dividers} alt="" className='w-[90%]' />
                        <form onSubmit={handleSubmit}

                            className='h-[228px] lg:w-[450px] w-[90%] flex flex-col gap-[24px]'>
                            <div className="flex flex-col h-[80px] relative">
                                <label htmlFor="email" className='text-[#E5E7EB] text-[14px] font-poppins'>Email</label>
                                <input
                                    id='email'
                                    type="email"
                                    name='email'
                                    placeholder='Enter your email'
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='lg:w-[450px] w-full h-[56px] px-4 py-3 text-2xl rounded-lg bg-gray-50 focus:outline-none'
                                />
                                <img src={message} alt="" className='absolute right-6 bottom-9' />
                                {errors.email && touched.email && (
                                    <span className="text-red-500 text-sm">{errors.email}</span>
                                )}
                            </div>
                            <div className="flex flex-col h-[80px] relative">
                                <label htmlFor="password" className='text-[#E5E7EB] text-[14px] font-poppins'>Password</label>
                                <input
                                    id="password"
                                    name="password"

                                    placeholder='Enter your password'
                                    className='lg:w-[450px] w-[100%] h-[56px] px-4 py-3 text-2xl rounded-lg bg-gray-50 focus:outline-none'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type={PasswordInputType}
                                    value={values.password}
                                />
                                <span className='absolute right-6 bottom-9'>{ToggleIcon}</span>
                                {errors.password && touched.password && (
                                    <span className="text-red-500 text-sm">{errors.password}</span>
                                )}
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center lg:gap-4 gap-2">
                                    <input type="checkbox" name="" id="" className="text-sky-600" />
                                    <p className='text-[#E5E7EB] lg:text-[14px] text-[10px] font-'>Remember me for 30 days</p>
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
                            className={`${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                                } className='h-[55px] lg:w-[450px] w-[100%] rounded-lg text-white font-semibold py-4 font-Inter bg-[#F8872B] hover:bg-[#f58e39] transition duration-300`}
                        >
                            {isSubmitting ? <SpinnerMini /> : "Sign In"}
                        </button>
                        </form>

                    </div>
                    <div className="flex justify-center">
                        <span className='text-[#A1A6B4] w-[268px] cursor-pointer h-[60px] bg-gradient-to-b from-[#797979CC] to-[#232A3E1A] bg-transparent border border-gradient-to-r from-[#797979CC] to-[#232A3E1A] hover:bg-gradient-to-r from-[#797979CC] to-[#232A3E1A] flex justify-center items-center gap-2 rounded-full text-[14px]'>Don't have an account?
                            <Link to="/signup" className='text-[#F8872B]'>
                                Sign Up
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin