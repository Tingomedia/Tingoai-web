import { FC } from "react";
import Header from "../../layouts/ai/Header";
import Hero from "../../components/landing/new/Hero";
import OurProduct from "../../components/landing/new/OurProduct";
import Guiness from "../../components/landing/new/Guiness";
import Footer from "../../layouts/ai/Footer";
import Testimonial from "../../components/landing/new/Testimonial";
import FAQSection from "../../components/landing/new/Faq-section";
import CTASection from "../../components/landing/new/CTA-section";
// import TrustedBy from "../../components/landing/new/TrustedBy";
import Extra from "../../components/landing/new/Extra";

const Home: FC = () => {
  return (
    <>
      <Header />
      <div className="bg-primary/90">
        <Hero />
      </div>
      <Guiness />
      {/* <OurProduct/> */}
      <div className="bg-[#121826] w-full pb-[40px]">
        <OurProduct />
        <Testimonial />
        <div className="bg-[#171D2D]">
          <FAQSection />
        </div>
        <CTASection />
        <Extra />
        {/* <TrustedBy /> */}
        <div></div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
