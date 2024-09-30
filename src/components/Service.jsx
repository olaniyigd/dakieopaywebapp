// ServiceComponent.js
import React from 'react';
import { FaTv, FaBolt, FaMobileAlt, FaDatabase, FaCreditCard, FaGift, FaPlane, FaRegHeart } from 'react-icons/fa'; // Import the icons you need
import { FaDiceSix } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";


const ServiceComponent = () => {
  // Define your data with icons
  const servicesData = [
    { icon: <FaTv className="text-3xl" />, text: 'Cable TV', description: 'Watch your favorite channels and shows with high-quality broadcast and streaming options available.' },
    { icon: <FaBolt className="text-3xl" />, text: 'Electricity', description: 'Reliable power supply to keep your home or business running efficiently and effectively.' },
    { icon: <FaMobileAlt className="text-3xl" />, text: 'Airtime', description: 'Recharge your mobile phone with ease to stay connected and enjoy uninterrupted communication.' },
    { icon: <FaDatabase className="text-3xl" />, text: 'Data Subscription', description: 'Get data for browsing, streaming, and staying online, tailored to your needs and usage.' },
    { icon: <FaCreditCard className="text-3xl" />, text: 'Loan', description: 'Access personal or business loans with flexible terms to support your financial needs and goals.' },
    { icon: <FaGift className="text-3xl" />, text: 'Gift Card', description: 'Purchase gift cards for a variety of stores and services, perfect for any occasion or recipient.' },
    { icon: <MdFlight className="text-3xl" />, text: 'Booking Flight', description: 'Book flights to destinations around the world with ease and convenience for your travel plans.' },
    { icon: <FaDiceSix className="text-3xl" />, text: 'Betting', description: 'Participate in exciting betting games with opportunities to win and enjoy various gaming experiences.' },
  ];

  return (
    <div className="container max-w-6xl mx-auto py-10 ">
      <div className="grid grid-cols-4 gap-8">
        {servicesData.map((service, index) => (
          <div key={index} className="flex flex-col items-center justify-center bg-gray-800 h-full px-6 py-[15%] rounded-lg">
            <span className="text-white text-center" >{service.icon}</span>
            <span className="text-center text-white">{service.text}</span>
            <span className="text-center text-white text-[14px] pt-8">{service.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceComponent;
