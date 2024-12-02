// components/TopHeader.tsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';

const TopHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center bg-green py-2 md:px-16 border-b border-orange text-orange">
      <div className="hidden md:flex items-center space-x-6">
        <FaFacebookF className="text-xl hover:text-white cursor-pointer" />
        <FaTwitter className="text-xl hover:text-white cursor-pointer" />
        <FaInstagram className="text-xl hover:text-white cursor-pointer" />
      </div>
      <div className="flex items-center space-x-4 md:space-x-10 text-sm text-black">
        <div className="flex items-center space-x-1">
          <MdLocationOn className="hidden md:block text-lg text-orange" />
          <span className='hidden md:block text-white' >Old Batian Building  first floor along kimathi Street, opposite Q-Spot lounge.</span>
        </div>
        <div className="flex items-center space-x-1">
          <MdEmail className="text-xl text-orange" />
          <span className=' text-white'>info@pearsondrivingschool.co.ke</span>
          
        </div>
        <div className="flex items-center justify-center space-x-1">
          <MdPhone className="text-xl text-orange " />
          <span className='flex items-center justify-center text-white text-base font-semibold cursor-pointer'>074 683 4612</span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
