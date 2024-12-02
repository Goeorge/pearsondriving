import { FC } from 'react';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

const Intro: FC = () => {
  return (
    <section className="bg-white p-6" id='aboutus'>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-24">
        <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          <Image src="/pearson driving school poster.jpeg" alt="Driving School" width={500} height={500} />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-10">
          <div className="mb-4 flex items-center">
            <span className="font-semibold text-lg text-green mr-2">About Us</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-orange mb-4">
            Welcome: First Time Leaner? 
          </h1>
          <p className="text-gray-600 mb-16">
          Our professional and friendly local driving instructors ensure all our students experience a relaxed, positive and encouraging environment as they start to learn to drive and improving driving skills for those who join our refresher courses.
          </p>
          <ul className="mb-6 space-y-4">
            <li className="flex items-start">
              <FaCheckCircle className="text-xl text-green mr-2" />
              Experienced Instructors: 
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-xl text-green mr-2" />
              Comprehensive Courses: 
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-xl text-green mr-2" />
              Flexible Scheduling: 
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-xl text-green mr-2" />
              Affordable Rates: 
            </li>
          </ul>
          <Link href="/about-us" className="inline-block bg-green text-white py-2 px-4 rounded hover:bg-orange transition duration-300 no-underline">
            MORE ABOUT US →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
