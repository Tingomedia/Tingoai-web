import Marquee from "react-fast-marquee";
import star from "../../../assets/images/new_tingo/Star 1.png";

const words = [
  "TingoAI Radio 102.5 FM",
  "Powered by AI",
  "First AI Radio In Africa",
  "Request A Song now",
  "Ife Mi, Our AI OAP Will Play it",
  "Responsible AI",
  "The Future is here",
];

const RadioExtra = () => {
  return (
    <div className="w-full 2xl:container mx-auto bg-transparent overflow-hidden">
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
            className="flex items-center min-w-max px-6 text-tremor-brand-muted text-2xl md:text-[30px] font-semibold"
          >
            {word}
            {index !== words.length - 1 && (
              <img src={star} className="w-auto md:h-[50px] pl-8" alt="star" />
            )}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default RadioExtra;
