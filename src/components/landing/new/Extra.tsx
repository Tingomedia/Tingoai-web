import Marquee from "react-fast-marquee"
import star from "../../../assets/images/new_tingo/Star 1.png";

const words = [
  "Fast",
  "Secure",
  "Reliable",
  "Responsible",
  "AI",
  "Crypto",
  "Future",
  "Fast",
  "Secure",
  "Reliable",
  "Responsible",
  "AI",
  "Crypto",
  "Future",
];

const Extra = () => {
  return (
    <div className="w-full 2xl:container mx-auto bg-fade-white overflow-hidden">
      <Marquee
        speed={50}
        pauseOnHover={true}
        loop={0}
        gradient={true}
        className="flex items-center"
      >
        {words.map((word, index) => (
          <div
            key={index}
            className="flex items-center min-w-max px-6 text-fade-black lg:text-[40px] font-semibold"
          >
            {word}
            {index !== words.length - 1 && (
              <img src={star} className="w-auto lg:h-[30px] pl-8" alt="star" />
            )}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Extra;
