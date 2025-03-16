import React from "react";
import logo from "../../assets/icons/tingo_ai_logo.png";
import { Linkedin, Instagram, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/company/tingo-media/",
      label: "LinkedIn",
    },
    {
      icon: <Instagram size={24} />,
      href: "https://www.instagram.com/tingoai_/profilecard/?igsh=d3E0cWFuNmZ6NXA4",
      label: "Instagram",
    },
    { icon: <Facebook size={24} />, href: "#", label: "Facebook" },
    {
      icon: <Twitter size={24} />,
      href: "https://x.com/TingoAi_?t=oziQKtSlUsVKKsIsz0m97A&s=09",
      label: "Twitter",
    },
  ];

  return (
    <footer className="bg-[#171D2D] text-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-[5%]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          {/* Logo and Info */}
          <div className="mb-6 md:mb-0">
            <Link to="/">
              <img
                src={logo}
                alt="Tingo logo"
                className="w-[150px] h-[64px] mb-4"
              />
            </Link>
            <p className="text-gray-300 font-Manrope mb-2 md:w-[388px]">
              Tingo AI combines innovative AI technology with responsible
              practices to deliver AI-powered data center services and Africa's
              first AI-driven radio station.
            </p>
          </div>
          <div className="lg:w-[697px] w-full h-[240px] flex justify-between ">
            <ul className="lg:w-[211px] h-[204px] flex flex-col gap-[12px]">
              <li className="font-semibold text-[#E5E7EB] font-Poppins">
                Company
              </li>
              <li className="text-[#A1A6B4] font-semibold font-Inter cursor-pointer">
                About
              </li>
              <li className="text-[#A1A6B4] font-semibold font-Inter cursor-pointer">
                Products
              </li>
              <li className="text-[#A1A6B4] font-semibold font-Inter cursor-pointer">
                Community
              </li>
              <li className="text-[#A1A6B4] font-semibold font-Inter cursor-pointer">
                Team
              </li>
              <li className="text-[#A1A6B4] font-semibold font-Inter cursor-pointer">
                Contact
              </li>
            </ul>
            <ul className="lg:w-[211px] h-[204px] flex flex-col gap-[12px]">
              <li className="font-semibold text-[#E5E7EB] font-Poppins">
                Legal
              </li>
              <li className="text-[#A1A6B4] font-semibold font-Inter cursor-pointer">
                Terms
              </li>
              <li className="text-[#A1A6B4] font-semibold font-Inter cursor-pointer">
                Privacy
              </li>
              <li className="text-[#A1A6B4] font-semibold font-Inter cursor-pointer">
                Cookies
              </li>
              <li className="text-[#A1A6B4] font-semibold font-Inter cursor-pointer">
                Licenses
              </li>
              <li className="text-[#A1A6B4] font-semibold font-Inter cursor-pointer">
                Settings
              </li>
              {/* <li className="text-[#A1A6B4] font-semibold font-Inter cursor-pointer">
                Contact
              </li> */}
            </ul>
            <ul className="lg:w-[211px] h-[204px] flex flex-col gap-[12px]">
              <li className="text-[#E5E7EB] font-semibold font-Poppins">
                Socials
              </li>
              <li className="text-[#A1A6B4] font-semibold font-Inter cursor-pointer">
                Twitter
              </li>
              <li className="text-[#A1A6B4] font-semibold font-Inter cursor-pointer">
                LinkedIn
              </li>
              <li className="text-[#A1A6B4] font-semibold font-Inter cursor-pointer">
                Facebook
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="xl:text-[200px] text-[50px] font-Poppins font-semibold bg-gradient-to-r from-[#C9C9C9CC] via-[#C4C4C41A] 80% to-[#c4c4c402] bg-clip-text text-transparent">
            Tingo ai
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between pt-8 border-t border-t-gray-600/50">
          <div className="flex flex-col justify-between items-start md:items-center gap-4">
            <p className="text-gray-400 text-[14px] sm:text-[16px] font-Manrope">
              © 2025 TingoAI. All Rights Reserved.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex gap-6">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  to={social.href}
                  target="_blank"
                  className="text-white hover:text-secondary transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
