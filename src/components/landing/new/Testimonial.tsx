import { QuoteIcon } from "lucide-react";
import Title from "../../../utils/libs/Title";
import { useState, useRef, useEffect } from "react";
import client1 from "../../../assets/icons/client-1.png.svg";
import client2 from "../../../assets/icons/client-2.png.svg";
import client3 from "../../../assets/icons/client-3.png.svg";
import rating from "../../../assets/icons/fasle-rating.svg";
import shadow from "../../../assets/images/new_tingo/shadow2.svg";

type Testimonial = {
  id: number;
  name: string;
  position: string;
  quote: string;
  avatar: string;
  rating: number;
};

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Moshrarf Hossan",
      position: "UI UX Designer",
      quote:
        "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
      avatar: client1,
      rating: 5,
    },
    {
      id: 2,
      name: "Eh Jewel",
      position: "Senior Themes CEO",
      quote:
        "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
      avatar: client2,
      rating: 5,
    },
    {
      id: 3,
      name: "Arif Rahman",
      position: "Junior Web Developer",
      quote:
        "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
      avatar: client3,
      rating: 5,
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const goToSlide = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);

    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
      <section className="container w-11/12 mx-auto py-8">
        <div className="bg-slate-800/50 w-full rounded-[16px] p-8 backdrop-blur-sm bg-custom-gradient border border-[#D3D3D31A]/10 grid gap-[48px]">

        {/* Orange glow effect */}
        <img
        src={shadow}
        alt="Black overlay"
        className="absolute right-0 bottom-0 h-full  object-cover"
      />
          <div className="mb-10 text-center">
            <Title>Testimonial</Title>
            <h2 className="text-[24px] md:text-[40px] font-semibold my-4 text-[#E5E7EB]">
              What Our Clients Say
            </h2>
            <p className="text-[#A1A6B4] font-Inter text-[20px]">
              Everything you need to know about the product and billing.
            </p>
          </div>

          <div className="relative overflow-hidden" ref={testimonialRef}>
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  {/* Grid Layout: 1 Column on Mobile, 3 on Desktop */}
                  <div className="grid grid-cols-1 md:hidden gap-[62px] pr-8">
                    <div className="flex flex-col items-left text-left gap-6">
                      {/* Avatar */}
                      <div className="w-[71px] h-[71px] rounded-full overflow-hidden bg-pink-200 flex items-center justify-center">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={71}
                          height={71}
                          className="object-cover"
                        />
                      </div>

                      {/* Quote */}
                      <p className="font-inter italic text-[17px] text-[#A1A6B4] leading-[25px]">
                        {testimonial.quote}
                        <span className="text-[#F8872B] font-extrabold text-[25px] font-Manrope inline-block">
                          <QuoteIcon />
                        </span>
                      </p>

                      {/* Name & Position */}
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-medium text-[17px] font-roboto text-[#E5E7EB]">
                            {testimonial.name}
                          </h4>
                          <p className="text-[12px] text-[#A1A6B4] font-inter">
                            {testimonial.position}
                          </p>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center justify-center my-3">
                          <img src={rating} alt="rating" />
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-[62px] gap-y-[100] pr-8">
                    {testimonials.map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className="flex flex-col items-left text-left gap-6"
                      >
                        <div className="w-[71px] h-[71px] rounded-full overflow-hidden bg-pink-200 flex items-center justify-center">
                          <img
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={71}
                            height={71}
                            className="object-cover"
                          />
                        </div>
                        <p className="font-inter italic text-[17px] text-[#A1A6B4] leading-[25px]">
                          {testimonial.quote}
                          <span className="text-[#F8872B] font-extrabold text-[25px] font-Manrope inline-block">
                            <QuoteIcon />
                          </span>
                        </p>
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-meduim text-[17px] font-roboto text-[#E5E7EB]">
                              {testimonial.name}
                            </h4>
                            <p className="text-[12px] text-[#A1A6B4] font-inter ">
                              {testimonial.position}
                            </p>
                          </div>

                          <div className="flex items-center justify-center my-3">
                            <img src={rating} alt="rating" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="flex justify-center gap-4 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 mx-1 rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-[#F8872B] w-3"
                    : "bg-slate-600 border  border-[#F8872B]"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
  );
}
