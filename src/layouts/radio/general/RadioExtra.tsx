import Marquee from "react-fast-marquee";

const words = [
  "First AI Radio In Africa",
  "The Future is here Tingo AI Radio 102.5 FM",
  "Powered by AI",
  "Request A Song now",
  "Ife Mi, Our AI OAP Will Play it",
];

const RadioExtra = () => {
  return (
    <div className="w-full relative bg-transparent overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/35 to-white/5 -z-10"></div>
      <Marquee
        speed={50}
        pauseOnHover={true}
        loop={0}
        className="flex gap-8 justify-evenly mx-auto text-[#2a3795] font-Cera font-medium py-4"
      >
        {words.map((word, i) => (
          <div
            key={i}
            className={`rounded-full px-8 mx-4 py-1 ${
              i == 0
                ? "bg-[#2a3795] text-white  font-normal"
                : i == 4
                ? "bg-[#ed8733] text-white font-normal"
                : "bg-white"
            } `}
          >
            {word}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default RadioExtra;
