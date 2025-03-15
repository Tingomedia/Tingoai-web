import { Link } from "react-router-dom";
import birdbg from "../../../assets/images/old_tingo/tingobg-bird.svg";
export default function CTASection() {
  return (
    <section className="w-full py-16 text-white">
      <div className="w-11/12 md:w-5/6 2xl:container mx-auto px-4">
        <div className="relative bg-[#1e293b]/50 w-full rounded-[24px] p-16 backdrop-blur-sm border border-[#D3D3D31A]/10 overflow-hidden h-full min-h-[390px] flex justify-center items-center">
          {/* Orange glow effect */}
          <img
            className="w-[300px] h-[220px] object-contain absolute top-0 left-5  blur-[10px]"
            src={birdbg}
            alt="Bird"
          />
          <div className="absolute top-0 right-10 w-[300px] h-full bg-gradient-to-tl to-[#F8872B] from-[#0E0EFF] blur-[80px] opacity-50"></div>

          <div className="relative z-10 h-full flex flex-col justify-center items-center gap-5 text-center ">
            <span className="inline-block px-4 py-2 text-[14px] font-medium tracking-wide bg-custom-gradient rounded-full border border-[#C4C4C41A]/20">
              Tingo AI
            </span>

            <h2 className="text-[32px] md:text-[48px] font-semibold text-[#E5E7EB]">
              Ready to Power your Future?
            </h2>

            <p className="text-[#A1A6B4] md:text-[20px]">
              Explore some of our products now
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[600px] justify-center">
              <Link
                to="/studio"
                className="py-5 px-7 rounded-full border border-[#C4C4C41A]/10 bg-[#1e293b]/80 text-white text-center hover:bg-[#1e293b] transition-all duration-300"
              >
                Try TingoGPT
              </Link>

              <Link
                to="#"
                className="py-5 px-7 rounded-full border border-[#C4C4C41A]/10 bg-custom-gradient text-white text-center hover:bg-[#4B5563] transition-all duration-300"
              >
                Join our Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
