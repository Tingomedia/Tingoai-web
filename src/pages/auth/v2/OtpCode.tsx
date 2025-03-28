import { FC } from 'react'
// import bg from "../../assets/images/gpt/authbg.png"
import bg from "../../assets/images/gpt/authbg.png"
import { useFormik } from "formik";
import * as Yup from "yup";
import tingoai from "../../assets/icons/tingo_ai_logo.png"
import { Link } from 'react-router-dom'
import lock from "../../assets/icons/lock.png"

const OtpCode: FC = (): JSX.Element => {

                // Validation for input data
                const validationSchema = Yup.object({
                    OtpCode: Yup.string()
                    .matches(/^\d{4}$/, "OTP must be exactly 4 digits") 
                    .required("OTP is required"),
                });

                // ✅ Formik Setup
    const formik = useFormik({
        initialValues: {
            otpCode: "", 
        },
        validationSchema,
        onSubmit: async (values) => {
            console.log("Submitted OTP:", values.otpCode);
        },
    });

    // ✅ Handle individual OTP inputs
    const handleOtpChange = (index: number, value: string) => {
        const otpArray = formik.values.otpCode.split("");
        otpArray[index] = value.replace(/\D/g, ""); // Remove non-digit input
        formik.setFieldValue("otpCode", otpArray.join("").slice(0, 4));
    };

    return (
        <>
            <div className="relative w-full flex items-center justify-center py-6  min-h-screen bg-[#121826]">
                <div className="absolute bg-no-repeat bg-center"
                    style={{
                        backgroundImage: `url(${bg})`
                    }}
                ></div>
                <div className="lg:w-[514px] md:w-[60%] w-[90%] lg:h-[672px] flex flex-col gap-[25px] overflow-hidden">
                    <div className="flex justify-center">
                        <Link to='/'>
                        
                        <img src={tingoai} alt="" className='w-[154px] h-[59px]'/>
                        </Link>
                    </div>
                    <div className="lg:w-[514px] h-[588px] border border-gray-700 bg-gradient-to-b from-[#797979CC] to-[#232A3E1A] bg-transparent rounded-3xl flex flex-col items-center justify-center gap-[20px]">
                        <div className="lg:w-[450px] w-[90%] text-center h-[225px] flex flex-col justify-center items-center gap-[5px]">
                            <img src={lock} alt="" />
                            <h2 className='text-[24px] text-[#E5E7EB] font-semibold'>We just emailed you</h2>
                            <p className='lg:text-[14px] text-[12px] text-[#A1A6B4] font-Poppins'>Please enter the code we sent to your email</p>
                        </div>
                        <form onSubmit={formik.handleSubmit} 
                        className='h-[200px] lg:w-[450px] md:w-[90%] flex flex-col gap-[24px]'>
                            <div className="flex flex-col h-[132px] relative gap-4 lg:w-[449px] md:w-full">
                                <label htmlFor="" className='text-[#E5E7EB] text-[14px] font-poppins'>Confirmation Code</label>
                                <div className="flex lg:gap-[9px] gap-1 md:justify-between">
                                    {Array.from({ length: 4 }).map((_, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            maxLength={1} 
                                            value={formik.values.otpCode[index] || ""}
                                            onChange={(e) => handleOtpChange(index, e.target.value)}
                                            onBlur={formik.handleBlur}
                                            className="lg:w-[106px] md:w-[60px] w-[40px] h-[95px] p-14 py-3 text-[60px] text-white rounded-lg bg-transparent border border-[#A1A6B4] focus:outline-none text-center"
                                        />
                                    ))}
                                </div>
                            </div>
                            {/* ✅ Hidden Formik Field for OTP */}
                            <input type="hidden" name="otpCode" value={formik.values.otpCode} />

                            {/* ✅ Display OTP Error */}
                            {formik.touched.otpCode && formik.errors.otpCode && (
                                <span className="text-red-500 text-sm text-center">{formik.errors.otpCode}</span>
                            )}
                        <button 
                        type='submit' 
                        className='h-[55px] lg:w-[450px] md:w-[100%] w-[100%] rounded-lg text-white font-semibold font-Inter bg-[#F8872B]'>
                            Create Account
                            </button>
                        </form>
                            <div className="flex gap-2 lg:w-[450px] md:w-[90%] w-[85%]">
                                <div className="flex items-center lg:gap-4 gap-2">
                                    <p className='text-[#E5E7EB] lg:text-[14px] text-[10px] font-Poppins'>Didn't get a code?</p>
                                </div>
                                <Link to="">
                                    <div className="lg:text-[14px] text-[10px] text-[#F8872B] hover:underline">

                                    Resend code
                                    </div>
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OtpCode