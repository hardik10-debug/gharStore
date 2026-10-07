import React, { useState } from 'react'
import { FaShoppingCart, FaHome } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from '@/components/ui/sheet'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const navLinkClass = ({ isActive }) =>
    `transition-colors ${
      isActive
        ? 'text-amber-700 font-semibold'
        : 'text-amber-600 hover:text-amber-800'
    }`

  return (
    <header className="w-full bg-white text-black border-b">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="grid grid-cols-3 items-center h-20">

          {/* Logo */}
          <NavLink to="/" className="w-fit cursor-pointer">
            <div className="w-fit">
              <div className="flex justify-center text-red-500">
                <FaHome size={24} />
              </div>

              <h1 className="font-bold text-xl md:text-2xl">
                GharStore
              </h1>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center gap-8 font-medium text-lg">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={navLinkClass}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Cart + Mobile Menu */}
          <div className="flex justify-end items-center gap-4">

            {/* Cart */}
            <Button
              type="button"
              aria-label="Shopping cart"
              className="hover:text-amber-700 transition-colors cursor-pointer"
            >
              <FaShoppingCart size={22} />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  type="button"
                  aria-label="Open menu"
                  className="md:hidden hover:text-amber-700 transition-colors cursor-pointer"
                >
                  <RxHamburgerMenu size={26} />
                </Button>
              </SheetTrigger>

              <SheetContent side="right">

                <SheetHeader>
                  <SheetTitle>GharStore</SheetTitle>
                  <SheetDescription>
                    Explore our store
                  </SheetDescription>
                </SheetHeader>

                <nav className="flex flex-col gap-6 mt-8 px-4 text-lg font-medium">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className={navLinkClass}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </nav>

              </SheetContent>
            </Sheet>

          </div>

        </div>

      </div>
    </header>
  )
}

export default Navbar