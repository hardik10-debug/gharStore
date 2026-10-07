import React from 'react'
import { Button } from "@/components/ui/button"
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Hero = () => {

    const navigate = useNavigate()
  return (
    <section className="w-full bg-amber-50 py-12 border">


      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Left Side */}
          <div className="flex flex-col">

            <h2 className="w-fit bg-red-100 rounded-2xl px-3 font-medium text-lg text-red-600 mb-4 tracking-widest">
              Quality Household Products
            </h2>

            <h1 className="text-4xl font-bold mb-4">
              Comfort for every corner of your home
            </h1>

            <p className="text-lg">
              Trusted bedsheets, towels, and kitchen napkins — sourced carefully
              and delivered through a simple WhatsApp order.
            </p>

            {/* Buttons */}
            <div className="flex gap-2 mt-6">
              <Button className="bg-red-700 hover:bg-red-500 text-white p-6 rounded-md text-lg cursor-pointer tracking-tighter font-normal"
                onClick={() => navigate('/shop')}
              >
                Shop Now
              </Button>

<Button className="bg-green-500 hover:bg-green-600 text-white font-normal p-6 rounded-md text-lg cursor-pointer tracking-tight gap-2">
  <FaWhatsapp className='size-6' />
  Chat with us
</Button>
            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center items-center">

            <img
              src="https://cdn.vaaree.com/tenant-123/assets/ast_545b6c71b9844e6f919f53aeef6c376d/variants/product_card_420x483_webp.webp"
              alt="Hero Image"
              
              className="rounded-lg shadow-lg w-full h-auto max-w-md"
              />

      </div>
           
          </div>

        </div>
              </section>
  )
}

export default Hero