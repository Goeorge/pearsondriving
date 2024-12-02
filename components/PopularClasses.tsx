"use client"

import React from 'react';
import Slider from 'react-slick';
import { FaGraduationCap, FaClock } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

interface Course {
  id:string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  theoryHours: string;
  practicalHours: string;
  duration: string;
  level:string;
}

const courses: Course[] = [
  {
    id: 'cars',
    title: 'Class B1/B2 Driving course (Cars)',
    description: 'Category B1/B2 Driving Course. This category is for B1 (Light Passenger Car) and B2 (Automatic Light Vehicle Professional)',
    price: 'Ksh.10,500',
    imageUrl: '/course/course_5_1.png', // Update this path
    theoryHours: '04 Hours',
    practicalHours: '16 Hours',
    duration: '5 Weeks',
    level: 'Intermediate',

  },
  {
    id: 'vans',
    title: 'Class B3 Driving course (Vans)',
    description: 'Category B3 Driving Course. In this course, you learn driving as a profession and be a taxi driver or a chauffer (not more than 7 passengers).',
    price: 'Ksh.8,500',
    imageUrl: '/course/course_5_2.png', // Update this path
    theoryHours: '04 Hours',
    practicalHours: '16 Hours',
    duration: '5 Weeks',
    level: 'Intermediate',
  },
  {
    id: 'bikes',
    title: 'Class A2 Driving Course (Motorcycle)',
    description: 'Category A2 Driving Course. This category is for A2 (Motorcycle not exceeding 400cc).',
    price: 'Ksh.8,500',
    imageUrl: '/course/course_5_3.png', // Update this path
    theoryHours: '04 Hours',
    practicalHours: '16 Hours',
    duration: '2 Weeks',
    level: 'Intermediate',
  },
  {
    id: 'defensive',
    title: 'Defensive Driving',
    description: 'Defensive Driving Course is made to teach you driving when the vehicle is out of control.',
    price: 'Ksh.8,500',
    imageUrl: '/course/course_5_4.png', // Update this path
    theoryHours: '04 Hours',
    practicalHours: '16 Hours',
    duration: '5 Weeks',
    level: 'Intermediate',
  }
];

const PopularClasses: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    arrows: false,
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
    <section className="bg-gray-100 py-12" id='courses'>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-orange mb-4">Our Popular Driving Courses</h2>
          <p className="text-green text-lg font-semibold">Our Trending Courses</p>
        </div>
        <Slider {...settings} className="flex items-center justify-center">
          {courses.map((classItem, index) => (
            <div key={index} className="px-2">
              <div className="bg-white rounded-lg shadow-lg">
                <div className="relative">
                  <Image src={classItem.imageUrl} alt={classItem.title} width={400} height={300} className="object-cover w-full" />
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
                  <Link href={`/courses/${classItem.id}`} className="inline-block border-2 border-green-100 hover:text-green text-orange py-2 px-4 rounded transition duration-300 no-underline">READ MORE →</Link>
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
