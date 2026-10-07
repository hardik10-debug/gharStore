import React from 'react'
import { Button } from '@/components/ui/button'
import { FaWhatsapp } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

import products from '@/data/products'
import ProductCard from './ProductCard'

const FeaturedProducts = () => {
  const navigate = useNavigate()

  const featuredProducts = products.slice(0, 4)

  return (
    <section className="w-full py-12 bg-amber-50">

      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-2">
          Featured Products
        </h2>

        {/* Subtitle + Shop All */}
        <div className="w-full flex justify-between items-center mb-8">
          <p className="text-lg text-gray-500">
            Our most popular picks this season
          </p>

          <Link
            to="/shop"
            className="text-lg text-red-600 hover:underline"
          >
            Shop all
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

        {/* WhatsApp CTA */}
        <div className="mt-20 w-full rounded-2xl bg-amber-700 p-10">

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

            {/* Left Content */}
            <div>
              <h2 className="text-3xl font-bold text-white">
                Prefer to order by WhatsApp?
              </h2>

              <p className="mt-2 max-w-xl text-sm text-white/80">
                Browse products, add to cart, and we will generate a
                ready-to-send WhatsApp message with your order — or just
                chat with us directly.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col gap-3 items-start md:items-end">

              <Button className="w-60 h-12 bg-white text-amber-700 hover:bg-gray-100 cursor-pointer">
                <FaWhatsapp className="size-5" />
                Chat with us on WhatsApp
              </Button>

              <Button
                variant="outline"
                className="w-60 h-12 border-2 border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white cursor-pointer"
                onClick={() => navigate('/shop')}
              >
                Browse products first
              </Button>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default FeaturedProducts