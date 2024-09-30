// components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold mb-4 md:mb-0">
            DakieoPay
          </div>
          
          {/* Menu Items */}
          <div className="flex flex-col md:flex-row md:space-x-8 mb-4 md:mb-0">
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact Us</a>
            <a href="#faq" className="hover:underline">FAQ</a>
          </div>
          
          {/* News Subscription */}
          <div className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Subscribe to our newsletter"
              className="px-4 py-2 mb-2 md:mb-0 md:mr-2 border border-gray-600 rounded"
            />
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
              Subscribe
            </button>
          </div>
        </div>
        
        {/* Legal Links */}
        <div className="mt-6 text-center">
          <a href="#terms" className="hover:underline mx-2">Terms of Service</a>
          <a href="#privacy" className="hover:underline mx-2">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
