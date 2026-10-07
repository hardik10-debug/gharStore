import React from 'react'
import { Button } from '@/components/ui/button'

const ProductCard = ({ product }) => {
  return (
    <div className="w-full overflow-hidden rounded-xl border bg-white">

      {/* Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-square object-cover"
        />

        {/* Brand */}
        <span className="absolute top-3 left-3 rounded-md bg-white px-2 py-1 text-xs font-medium text-gray-800">
          {product.brand}
        </span>

        {/* Unavailable */}
        {!product.available && (
          <span className="absolute bottom-3 left-3 rounded-md bg-black px-2 py-1 text-xs font-medium text-white">
            Currently unavailable
          </span>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-col gap-3 p-4">

        <h3 className="font-medium text-gray-800">
          {product.name}
        </h3>

        <p className="text-lg font-bold text-amber-700">
          ₹{product.price}
        </p>

        {product.available ? (
          <Button className="w-full bg-amber-600 hover:bg-amber-700 cursor-pointer">
            Add to Cart
          </Button>
        ) : (
          <Button
            disabled
            className="w-full bg-gray-100 text-gray-500 "
          >
            Unavailable
          </Button>
        )}

      </div>
    </div>
  )
}

export default ProductCard