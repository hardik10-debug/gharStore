import React from 'react'
import Hero from "../components/store/Hero";
import BenefitStrip from "../components/store/BenefitStrip";
import Category from '@/components/store/Category';
import FeaturedProducts from '@/components/store/FeaturedProducts';
const Home = () => {
  return (
    <>
      <Hero />
      <BenefitStrip />
      <Category />
      <FeaturedProducts />
    </>
  )
}

export default Home