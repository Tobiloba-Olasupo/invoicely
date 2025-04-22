"use client"
import React from 'react'
import {
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from './ui/button'
import { useState } from 'react'

import {  
  Menu, 
  X, 
} from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <nav className="bg-white border-b border-gray-100 py-4 fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/">
                <span className="text-3xl font-semibold">invoicely</span>
              </Link>
              
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="hover:text-blue-600 transition font-semibold">
                Home
              </Link>
              <Link href="#why" className="hover:text-blue-600 transition font-semibold">
                Why Invoicely
              </Link>
              <Link href="#pricing" className="hover:text-blue-600 transition font-semibold">
                Pricing
              </Link>
              <Link href="#testimonials" className="hover:text-blue-600 transition font-semibold">
                Testimonials
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <SignedIn>
                <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 transition py-2" onClick={toggleMenu}>
                  <Button className="bg-blue-600 hover:bg-blue-700 w-full cursor-pointer" onClick={toggleMenu}>
                    Dashboard
                  </Button>
                </Link>
              </SignedIn>
              <SignedOut>
                <Link href="/sign-in" className="text-gray-700 hover:text-blue-600 transition">
                  Login
                </Link>
                <Link href="/sign-up">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Sign Up Free
                  </Button>
                </Link>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-gray-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              <SignedIn>
                <UserButton />
              </SignedIn>

            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white pt-2 pb-4 px-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="hover:text-blue-600 transition font-semibold">
                Home
              </Link>
              <Link href="#why" className="text-gray-700 hover:text-blue-600 transition py-2" onClick={toggleMenu}>
                Why Invoicely
              </Link>
              <Link href="#pricing" className="text-gray-700 hover:text-blue-600 transition py-2" onClick={toggleMenu}>
                Pricing
              </Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-blue-600 transition py-2" onClick={toggleMenu}>
                Testimonials
              </Link>
              <SignedIn>
                <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 transition py-2" onClick={toggleMenu}>
                  <Button className="bg-blue-600 hover:bg-blue-700 w-full" onClick={toggleMenu}>
                    Dashboard
                  </Button>
                </Link>
              </SignedIn>
              <div className="pt-4 flex flex-col space-y-3">
                <SignedOut>
                  <Link href="/sign-in" className="text-gray-700 hover:text-blue-600 transition py-2" onClick={toggleMenu}>
                    Login
                  </Link>
                  <Link href="/sign-up">
                    <Button className="bg-blue-600 hover:bg-blue-700 w-full" onClick={toggleMenu}>
                      Sign Up Free
                    </Button>
                  </Link>
                </SignedOut>
              </div>
            </div>
          </div>
        )}
      </nav>
  )
}

export default Header