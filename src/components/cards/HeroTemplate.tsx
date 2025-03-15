import React from 'react'
import herobg from "../../assets/images/old_tingo/herobg.jpeg";


interface HeroProps {
    title: string;
    subtitle: string;
}

const HeroTemplate:React.FC<HeroProps> = ({title,subtitle}) => {
  return (
    <div className="w-full px-4 md:px-[5%] 2xl:px-[8%] bg-primary relative flex justify-center items-center h-[400px] md:min-h-[600px] lg:min-h-[60vh] bg-cover md:bg-no-repeat" style={{
        backgroundImage: `url(${herobg})`,
      }}>
        <div className="bg-primary/40 backdrop-blur-md w-full h-full absolute top-0"></div>
        <div className="relative w-full h-full text-fade-white text-center place-content-center ">
        <h1 className='text-[42px] md:text-[56px] font-semibold font-Manrope'>~{title}~</h1>
        <p className='font-Manrope text-[#b8b8b8]'>{subtitle}</p>
      </div>
    </div>
  )
}

export default HeroTemplate
