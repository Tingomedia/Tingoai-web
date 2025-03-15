import Img1 from "../../assets/icons/image 7.png";

interface AddEmFormProps {
  onClose?: () => void;
}
const TingoModal: React.FC<AddEmFormProps> = () => {
  return (
    <div className="h-[420px] px-16">
      <h1 className="text-[#E5E7EB] text-[20px]">Tell us more about you</h1>
      <div className="py-16">
        <img src={Img1} alt="" className="w-[150px] m-auto pb-8" />
        <p className="text-[16px] text-[#A1A6B4]">
          To personalize your experience, please let us know your age category.
        </p>
      </div>
      <div className="w-full flex gap-20 justify-center pt-0">
        <button className="px-8 xl:px-20 py-8 lg:w-[250px] xl:text-[16px] text-center text-lg md:text-xl font-poppins border border-fade-gray rounded-xl hover:bg-primary-200 text-white shadow-inner-custom">
          I am an adult
        </button>
        <button className="px-8 xl:px-20 py-8 lg:w-[250px] xl:text-[16px] text-center text-lg bg-primary-200 text-white md:text-xl font-poppins border border-fade-gray rounded-xl  hover:bg-fade-gray/40 hover:shadow-inner-custom">
          I am a teenager
        </button>
      </div>
      <p className="text-[12px] text-white mt-8">
        By selecting an option, you agree to Tingo AI{" "}
        <span className="text-primary-200">Terms & Conditions</span>
      </p>
    </div>
  );
};

export default TingoModal;
