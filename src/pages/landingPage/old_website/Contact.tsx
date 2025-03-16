import React from 'react'
import Header from '../../../layouts/ai/Header'
import Footer from '../../../layouts/ai/Footer'
import HeroTemplate from '../../../components/cards/HeroTemplate'
import CTA from '../../../components/landing/new/CTA-section'
import ContactForm from '../../../components/landing/old_website/ContactForm'


const Contact:React.FC = () => {
  return (
    <>
     <Header/>
     <div className='bg-fade-white grid gap-10 pb-10'>
      <HeroTemplate title='Contact Us' subtitle='Explore the best Tingo AI has to offer' />
        <ContactForm />
      <CTA />
     </div>
     <Footer/> 
    </>
  )
}

export default Contact
