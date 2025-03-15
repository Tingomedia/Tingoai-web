import React from "react";
import Footer from "../../layouts/ai/Footer";
import Header from "../../layouts/ai/Header";
import CTA from "../../components/landing/home/CTA-section";
import FAQs from "../../components/landing/home/FAQs";

const DataCenter: React.FC = () => {
  return (
    <>
      <Header />
      <div className=" grid gap-10 py-10 pt-[80px] md:pt-[120px]">
        <div className="py-20 grid gap-6 text-center container mx-auto px-[5%] lg:px-[10%] ">
        <h1 className="font-semibold text-[32px] sm:text-[40px] font-Manrope">About Tingo AI's Data Centers</h1>
        <p className="text-fade-gray-label text-[16px] font-Manrope">At the heart of Tingo's revolutionary AI solutions lies our network of state-of-the-art data centers, engineered to deliver unprecedented computational power and reliability. Powered by advanced NVIDIA A100 GPU clusters and quantum-ready computing architecture, our facilities process AI workloads at petaflop scale, enabling everything from complex model training to real-time inference processing. Our infrastructure maintains an industry-leading 99.999% uptime guarantee, supported by N+2 redundancy across all critical systems and a robust 100 Gbps backbone network that ensures sub-millisecond latency for even the most demanding applications</p>
        <p className="text-fade-gray-label text-[16px] font-Manrope">Security and compliance form the cornerstone of our operations, with each facility maintaining ISO 27001 certification and SOC 2 Type II compliance. Our comprehensive security framework includes multi-layer physical security with 24/7 biometric access control, advanced DDoS protection, and a zero-trust security architecture. This robust security posture is complemented by our commitment to data privacy, ensuring HIPAA and GDPR compliance while providing the flexibility enterprise clients need to meet their specific regulatory requirements. Each client receives dedicated technical account management and round-the-clock expert support, ensuring seamless operation of their AI infrastructure.</p>
        <p className="text-fade-gray-label text-[16px] font-Manrope">Sustainability drives every aspect of our data center design and operations. Powered entirely by renewable energy sources, our facilities achieve an industry-leading Power Usage Effectiveness (PUE) of 1.1, setting new standards for eco-friendly AI infrastructure. Our advanced cooling systems utilize free air cooling technology and innovative waste heat recovery systems, minimizing environmental impact while maximizing operational efficiency. The combination of cutting-edge technology, comprehensive security, and sustainable practices makes Tingo's data centers the ideal foundation for enterprises looking to accelerate their AI initiatives while maintaining the highest standards of performance, reliability, and environmental responsibility.</p>
        </div>
        <FAQs />
        <CTA />
      </div>
      <Footer />
    </>
  );
};

export default DataCenter;
