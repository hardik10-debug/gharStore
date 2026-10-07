import React from 'react'
import { Button } from '@/components/ui/button'
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";

const Contact = () => {
  return (
    <section className="w-full bg-wh py-12 border">
      <div className="max-w-3xl mx-auto px-6">

        {/* Intro */}
        <div>
          <p className="w-fit bg-red-100 rounded-2xl px-3 py-1 font-semibold text-sm text-red-700 mb-4 tracking-wide">
            GET IN TOUCH
          </p>

          <h1 className="text-3xl font-bold text-gray-800 mb-1">
            Contact Us
          </h1>

          <p className="text-gray-500 text-sm mb-6">
            The easiest way to reach us is through WhatsApp. We respond quickly
            and personally.
          </p>
        </div>

        <div className="bg-green-400 w-full rounded-2xl p-8 flex flex-col items-center justify-center text-white">
          <FaWhatsapp size={35} className='mb-2'/>

          <h2 className="text-2xl font-semibold">
            Chat on WhatsApp
          </h2>

          <p className="text-sm text-white mt-2 text-center max-w-lg">
            Ask us anything about products, availability, or delivery.
            We reply personally.
          </p>

          <a
            href="https://wa.me/919812345678"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="mt-4 bg-white text-green-500 hover:bg-green-100 rounded-xl px-6 py-3 font-semibold text-sm">
              Open WhatsApp
            </Button>
          </a>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

          <div className="bg-white p-6 rounded-2xl border">

            <FaPhoneAlt size={20} className='mb-2' />
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              Phone / WhatsApp
            </h2>

            <p className="text-gray-500 text-sm mb-1">
              +91 9812345678
            </p>

            <p className="text-gray-400 text-sm">
              Mon – Sat, 9 am – 8 pm
            </p>

          </div>

          {/* Location */}
          <div className="bg-white p-6 rounded-2xl border">

            <CiLocationOn size={20} className='mb-2' />
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              Location
            </h2>

            <p className="text-gray-500 text-sm mb-1">
              Serving local customers
            </p>

            <p className="text-gray-400 text-sm">
              Delivery details confirmed on WhatsApp
            </p>

          </div>

          {/* Business Hours */}
          <div className="bg-white rounded-2xl p-6 border md:col-span-2">

            <CiClock2  size={20} className='mb-2' />
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Business Hours
            </h2>

            <div className="grid grid-cols-2 gap-y-3 text-sm">

              <p className="text-gray-600">
                Monday – Friday
              </p>

              <p className="text-gray-600 text-right">
                9:00 am – 8:00 pm
              </p>

              <p className="text-gray-600">
                Saturday
              </p>

              <p className="text-gray-600 text-right">
                9:00 am – 6:00 pm
              </p>

              <p className="text-gray-600">
                Sunday
              </p>

              <p className="text-gray-600 text-right">
                Closed
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact