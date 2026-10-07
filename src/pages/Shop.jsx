import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import products from '../data/products'
import ProductCard from '../components/store/ProductCard'

const categories = [
  { label: 'All Products', value: 'all' },
  { label: 'Bedsheets', value: 'bedsheets' },
  { label: 'Towels', value: 'towels' },
  { label: 'Kitchen Napkins', value: 'kitchen-napkins' },
]

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        )

  const availableCount = filteredProducts.filter(
    (product) => product.available
  ).length

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h1 className="text-4xl font-bold">
          Shop
        </h1>

        <p className="mt-1 text-gray-500">
          {availableCount} products available
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mt-6">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={
                activeCategory === category.value
                  ? 'default'
                  : 'outline'
              }
              onClick={() => setActiveCategory(category.value)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t mt-6" />

        {/* Product Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Shop