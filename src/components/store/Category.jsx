import React from 'react'
import { Link } from 'react-router-dom'
const Category = () => {
  return (
    <section className="w-full py-12 bg-amber-50">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-2">
          Shop by Category
        </h2>

        <div className="w-full flex justify-between items-center mb-8">

          <p className="text-lg text-gray-500">
            Everything your home needs, in one place
          </p>

          <Link to="/shop"
            className="text-lg text-red-600 hover:underline"
          >
            View all
          </Link>

        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Bedsheets */}
          <div className="relative overflow-hidden rounded-2xl group">

            <img
              src="https://images.unsplash.com/photo-1722957533029-6b62a3826d05?w=700&h=700&fit=crop&auto=format"
              alt="Bedsheets"
              className="w-full h-60 object-cover object-[left_bottom] transition-transform duration-300 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Text */}
            <div className="absolute bottom-4 left-4 z-10">
              <p className="text-gray-300 text-sm font-medium ">
                3 PRODUCTS
              </p>

              <h3 className="text-xl font-bold text-white">
                Bedsheets
              </h3>
            </div>

          </div>

          {/* Towels */}
          <div className="relative overflow-hidden rounded-2xl group">

            <img
              src="https://images.unsplash.com/photo-1558505780-1e584fab3ede?w=700&h=700&fit=crop&auto=format"
              alt="Towels"
              className="w-full h-60 object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Text */}
            <div className="absolute bottom-4 left-4 z-10">
              <p className="text-gray-300 text-sm font-medium ">
                4 PRODUCTS
              </p>

              <h3 className="text-xl font-bold text-white">
                Towels
              </h3>
            </div>

          </div>

          {/* Kitchen Napkins */}
          <div className="relative overflow-hidden rounded-2xl group">

            <img
              src="https://images.unsplash.com/photo-1600294421265-c354b772e790?w=700&h=700&fit=crop&auto=format"
              alt="Kitchen Napkins"
              className="w-full h-60 object-cover object-[right_bottom] transition-transform duration-300 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Text */}
            <div className="absolute bottom-4 left-4 z-10">
              <p className="text-gray-300 text-sm font-medium ">
                5 PRODUCTS
              </p>

              <h3 className="text-xl font-bold text-white">
                Kitchen Napkins
              </h3>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Category