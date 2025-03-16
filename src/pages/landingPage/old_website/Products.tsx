import React from 'react'
import Header from '../../../layouts/ai/Header'
import Footer from '../../../layouts/ai/Footer'
import HeroTemplate from '../../../components/cards/HeroTemplate'
import ProductGrid from '../../../components/landing/old_website/product/ProductGrid'
import OurProducts from '../../../components/landing/old_website/product/OurProducts'

const Products:React.FC = () => {
  return (
    <>
     <Header/>
     <div className='bg-fade-white grid gap-10 pb-10'>
      <HeroTemplate title='Our Products' subtitle='Explore the best Tingo AI has to offer' />
      <ProductGrid />
     </div>
     <div className="my-16">
      <OurProducts/>
     </div>
     <Footer/> 
    </>
  )
}

export default Products
