"use client"
import { useState, useEffect } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { ImAndroid } from "react-icons/im";
import { FaApple } from "react-icons/fa";


const data = [
  {
    text: "Simplify and Save",
    text2: "Simplify your life with our secure bill payment app—pay all your bills in one go. Avoid late fees with automatic reminders and scheduled payments. Download today and enjoy peace of mind!",
    imageUrl: "/iPhone13.png", // Replace with your image URLs
  },
  {
    text: "All-in-One Bill Management",
    text2: "Manage all your bills in one convenient app—fast, secure, and reliable. Never miss a due date or worry about late fees again. Download today and simplify your financial life!",
    imageUrl: "/iPhone13Pro.png", // Replace with your image URLs
  },
  {
    text: "Effortless Bill Payments",
    text2: "Pay your bills effortlessly, anytime, anywhere, with just a few taps. Our app offers top-notch security and real-time tracking, so you're always in control. Download now and experience stress-free bill payments!",
    imageUrl: "/iPhone15Pro(1).png", // Replace with your image URLs
  },
  {
    text: "Seamless Payment Solutions",
    text2: "No more juggling multiple payment portals—our app brings all your bills together in one place. Safe, easy, and designed with you in mind. Get started today and enjoy the convenience of seamless payments!",
    imageUrl: "/iPhone15Pro.png", // Replace with your image URLs
  },
];

export default function SlidingContent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 7000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="lg:flex lg:flex-row flex-col lg:justify-center bg-gray-800 items-center pt-20">
      <div className="w-full max-w-6xl mx-auto lg:flex lg:flex-row lg:items-center flex-col-reverse space-x-8 p-4">
        <div className="lg:w-1/2 w-full flex flex-col gap-5">
          <p className="text-[25px] w-[50%] text-white font-semibold">{data[currentIndex].text}</p>
          <div className='flex flex-col gap-3'>
          <p className="text-[14px] font-[200] text-white">{data[currentIndex].text2}</p>
          <div className='flex items-center gap-5'>
          <p className='bg-white text-gray-800 w-[30%] hover:bg-gray-300 p-3 rounded-[10px] flex items-center gap-4 cursor-pointer'> <ImAndroid />   Download <FaLongArrowAltRight /></p>
          <p className='bg-white text-gray-800 w-[30%] hover:bg-gray-300 p-3 rounded-[10px] flex items-center gap-4 cursor-pointer'> <FaApple />    Download <FaLongArrowAltRight /></p>
          </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <img
            src={data[currentIndex].imageUrl}
            alt="Sliding Content"
            className="w-full h-auto rounded-lg transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}
