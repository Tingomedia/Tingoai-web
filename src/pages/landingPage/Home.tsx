import { FC } from "react";
import Header from "../../layouts/ai/Header";
import Hero from "../../components/landing/home/Hero";
import OurProduct from "../../components/landing/home/OurProduct";
import Guiness from "../../components/landing/home/Guiness";
import Footer from "../../layouts/ai/Footer";
import Testimonial from "../../components/landing/home/Testimonial";
import FAQSection from "../../components/landing/home/Faq-section";
import CTASection from "../../components/landing/home/CTA-section";
import TrustedBy from "../../components/landing/home/TrustedBy";
import Extra from "../../components/landing/home/Extra";

const Home: FC = () => {
  return (
    <>
      <Header />
      <div className="bg-primary/90">
        <Hero />
      </div>
      <Guiness />
      {/* <OurProduct/> */}
      <div className="bg-[#121826] w-full grid gap-10 pb-[40px]">
        <OurProduct />
        <Testimonial />
        <div className="bg-[#171D2D]">
          <FAQSection />
        </div>
        <CTASection />
        <Extra />
        <TrustedBy />
        <div></div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
