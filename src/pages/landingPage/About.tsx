import React from 'react'
import Footer from '../../layouts/ai/Footer'
import HeroTemplate from '../../components/cards/HeroTemplate'
import CTA from '../../components/landing/home/CTA-section'
import FAQs from '../../components/landing/home/FAQs'
import Overview from '../../components/landing/about/Overview'
import Header from '../../layouts/ai/Header'
import Values from '../../components/landing/about/Values'

const Contact:React.FC = () => {
  return (
    <>
     <Header/>
     <div className='bg-fade-white grid gap-10 pb-10 '>
      <HeroTemplate title='About Us' subtitle='Explore the best Tingo AI has to offer' />
      <Overview />
      <Values/>
      <FAQs />
      <CTA />
     </div>
     <Footer/> 
    </>
  )
}

export default Contact
