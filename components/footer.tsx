import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaLongArrowAltRight } from 'react-icons/fa';
import { SlCalender } from "react-icons/sl";

const Footer: React.FC = () => {
  return (
    <footer className="bg-oramge-shade py-20">
      <div className="container mx-auto px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">About Company</h3>
          <p className="text-gray-600 mb-4">
            Dride is a driving school company that specializes in teaching driving and helping to get certificates for their learning customers.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="bg-white p-2 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition duration-300">
              <FaFacebookF size={25} className='hover:text-orange text-green' />
            </Link>
            <Link href="#" className="bg-white p-2 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition duration-300">
              <FaTwitter size={25} className='hover:text-orange text-green'/>
            </Link>
            <Link href="#" className="bg-white p-2 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition duration-300">
              <FaLinkedinIn size={25} className='hover:text-orange text-green' />
            </Link>
            <Link href="#" className="bg-white p-2 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition duration-300">
              <FaWhatsapp size={25} className='hover:text-orange text-green'/>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Our Courses</h3>
          <ul className=" space-y-2 pl-0 text-orange">
            <li className='flex items-start space-x-2 '>
                {/* <FaLongArrowAltRight className="text-orange "/> */}
                <Link href="#" className="hover:text-green text-gray-600 no-underline">Adult In Car Lessons</Link>
            </li>
            <li className='flex items-center space-x-2 '>
                {/* <FaLongArrowAltRight className="text-orange"/> */}
                <Link href="#" className="hover:text-green text-gray-600 no-underline">Defensive Driving</Link>
            </li>
            <li className='flex items-center space-x-2 '>
                {/* <FaLongArrowAltRight className="text-orange"/> */}
                <Link href="#" className="hover:text-green text-gray-600 no-underline">Truck Driving</Link>
            </li>
            <li className='flex items-center space-x-2 '>
                {/* <FaLongArrowAltRight className="text-orange"/> */}
                <Link href="#" className="hover:text-green text-gray-600 no-underline">Initial Driving Lesson</Link>
            </li>
            <li className='flex items-center space-x-2 no-underline'>
                {/* <FaLongArrowAltRight className="text-orange"/> */}
                <Link href="#" className="hover:text-green text-gray-600 no-underline">Woman Education</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Posts</h3>
          <ul className="text-gray-600 space-y-4 pl-0 ">
            <li className="flex">
              <Image src="/blog/image-1-1.webp" alt="Post" className="w-16 h-16 rounded mr-4" width={60} height={60}/>
              <div>
                <Link href="#" className="text-gray-600 hover:text-orange">Lighting The Way With Guest Daniel Stern</Link>
                <div className='flex items-center space-x-2'>
                    <SlCalender className="text-orange"/>
                    <p className="text-sm text-gray-500">28 June, 2024</p>                  
                </div>
              </div>
            </li>
            <li className="flex ">
              <Image src="/blog/image-1-2.webp" alt="blog" className="w-16 h-16 rounded mr-4" width={60} height={60}/>
              <div>
                <Link href="#" className="text-gray-600 hover:text-orange">Why Auto Driving Will Help You To Pass</Link>
                <div className='flex items-center space-x-2'>
                    <SlCalender className="text-orange"/>
                    <p className="text-sm text-gray-500">22 June, 2024</p>                   
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-600 mb-4">Sign up to get updates and news about us</p>
          <div>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-4 py-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-orange"
            />
            <button className="w-full bg-green text-white px-4 py-2 rounded hover:bg-orange transition duration-300">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

