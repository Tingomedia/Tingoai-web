import extra from '../../../assets/images/old_tingo/extra.svg'
import Marquee from "react-fast-marquee";


const MarqueeSlider = () => {

  return (
    <>
      <Marquee
        speed={50}           
        gradient={false}      
        pauseOnHover={true}  
        loop={0} 
      >
              <img
                src={extra} 
                alt="Extras"
                className="w-full animate-fadeInDrop1"
                loading="lazy"
              />
      </Marquee>
    </>
  );
}

export default MarqueeSlider;