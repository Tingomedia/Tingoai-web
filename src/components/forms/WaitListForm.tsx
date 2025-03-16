import { useForm, SubmitHandler } from "react-hook-form";
import { FC } from "react";
import { Link } from "react-router-dom";
import { FaListCheck } from "react-icons/fa6";

interface WaitListFormProps {
  onClose?: () => void;
}

interface WaitListFormValues {
  fullName: string;
  email: string;
  role: string;
  status: string;
}

const WaitListForm: FC<WaitListFormProps> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WaitListFormValues>();

  const onSubmit: SubmitHandler<WaitListFormValues> = (data) => {
    console.log("Joining Waitlist...", data);
    onClose?.();
  };

  return (
    <div className="w-full mx-auto">
      <div className="w-full mx-auto text-center min:h-[420px] 2xl:px-16">
      <div className="py-16">
        <div className="flex justify-center">
        <div className="w-[60px] h-[60px] md:w-[150px] md:h-[150px] bg-primary-200/80 flex justify-center items-center rounded-full">
        <FaListCheck className="w-16 h-16 md:w-40 md:h-40 text-white p-2"/>
        </div>
        </div>
        <div className="py-4 w-full border-gray-300">
        <h2 className="text-[20px] md:text-[30px] font-bold text-block text-center text-primary-200 px-4">
        Join our exclusive waitlist today
        </h2>
      </div>
        <p className="text-[16px] md:text-[20px] text-[#E5E7EB] font-semibold px-8">
        And be the First to Experience the Future with Tingo AI powered products.</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <div>
          <label className="block text-[16px] text-white font-semibold text-start">Full Name</label>
          <input
            {...register("fullName", {
              required: "Full name is required",
              minLength: {
                value: 2,
                message: "Full name must be at least 2 characters",
              },
            })}
            className="w-full border border-gray-500 p-3 rounded-lg"
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <p className="text-red-500 text-[12px] ">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-[16px] text-white font-semibold text-start">Email Address</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className="w-full border border-gray-500 p-3 rounded-lg"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-[12px] ">{errors.email.message}</p>
          )}
        </div>

      </form>
      <div className="w-full pt-8">
        <button className="w-full p-8 xl:px-20 text-center text-lg bg-primary-200 text-white md:text-[1.8rem] font-poppins border border-fade-gray rounded-xl  hover:bg-fade-gray/40 hover:shadow-inner-custom font-bold">
        Join Now
        </button>
      </div>
      <p className="text-[12px] text-white mt-8">
        Do you want to know more about Tingo AI? {" "}
        <Link to="" className="text-primary-200"><b className="font-bold text-primary-200 underline">Explore...</b></Link>
      </p>
    </div>
    </div>
  );
};

export default WaitListForm;
