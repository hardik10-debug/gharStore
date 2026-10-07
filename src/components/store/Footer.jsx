import React from 'react'
import { FaHome } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-black text-white py-12 ">
      
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
        <div>
        <div className="w-fit">
        <div className="flex justify-center text-red-500">
        <FaHome size={28} />
        </div>

    <h1 className="font-bold text-2xl mb-2.5">
      GharStore
    </h1>
  </div>
</div>
            <p className='text-gray-400'>
              A small family business bringing quality household textiles
              to your home. Order easily through WhatsApp.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className='mb-2 font-medium text-lg'>
                Quick Links
            </h2>
            <div className='text-gray-400'>
            <p>Home</p>
            <p>Shop</p>
            <p>About</p>
            <p>Contact</p>
            </div>
          </div>

          {/* WhatsApp */}
          <div>
            <h2 className='mb-2 font-medium text-lg'>
                Order via WhatsApp
            </h2>
            <Button className='bg-green-500 hover:bg-green-600 cursor-pointer text-white font-medium py-4 px-5 rounded-xl'>
                <FaWhatsapp className='size-5' />
              Chat with us
            </Button>
            <p className='text-gray-400 text-sm mt-3'>
                +91 98765 43210 · Mon – Sat, 9 am – 8 pm
            </p>
          </div>

        </div>

      <footer className=' flex justify-between border-t border-gray-500 py-6 px-6 mt-8 text-sm text-gray-400 h-8'>
        <p>© 2026 GharStore. All rights reserved.</p>
        <p>Made with care for Indian households</p>
      </footer>
      </div>

    </div>
  )
}

export default Footer