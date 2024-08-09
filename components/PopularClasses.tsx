"use client"

import React from 'react';
import Slider from 'react-slick';
import { FaGraduationCap, FaClock } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const classes = [
  {
    title: 'B1/B2 Driving course (Cars)',
    description: 'This category is for B1 (Light Passenger Car) and B2 (Automatic Light Vehicle Professional)',
    price: 'Ksh.10,500',
    duration: '5 Weeks',
    level: 'Intermediate',
    image: '/course/course_5_1.png', 
  },
  {
    title: 'B3 Driving course (Vans)',
    description: 'Standard Driving Course is a term that can refer to different types of driving courses.',
    price: 'Ksh.8,500',
    duration: '5 Weeks',
    level: 'Intermediate',
    image: '/course/course_5_6.png',
  },
  {
    title: 'A2 Driving Course (Motorcycle)',
    description: 'Category A2 Driving Course. This category is for A2 (Motorcycle not exceeding 400cc).',
    price: 'Ksh.8,500',
    duration: '2 Weeks',
    level: 'Intermediate',
    image: '/course/course_5_3.png', 
  },
  {
    title: 'Defensive Driving',
    description: 'Defensive Driving Course is made to teach you driving when the vehicle is out of control.',
    price: 'Ksh.8,000',
    duration: '5 Weeks',
    level: 'Intermediate',
    image: '/course/course_5_4.png', 
  },
];

const PopularClasses: React.FC = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-20" id='courses'>
      <div className="container mx-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-orange mb-4">Our Popular Driving Courses</h2>
          <p className="text-green text-lg font-semibold">Our Trending Courses</p>
        </div>
        <Slider {...settings}>
          {classes.map((classItem, index) => (
            <div key={index} className="px-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <Image src={classItem.image} alt={classItem.title} width={500} height={400} className="object-cover w-full" />
                  <div className="absolute top-2 left-2 bg-green text-white font-bold px-2 py-1 rounded">{classItem.price}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <FaGraduationCap className="text-green mr-2" />
                    <span className="text-gray-600">{classItem.level}</span>
                    <FaClock className="text-green ml-4 mr-2" />
                    <span className="text-gray-600">{classItem.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-orange mb-4">{classItem.title}</h3>
                  <p className="text-gray-600 mb-4">{classItem.description}</p>
                  <Link href="#" className="inline-block border-2 border-green-100 hover:text-green text-orange py-2 px-4 rounded transition duration-300 no-underline">READ MORE →</Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PopularClasses;
