'use client'
import React from 'react';
import Slider from 'react-slick';
import { FaQuoteRight, FaStar } from 'react-icons/fa';
import Image from 'next/image';

const testimonials = [
    {
        name: 'Michel Jordan',
        role: 'Driving Student',
        feedback: 'My instructor was very professional and understand. He helped me understand the common mistakes, rules and was very reasonable.',
        image: '/testimonial/testi_1_1.jpg',
    },
    {
    name: 'Mariana Mojarin',
    role: 'Driving Student',
    feedback: 'I highly recommend my driving instructor as she was calm, patient, and encouraging. Anyone looking to start driving lessons would benefit.',
    image: '/testimonial/testi_1_2.jpg',
  },
  {
    name: 'Michel Jordan',
    role: 'Driving Student',
    feedback: 'My instructor was very professional and understand. He helped me understand the common mistakes, rules and was very reasonable.',
    image: '/testimonial/testi_1_3.jpg',
  },
  {
    name: 'James Charles',
    role: 'Driving Student',
    feedback: 'I would definitely recommend asking for valise if you get your lessons in Airport driving school. The first lessons to the last one lesson.',
    image: '/testimonial/testi_1_4.jpg',
  },
  {
    name: 'James Charles',
    role: 'Driving Student',
    feedback: 'I would definitely recommend asking for valise if you get your lessons in Airport driving school. The first lessons to the last one lesson.',
    image: '/testimonial/testi_1_2.jpg',
  },
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: false,
    arrows:false,
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
    <section className="bg-gray-100 py-10">
    <div className="container mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-green font-semibold text-lg mb-2">Testimonials</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-orange mb-4">What Saying Students Feedback</h1>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((star, i) => (
                  <FaStar key={i} className="text-yellow-600" />
                ))}
              </div>
              <p className="text-gray-600 mb-8">{testimonial.feedback}</p>
              <div className="bottom-6 left-6 w-full flex items-center">
                <div className="flex items-center justify-center w-16 h-16 overflow-hidden rounded-full border-2 border-green">
                  <Image src={testimonial.image} alt={testimonial.name} width={64} height={64} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-orange">{testimonial.name}</h3>
                  <p className="text-sm text-green">{testimonial.role}</p>
                </div>
              </div>
              <FaQuoteRight className="text-green text-2xl absolute bottom-6 right-6" />
              <div className="absolute bottom-6 left-6 bg-green text-white px-2 py-1 rounded"></div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </section>
  );
};

export default Testimonials;
