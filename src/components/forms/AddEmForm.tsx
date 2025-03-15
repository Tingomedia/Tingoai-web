import { useForm, SubmitHandler } from "react-hook-form";
import { FC } from "react";

interface AddEmFormProps {
  onClose?: () => void;
}

interface EmployeeFormValues {
  fullName: string;
  email: string;
  role: string;
  status: string;
}

const AddEmForm: FC<AddEmFormProps> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmployeeFormValues>();

  const onSubmit: SubmitHandler<EmployeeFormValues> = (data) => {
    console.log("Employee Data:", data);
    onClose?.();
  };

  return (
    <div className="mx-auto">
      <div className="py-4 border-b w-full border-gray-300">
        <h2 className="text-[20px] font-bold text-block text-center">
          Add New Employee
        </h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 py-6 pt-10 px-[20px] "
      >
        <div>
          <label className="block text-[16px] text-gray-500 font-medium">Full Name</label>
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
          <label className="block text-[16px] text-gray-500 font-medium">Email Address</label>
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

        <div>
          <label className="block text-[16px] text-gray-500 font-medium">Role</label>
          <select
            {...register("role", { required: "Role is required" })}
            className="w-full border border-gray-500 p-3 rounded-lg"
          >
            <option value="">Select role</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="developer">Developer</option>
          </select>
          {errors.role && (
            <p className="text-red-500 text-[12px] ">{errors.role.message}</p>
          )}
        </div>

        <div>
          <label className="block text-[16px] text-gray-500 font-medium">Status</label>
          <select
            {...register("status", { required: "Status is required" })}
            className="w-full border border-gray-500 p-3 rounded-lg"
          >
            <option value="">Select status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          {errors.status && (
            <p className="text-red-500 text-[12px] ">{errors.status.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#2392C0]  text-white rounded-lg hover:bg-[#28A8DD] p-2 "
        >
          Invite Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmForm;
