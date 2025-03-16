import layers from '../../../assets/images/old_tingo/Company logo.svg'
import sisyphus from '../../../assets/images/old_tingo/Company logo (1).svg'
import circooles from '../../../assets/images/old_tingo/Company logo (2).svg'
import catalog from '../../../assets/images/old_tingo/Company logo (3).svg'
export default function TrustedBy() {
    return (
        <section className="w-11/12 mx-auto px-4 bg-[#171D2D] py-[50px] rounded-[16px]">
          <div className="text-center space-y-12">
            <p className="text-white font-Inter font-medium">
              Trusted by <span className="text-white text-[24px] font-semibold">4,000+</span> users round the globe and backed by
            </p>
  
            <div className="flex flex-wrap gap-8 items-center justify-center md:justify-between mx-auto max-w-[1018px] px-5">
            <img src={layers} alt="layers" className='w-[80px] md:w-full  md:max-w-[150px]' />
            <img src={sisyphus} alt="layers" className='w-[80px] md:w-full  md:max-w-[150px]' />
            <img src={circooles} alt="layers"  className='w-[80px] md:w-full  md:max-w-[150px]'/>
            <img src={catalog} alt="layers"  className='w-[80px] md:w-full  md:max-w-[150px]'/>
            </div>
          </div>
      </section>
    )
  }
  
  