'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md z-100 fixed w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-[30px] font-bold text-gray-800">
          <Link href="/">DakieoPay</Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-800 hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-gray-300">
            About
          </Link>
          <Link href="/faq" className="text-gray-800 hover:text-gray-300">
            FAQ
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-gray-300">
            Contact Us
          </Link>
        </div>

        {/* Download Button */}
        <div className="hidden lg:flex">
          <Link href="/download" className="bg-gray-800 text-white px-4 py-2 rounded-[10px] hover:bg-gray-700">
            Download App
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none focus:text-gray-800"
          >
            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 shadow-lg transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden w-1/2 z-50`}
      >
        <div className="px-4 pt-4 pb-3 space-y-2">
        <div className="text-[30px] font-bold text-white">
          <Link href="/">DakieoPay</Link>
        </div>

          <Link href="/" className="block text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="block text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/faq" className="block text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>
            FAQ
          </Link>
          <Link href="/contact" className="block text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
          <Link href="/download" className="block bg-white text-gray-800 px-4 py-2 rounded-[10px] hover:bg-gray-300" onClick={() => setIsOpen(false)}>
            Download App
          </Link>
        </div>
      </div>
    </nav>
  );
}
