import React from 'react'
import { Button } from '@/components/ui/button'
import { FaWhatsapp } from "react-icons/fa";

const About = () => {
  return (
        <section className="w-full bg-white py-12 border">
      <div className="max-w-3xl mx-auto px-6">

        <div>
          <p className="w-fit bg-red-100 rounded-2xl px-3 py-1 font-semibold text-sm text-red-700 mb-4 tracking-wide">
            Our Story
          </p>

          <h1 className="text-3xl font-bold text-gray-800 mb-5">
            A family business built on trust
          </h1>

          <p className="text-red-400 text-sm mb-10">
            We are a small, family-run household products business. What started as sharing product photos on WhatsApp Status with friends and neighbours has grown into a little store we are proud of.
          </p>
          <img src='https://images.unsplash.com/photo-1722957533029-6b62a3826d05?w=900&h=400&fit=crop&auto=format'
          
          className='object-cover rounded-2xl mb-10'
          />

          <h1 className="text-lg font-bold text-gray-800 mb-1">
            What we sell
          </h1>

          <p className="text-red-400 text-sm mb-10">
            We specialise in household textiles — bedsheets, towels, and kitchen napkins — sourced from trusted wholesalers who have supplied quality goods for decades. Every product we list is something we have personally checked and use in our own homes.
          </p>

          <h1 className="text-lg font-bold text-gray-800 mb-1">
            Why WhatsApp?
          </h1>

          <p className="text-red-400 text-sm mb-10">
            Our customers are real people, not anonymous accounts. Many of them are friends, family, and neighbours who already know us. WhatsApp lets us confirm every order personally, answer questions honestly, and make sure you receive exactly what you want.
          </p>

          <h1 className="text-lg font-bold text-gray-800 mb-1">
            Our promise
          </h1>

          <p className="text-red-400 text-sm mb-10">
            We will never show you the purchase price of our products, but we will always give you a fair selling price. We stand behind the quality of everything we sell. If something is wrong, just message us — we will sort it out.
          </p>
          
          <div
          className='bg-amber-50 w-full rounded-2xl p-8 mt-4'>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-">
            <div>

            <h2 className="text-lg font-bold text-gray-800 mb-1">
            Have a question?
          </h2>
            
          <p className="text-red-400 text-sm  font-light">
            We are happy to chat on WhatsApp or help you choose the right product.</p>
            </div>

            <div className='flex flex-col sm:flex-row md:justify-end gap-3 mt-5'>

             <Button className="bg-green-500 hover:bg-green-600 text-white rounded-xl px-5 py-5 font-semibold text-sm">
        <FaWhatsapp className='size-5'/>
        Chat with us
      </Button>

      <Button className="bg-amber-700 hover:bg-amber-800 text-white rounded-xl px-5 py-5 font-semibold text-sm">
        Browse products
      </Button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About